"use client";

import { useSyncExternalStore } from "react";
import styles from "./Hero.module.css";

const MOBILE_MQ = "(max-width: 640px)";

function subscribeMobile(onChange: () => void) {
  const mq = window.matchMedia(MOBILE_MQ);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getMobileSnapshot() {
  return window.matchMedia(MOBILE_MQ).matches;
}

function getServerSnapshot() {
  return false;
}

export function HeroVideo() {
  const isMobile = useSyncExternalStore(
    subscribeMobile,
    getMobileSnapshot,
    getServerSnapshot,
  );

  return (
    <video
      className={styles.video}
      src="/0723.mp4"
      autoPlay
      muted
      playsInline
      loop={isMobile}
      preload="auto"
      aria-hidden
    />
  );
}
