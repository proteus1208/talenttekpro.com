"use client";

import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

/** Max cover distance as a fraction of the viewport. */
const COVER_VH = 0.3;

/**
 * Adaptive cover: full 30vh for tall sections; shorter for small ones so
 * the whole block isn’t eaten by the seam.
 */
function coverFor(section: HTMLElement) {
  const maxCover = window.innerHeight * COVER_VH;

  // Measure without cover margin/pad so short sections aren’t inflated
  const prev = section.style.getPropertyValue("--section-cover");
  section.style.setProperty("--section-cover", "0px");
  const h = section.offsetHeight;
  if (prev) {
    section.style.setProperty("--section-cover", prev);
  } else {
    section.style.removeProperty("--section-cover");
  }

  if (h < window.innerHeight * 0.85) {
    return Math.round(Math.max(40, Math.min(maxCover, h * 0.33)));
  }
  return Math.round(maxCover);
}

/**
 * Dual-seam scroll cover
 *
 * Diff-speed / cover starts when the section’s top enters the viewport
 * (`top bottom`), not earlier.
 *
 * y: +cover → 0 over `cover` px of scroll, then holds at 0.
 * Small sections get a smaller `--section-cover` so content stays visible.
 */
export function HomeScrollCover({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    let cancelled = false;
    let ctx: { revert: () => void } | null = null;
    let removeLoad: (() => void) | null = null;

    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const sections = gsap.utils.toArray<HTMLElement>(".section-scroll-cover");

        sections.forEach((section, i) => {
          const syncCover = () => {
            const c = coverFor(section);
            section.style.setProperty("--section-cover", `${c}px`);
            section.dataset.coverPx = String(c);
            return c;
          };

          const getCover = () =>
            Number(section.dataset.coverPx) || syncCover();

          const flush = () =>
            gsap.set(section, { y: getCover(), force3D: false });
          const covered = () =>
            gsap.set(section, { y: 0, force3D: false });

          syncCover();
          flush();
          gsap.set(section, { zIndex: 20 + i });

          gsap.fromTo(
            section,
            { y: () => getCover() },
            {
              y: 0,
              ease: "none",
              force3D: false,
              immediateRender: false,
              scrollTrigger: {
                trigger: section,
                // Diff speed starts when the section top appears in the viewport
                start: "top bottom",
                end: () => `+=${getCover()}`,
                scrub: 0.35,
                invalidateOnRefresh: true,
                onLeaveBack: flush,
                onRefresh(self) {
                  syncCover();
                  if (self.progress <= 0) flush();
                  else if (self.progress >= 1) covered();
                },
              },
            },
          );
        });
      });

      const refresh = () => ScrollTrigger.refresh();
      requestAnimationFrame(() => {
        requestAnimationFrame(refresh);
      });
      window.addEventListener("load", refresh);
      removeLoad = () => window.removeEventListener("load", refresh);
    })();

    return () => {
      cancelled = true;
      removeLoad?.();
      ctx?.revert();
    };
  }, [reduced]);

  return (
    <motion.div
      className="relative"
      initial={reduced ? false : { opacity: 0.001 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
