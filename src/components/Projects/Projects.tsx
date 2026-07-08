import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container/Container";
import { MetaText } from "@/components/MetaText/MetaText";
import { Headline } from "@/components/Typography/Headline";
import { getAllProjects, type Project } from "@/data/projects";
import styles from "./Projects.module.css";

type ProjectsProps = {
  projects?: Project[];
};

export function Projects({ projects = getAllProjects() }: ProjectsProps) {
  return (
    <section id="projects" className={styles.section} aria-labelledby="projects-heading">
      <Container>
        <MetaText text="[ PROJECTS ]" className={styles.metaText} />
        <Headline id="projects-heading" className={styles.heading}>
          Проекты
        </Headline>
        <ul className={styles.list}>
          {projects.map((project) => (
            <li key={project.slug}>
              <Link href={`/projects/${project.slug}`} className={styles.item}>
                <div className={styles.imageWrap}>
                  <Image
                    className={styles.image}
                    src={project.imageSrc}
                    alt={project.imageAlt || project.title}
                    width={960}
                    height={540}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                                      {/* <span className={styles.chip}>{project.shootingType}</span> */}

                </div>
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
                  <p className={styles.budget}>{project.budget}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
