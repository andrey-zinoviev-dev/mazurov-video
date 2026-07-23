import { MetaText } from "@/components/MetaText/MetaText";
import { HeroVideo } from "./HeroVideo";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-label="Главный экран">
      <HeroVideo />
      <div className={styles.scrim} aria-hidden />

      <div className={styles.frame}>
        <div className={styles.content}>
          <h1 className={styles.headline}>
            Видеопродакшн
            <br />
            полного цикла
          </h1>
          <p className={styles.subhead}>
            От концепции до финального ролика — по всей России и СНГ
          </p>
          <div className={styles.actions}>
            <a href="#contact" className={styles.ctaPrimary}>
              Обсудить проект
            </a>
            <a href="#projects" className={styles.ctaSecondary}>
              <span className={styles.playIcon} aria-hidden>
                ▶
              </span>
              Смотреть портфолио
            </a>
          </div>
        </div>

        <footer className={styles.frameFooter}>
          <MetaText text="Scroll to explore" className={styles.footerMeta} />
          <MetaText text="Mazurov · 2026" className={styles.footerMeta} />
        </footer>
      </div>
    </section>
  );
}
