import { Contacts } from "@/components/Contacts/Contacts";
import { LogoLink } from "@/components/LogoLink/LogoLink";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.root} id="footer">
      <Contacts />

      <div className={styles.bottom}>
        <LogoLink />
        <div className={styles.socials}>
          <a
            href="https://t.me/MazurovRentBot"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            telegram
          </a>
          <a
            href="https://mazurov-rental.ru"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Аренда оборудования
          </a>
        </div>
      </div>
    </footer>
  );
}
