"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { ParallaxLayer } from "@/components/effects/ParallaxLayer";
import { ParallaxCopy } from "@/components/effects/ParallaxCopy";
import { home } from "@/content/home";
import { media } from "@/content/media";
import { cta } from "@/content/site";

/**
 * First viewport height = 100svh − announcer − header
 * so the hero content baseline sits on the visible bottom edge.
 */
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
    <section className="relative isolate h-[calc(100svh-var(--ttp-chrome-h))] min-h-[28rem] overflow-hidden">
      <ParallaxLayer
        className="absolute inset-0 -z-10 h-[120%] w-full"
        speed={0.48}
        scale={1.2}
      >
        <div className="absolute inset-0">
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

      <div className="pointer-events-none absolute inset-0 -z-[5] bg-gradient-to-b from-ink/75 via-ink/50 to-ink" />

      <Container className="relative flex h-full flex-col justify-end pb-6 pt-6 md:pb-8 md:pt-8">
        <ParallaxCopy distance={80}>
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionIndex label={home.hero.index} className="text-muted" />
            <p className="font-display mt-4 text-sm font-medium tracking-[0.2em] text-teal uppercase md:mt-5">
              {home.hero.brand}
            </p>
            <h1 className="font-display mt-3 max-w-3xl text-[clamp(2.25rem,5.5vw,4.25rem)] font-semibold leading-[1.05] tracking-tight text-text md:mt-4">
              {home.hero.headline}
            </h1>
            <p className="mt-4 max-w-xl text-base text-muted md:mt-5 md:text-lg">
              {home.hero.support}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 md:mt-8">
              <Button href={cta.primary.href}>{cta.primary.label}</Button>
              <Button href={cta.secondary.href} variant="secondary">
                {cta.secondary.label}
              </Button>
            </div>
          </motion.div>
        </ParallaxCopy>
      </Container>
    </section>
  );
}
