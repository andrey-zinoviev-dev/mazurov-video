"use client";

import { useSyncExternalStore } from "react";
import styles from "./Hero.module.css";

const DESKTOP_MQ = "(min-width: 641px)";

type HeroVideoProps = {
  className?: string;
  /** Mount only from 641px and up */
  desktopOnly?: boolean;
  /** Enable loop on mobile viewports */
  loopOnMobile?: boolean;
};

function subscribeDesktop(onChange: () => void) {
  const mq = window.matchMedia(DESKTOP_MQ);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getDesktopSnapshot() {
  return window.matchMedia(DESKTOP_MQ).matches;
}

function getServerSnapshot() {
  return false;
}

export function HeroVideo({
  className,
  desktopOnly = false,
  loopOnMobile = false,
}: HeroVideoProps) {
  const isDesktop = useSyncExternalStore(
    subscribeDesktop,
    getDesktopSnapshot,
    getServerSnapshot,
  );

  if (desktopOnly && !isDesktop) {
    return null;
  }

  return (
    <video
      className={className ?? styles.video}
      src="/0723.mp4"
      autoPlay
      muted
      playsInline
      // loop={loopOnMobile && !isDesktop}
      loop
      preload="auto"
      aria-hidden
    />
  );
}
