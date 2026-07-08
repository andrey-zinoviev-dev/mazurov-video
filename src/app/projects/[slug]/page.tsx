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

  const details = [
    { label: "Заказчик", value: project.contractor },
    { label: "Тип съёмки", value: project.shootingType },
    { label: "Бюджет", value: project.budget },
    ...(project.year ? [{ label: "Год", value: project.year }] : []),
  ];

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

        <MetaText text="[ PROJECT ]" className={styles.metaText} />
        <h1 className={styles.title}>{project.title}</h1>

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

        <div className={styles.body}>
          <dl className={styles.details}>
            {details.map((detail) => (
              <div key={detail.label} className={styles.detailRow}>
                <dt className={styles.detailLabel}>{detail.label}</dt>
                <dd className={styles.detailValue}>{detail.value}</dd>
              </div>
            ))}
          </dl>

          <div className={styles.content}>
            <p className={styles.description}>{project.description}</p>

            <h2 className={styles.subheading}>Что сделали</h2>
            <ul className={styles.deliverables}>
              {project.deliverables.map((item) => (
                <li key={item} className={styles.deliverable}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </main>
  );
}
