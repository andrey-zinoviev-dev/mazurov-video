import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container/Container";
import { MetaText } from "@/components/MetaText/MetaText";
import { Headline } from "@/components/Typography/Headline";
import { PageTitle } from "@/components/Typography/PageTitle";
import { Paragraph } from "@/components/Typography/Paragraph";
import { getAllProjects, type Project } from "@/data/projects";
import { ProjectCover } from "./ProjectCover";
import styles from "./Projects.module.css";

type ProjectsProps = {
  projects?: Project[];
  /** Ссылка «Все проекты» под сеткой (для главной). */
  showViewAll?: boolean;
  /** Больше верхний отступ под фиксированный хедер на отдельной странице. */
  standalone?: boolean;
};

export function Projects({
  projects = getAllProjects(),
  showViewAll = false,
  standalone = false,
}: ProjectsProps) {
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
        <ul className={styles.list}>
          {projects.map((project) => (
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
