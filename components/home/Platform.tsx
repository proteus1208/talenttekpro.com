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
    stat: "from-[#1E60FF] to-[#00D2FF]",
  },
  {
    icon: "bg-[#ECFEFF] text-[#0891B2]",
    stat: "from-[#0891B2] to-[#00D2FF]",
  },
  {
    icon: "bg-[#EEF2FF] text-[#4F46E5]",
    stat: "from-[#4F46E5] to-[#1E60FF]",
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
                  className="group rounded-3xl border border-[#E2E8F0] bg-white p-7 shadow-[0_16px_48px_rgba(5,25,55,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#CBD5E1] hover:shadow-[0_24px_56px_rgba(5,25,55,0.1)]"
                >
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
                  <h3 className="card-title mt-2">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#64748B]">
                    {pillar.description}
                  </p>

                  <dl className="mt-8 grid grid-cols-3 gap-3 border-t border-[#E2E8F0] pt-6">
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
                </article>
              );
            })}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
