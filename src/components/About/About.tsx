import { Container } from "../Container/Container";
import { MetaText } from "../MetaText/MetaText";
import styles from "./About.module.css";

export default function About() {
  return (
    <section>
        <Container>
          <MetaText text="ABOUT_US" className={styles.metaText} />
          <h2>Мы - команда операторов, моушн-дизайнеров, монтажеров и продюсеров. Работаем по всей России и СНГ.</h2>
          <button>ПРИСТУПИТЬ К ПРОЕКТУ</button>
        </Container>
    </section>
  );
}