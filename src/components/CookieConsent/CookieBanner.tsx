import styles from "./CookieBanner.module.css";

type CookieBannerProps = {
  onAccept: () => void;
  onDecline: () => void;
};

export function CookieBanner({ onAccept, onDecline }: CookieBannerProps) {
  return (
    <div
      className={styles.root}
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
    >
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p id="cookie-banner-title" className={styles.kicker}>
            [ Cookies ]
          </p>
          <p id="cookie-banner-desc" className={styles.text}>
            Сайт использует cookies и Яндекс&nbsp;Метрику (включая вебвизор) для
            статистики и улучшения работы. Можете принять или отклонить.
          </p>
        </div>
        <div className={styles.actions}>
          <button type="button" className={styles.button} onClick={onDecline}>
            Отклонить
          </button>
          <button type="button" className={styles.button} onClick={onAccept}>
            Принять
          </button>
        </div>
      </div>
    </div>
  );
}
