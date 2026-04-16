import type { ComponentPropsWithoutRef } from "react";
import styles from "./Typography.module.css";

type HeadlineProps = ComponentPropsWithoutRef<"h2">;

export function Headline({ className, children, ...props }: HeadlineProps) {
  const classes = [styles.headline, className].filter(Boolean).join(" ");

  return (
    <h2 className={classes} {...props}>
      {children}
    </h2>
  );
}
