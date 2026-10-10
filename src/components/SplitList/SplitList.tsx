import type { ReactNode } from "react";

import styles from "./SplitList.module.css";

export type SplitListItem = {
  id: string;
  label: ReactNode;
  detail: ReactNode;
};

type SplitListProps = {
  items: SplitListItem[];
  className?: string;
  "aria-label"?: string;
};

/** Two-column lined list shell. Domain-agnostic — pass any label/detail nodes. */
export function SplitList({
  items,
  className,
  "aria-label": ariaLabel,
}: SplitListProps) {
  return (
    <ul
      className={[styles.list, className].filter(Boolean).join(" ")}
      aria-label={ariaLabel}
    >
      {items.map((item) => (
        <li key={item.id} className={styles.row}>
          <div className={styles.label}>{item.label}</div>
          <div className={styles.detail}>{item.detail}</div>
        </li>
      ))}
    </ul>
  );
}
