import { Container } from "../Container/Container";
import { MetaText } from "../MetaText/MetaText";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <Container className={styles.container}>
        <p className={styles.description}>
          Мы - команда операторов, моушн-дизайнеров, монтажеров и продюсеров. Мы можем разработать концепцию с нуля, а можем взять ваш готовый скрипт и просто грамотно его снять. Работаем по всей России и СНГ.
        </p>
        <MetaText text="you pay money - I make video" className={styles.metaText} />
        {/* <MetaText text="ABOUT_US" className={styles.metaText} /> */}
        {/* <h2>Мы - команда операторов, моушн-дизайнеров, монтажеров и продюсеров. Работаем по всей России и СНГ.</h2> */}
        {/* <button>ПРИСТУПИТЬ К ПРОЕКТУ</button> */}
      </Container>
    </section>
  );
}