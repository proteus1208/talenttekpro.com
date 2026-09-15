"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Clock3, Play, Rocket, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { home } from "@/content/home";
import { cta } from "@/content/site";
import { cn } from "@/lib/cn";

const heroStats = [
  {
    value: "150+",
    label: "Skilled Engineers",
    icon: Users,
    tint: "bg-[#E8F0FF] text-[#1E60FF]",
  },
  {
    value: "100%",
    label: "Remote & Flexible",
    icon: Clock3,
    tint: "bg-[#E8FBF0] text-[#16A34A]",
  },
  {
    value: "50+",
    label: "Successful Projects",
    icon: Rocket,
    tint: "bg-[#F3E8FF] text-[#7C3AED]",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    icon: Star,
    tint: "bg-[#E0F7FF] text-[#0284C7]",
  },
];

function HeroWaveSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="hero-wave-grad" x1="0%" y1="40%" x2="100%" y2="60%">
          <stop offset="0%" stopColor="#1E60FF" stopOpacity="0.5" />
          <stop offset="45%" stopColor="#00B4FF" stopOpacity="0.38" />
          <stop offset="100%" stopColor="#00D2FF" stopOpacity="0.32" />
        </linearGradient>
        <linearGradient id="hero-wave-soft" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#5AE0FF" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#1E60FF" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <path
        d="M0 150 C180 40 360 200 540 110 C720 20 900 170 1080 90 C1260 10 1380 80 1440 50 L1440 220 L0 220 Z"
        fill="url(#hero-wave-soft)"
      />
      <path
        d="M0 175 C200 70 380 210 560 130 C740 50 920 190 1100 115 C1280 40 1380 100 1440 75 L1440 220 L0 220 Z"
        fill="url(#hero-wave-grad)"
      />
    </svg>
  );
}

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative z-10 overflow-visible bg-white">
      <div className="relative flex min-h-[min(780px,calc(100svh-var(--ttp-chrome-h)-3.5rem))] flex-col overflow-hidden pb-28 md:min-h-[min(720px,calc(100svh-var(--ttp-chrome-h)-4.5rem))] md:pb-32">
        {/* Right photo — 60vw × 100% height; left edge masked so no hard vertical seam */}
        <div
          className="absolute top-0 right-0 bottom-0 z-0 h-full w-[60vw] [mask-image:linear-gradient(to_right,transparent_0%,#000_12%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,#000_12%)]"
        >
          <Image
            src="/assets/imgs/Landing.png"
            alt="TalentTekPro teammates collaborating at a laptop in a bright office"
            fill
            priority
            className="border-0 object-cover object-[center_28%] outline-none ring-0"
            sizes="60vw"
          />
        </div>

        {/* Full-width SVG wave under content */}
        <HeroWaveSvg className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[150px] w-full md:h-[200px]" />

        {/* Floating copy layer — sits above background */}
        <Container className="relative z-20 flex flex-1 items-center py-16 md:py-20">
          <motion.div
            className="relative max-w-[34rem] lg:max-w-[36rem]"
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-display text-[clamp(2.35rem,5vw,3.85rem)] font-bold leading-[1.08] tracking-tight text-[#051937]">
              <span className="block">Build the team.</span>
              <span className="hero-gradient-text block whitespace-nowrap">
                Ship the system.
              </span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-[#64748B] md:text-lg">
              {home.hero.support}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={cta.primary.href} className="rounded-full px-6 py-3">
                {cta.primary.label}
              </Button>
              <Button
                href={cta.secondary.href}
                variant="secondary"
                className="gap-2 rounded-full px-6 py-3"
              >
                <Play className="size-3.5 fill-current" aria-hidden />
                {cta.secondary.label}
              </Button>
            </div>
          </motion.div>
        </Container>
      </div>

      {/* Stats — v-centered on the border between this section and the next */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 translate-y-1/2">
        <Container>
          <motion.div
            className="pointer-events-auto rounded-[1.75rem] border border-black/5 bg-white px-4 py-5 shadow-[0_24px_70px_rgba(5,25,55,0.14)] sm:px-6 md:rounded-[2rem] md:px-2 md:py-6"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <dl className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-0">
              {heroStats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className={cn(
                      "flex items-center gap-3 px-3 md:justify-center md:px-4",
                      i > 0 && "md:border-l md:border-black/8",
                    )}
                  >
                    <span
                      className={cn(
                        "grid size-10 shrink-0 place-items-center rounded-full md:size-11",
                        stat.tint,
                      )}
                    >
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <div>
                      <dt className="sr-only">{stat.label}</dt>
                      <dd className="font-display text-xl font-bold tracking-tight text-[#051937] md:text-2xl">
                        {stat.value}
                      </dd>
                      <p className="text-xs text-[#64748B] md:text-sm">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </dl>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
