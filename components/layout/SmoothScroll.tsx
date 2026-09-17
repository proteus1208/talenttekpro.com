"use client";

/**
 * Lenis disabled — it broke scroll / in-view on VMware and hid later sections.
 * Native scroll + CSS smooth is more reliable for this site.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
