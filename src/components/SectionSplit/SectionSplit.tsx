import type { ReactNode } from "react";

import styles from "./SectionSplit.module.css";

type SectionSplitProps = {
  aside: ReactNode;
  children: ReactNode;
  className?: string;
};

/** Shared section layout: narrow aside + wider main (0.5fr / 1.35fr). */
export function SectionSplit({ aside, children, className }: SectionSplitProps) {
  return (
    <div className={[styles.root, className].filter(Boolean).join(" ")}>
      <div className={styles.aside}>{aside}</div>
      <div className={styles.main}>{children}</div>
    </div>
  );
}
