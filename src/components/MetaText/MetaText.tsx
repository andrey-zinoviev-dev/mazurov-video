import styles from "./MetaText.module.css";

export type MetaTextProps = {
  text: string;
  className?: string;
};

/** Uppercase mono caption; plain string only (no rich children). */
export function MetaText({ text, className }: MetaTextProps) {
  return <span className={`${styles.root} ${className}`}>{text}</span>;
}
