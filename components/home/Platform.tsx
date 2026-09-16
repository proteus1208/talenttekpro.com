"use client";

import {
  Gauge,
  Network,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { ScrollShape } from "@/components/effects/ScrollShape";
import { SoftRegion } from "@/components/effects/SoftRegion";
import { home } from "@/content/home";
import { cn } from "@/lib/cn";
import { SectionEdge } from "@/components/ui/SectionShell";

const pillarIcons: LucideIcon[] = [Gauge, Network, Rocket];

const pillarAccents = [
  {
    icon: "bg-[#EFF6FF] text-[#1E60FF]",
    shape: "text-[#DBEAFE]",
    stat: "from-[#1E60FF] to-[#00D2FF]",
    /** diamond */
    decor: (
      <svg viewBox="0 0 120 120" className="size-full" fill="currentColor" aria-hidden>
        <path d="M60 8 L112 60 L60 112 L8 60 Z" />
      </svg>
    ),
    decorPos: "absolute -right-6 top-8 size-28 rotate-12",
  },
  {
    icon: "bg-[#ECFEFF] text-[#0891B2]",
    shape: "text-[#CFFAFE]",
    stat: "from-[#0891B2] to-[#00D2FF]",
    /** hexagon */
    decor: (
      <svg viewBox="0 0 120 120" className="size-full" fill="currentColor" aria-hidden>
        <path d="M60 10 L102 34 L102 86 L60 110 L18 86 L18 34 Z" />
      </svg>
    ),
    decorPos: "absolute -left-8 bottom-10 size-32 -rotate-6",
  },
  {
    icon: "bg-[#EEF2FF] text-[#4F46E5]",
    shape: "text-[#E0E7FF]",
    stat: "from-[#4F46E5] to-[#1E60FF]",
    /** soft triangle */
    decor: (
      <svg viewBox="0 0 120 120" className="size-full" fill="currentColor" aria-hidden>
        <path d="M60 14 C66 14 72 17 75 23 L108 88 C111 94 109 102 103 106 C100 108 96 109 92 109 L28 109 C22 109 16 105 14 99 C12 93 14 86 18 82 L51 23 C54 17 57 14 60 14 Z" />
      </svg>
    ),
    decorPos: "absolute -right-4 -bottom-4 size-36 rotate-[18deg]",
  },
] as const;

export function Platform() {
  const pillars = home.platform.tabs;

  return (
    <section className="relative z-[1] overflow-visible bg-white section-pad">
      <SectionEdge fill="#ffffff" variant="valley" position="top" />

      {/* Soft pebble region */}
      <ScrollShape
        className="-right-16 bottom-[20%] h-56 w-48 text-[#00B4FF] md:h-72 md:w-60"
        reverse
      >
        <SoftRegion variant="amoeba" />
      </ScrollShape>

      <Container className="relative z-10">
        <RevealOnScroll>
          <div className="mx-auto max-w-2xl text-center">
            <p className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.18em] text-[#1E60FF] uppercase">
              <span className="inline-block h-px w-5 bg-[#1E60FF]" aria-hidden />
              {home.platform.eyebrow}
              <span className="inline-block h-px w-5 bg-[#1E60FF]" aria-hidden />
            </p>
            <h2 className="section-title mt-4">
              {home.platform.headline}{" "}
              <span className="hero-gradient-text">
                {home.platform.headlineAccent}
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#64748B] md:text-lg">
              {home.platform.support}
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
            {pillars.map((pillar, i) => {
              const Icon = pillarIcons[i % pillarIcons.length];
              const accent = pillarAccents[i % pillarAccents.length];
              return (
                <article
                  key={pillar.id}
                  className="group relative overflow-hidden rounded-3xl bg-white p-7 shadow-[0_16px_48px_rgba(5,25,55,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(5,25,55,0.12)]"
                >
                  <div
                    className={cn(
                      "pointer-events-none opacity-90 transition-transform duration-500 group-hover:scale-105",
                      accent.shape,
                      accent.decorPos,
                    )}
                  >
                    {accent.decor}
                  </div>

                  <div className="relative">
                    <span
                      className={cn(
                        "grid size-12 place-items-center rounded-2xl",
                        accent.icon,
                      )}
                    >
                      <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                    </span>

                    <p className="mt-5 text-[0.7rem] font-semibold tracking-[0.14em] text-[#94A3B8] uppercase">
                      {pillar.label}
                    </p>
                    <h3 className="card-title mt-2">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#64748B]">
                      {pillar.description}
                    </p>

                    <dl className="mt-8 grid grid-cols-3 gap-3 border-t border-[#051937]/06 pt-6">
                      {pillar.stats.map((stat) => (
                        <div key={stat.label}>
                          <dt className="text-[0.65rem] tracking-wide text-[#94A3B8] uppercase">
                            {stat.label}
                          </dt>
                          <dd
                            className={cn(
                              "font-display mt-1 bg-gradient-to-r bg-clip-text text-xl font-bold text-transparent",
                              accent.stat,
                            )}
                          >
                            {stat.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </article>
              );
            })}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
