"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/cn";

type ParallaxLayerProps = {
  children: React.ReactNode;
  className?: string;
  /** Stronger = more visible. Typical: 0.25–0.55 for backgrounds. */
  speed?: number;
  /** Extra scale so edges don’t show while translating */
  scale?: number;
};

/**
 * Scroll-linked Y parallax. Uses Framer Motion so it stays in sync with Lenis.
 */
export function ParallaxLayer({
  children,
  className,
  speed = 0.35,
  scale = 1.15,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [
    `${-speed * 140}px`,
    `${speed * 140}px`,
  ]);

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div style={{ y, scale }} className="h-full w-full will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}
