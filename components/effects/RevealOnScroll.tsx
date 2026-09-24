"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type RevealOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

/**
 * Subtle rise only, never starts at opacity 0 (that hid whole sections
 * when in-view detection failed under smooth-scroll / VMs).
 *
 * Always the same `motion.div` tree (no reduced-motion element swaps)
 * so SSR and client HTML stay in sync.
 */
export function RevealOnScroll({
  children,
  className,
  delay = 0,
}: RevealOnScrollProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 1, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
