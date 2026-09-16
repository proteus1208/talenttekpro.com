"use client";

import {
  Activity,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Globe2,
  Star,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/effects/CountUp";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { home } from "@/content/home";
import { cn } from "@/lib/cn";
import { SectionEdge } from "@/components/ui/SectionShell";

const metricIcons: LucideIcon[] = [
  Star,
  BriefcaseBusiness,
  Globe2,
  Activity,
  Building2,
  CalendarDays,
];

const metricAccents = [
  "bg-[#EFF6FF] text-[#1E60FF]",
  "bg-[#ECFEFF] text-[#0891B2]",
  "bg-[#F0F9FF] text-[#0284C7]",
  "bg-[#EEF2FF] text-[#4F46E5]",
  "bg-[#F0FDFA] text-[#0D9488]",
  "bg-[#EFF6FF] text-[#2563EB]",
] as const;

export function Impact() {
  return (
    <section className="relative z-[1] overflow-visible bg-[#EAF3FB] pt-24 pb-24 md:pt-28 md:pb-28">
      <SectionEdge fill="#EAF3FB" variant="bump" position="top" />
      {/* Subtle clear accent shapes */}
      <svg
        className="pointer-events-none absolute top-16 right-[8%] h-24 w-24 text-[#D6E8FF]"
        viewBox="0 0 96 96"
        fill="currentColor"
        aria-hidden
      >
        <circle cx="48" cy="48" r="40" />
      </svg>
      <svg
        className="pointer-events-none absolute bottom-20 left-[6%] h-20 w-20 text-[#CFF5FF]"
        viewBox="0 0 80 80"
        fill="currentColor"
        aria-hidden
      >
        <rect x="8" y="8" width="64" height="64" rx="16" />
      </svg>

      <Container className="relative z-10">
        <RevealOnScroll>
          <div className="mx-auto max-w-2xl text-center">
            <p className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.18em] text-[#1E60FF] uppercase">
              <span className="inline-block h-px w-5 bg-[#1E60FF]" aria-hidden />
              {home.impact.eyebrow}
              <span className="inline-block h-px w-5 bg-[#1E60FF]" aria-hidden />
            </p>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-[#051937] md:text-4xl lg:text-[2.75rem]">
              {home.impact.headline}{" "}
              <span className="hero-gradient-text">
                {home.impact.headlineAccent}
              </span>
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {home.impact.metrics.map((metric, i) => {
              const Icon = metricIcons[i % metricIcons.length];
              const accent = metricAccents[i % metricAccents.length];
              return (
                <div
                  key={metric.label}
                  className="group relative overflow-hidden rounded-3xl bg-white/95 p-7 shadow-[0_16px_48px_rgba(5,25,55,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(5,25,55,0.12)]"
                >
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-[#E8F3FF]"
                    aria-hidden
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <span
                      className={cn(
                        "grid size-11 place-items-center rounded-2xl",
                        accent,
                      )}
                    >
                      <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                    </span>
                  </div>

                  <p className="font-display relative mt-8 bg-gradient-to-r from-[#1E60FF] to-[#00D2FF] bg-clip-text text-[clamp(2.4rem,3.5vw,3.25rem)] font-bold leading-none tracking-tight text-transparent">
                    <CountUp value={metric.value} suffix={metric.suffix} />
                  </p>

                  <h3 className="relative mt-4 text-sm font-semibold tracking-wide text-[#051937] capitalize">
                    {metric.label}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-[#64748B]">
                    {metric.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
