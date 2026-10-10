"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";

import { LogoLink } from "@/components/LogoLink/LogoLink";
import { ContactCtaLink } from "@/components/Metrica/ContactCtaLink";
import styles from "./AppHeader.module.css";

const DROPDOWN_OPEN_MS = 120;
const DROPDOWN_CLOSE_MS = 180;

const SERVICE_ITEMS = [
  { href: "/services/shows/", label: "Концерты" },
  { href: "/services/commercials/", label: "Реклама" },
  { href: "/services/music-video/", label: "Видеоклипы" },
  { href: "/services/brand-video/", label: "Бренд-видео" },
  { href: "/services/motion-design/", label: "Motion Design" },
  { href: "/services/report-videos/", label: "Отчетные ролики" },
  { href: "/services/documentary/", label: "Документальные фильмы" },
  { href: "/services/livestream/", label: "Трансляции" },
  { href: "/services/webinars/", label: "Вебинары" },
  { href: "/services/master-classes/", label: "Мастер-классы / лекции" },
] as const;

type NavLink = {
  type: "link";
  href: string;
  label: string;
  target?: "_blank";
};

type NavContact = {
  type: "contact";
  label: string;
};

type NavGroup = {
  type: "group";
  id: "services";
  label: string;
  items: typeof SERVICE_ITEMS;
};

const NAV_ITEMS: readonly (NavLink | NavContact | NavGroup)[] = [
  { type: "link", href: "/about/", label: "О нас" },
  { type: "group", id: "services", label: "Услуги", items: SERVICE_ITEMS },
  { type: "link", href: "/projects/", label: "Проекты" },
  {
    type: "link",
    href: "https://mazurov-rental.ru",
    label: "Аренда оборудования",
    target: "_blank",
  },
  { type: "contact", label: "Контакты" },
];

type MobilePanel = "root" | "services";

export function AppHeader() {
  const dropdownCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownOpenTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobilePanel, setMobilePanel] = useState<MobilePanel>("root");
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const mobileMenuId = useId();
  const servicesMenuId = useId();

  const clearDropdownTimers = useCallback(() => {
    if (dropdownCloseTimer.current) {
      clearTimeout(dropdownCloseTimer.current);
      dropdownCloseTimer.current = null;
    }
    if (dropdownOpenTimer.current) {
      clearTimeout(dropdownOpenTimer.current);
      dropdownOpenTimer.current = null;
    }
  }, []);

  const closeServices = useCallback(() => {
    clearDropdownTimers();
    setIsServicesOpen(false);
  }, [clearDropdownTimers]);

  const openServices = useCallback(() => {
    clearDropdownTimers();
    setIsServicesOpen(true);
  }, [clearDropdownTimers]);

  const scheduleOpenServices = useCallback(() => {
    clearDropdownTimers();
    dropdownOpenTimer.current = setTimeout(() => {
      setIsServicesOpen(true);
    }, DROPDOWN_OPEN_MS);
  }, [clearDropdownTimers]);

  const scheduleCloseServices = useCallback(() => {
    clearDropdownTimers();
    dropdownCloseTimer.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, DROPDOWN_CLOSE_MS);
  }, [clearDropdownTimers]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setMobilePanel("root");
  }, []);

  useEffect(() => {
    return () => clearDropdownTimers();
  }, [clearDropdownTimers]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (isMobileMenuOpen) {
        closeMobileMenu();
        return;
      }
      if (isServicesOpen) {
        closeServices();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isServicesOpen, isMobileMenuOpen, closeServices, closeMobileMenu]);

  return (
    <header className={styles.root}>
      <div className={styles.bar}>
        <LogoLink priority />
        <nav className={styles.navDesktop} aria-label="Разделы сайта">
          {NAV_ITEMS.map((item) => {
            if (item.type === "contact") {
              return (
                <ContactCtaLink
                  key="contact"
                  from="header"
                  className={styles.navDesktopLink}
                >
                  {item.label}
                </ContactCtaLink>
              );
            }

            if (item.type === "link") {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={styles.navDesktopLink}
                  target={item.target}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div
                key={item.id}
                className={styles.navDesktopItem}
                onMouseEnter={scheduleOpenServices}
                onMouseLeave={scheduleCloseServices}
                onFocus={openServices}
                onBlur={(event) => {
                  const next = event.relatedTarget;
                  if (
                    next instanceof Node &&
                    event.currentTarget.contains(next)
                  ) {
                    return;
                  }
                  scheduleCloseServices();
                }}
              >
                <button
                  type="button"
                  className={`${styles.navDesktopLink} ${styles.navDesktopTrigger} ${
                    isServicesOpen ? styles.navDesktopTriggerOpen : ""
                  }`}
                  aria-expanded={isServicesOpen}
                  aria-haspopup="menu"
                  aria-controls={servicesMenuId}
                  onClick={() => {
                    clearDropdownTimers();
                    setIsServicesOpen((open) => !open);
                  }}
                >
                  {item.label}
                </button>
                <div
                  id={servicesMenuId}
                  className={`${styles.dropdown} ${
                    isServicesOpen ? styles.dropdownOpen : ""
                  }`}
                  role="menu"
                  aria-label={item.label}
                >
                  {item.items.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={styles.dropdownLink}
                      role="menuitem"
                      tabIndex={isServicesOpen ? 0 : -1}
                      onClick={closeServices}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>
        <button
          type="button"
          className={styles.menu}
          aria-expanded={isMobileMenuOpen}
          aria-controls={mobileMenuId}
          onClick={() => {
            if (isMobileMenuOpen) {
              closeMobileMenu();
              return;
            }
            setIsMobileMenuOpen(true);
            setMobilePanel("root");
          }}
        >
          {isMobileMenuOpen ? "Закрыть" : "Menu"}
        </button>
      </div>

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
            aria-label="Разделы сайта"
            onClick={(event) => event.stopPropagation()}
          >
            {mobilePanel === "root" ? (
              NAV_ITEMS.map((item) => {
                if (item.type === "contact") {
                  return (
                    <ContactCtaLink
                      key="contact"
                      from="mobile_menu"
                      className={styles.mobileNavLink}
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </ContactCtaLink>
                  );
                }

                if (item.type === "link") {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={styles.mobileNavLink}
                      target={item.target}
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`${styles.mobileNavLink} ${styles.mobileNavDrill}`}
                    onClick={() => setMobilePanel("services")}
                  >
                    <span>{item.label}</span>
                    <span className={styles.mobileChevron} aria-hidden>
                      ›
                    </span>
                  </button>
                );
              })
            ) : (
              <>
                <button
                  type="button"
                  className={styles.mobileBack}
                  onClick={() => setMobilePanel("root")}
                >
                  <span className={styles.mobileBackIcon} aria-hidden>
                    ‹
                  </span>
                  Назад
                </button>
                {SERVICE_ITEMS.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className={styles.mobileNavLink}
                    onClick={closeMobileMenu}
                  >
                    {service.label}
                  </Link>
                ))}
              </>
            )}
            <ContactCtaLink
              from="mobile_menu"
              className={styles.mobileCta}
              onClick={closeMobileMenu}
            >
              Заказать съемку
            </ContactCtaLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
