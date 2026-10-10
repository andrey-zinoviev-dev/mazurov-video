import type { ComponentPropsWithoutRef } from "react";
import styles from "./Typography.module.css";

type PageTitleProps = ComponentPropsWithoutRef<"h1">;

export function PageTitle({ className, children, ...props }: PageTitleProps) {
  const classes = [styles.pageTitle, className].filter(Boolean).join(" ");

  return (
    <h1 className={classes} {...props}>
      {children}
    </h1>
  );
}
