import { Container } from "@/components/Container/Container";
import { Headline } from "@/components/Typography/Headline";
import styles from "./Contacts.module.css";

const EMAIL = "hello@example.com";
const PHONE_DISPLAY = "+7 900 000-00-00";
const PHONE_TEL = "+79000000000";

export function Contacts() {
  return (
    <section
      className={styles.section}
      id="contact"
      aria-labelledby="contact-emotional-heading"
    >
      <Container className={styles.container}>
        <p className={styles.kicker}>Видеопродакшен · полный цикл · по России и СНГ</p>

        <Headline id="contact-emotional-heading" className={styles.heading}>
          <span className={styles.titleText}>давайте снимать</span>
          <span className={styles.titleArrow} aria-hidden>
            ↘
          </span>
        </Headline>

        <div className={styles.rule} role="presentation" />

        <div className={styles.lower}>
          <p className={styles.lede}>
            Узнайте о наших услугах и посмотрите портфолио — поймёте, как мы можем помочь с
            вашим видео.
          </p>

          <div className={styles.contactLines}>
            <a className={styles.link} href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            <a className={styles.link} href={`tel:${PHONE_TEL}`}>
              {PHONE_DISPLAY}
            </a>
          </div>

          <p className={styles.note}>
            Ответим в течение рабочего дня — обсудим задачу и сроки без лишней бюрократии.
          </p>
        </div>
      </Container>
    </section>
  );
}
