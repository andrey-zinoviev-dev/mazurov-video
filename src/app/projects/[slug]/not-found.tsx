import Link from "next/link";

import { Container } from "@/components/Container/Container";
import { MetaText } from "@/components/MetaText/MetaText";
import styles from "./page.module.css";

export default function ProjectNotFound() {
  return (
    <main className={styles.main}>
      <Container>
        <MetaText text="[ 404 ]" className={styles.metaText} />
        <h1 className={styles.title}>Проект не найден</h1>
        <p className={styles.description}>
          Возможно, ссылка устарела или проект ещё не опубликован.
        </p>
        <Link href="/#projects" className={styles.backLink}>
          Все проекты
        </Link>
      </Container>
    </main>
  );
}
