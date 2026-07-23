import { MetaText } from "@/components/MetaText/MetaText";
import { HeroVideo } from "./HeroVideo";
import styles from "./Hero.module.css";

function Offer({ className }: { className: string }) {
  return (
    <div className={className}>
      <p className={styles.subhead}>
        От концепции до финального ролика — по всей России и СНГ
      </p>
      <a href="#contact" className={styles.cta}>
        Обсудить проект
        {/* <span className={styles.ctaArrow} aria-hidden>
          →
        </span> */}
      </a>
    </div>
  );
}

export function Hero() {
  return (
    <section className={styles.hero} aria-label="Главный экран">
      <div className={styles.board}>
        <div className={styles.stage}>
          <div className={styles.vline} aria-hidden />

          <div className={styles.mediaTop}>
            <div className={styles.mediaMetaRow}>
              <MetaText text="Showreel" className={styles.mediaMeta} />
              <MetaText text="001" className={styles.mediaMeta} />
            </div>

            <div className={styles.videoTop}>
              <HeroVideo className={styles.video} loopOnMobile />
            </div>

            <div className={styles.mediaMetaRow}>
              <MetaText text="RU · CIS" className={styles.mediaMeta} />
              <MetaText text="04.2026" className={styles.mediaMeta} />
            </div>
          </div>

          <div className={styles.axis}>
            <MetaText text="SDRF" className={styles.metaAxis} />

            <h1 className={styles.headline}>
              <span className={styles.headlineLeft}>Видеопродакшн</span>
              <span className={styles.headlineRule} aria-hidden />
              <span className={styles.headlineRight}>полного цикла</span>
            </h1>

            <Offer className={`${styles.offer} ${styles.offerMobile}`} />

            <MetaText text="04.2026" className={styles.metaAxis} />
          </div>

          <div className={styles.videoBottom}>
            <HeroVideo className={styles.video} desktopOnly />
          </div>
        </div>

        <footer className={styles.footer}>
          <div className={styles.footerLeft}>
            <div className={styles.studio}>
              <MetaText text="Studio name" className={styles.footerMeta} />
              <MetaText text="Mazurov Production" className={styles.footerMeta} />
            </div>
          </div>

          <Offer className={`${styles.offer} ${styles.offerDesktop}`} />
        </footer>
      </div>
    </section>
  );
}
