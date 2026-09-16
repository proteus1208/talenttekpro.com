"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock3, Play, Rocket, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ScrollShape } from "@/components/effects/ScrollShape";
import { SoftRegion } from "@/components/effects/SoftRegion";
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

/** Rough hand-drawn underline under the gradient headline */
function HandUnderline({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      preserveAspectRatio="none"
    >
      <path
        d="M4 11 C48 4 72 15 110 9 C148 3 168 14 210 8 C248 3 278 12 316 7"
        stroke="#1E60FF"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.55"
      />
      <path
        d="M8 14 C56 8 88 16 128 12 C170 7 200 15 248 11 C278 8 300 13 314 10"
        stroke="#00B4FF"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.35"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative z-20 overflow-visible bg-[#F5F9FC]">
      <div className="hero-viewport relative flex flex-col overflow-visible pb-[6.5rem] md:pb-[7.25rem]">
        <svg width="0" height="0" className="absolute" aria-hidden>
          <defs>
            <clipPath id="hero-left-curve" clipPathUnits="objectBoundingBox">
              <path d="M0,0 H0.94 C0.72,0.28 0.72,0.72 0.94,1 H0 Z" />
            </clipPath>
          </defs>
        </svg>

        <div className="absolute inset-y-0 right-0 z-0 hidden w-[50%] md:block lg:w-[48%]">
          <Image
            src="/assets/imgs/Landing.png"
            alt="TalentTekPro teammates collaborating at a laptop in a bright office"
            fill
            priority
            placeholder="empty"
            className="border-0 object-cover object-[center_28%] outline-none ring-0"
            sizes="50vw"
          />
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-[1] hidden w-[68%] md:block lg:w-[70%]"
          style={{
            filter: "drop-shadow(36px 0 48px rgba(5,25,55,0.1))",
          }}
          aria-hidden
        >
          <div
            className="h-full w-full bg-[#F5F9FC]"
            style={{ clipPath: "url(#hero-left-curve)" }}
          />
        </div>

        {/* Soft ribbon region */}
        <ScrollShape
          className="right-[8%] bottom-[28%] hidden h-36 w-40 text-[#1E60FF] md:block lg:right-[12%] lg:h-44 lg:w-48"
        >
          <SoftRegion variant="ribbon" />
        </ScrollShape>

        <div
          className="pointer-events-none absolute -top-6 -left-4 z-[1] opacity-[0.06] md:top-2 md:left-2"
          aria-hidden
        >
          <Image
            src="/logo/logo-no-text-512.png"
            alt=""
            width={400}
            height={400}
            className="h-52 w-52 md:h-64 md:w-64 lg:h-72 lg:w-72"
            priority
          />
        </div>

        <Container className="relative z-20 flex flex-1 items-center py-12 md:py-16">
          <motion.div
            className="relative max-w-[34rem] lg:max-w-[36rem]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-display text-[clamp(2.35rem,5vw,3.85rem)] font-bold leading-[1.08] tracking-tight text-[#051937]">
              <span className="block">Build the team.</span>
              <span className="relative inline-block whitespace-nowrap">
                <span className="hero-gradient-text">Ship the system.</span>
                <HandUnderline className="absolute -bottom-1 left-0 h-3 w-full md:h-3.5" />
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

      <div className="relative z-30 -mt-[6.5rem] w-full md:-mt-[7.25rem]">
        <Container>
          <motion.div
            className="rounded-[1.75rem] border border-black/5 bg-white px-4 py-5 shadow-[0_24px_70px_rgba(5,25,55,0.14)] sm:px-6 md:rounded-[2rem] md:px-2 md:py-6"
            initial={{ opacity: 0, y: 16 }}
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
