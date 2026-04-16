import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container/Container";
import { MetaText } from "@/components/MetaText/MetaText";
import { Headline } from "@/components/Typography/Headline";
import styles from "./Projects.module.css";

export type ProjectListItem = {
  slug: string;
  title: string;
  year: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  contractor: string;
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
    category: "Корпоратив",
    contractor: "Яндекс-еда",
  },
  {
    slug: "music-video",
    title: "Клип для артиста",
    year: "2024",
    description:
      "Концепт, локации, свет и постановка кадра под трек. Сжатые сроки на монтаж и цветокор — результат выложили в релиз в тот же месяц.",
    imageSrc: "https://picsum.photos/seed/videoprod-p2/960/720",
    imageAlt: "",
    category: "Музыка",
    contractor: "Яндекс-путешествия",
  },
  {
    slug: "product-launch",
    title: "Запуск продукта",
    year: "2024",
    description:
      "Тизер и основной ролик для презентации новой линейки: макро-съёмка, моушн и графика в едином стиле бренда.",
    imageSrc: "https://picsum.photos/seed/videoprod-p3/960/720",
    imageAlt: "",
    category: "Реклама",
    contractor: "Авито-недвижимость",
  },
];

type ProjectsProps = {
  projects?: ProjectListItem[];
};

export function Projects({ projects = DEFAULT_PROJECTS }: ProjectsProps) {
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
                </div>
                <div className={styles.caption}>
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.category}>{project.category}</p>
                  <p className={styles.contractor}>{project.contractor}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
