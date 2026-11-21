"use client";

import { useEffect, useState, type RefObject } from "react";

type UseInViewOptions = {
  enabled?: boolean;
  rootMargin?: string;
  threshold?: number | number[];
  requireFullyVisible?: boolean;
};

/** Fully inside the layout viewport (not the possibly shrunk IO root). */
function isFullyInViewport(rect: DOMRectReadOnly): boolean {
  // 1px slack for subpixel rounding
  return rect.top >= -1 && rect.bottom <= window.innerHeight + 1;
}

/**
 * Tracks whether `ref` intersects the viewport (optionally a center band via rootMargin).
 * Defaults: middle 20% band (`-40% 0px -40% 0px`), threshold 0.
 *
 * When `requireFullyVisible` is set, the element must also lie fully within the
 * window viewport. That check uses `window.innerHeight`, not `rootBounds`, so it
 * still works with a shrunk center-band root.
 */
export function useInView(
  ref: RefObject<Element | null>,
  {
    enabled = true,
    rootMargin = "-40% 0px -40% 0px",
    threshold = 0,
    requireFullyVisible = false,
  }: UseInViewOptions = {},
): boolean {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setIsInView(false);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;

        const active =
          entry.isIntersecting &&
          (!requireFullyVisible ||
            isFullyInViewport(entry.boundingClientRect));

        setIsInView(active);
      },
      { rootMargin, threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [enabled, ref, requireFullyVisible, rootMargin, threshold]);

  return isInView;
}
