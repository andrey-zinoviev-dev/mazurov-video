import type { ReactNode } from "react";

import styles from "./Matrix.module.css";

export type MatrixRow = {
  id: string;
  cells: ReactNode[];
};

type MatrixProps = {
  columns: string[];
  rows: MatrixRow[];
  className?: string;
  "aria-label"?: string;
};

/** Lined multi-column matrix. Stacks to one column on small screens. */
export function Matrix({
  columns,
  rows,
  className,
  "aria-label": ariaLabel,
}: MatrixProps) {
  const colCount = columns.length;

  return (
    <div
      className={[styles.matrix, className].filter(Boolean).join(" ")}
      style={{ ["--matrix-cols" as string]: colCount }}
      role="table"
      aria-label={ariaLabel}
    >
      <div className={styles.head} role="row">
        {columns.map((column) => (
          <div key={column} className={styles.th} role="columnheader">
            {column}
          </div>
        ))}
      </div>

      {rows.map((row) => (
        <div key={row.id} className={styles.row} role="row">
          {row.cells.map((cell, index) => (
            <div
              key={`${row.id}-${columns[index] ?? index}`}
              className={styles.cell}
              data-label={columns[index]}
              role="cell"
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

/** Mono uppercase label for a primary cell (e.g. format name). */
export function MatrixKey({ children }: { children: ReactNode }) {
  return <span className={styles.key}>{children}</span>;
}
