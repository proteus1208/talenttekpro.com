"use client";

import { useLayoutEffect, useRef } from "react";
import { cn } from "@/lib/cn";

type RevealOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  /** Extra delay in seconds, added before the wave stagger. */
  delay?: number;
};

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

function isGrid(el: HTMLElement) {
  return [...el.classList].some(
    (name) => name === "grid" || name.endsWith(":grid") || name.includes("grid-cols"),
  );
}

/** Cards, headings, and rows. Nested lines of text stay with their parent. */
function collect(root: HTMLElement): HTMLElement[] {
  if (isGrid(root)) {
    return [...root.children].filter((node): node is HTMLElement => node instanceof HTMLElement);
  }

  const out: HTMLElement[] = [];

  const visit = (el: HTMLElement) => {
    if (el.tagName === "UL" || el.tagName === "OL" || el.tagName === "DL" || isGrid(el)) {
      for (const kid of el.children) {
        if (kid instanceof HTMLElement) out.push(kid);
      }
      return;
    }

    const kids = [...el.children].filter((node): node is HTMLElement => node instanceof HTMLElement);
    const onlyLayout =
      kids.length > 0 &&
      kids.length <= 6 &&
      kids.every(
        (kid) =>
          kid.tagName === "DIV" ||
          kid.tagName === "UL" ||
          kid.tagName === "OL" ||
          kid.tagName === "DL",
      );

    if (onlyLayout) {
      kids.forEach(visit);
      return;
    }

    out.push(el);
  };

  for (const kid of root.children) {
    if (kid instanceof HTMLElement) visit(kid);
  }

  return out;
}

function clearMotion(node: HTMLElement) {
  node.style.translate = "";
  node.style.transition = "";
}

/**
 * One rise per object. Color and opacity stay untouched so navy text
 * cannot wash out into a different shade. The motion runs once.
 */
export function RevealOnScroll({ children, className, delay = 0 }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const objects = collect(root);
    if (objects.length === 0) return;

    const pending = new Set<HTMLElement>();
    const waits = new WeakMap<HTMLElement, number>();
    const timers: number[] = [];

    objects.forEach((node, index) => {
      const rect = node.getBoundingClientRect();
      const alreadyVisible = rect.top < window.innerHeight * 0.9 && rect.bottom > 48;
      if (alreadyVisible) return;

      const wait = delay + (index % 6) * 0.1;
      waits.set(node, wait);
      node.style.translate = "0 40px";
      node.style.transition = `translate 0.8s ${EASE} ${wait}s`;
      pending.add(node);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const node = entry.target as HTMLElement;
          if (!pending.has(node)) continue;
          pending.delete(node);
          observer.unobserve(node);
          node.style.translate = "0 0";
          const wait = waits.get(node) ?? 0;
          timers.push(window.setTimeout(() => clearMotion(node), (wait + 0.9) * 1000));
        }
      },
      { threshold: 0.12 },
    );

    pending.forEach((node) => observer.observe(node));

    return () => {
      observer.disconnect();
      timers.forEach((id) => window.clearTimeout(id));
      objects.forEach(clearMotion);
    };
  }, [delay]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
