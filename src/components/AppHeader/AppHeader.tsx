"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import styles from "./AppHeader.module.css";

export function AppHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className={`${styles.root} ${isScrolled ? styles.scrolled : ""}`}>
      <Link href="/" className={styles.logoMark} aria-label="На главную">
        R
      </Link>
      <button type="button" className={styles.menu}>
        Menu
      </button>
      {/* <div className={styles.right}>
        <span className={styles.searchIcon} aria-hidden />
        <span>magazine</span>
      </div> */}
    </header>
  );
}
