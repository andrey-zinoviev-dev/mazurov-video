import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Container } from "@/components/Container/Container";
import { JsonLd } from "@/components/JsonLd/JsonLd";
import { MetaText } from "@/components/MetaText/MetaText";
import { getAllProjects, getProjectBySlug } from "@/data/projects";
import { projectJsonLd } from "@/lib/jsonld/builders";
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
  const path = `/projects/${slug}/`;

  if (!project) {
    return { title: "Проект не найден — Mazurov production" };
  }

  // Dedicated 1200×630 crop in /public/og — VK needs matching size + prefers clean URLs.
  const ogImagePath = `https://mazurov-prod.ru/og/${slug}.jpg`;
  const ogImageAlt = `Кадр из проекта ${project.title}`;

  return {
    title: `${project.title} — Mazurov production`,
    description: project.description,
    alternates: {
      canonical: path,
      languages: {
        ru: path,
      },
    },
    openGraph: {
      title: `${project.title} — Mazurov production`,
      description: project.description,
      url: path,
      images: [
        {
          url: ogImagePath,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
          type: "image/jpeg",
        },
      ],
      type: "article",
      locale: "ru_RU",
      siteName: "Mazurov production",
    },
    // VK FAQ: reads vk:image (or og:image). Absolute URL — metadataBase does not apply to `other`.
    other: {
      "vk:image": ogImagePath,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <section className={styles.project} aria-label={project.title}>
      <JsonLd nodes={projectJsonLd(project)} />
      <Container>
        <div className={styles.inner}>
          <Link href="/projects/" className={styles.backLink}>
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
              {project.imageSrc ? (
                <Image
                  className={styles.image}
                  src={project.imageSrc}
                  alt={project.imageAlt || project.title}
                  width={1600}
                  height={900}
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
              ) : null}
            </div>

            <div className={styles.content}>
              <div className={styles.block}>
                <MetaText text="Описание" className={styles.sectionLabel} />
                <p className={styles.description}>{project.description}</p>
              </div>

              <div className={styles.block}>
                <MetaText text="Что сделали" className={styles.sectionLabel} />
                <ul className={styles.deliverables}>
                  {project.deliverables.map((item) => (
                    <li key={item} className={styles.deliverable}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
