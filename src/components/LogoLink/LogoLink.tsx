import Image from "next/image";
import Link from "next/link";

import styles from "./LogoLink.module.css";

type LogoLinkProps = {
  /** Pass `true` in the header so LCP can prioritize the mark. */
  priority?: boolean;
  className?: string;
};

export function LogoLink({ priority = false, className }: LogoLinkProps) {
  return (
    <Link
      href="/"
      className={[styles.root, className].filter(Boolean).join(" ")}
      aria-label="На главную"
    >
      <Image
        src="/MAZUROV%20LOGO.svg"
        alt=""
        width={783}
        height={620}
        className={styles.image}
        priority={priority}
      />
    </Link>
  );
}
