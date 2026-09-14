"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { ParallaxLayer } from "@/components/effects/ParallaxLayer";
import { home } from "@/content/home";
import { media } from "@/content/media";
import { cta } from "@/content/site";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !reduced) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [reduced]);

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <ParallaxLayer className="absolute inset-0 -z-10" speed={0.12}>
        <div className="absolute inset-0 scale-110">
          {reduced ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={media.heroVideo.poster}
              alt={media.heroVideo.alt}
              className="h-full w-full object-cover"
            />
          ) : (
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              poster={media.heroVideo.poster}
              muted
              loop
              playsInline
              autoPlay
              aria-label={media.heroVideo.alt}
            >
              <source src={media.heroVideo.src} type="video/mp4" />
            </video>
          )}
        </div>
      </ParallaxLayer>

      <div className="absolute inset-0 -z-[5] bg-gradient-to-b from-ink/70 via-ink/55 to-ink" />

      <Container className="relative flex min-h-[100svh] flex-col justify-end pb-20 pt-32 md:pb-28 md:pt-40">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionIndex label={home.hero.index} className="text-muted" />
          <p className="font-display mt-6 text-sm font-medium tracking-[0.2em] text-teal uppercase">
            {home.hero.brand}
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-text">
            {home.hero.headline}
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted md:text-lg">
            {home.hero.support}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={cta.primary.href}>{cta.primary.label}</Button>
            <Button href={cta.secondary.href} variant="secondary">
              {cta.secondary.label}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
