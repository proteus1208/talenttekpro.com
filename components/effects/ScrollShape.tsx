"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/cn";

type ScrollShapeProps = {
  children: React.ReactNode;
  className?: string;
  /** Vertical travel in px (default ≈ 2× original range) */
  drift?: number;
  /** Rotation in degrees (default ≈ 2× original range) */
  rotate?: number;
  reverse?: boolean;
};

/**
 * Exactly one decorative shape per section.
 * Opacity ~17% (15–20% band); scroll-linked drift + rotation.
 */
export function ScrollShape({
  children,
  className,
  drift = 96,
  rotate = 20,
  reverse = false,
}: ScrollShapeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(!reduced);
  }, [reduced]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reverse ? [drift, -drift] : [-drift, drift],
  );
  const rotateZ = useTransform(
    scrollYProgress,
    [0, 1],
    reverse ? [rotate, -rotate] : [-rotate, rotate],
  );

  return (
    <motion.div
      ref={ref}
      className={cn(
        "pointer-events-none absolute z-0 opacity-[0.2] will-change-transform",
        className,
      )}
      style={active ? { y, rotate: rotateZ } : undefined}
      aria-hidden
    >
      {children}
    </motion.div>
  );
}
