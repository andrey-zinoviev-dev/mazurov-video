import Image from "next/image";
import { Container } from "@/components/Container/Container";
import { MetaText } from "@/components/MetaText/MetaText";
import { Headline } from "@/components/Typography/Headline";
import { Paragraph } from "@/components/Typography/Paragraph";
import styles from "./Principles.module.css";

type Principle = {
  code: string;
  title: string;
  description: string;
  /** Same URL is used for the sharp image (left) and blurred background (right). */
  imageSrc: string;
};

const COLUMNS: Principle[] = [
  {
    code: "PRN_001",
    title: "Исключение случайностей",
    description:
      "70% работы на этапе препродакшена. Вы знаете, что будет в кадре еще до съемок.",
    imageSrc: "https://picsum.photos/seed/mzv-prn-01/900/600",
  },
  {
    code: "PRN_002",
    title: "Жесткая смета",
    description:
      "Бюджет фиксируется в договоре. Итоговая стоимость не вырастет ни на рубль.",
    imageSrc: "https://picsum.photos/seed/mzv-prn-02/900/600",
  },
  {
    code: "PRN_003",
    title: "Дисциплина таймлайна",
    description:
      "Черновая сборка и финальный мастер строго по графику. Понимаем дедлайны.",
    imageSrc: "https://picsum.photos/seed/mzv-prn-03/900/600",
  },
  {
    code: "PRN_004",
    title: "Повторный выбор",
    description:
      "90% наших клиентов работают с нами годами. Проектируем процессы надолго.",
    imageSrc: "https://picsum.photos/seed/mzv-prn-04/900/600",
  },
];

export function Principles() {
  return (
    <section className={styles.section} aria-labelledby="principles-heading">
      <Container className={styles.inner}>
        <MetaText text="[ OUR PRINCIPLES ]" className={styles.metaText} />
        <div className={styles.split}>
          <header className={styles.headlineCol}>
            <Headline id="principles-heading" className={styles.heading}>
              Принципы работы
            </Headline>
          </header>
          <div className={styles.contentCol}>
            <Paragraph className={styles.intro}>
              Каждый проект уникален и может иметь свои нюансы, поэтому детали
              процесса мы подстраиваем под задачу.
            </Paragraph>
            <ul className={styles.cards}>
              {COLUMNS.map((col, index) => (
                <li key={col.code} className={styles.card}>
                  <div className={styles.imageSide}>
                    <Image
                      src={col.imageSrc}
                      alt=""
                      fill
                      sizes="(max-width: 900px) 100vw, 35vw"
                      className={styles.image}
                      priority={index === 0}
                    />
                    {/* <span className={styles.badge} aria-hidden>
                      {col.code.replace("_", " ")}
                    </span> */}
                  </div>
                  <div className={styles.textSide}>
                    <div
                      className={styles.blurBg}
                      style={{ backgroundImage: `url(${col.imageSrc})` }}
                      aria-hidden
                    />
                    <div className={styles.textDim} aria-hidden />
                    <div className={styles.textInner}>
                      <p className={styles.code}>{col.code}</p>
                      <h3 className={styles.cardTitle}>{col.title}</h3>
                      <p className={styles.cardDesc}>{col.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
