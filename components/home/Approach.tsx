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

      <div
        className="pointer-events-none absolute inset-0 -z-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 0% 0%, rgba(30,96,255,0.07), transparent 55%), radial-gradient(ellipse 55% 45% at 100% 15%, rgba(0,210,255,0.06), transparent 50%)",
        }}
      />

      <Container className="relative z-10">
        <RevealOnScroll>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <p className="inline-flex items-center gap-2 rounded-full bg-[#EFF6FF] px-3 py-1.5 text-xs font-semibold tracking-[0.14em] text-[#1E60FF] uppercase">
                <Users className="size-3.5" aria-hidden />
                {home.approach.badge}
              </p>

              <h2 className="font-display mt-5 text-[clamp(1.85rem,3.2vw,2.75rem)] font-bold leading-[1.15] tracking-tight text-[#051937]">
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

            {/* Image + decorative shapes + floating chip */}
            <div className="relative min-w-0 overflow-hidden lg:col-span-7">
              {/* Soft blue angular planes */}
              <div
                className="pointer-events-none absolute -top-6 -right-4 h-40 w-48 bg-[#DBEAFE]/70 md:-right-8 md:h-52 md:w-64"
                style={{ clipPath: "polygon(18% 0%, 100% 12%, 100% 100%, 0% 88%)" }}
                aria-hidden
              />
              <div
                className="pointer-events-none absolute top-16 -right-2 h-28 w-36 bg-[#BFDBFE]/50 md:top-20 md:h-36 md:w-44"
                style={{ clipPath: "polygon(0% 20%, 100% 0%, 85% 100%, 10% 100%)" }}
                aria-hidden
              />

              {/* Tall blue rounded shape behind photo */}
              <div
                className="pointer-events-none absolute top-8 right-0 bottom-10 w-[42%] rounded-t-[999px] bg-[#1E60FF] md:top-6 md:right-2 md:bottom-14 md:w-[38%]"
                aria-hidden
              />

              {/* Dot grid */}
              <div
                className="pointer-events-none absolute right-2 bottom-2 z-[1] grid grid-cols-4 gap-2 md:right-6 md:bottom-4"
                aria-hidden
              >
                {Array.from({ length: 16 }).map((_, i) => (
                  <span
                    key={i}
                    className="size-1.5 rounded-full bg-[#94A3B8]/45"
                  />
                ))}
              </div>

              <div className="relative z-[2] mr-[8%] aspect-[4/3] overflow-hidden rounded-[1.75rem] shadow-[0_28px_64px_rgba(5,25,55,0.14)] md:mr-[12%] md:rounded-[2rem]">
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

          {/* Process phases — floating cards, bare arrows, no borders */}
          <div className="mt-16 rounded-[1.75rem] bg-[#EAF3FB] p-5 md:mt-20 md:rounded-[2rem] md:p-8">
            <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {home.approach.phases.map((phase, i) => {
                const style = phaseStyles[i] ?? phaseStyles[0];
                const Icon = style.icon;
                const isLast = i === home.approach.phases.length - 1;

                return (
                  <li
                    key={phase.num}
                    className="relative flex items-center gap-3"
                  >
                    <article className="flex min-w-0 flex-1 items-start gap-3.5 rounded-[1.35rem] bg-white p-5 shadow-[0_14px_36px_rgba(5,25,55,0.08)] md:gap-4 md:rounded-[1.5rem] md:p-6">
                      <span
                        className={cn(
                          "mt-0.5 grid size-11 shrink-0 place-items-center rounded-full",
                          style.tint,
                        )}
                      >
                        <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[0.65rem] font-semibold tracking-[0.14em] text-[#1E60FF] uppercase">
                          {phase.num} · {phase.label}
                        </p>
                        <h3 className="font-display mt-1.5 text-lg font-bold tracking-tight text-[#051937]">
                          {phase.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-[#64748B]">
                          {phase.body}
                        </p>
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
