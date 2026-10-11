"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/Container/Container";
import { MetaText } from "@/components/MetaText/MetaText";
import { Headline } from "@/components/Typography/Headline";
import { PageTitle } from "@/components/Typography/PageTitle";
import { Paragraph } from "@/components/Typography/Paragraph";
import {
  getProjectShootingTypes,
  type Project,
} from "@/data/projects";
import { ProjectCover } from "./ProjectCover";
import styles from "./Projects.module.css";

type ProjectsProps = {
  projects: Project[];
  /** Ссылка «Все проекты» под сеткой (для главной). */
  showViewAll?: boolean;
  /** Больше верхний отступ под фиксированный хедер на отдельной странице. */
  standalone?: boolean;
  /** Фильтры по типу съёмки над списком (для /projects). */
  showFilters?: boolean;
};

export function Projects({
  projects,
  showViewAll = false,
  standalone = false,
  showFilters = false,
}: ProjectsProps) {
  const [activeType, setActiveType] = useState<string | null>(null);

  const shootingTypes = showFilters ? getProjectShootingTypes(projects) : [];
  const visibleProjects =
    showFilters && activeType
      ? projects.filter((project) => project.shootingType === activeType)
      : projects;

  const sectionClass = [
    styles.section,
    standalone ? styles.sectionStandalone : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      id="projects"
      className={sectionClass}
      aria-labelledby="projects-heading"
    >
      <Container>
        <MetaText text="[ PROJECTS ]" className={styles.metaText} />
        {standalone ? (
          <PageTitle id="projects-heading" className={styles.pageHeading}>
            Проекты
          </PageTitle>
        ) : (
          <Headline id="projects-heading" className={styles.heading}>
            Проекты
          </Headline>
        )}
        {standalone ? (
          <Paragraph className={styles.intro}>
            Концерты, клипы и реклама — подборка работ, которые мы снимали и
            собирали от идеи до финального ролика. Загляните внутрь каждого
            проекта, чтобы понять формат и подход.
          </Paragraph>
        ) : null}

        {showFilters && shootingTypes.length > 0 ? (
          <div
            className={styles.filters}
            role="group"
            aria-label="Фильтр по типу проекта"
          >
            <button
              type="button"
              className={[
                styles.filterButton,
                activeType === null ? styles.filterButtonActive : "",
              ]
                .filter(Boolean)
                .join(" ")}
              aria-pressed={activeType === null}
              onClick={() => setActiveType(null)}
            >
              Все
            </button>
            {shootingTypes.map((type) => (
              <button
                key={type}
                type="button"
                className={[
                  styles.filterButton,
                  activeType === type ? styles.filterButtonActive : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                aria-pressed={activeType === type}
                onClick={() =>
                  setActiveType((current) => (current === type ? null : type))
                }
              >
                {type}
              </button>
            ))}
          </div>
        ) : null}

        <ul className={styles.list}>
          {visibleProjects.map((project) => (
            <li key={project.slug}>
              <Link href={`/projects/${project.slug}/`} className={styles.item}>
                <ProjectCover project={project} />
                <div className={styles.caption}>
                  <div className={styles.titleRow}>
                    <h3 className={styles.title}>{project.title}</h3>

                    <Image
                      className={styles.arrow}
                      src="/arrow.svg"
                      alt=""
                      width={40}
                      height={40}
                      aria-hidden
                    />
                  </div>
                  <p className={styles.contractor}>
                    {project.contractor}
                    {project.year ? ` · ${project.year}` : ""}
                  </p>
                  <p className={styles.shootingType}>{project.shootingType}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {showViewAll ? (
          <div className={styles.viewAllWrap}>
            <Link href="/projects/" className={styles.viewAll}>
              Все проекты
              <Image
                className={styles.viewAllArrow}
                src="/arrow.svg"
                alt=""
                width={20}
                height={20}
                aria-hidden
              />
            </Link>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
