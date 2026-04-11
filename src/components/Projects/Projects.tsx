import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container/Container";
import styles from "./Projects.module.css";

export type ProjectListItem = {
  slug: string;
  title: string;
  year: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const DEFAULT_PROJECTS: ProjectListItem[] = [
  {
    slug: "reel-corporate",
    title: "Корпоративный имидж",
    year: "2025",
    description:
      "Съёмка офиса, команды и процессов для HR и презентаций. Собрали динамичный ролик с интервью и общими планами — заказчик использует материал на сайте и на конференциях.",
    imageSrc: "https://picsum.photos/seed/videoprod-p1/960/720",
    imageAlt: "",
  },
  {
    slug: "music-video",
    title: "Клип для артиста",
    year: "2024",
    description:
      "Концепт, локации, свет и постановка кадра под трек. Сжатые сроки на монтаж и цветокор — результат выложили в релиз в тот же месяц.",
    imageSrc: "https://picsum.photos/seed/videoprod-p2/960/720",
    imageAlt: "",
  },
  {
    slug: "product-launch",
    title: "Запуск продукта",
    year: "2024",
    description:
      "Тизер и основной ролик для презентации новой линейки: макро-съёмка, моушн и графика в едином стиле бренда.",
    imageSrc: "https://picsum.photos/seed/videoprod-p3/960/720",
    imageAlt: "",
  },
];

type ProjectsProps = {
  projects?: ProjectListItem[];
};

export function Projects({ projects = DEFAULT_PROJECTS }: ProjectsProps) {
  return (
    <section id="projects" className={styles.section} aria-labelledby="projects-heading">
      <Container>
        <h2 id="projects-heading">
          Проекты
        </h2>
        <ul className={styles.list}>
          {projects.map((project) => (
            <li key={project.slug}>
              <Link href={`/projects/${project.slug}`} className={styles.item}>
                <div className={styles.imageWrap}>
                  <Image
                    className={styles.image}
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    width={960}
                    height={720}
                    sizes="(max-width: 768px) 100vw, 42vw"
                  />
                </div>
                <div className={styles.body}>
                  <div className={styles.headerRow}>
                    <h3 className={styles.title}>{project.title}</h3>
                    <span className={styles.year}>{project.year}</span>
                  </div>
                  <p className={styles.description}>{project.description}</p>
                  <span className={styles.arrow} aria-hidden>
                    →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
