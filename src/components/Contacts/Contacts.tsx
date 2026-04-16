import { Container } from "@/components/Container/Container";
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
        <div className={styles.divider} role="presentation" />

        <div className={styles.grid}>
          <div className={styles.left}>
            <p id="contact-emotional-heading" className={styles.heroWord}>
              давайте снимать
            </p>
          </div>

          <div className={styles.right}>
            <div className={styles.eyebrowStack}>
              <p className={styles.eyebrow}>Видеопродакшен</p>
              <p className={styles.eyebrow}>Полный цикл · по России и СНГ</p>
            </div>

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
        </div>
      </Container>
    </section>
  );
}
