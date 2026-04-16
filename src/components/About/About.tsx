import { Container } from "../Container/Container";
import { MetaText } from "../MetaText/MetaText";
import { Headline } from "../Typography/Headline";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <Container className={styles.container}>
        <MetaText text="[ ABOUT ]" className={styles.metaText} />
        <Headline className={styles.headline}>
          <span className={styles.headlineLine}>
            МЫ — КОМАНДА ОПЕРАТОРОВ, МОУШН-ДИЗАЙНЕРОВ,
          </span>
          <span className={styles.headlineHighlight}>
            МОНТАЖЕРОВ И ПРОДЮСЕРОВ
          </span>
          <span className={styles.headlineLine}>
            КОНЦЕПЦИЯ С НУЛЯ ИЛИ ВАШ СКРИПТ — ПО ВСЕЙ РОССИИ И СНГ
          </span>
        </Headline>
        {/* <p className={styles.description}>
          Мы - команда операторов, моушн-дизайнеров, монтажеров и продюсеров. Мы можем разработать концепцию с нуля, а можем взять ваш готовый скрипт и просто грамотно его снять. Работаем по всей России и СНГ.
        </p> */}
        <MetaText text="you pay money - we make video" className={styles.metaText} />
        {/* <MetaText text="ABOUT_US" className={styles.metaText} /> */}
        {/* <h2>Мы - команда операторов, моушн-дизайнеров, монтажеров и продюсеров. Работаем по всей России и СНГ.</h2> */}
        {/* <button>ПРИСТУПИТЬ К ПРОЕКТУ</button> */}
      </Container>
    </section>
  );
}