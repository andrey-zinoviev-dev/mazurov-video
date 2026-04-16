import type { ComponentPropsWithoutRef } from "react";
import styles from "./Typography.module.css";

type ParagraphProps = ComponentPropsWithoutRef<"p">;

export function Paragraph({ className, children, ...props }: ParagraphProps) {
  const classes = [styles.paragraph, className].filter(Boolean).join(" ");

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
}
