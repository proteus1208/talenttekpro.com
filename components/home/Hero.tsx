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

/** Clean professional dissolve — tall, soft opacity, single refined curve language. */
function HeroWaveSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="hero-wave-veil" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5F9FC" stopOpacity="0" />
          <stop offset="35%" stopColor="#F5F9FC" stopOpacity="0.35" />
          <stop offset="70%" stopColor="#F5F9FC" stopOpacity="0.82" />
          <stop offset="100%" stopColor="#F5F9FC" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="hero-wave-tint" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1E60FF" stopOpacity="0" />
          <stop offset="40%" stopColor="#1E60FF" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#00B4FF" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Tall atmospheric veil — no hard crest */}
      <rect width="1440" height="400" fill="url(#hero-wave-veil)" />

      {/* Soft brand tint under the curve */}
      <path
        d="M0 168 C360 88 720 248 1080 148 C1260 98 1380 128 1440 118 L1440 400 L0 400 Z"
        fill="url(#hero-wave-tint)"
      />

      {/* Primary wave — wide, calm amplitude */}
      <path
        d="M0 198 C300 118 540 278 840 188 C1080 118 1280 218 1440 168 L1440 400 L0 400 Z"
        fill="#F5F9FC"
        fillOpacity="0.55"
      />

      {/* Secondary wave — slight offset for depth */}
      <path
        d="M0 248 C280 178 560 308 880 228 C1120 168 1300 258 1440 218 L1440 400 L0 400 Z"
        fill="#F5F9FC"
        fillOpacity="0.78"
      />

      {/* Solid settle into services band */}
      <path
        d="M0 292 C320 242 640 332 960 282 C1180 248 1340 298 1440 278 L1440 400 L0 400 Z"
        fill="#F5F9FC"
      />
    </svg>
  );
}

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative z-20 overflow-visible bg-white">
      <div className="hero-viewport relative flex flex-col overflow-hidden pb-32 md:pb-40">
        <div className="absolute top-0 right-0 bottom-0 z-0 h-full w-[60vw] [mask-image:linear-gradient(to_right,transparent_0%,#000_12%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,#000_12%)]">
          <Image
            src="/assets/imgs/Landing.png"
            alt="TalentTekPro teammates collaborating at a laptop in a bright office"
            fill
            priority
            className="border-0 object-cover object-[center_28%] outline-none ring-0"
            sizes="60vw"
          />
        </div>

        {/* Soft atmospheric fade into services */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-48 bg-gradient-to-t from-[#F5F9FC] via-[#F5F9FC]/40 to-transparent md:h-64"
          aria-hidden
        />

        <HeroWaveSvg className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[280px] w-full md:h-[360px] lg:h-[420px]" />

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

      {/* Stats centered on the single shared divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 translate-y-1/2">
        <Container>
          <motion.div
            className="pointer-events-auto rounded-[1.75rem] border border-black/5 bg-white px-4 py-5 shadow-[0_24px_70px_rgba(5,25,55,0.14)] sm:px-6 md:rounded-[2rem] md:px-2 md:py-6"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
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
