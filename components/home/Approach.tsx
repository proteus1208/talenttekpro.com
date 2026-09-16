"use client";

import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
  Layers,
  Map,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  Users,
  UsersRound,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { ScrollShape } from "@/components/effects/ScrollShape";
import { SoftRegion } from "@/components/effects/SoftRegion";
import { SectionEdge } from "@/components/ui/SectionShell";
import { home } from "@/content/home";
import { media } from "@/content/media";
import { cn } from "@/lib/cn";

const bulletIcons = [Settings2, ShieldCheck, UsersRound, Globe2] as const;

const phaseStyles = [
  { icon: Map, tint: "bg-[#DBEAFE] text-[#1E60FF]" },
  { icon: Layers, tint: "bg-[#EDE9FE] text-[#7C3AED]" },
  { icon: Sparkles, tint: "bg-[#CCFBF1] text-[#0D9488]" },
  { icon: Search, tint: "bg-[#E0E7FF] text-[#4F46E5]" },
] as const;

export function Approach() {
  return (
    <section className="relative z-[1] overflow-visible bg-[#EAF3FB] section-pad">
      {/* Contrasts Industries white so the wave reads as a clear border */}
      <SectionEdge fill="#EAF3FB" variant="wave" position="top" />
      {/* Soft wave region */}
      <ScrollShape
        className="top-[55%] right-[2%] h-32 w-48 text-[#1E60FF] md:h-40 md:w-56"
      >
        <SoftRegion variant="wave" />
      </ScrollShape>

      <Container className="relative z-10">
        <RevealOnScroll>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <p className="inline-flex items-center gap-2 rounded-full bg-[#EFF6FF] px-3 py-1.5 text-xs font-semibold tracking-[0.14em] text-[#1E60FF] uppercase">
                <Users className="size-3.5" aria-hidden />
                {home.approach.badge}
              </p>

              <h2 className="section-title mt-5">
                {home.approach.headline}{" "}
                <span className="hero-gradient-text">
                  {home.approach.headlineAccent}
                </span>
              </h2>

              <p className="mt-5 max-w-md text-base leading-relaxed text-[#64748B]">
                {home.approach.body}
              </p>

              <ul className="mt-8 space-y-4">
                {home.approach.bullets.map((b, i) => {
                  const Icon = bulletIcons[i] ?? Settings2;
                  return (
                    <li key={b.title} className="flex items-start gap-3">
                      <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-[#EFF6FF] text-[#1E60FF]">
                        <Icon className="size-4" strokeWidth={2} aria-hidden />
                      </span>
                      <p className="pt-1.5 text-sm leading-snug md:text-[0.95rem]">
                        <span className="font-semibold text-[#1E60FF]">
                          {b.title}
                        </span>
                        <span className="text-[#94A3B8]">. {b.body}</span>
                      </p>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8">
                <LinkArrow href={home.approach.cta.href}>
                  {home.approach.cta.label}
                </LinkArrow>
              </div>
            </div>

            <div className="relative min-w-0 lg:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] shadow-[0_28px_64px_rgba(5,25,55,0.14)] md:rounded-[2rem]">
                <Image
                  src={media.approach.src}
                  alt={media.approach.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 640px"
                />
              </div>

              {/* Floating chip — shadow only, no border; bare arrow */}
              <div className="absolute bottom-0 left-[8%] z-[3] flex -translate-y-1/4 items-center gap-3 rounded-[1.25rem] bg-white px-4 py-3 shadow-[0_16px_40px_rgba(5,25,55,0.12)] sm:left-[12%] sm:px-5 sm:py-3.5 md:rounded-[1.5rem]">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#EFF6FF] text-[#1E60FF]">
                  <Users className="size-4" aria-hidden />
                </span>
                <span className="text-sm font-semibold leading-tight text-[#051937]">
                  Build better
                  <br />
                  together
                </span>
                <ArrowUpRight
                  className="size-4 shrink-0 text-[#1E60FF]"
                  strokeWidth={2}
                  aria-hidden
                />
              </div>
            </div>
          </div>

          {/* Process phases — equal-height floating cards */}
          <div className="mt-16 rounded-[1.75rem] bg-[#EAF3FB] p-5 md:mt-20 md:rounded-[2rem] md:p-8">
            <ol className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {home.approach.phases.map((phase, i) => {
                const style = phaseStyles[i] ?? phaseStyles[0];
                const Icon = style.icon;
                const isLast = i === home.approach.phases.length - 1;

                return (
                  <li
                    key={phase.num}
                    className="relative flex h-full items-stretch gap-3"
                  >
                    <article className="flex h-full min-w-0 flex-1 flex-col items-start gap-3.5 rounded-[1.35rem] bg-white p-5 shadow-[0_14px_36px_rgba(5,25,55,0.08)] md:gap-4 md:rounded-[1.5rem] md:p-6">
                      <div className="flex w-full items-start gap-3.5 md:gap-4">
                        <span
                          className={cn(
                            "mt-0.5 grid size-11 shrink-0 place-items-center rounded-full",
                            style.tint,
                          )}
                        >
                          <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-[0.65rem] font-semibold tracking-[0.14em] text-[#1E60FF] uppercase">
                            {phase.num} · {phase.label}
                          </p>
                          <h3 className="card-title mt-1.5">
                            {phase.title}
                          </h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-[#64748B]">
                            {phase.body}
                          </p>
                        </div>
                      </div>
                    </article>

                    {!isLast ? (
                      <ArrowRight
                        className="pointer-events-none absolute top-1/2 -right-3 z-10 hidden size-5 -translate-y-1/2 translate-x-1/2 text-[#1E60FF] lg:block"
                        strokeWidth={2}
                        aria-hidden
                      />
                    ) : null}
                  </li>
                );
              })}
            </ol>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
