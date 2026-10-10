import type { ReactNode } from "react";

import { Footer } from "@/components/Footer/Footer";

/** Shared chrome for real pages: main landmark + site footer. */
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <main id="site-top">{children}</main>
      <Footer />
    </>
  );
}
