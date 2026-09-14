"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/cn";

type ParallaxCopyProps = {
  children: React.ReactNode;
  className?: string;
  /** Opposite of background — content rises while bg sinks */
  distance?: number;
};

export function ParallaxCopy({
  children,
  className,
  distance = 80,
}: ParallaxCopyProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, distance]);
  const opacity = useTransform(scrollYProgress, [0, 0.55, 1], [1, 0.85, 0.2]);

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
