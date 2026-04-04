import type { CSSProperties, ReactNode } from "react";
import styles from "./Container.module.css";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  /** Max content width in pixels. Default 1440. */
  maxWidth?: number;
};

export function Container({
  children,
  className,
  maxWidth = 1440,
}: ContainerProps) {
  const style =
    maxWidth !== 1440
      ? ({ "--container-max": `${maxWidth}px` } as CSSProperties)
      : undefined;

  return (
    <div className={[styles.root, className].filter(Boolean).join(" ")} style={style}>
      {children}
    </div>
  );
}
