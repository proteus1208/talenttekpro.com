"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type ParallaxLayerProps = {
  children: React.ReactNode;
  className?: string;
  speed?: number;
};

export function ParallaxLayer({
  children,
  className,
  speed = 0.08,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const viewH = window.innerHeight;
        const progress = (viewH - rect.top) / (viewH + rect.height);
        setOffset((progress - 0.5) * speed * 100);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [reduced, speed]);

  return (
    <div
      ref={ref}
      className={cn("will-change-transform", className)}
      style={reduced ? undefined : { transform: `translate3d(0, ${offset}px, 0)` }}
    >
      {children}
    </div>
  );
}
