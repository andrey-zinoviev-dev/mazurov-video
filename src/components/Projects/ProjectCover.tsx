"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/data/projects";
import styles from "./Projects.module.css";

type ProjectCoverProps = {
  project: Project;
};

export function ProjectCover({ project }: ProjectCoverProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    const updateMatch = () => {
      setIsDesktop(mediaQuery.matches);
    };

    updateMatch();
    mediaQuery.addEventListener("change", updateMatch);

    return () => {
      mediaQuery.removeEventListener("change", updateMatch);
    };
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;

    const video = videoRef.current;
    if (!video) return;

    video.muted = true;

    void video.play().catch(() => {
      // Ignore play errors (e.g. browser policies)
    });
  }, [shouldLoad]);

  const handleMouseEnter = () => {
    if (!isDesktop || !project.hoverVideoSrc) return;
    setShouldLoad(true);
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;
  };

  const showVideoLayer = isDesktop && !!project.hoverVideoSrc;
  const hasCover = Boolean(project.imageSrc);

  return (
    <div
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

      {showVideoLayer && (
        <video
          ref={videoRef}
          className={styles.hoverVideo}
          src={shouldLoad ? project.hoverVideoSrc : undefined}
          muted
          loop
          playsInline
          preload="none"
        />
      )}
    </div>
  );
}

