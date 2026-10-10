"use client";

import type { ReactNode, MouseEvent } from "react";

import {
  trackCtaContact,
  type CtaContactFrom,
  type ServiceGoalParam,
} from "@/lib/metrica/goals";

type ContactCtaLinkProps = {
  from: CtaContactFrom;
  service?: ServiceGoalParam;
  className?: string;
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

/** Anchor to `#contact` that fires the `cta_contact` Metrika goal. */
export function ContactCtaLink({
  from,
  service = "none",
  className,
  children,
  onClick,
}: ContactCtaLinkProps) {
  return (
    <a
      href="#contact"
      className={className}
      onClick={(event) => {
        trackCtaContact({ from, service });
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
