import type { ReactNode } from "react";

import styles from "./Accordion.module.css";

export type AccordionItem = {
  title: string;
  content: ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  className?: string;
};

type AccordionLabeledListProps = {
  items: readonly { label: string; text: string }[];
};

function formatIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

/** Labeled bullet list for accordion panels (max-width lives here). */
export function AccordionLabeledList({ items }: AccordionLabeledListProps) {
  return (
    <ul className={styles.content}>
      {items.map((item) => (
        <li key={item.label}>
          <strong className={styles.label}>{item.label}:</strong> {item.text}
        </li>
      ))}
    </ul>
  );
}

export function Accordion({ items, className }: AccordionProps) {
  return (
    <ul className={[styles.list, className].filter(Boolean).join(" ")}>
      {items.map((item, index) => (
        <li key={item.title} className={styles.item}>
          <details className={styles.accordion}>
            <summary className={styles.summary}>
              <span className={styles.index} aria-hidden="true">
                {"\\" + formatIndex(index)}
              </span>
              <h3 className={styles.title}>{item.title}</h3>
              <span className={styles.icon} aria-hidden="true" />
            </summary>
            <div className={styles.panel}>
              <div className={styles.panelInner}>{item.content}</div>
            </div>
          </details>
        </li>
      ))}
    </ul>
  );
}
