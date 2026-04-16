import { Container } from "@/components/Container/Container";
import { Headline } from "@/components/Typography/Headline";
import styles from "./Contacts.module.css";
import { MetaText } from "../MetaText/MetaText";
import { Paragraph } from "../Typography/Paragraph";

const TELEGRAM_USER = "mazurov_prod";
const TELEGRAM_URL = `https://t.me/${TELEGRAM_USER}`;

export function Contacts() {
  return (
    <section
      className={styles.section}
      id="contact"
      aria-labelledby="contact-emotional-heading"
    >
      <Container className={styles.inner}>
        <p className={styles.kicker}>Видеопродакшен · полный цикл · по России и СНГ</p>

        <div className={styles.split}>
          <header className={styles.headlineCol}>
            <Headline id="contact-emotional-heading" className={styles.heading}>
              <span className={styles.titleText}>давайте снимать</span>
              <span className={styles.titleArrow} aria-hidden>
                ↘
              </span>
            </Headline>
          </header>

          <div className={styles.contentCol}>
            <Paragraph>Узнайте о наших услугах и посмотрите портфолио — поймёте, как мы можем помочь с вашим видео.</Paragraph>

            <div className={styles.contactLines}>
              <a
                className={styles.link}
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Открыть Telegram: @${TELEGRAM_USER}`}
              >
                <MetaText text="Связаться в Telegram" />
              </a>
            </div>

            <p className={styles.note}>
              Ответим в Telegram в течение рабочего дня — обсудим задачу и сроки без лишней
              бюрократии.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
