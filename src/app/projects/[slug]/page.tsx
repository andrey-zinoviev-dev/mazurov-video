import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Container } from "@/components/Container/Container";
import { MetaText } from "@/components/MetaText/MetaText";
import { getAllProjects, getProjectBySlug } from "@/data/projects";
import styles from "./page.module.css";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Проект не найден — Video production" };
  }

  return {
    title: `${project.title} — Video production`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // const secondaryDetails = [
  //   { label: "Бюджет", value: project.budget },
  //   ...(project.year ? [{ label: "Год", value: project.year }] : []),
  // ];

  return (
    <main className={styles.main}>
      <Container>
        <Link href="/#projects" className={styles.backLink}>
          <Image
            className={styles.backArrow}
            src="/arrow.svg"
            alt=""
            width={20}
            height={20}
            aria-hidden
          />
          Все проекты
        </Link>

        {/* <MetaText text="[ PROJECT ]" className={styles.metaText} /> */}
        <h1 className={styles.title}>{project.title}</h1>

        <div className={styles.metaBar}>
          <div className={styles.metaBarGroup}>
            <MetaText text="Заказчик" className={styles.metaBarLabel} />
            <span className={styles.metaBarValue}>{project.contractor}</span>
          </div>
          <div className={styles.metaBarGroup}>
            <MetaText text="Тип съёмки" className={styles.metaBarLabel} />
            <span className={styles.metaBarValue}>{project.shootingType}</span>
          </div>
        </div>

        <div className={styles.hero}>
          <div className={styles.imageWrap}>
            <Image
              className={styles.image}
              src={project.imageSrc}
              alt={project.imageAlt || project.title}
              width={1600}
              height={900}
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
          </div>

          <div className={styles.content}>
            <section className={styles.section}>
              <MetaText text="Описание" className={styles.sectionLabel} />
              <p className={styles.description}>{project.description}</p>
            </section>

            <section className={styles.section}>
              <MetaText text="Что сделали" className={styles.sectionLabel} />
              <ul className={styles.deliverables}>
                {project.deliverables.map((item) => (
                  <li key={item} className={styles.deliverable}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* {secondaryDetails.length > 0 ? (
          <div className={styles.secondaryDetails}>
            {secondaryDetails.map((detail) => (
              <div key={detail.label} className={styles.secondaryDetail}>
                <MetaText text={detail.label} className={styles.metaBarLabel} />
                <span className={styles.metaBarValue}>{detail.value}</span>
              </div>
            ))}
          </div>
        ) : null} */}
      </Container>
    </main>
  );
}
