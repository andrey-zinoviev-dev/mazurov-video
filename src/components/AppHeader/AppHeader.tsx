import styles from "./AppHeader.module.css";

export function AppHeader() {
  return (
    <header className={styles.root}>
      <a href="/" className={styles.logoMark} aria-label="На главную">
        R
      </a>
      <button type="button" className={styles.menu}>
        Menu
      </button>
      <div className={styles.right}>
        <span className={styles.searchIcon} aria-hidden />
        <span>magazine</span>
      </div>
    </header>
  );
}
