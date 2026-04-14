import { Container } from "@/components/Container/Container";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.root} id="footer">
      <Container className={styles.inner}>
        {/* <div className={styles.topBar}>
          <a href="#site-top" className={styles.close}>
            <span className={styles.closeLabel}>Close</span>
            <span className={styles.closeIcon} aria-hidden>
              ×
            </span>
          </a>
        </div> */}

        {/* <div className={styles.main}>
          <nav className={styles.nav} aria-label="Основная навигация">
            <ul className={styles.navList}>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#resume">Resume</a>
              </li>
              <li>
                <a href="#projects">Portfolio</a>
              </li>
              <li>
                <a href="#news">News</a>
              </li>
              <li>
                <a href="#footer-contact">Contact</a>
              </li>
            </ul>
          </nav>

          <div className={styles.aside}>
            <div className={styles.block} id="footer-contact">
              <h2 className={styles.blockTitle}>Contact Details</h2>
              <p>
                <a className={styles.accent} href="mailto:contact@foly.com">
                  contact@foly.com
                </a>
              </p>
              <p>
                <a className={styles.accent} href="tel:+7000004019">
                  700 000 40 19
                </a>
              </p>
            </div>
            <div className={styles.block}>
              <h2 className={styles.blockTitle}>Address</h2>
              <p className={styles.addressLine}>123 Main Street</p>
              <p className={styles.addressLine}>New York, NY 10001</p>
            </div>
          </div>
        </div> */}

        {/* <div className={styles.divider} role="presentation" /> */}

        <div className={styles.bottom}>
          <div className={styles.socials}>
            <a href="https://facebook.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://linkedin.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
              linkedin
            </a>
            <a href="https://instagram.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
              instagram
            </a>
          </div>
          {/* <a href="/privacy" className={styles.legal}>
            Privacy Policy
          </a> */}
        </div>
      </Container>
    </footer>
  );
}
