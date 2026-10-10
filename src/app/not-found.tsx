import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container/Container";
import { MetaText } from "@/components/MetaText/MetaText";
import { PageTitle } from "@/components/Typography/PageTitle";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Страница не найдена — Mazurov production",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main id="site-top" className={styles.page}>
      <section aria-label="Страница не найдена">
        <Container>
          <div className={styles.inner}>
            <MetaText text="[ 404 ]" className={styles.metaText} />
            <PageTitle className={styles.title}>Страница не найдена</PageTitle>
            <p className={styles.description}>
              Ссылка устарела, адрес написан с ошибкой, или этой страницы никогда не
              существовало.
            </p>
            <div className={styles.actions}>
              <Link href="/" className={styles.link}>
                На главную
              </Link>
              <Link href="/projects/" className={styles.link}>
                Все проекты
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
