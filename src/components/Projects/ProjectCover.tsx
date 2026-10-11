"use client";

import Image from "next/image";
import { useRef } from "react";
import type { Project } from "@/data/projects";
import styles from "./Projects.module.css";

type ProjectCoverProps = {
  project: Project;
};

function canHoverPlay() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

export function ProjectCover({ project }: ProjectCoverProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    if (!project.hoverVideoSrc || !canHoverPlay()) return;

    const video = videoRef.current;
    if (!video) return;

    // video.src без атрибута резолвится в URL страницы — смотрим атрибут.
    if (!video.getAttribute("src")) {
      video.src = project.hoverVideoSrc;
    }

    video.muted = true;
    void video.play().catch(() => {
      // Ignore play errors (e.g. browser policies)
    });
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;
  };

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

      {project.hoverVideoSrc ? (
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
