"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";

const SHOWREEL_SRC = "/showreel_opt.mp4";

export function ShowreelVideo() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      // Fire only after ~100px of the section is in view
      { rootMargin: "-100px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;

    const video = videoRef.current;
    if (!video) return;

    // React's `muted` prop does not reliably set the DOM property;
    // browsers check `.muted` for autoplay permission.
    video.muted = true;

    // With preload="none", media won't fetch until play()/load() —
    // don't wait for loadeddata (it never fires otherwise).
    void video.play().catch(() => {
      // Autoplay blocked — controls remain available
    });
  }, [shouldLoad]);

  return (
    <div ref={wrapRef} className={styles.showreelVideoWrap}>
      <video
        ref={videoRef}
        className={styles.showreelVideo}
        src={shouldLoad ? SHOWREEL_SRC : undefined}
        autoPlay={shouldLoad}
        controls
        controlsList="nodownload"
        muted
        playsInline
        preload="none"
      />
    </div>
  );
}
