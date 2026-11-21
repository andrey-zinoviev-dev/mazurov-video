"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/data/projects";
import { useInView } from "@/hooks/useInView";
import styles from "./Projects.module.css";

type ProjectCoverProps = {
  project: Project;
};

function canHoverPlay() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

function playPreviewVideo(video: HTMLVideoElement, src: string) {
  // video.src without attribute resolves to the page URL — check the attribute.
  if (!video.getAttribute("src")) {
    video.src = src;
  }
  video.muted = true;
  void video.play().catch(() => {
    // Ignore play errors (e.g. browser policies)
  });
}

function stopPreviewVideo(video: HTMLVideoElement) {
  video.pause();
  video.currentTime = 0;
}

export function ProjectCover({ project }: ProjectCoverProps) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  /** Touch / coarse pointer and motion OK — enables in-view preview. */
  const [inViewPreviewEnabled, setInViewPreviewEnabled] = useState(false);

  const hoverVideoSrc = project.hoverVideoSrc;

  useEffect(() => {
    const hoverMq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      setInViewPreviewEnabled(!hoverMq.matches && !motionMq.matches);
    };

    sync();
    hoverMq.addEventListener("change", sync);
    motionMq.addEventListener("change", sync);
    return () => {
      hoverMq.removeEventListener("change", sync);
      motionMq.removeEventListener("change", sync);
    };
  }, []);

  const isInView = useInView(wrapRef, {
    enabled: inViewPreviewEnabled && Boolean(hoverVideoSrc),
    requireFullyVisible: true,
  });

  // Imperative play/stop + CSS class — no mirror state for "is playing".
  useEffect(() => {
    if (!inViewPreviewEnabled || !hoverVideoSrc) return;

    const reconcile = () => {
      const video = videoRef.current;
      const wrap = wrapRef.current;
      if (!video || !wrap) return;

      const shouldPlay = isInView && !document.hidden;
      if (shouldPlay) {
        playPreviewVideo(video, hoverVideoSrc);
        wrap.classList.add(styles.previewPlaying);
      } else {
        stopPreviewVideo(video);
        wrap.classList.remove(styles.previewPlaying);
      }
    };

    reconcile();
    document.addEventListener("visibilitychange", reconcile);
    return () => {
      document.removeEventListener("visibilitychange", reconcile);
      const video = videoRef.current;
      const wrap = wrapRef.current;
      if (video) stopPreviewVideo(video);
      wrap?.classList.remove(styles.previewPlaying);
    };
  }, [inViewPreviewEnabled, isInView, hoverVideoSrc]);

  const handleMouseEnter = () => {
    if (!hoverVideoSrc || !canHoverPlay()) return;
    const video = videoRef.current;
    if (!video) return;
    playPreviewVideo(video, hoverVideoSrc);
  };

  const handleMouseLeave = () => {
    if (!canHoverPlay()) return;
    const video = videoRef.current;
    if (!video) return;
    stopPreviewVideo(video);
  };

  const hasCover = Boolean(project.imageSrc);

  return (
    <div
      ref={wrapRef}
      className={styles.imageWrap}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {hasCover ? (
        <Image
          className={styles.image}
          src={project.imageSrc}
          alt={project.imageAlt || project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : null}

      {hoverVideoSrc ? (
        <video
          ref={videoRef}
          className={styles.hoverVideo}
          muted
          loop
          playsInline
          preload="none"
        />
      ) : null}
    </div>
  );
}
