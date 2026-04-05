import Image from "next/image";
import { Container } from "@/components/Container/Container";
import { MetaText } from "@/components/MetaText/MetaText";
import styles from "./Hero.module.css";

const TOP_IMAGE = "https://picsum.photos/seed/videoprod-top/480/640";
const BOTTOM_IMAGE = "https://picsum.photos/seed/videoprod-bottom/480/640";

export function Hero() {
  return (
    <section className={styles.hero} aria-label="Главный экран">
      <Container className={styles.heroInner}>
        <div className={styles.overlay}>
          <div className={styles.crosshairH} aria-hidden />
          <div className={styles.crosshairV} aria-hidden />
          
        </div>

        <div className={styles.topCell}>
          <div className={`${styles.cellMain}`}>
            <figure className={styles.imageTop}>
              <Image
                src={TOP_IMAGE}
                alt=""
                width={480}
                height={640}
                sizes="(max-width: 520px) 144px, 272px"
                priority
              />
            </figure>
            <h1 className={styles.headline}>
              <span className={styles.headlineLeft}>ВИДЕОПРОДАКШН</span>
              <span className={styles.headlineRight}>ПОЛНОГО ЦИКЛА</span>
            </h1>
          </div>
          {/* <div className={styles.centerMeta}>
              <span>Reel_001</span>
              <span>2026.04</span>
          </div> */}
        </div>

        <div className={styles.bottomCell}>
          
          <div className={styles.cellMain}>
            <div className={styles.centerMeta}>
              <MetaText text="Reel_001" />
              <MetaText text="2026.04" />
            </div>
            {/* <a href="#work" className={styles.viewLink}>
              View
            </a> */}
            <figure className={styles.imageBottom}>
              <Image
                src={BOTTOM_IMAGE}
                alt=""
                width={480}
                height={640}
                sizes="(max-width: 520px) 144px, 272px"
              />
            </figure>
          </div>
          <footer className={styles.footer}>
            <MetaText text="VIDEO_PRODUCTION" className={styles.textBy} />
            <div className={styles.creditsBand}>
              <MetaText text="MAZUROV" className={styles.creditsLeft} />
              <MetaText text="LW Studio" className={styles.creditsRight} />
              {/* <span className={styles.creditsRight}>
                Photos
                <br />
                  LW Studio
              </span> */}
            </div>
          </footer>
        </div>
      </Container>
    </section>
  );
}
