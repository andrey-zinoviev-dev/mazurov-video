"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./AppHeader.module.css";

const HEADER_OFFSET_VAR = "--app-header-offset";

const NAV_ITEMS = [
  { href: "/#about", label: "О нас" },
  { href: "/#projects", label: "Проекты" },
  { href: "/#principles", label: "Принципы" },
  { href: "/#contact", label: "Контакты" },
] as const;

export function AppHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuId = useId();

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

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

  /** Measured bar height → mobile overlay `top` (sibling of header, not affected by backdrop-filter). */
  useEffect(() => {
    const el = headerRef.current;
    if (!el) {
      return;
    }

    const sync = () => {
      const { bottom } = el.getBoundingClientRect();
      document.documentElement.style.setProperty(
        HEADER_OFFSET_VAR,
        `${bottom}px`,
      );
    };

    const ro = new ResizeObserver(sync);
    ro.observe(el);
    sync();

    return () => {
      ro.disconnect();
      document.documentElement.style.removeProperty(HEADER_OFFSET_VAR);
    };
  }, []);

  /** Re-measure when menu opens (after paint) so padding matches the bar. */
  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }
    const el = headerRef.current;
    if (!el) {
      return;
    }
    const id = requestAnimationFrame(() => {
      const { bottom } = el.getBoundingClientRect();
      document.documentElement.style.setProperty(HEADER_OFFSET_VAR, `${bottom}px`);
    });
    return () => cancelAnimationFrame(id);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMobileMenuOpen, closeMobileMenu]);

  return (
    <>
      <header
        ref={headerRef}
        className={`${styles.root} ${isScrolled ? styles.scrolled : ""}`}
      >
        <Link href="/" className={styles.logoMark} aria-label="На главную">
          <Image
            src="/MAZUROV%20LOGO.svg"
            alt=""
            width={783}
            height={620}
            className={styles.logoImage}
            priority
          />
        </Link>
        <nav className={styles.navDesktop} aria-label="Разделы страницы">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navDesktopLink}>
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className={styles.menu}
          aria-expanded={isMobileMenuOpen}
          aria-controls={mobileMenuId}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          {isMobileMenuOpen ? "Закрыть" : "Menu"}
        </button>
      </header>
      {isMobileMenuOpen ? (
        <div
          id={mobileMenuId}
          className={styles.mobileOverlay}
          role="dialog"
          aria-modal="true"
          aria-label="Меню"
          onClick={closeMobileMenu}
        >
          <nav
            className={styles.mobileNav}
            aria-label="Разделы страницы"
            onClick={(event) => event.stopPropagation()}
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={styles.mobileNavLink}
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </>
  );
}
