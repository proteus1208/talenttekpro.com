"use client";

import {
  ArrowRight,
  Globe2,
  Layers,
  Map,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { ScrollShape } from "@/components/effects/ScrollShape";
import { SoftRegion } from "@/components/effects/SoftRegion";
import { SectionEdge } from "@/components/ui/SectionShell";
import { PromptMedia } from "@/components/ui/PromptMedia";
import { home } from "@/content/home";
import { media } from "@/content/media";
import { cn } from "@/lib/cn";

const principleIcons = [Settings2, ShieldCheck, Sparkles, Globe2] as const;

const phaseStyles = [
  { icon: Map, tint: "bg-[#DBEAFE] text-[#1E60FF]" },
  { icon: Layers, tint: "bg-[#EDE9FE] text-[#7C3AED]" },
  { icon: Sparkles, tint: "bg-[#CCFBF1] text-[#0D9488]" },
  { icon: Search, tint: "bg-[#E0E7FF] text-[#4F46E5]" },
] as const;

export function Approach() {
  return (
    <>
      <section
        id="approach"
        className="relative z-[1] scroll-mt-28 overflow-visible bg-white section-pad"
      >
        <SectionEdge fill="#ffffff" variant="soft" position="top" />
        <ScrollShape
          className="top-16 -right-8 h-40 w-48 text-[#1E60FF] md:h-52 md:w-60"
          reverse
        >
          <SoftRegion variant="wave" />
        </ScrollShape>

        <Container className="relative z-10">
          <RevealOnScroll>
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-6">
                <p className="text-[0.8125rem] font-medium tracking-[0.16em] text-[#475569] uppercase md:text-sm">
                  {home.approach.eyebrow}
                </p>
                <span className="mt-3 block h-px w-10 bg-[#1E60FF]" aria-hidden />
                <h2 className="section-title mt-5">
                  {home.approach.headline}{" "}
                  <span className="hero-gradient-text">
                    {home.approach.headlineAccent}
                  </span>
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-[#64748B]">
                  {home.approach.body}
                </p>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] shadow-[0_24px_60px_rgba(5,25,55,0.12)] md:rounded-[1.75rem] lg:col-span-6">
                <PromptMedia
                  asset={media.processHero}
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>

            <div className="mt-16 border-t border-[#051937]/08 pt-14 md:mt-20 md:pt-16">
              <h3 className="section-title">
                {home.approach.principles.headline}{" "}
                <span className="hero-gradient-text">
                  {home.approach.principles.headlineAccent}
                </span>
              </h3>
              <ul className="mt-10 grid gap-6 sm:grid-cols-2">
                {home.approach.principles.items.map((item, i) => {
                  const Icon = principleIcons[i] ?? Settings2;
                  return (
                    <li
                      key={item.title}
                      className="flex items-start gap-4 rounded-2xl border border-[#051937]/06 bg-[#F8FAFC] p-5 md:p-6"
                    >
                      <span className="mt-0.5 grid size-11 shrink-0 place-items-center rounded-2xl bg-[#EFF6FF] text-[#1E60FF]">
                        <Icon className="size-5" strokeWidth={2} aria-hidden />
                      </span>
                      <div>
                        <h4 className="card-title">{item.title}</h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-[#64748B]">
                          {item.body}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="relative z-[1] overflow-visible bg-[#EAF3FB] section-pad">
        <SectionEdge fill="#EAF3FB" variant="wave" position="top" />
        <ScrollShape
          className="bottom-12 -left-6 h-36 w-44 text-[#1E60FF] md:h-48 md:w-56"
        >
          <SoftRegion variant="pebble" />
        </ScrollShape>

        <Container className="relative z-10">
          <RevealOnScroll>
            <div className="max-w-2xl">
              <h2 className="section-title">
                {home.approach.phases.headline}{" "}
                <span className="hero-gradient-text">
                  {home.approach.phases.headlineAccent}
                </span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#64748B]">
                {home.approach.phases.support}
              </p>
            </div>

            <ol className="mt-12 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {home.approach.phases.items.map((phase, i) => {
                const style = phaseStyles[i] ?? phaseStyles[0];
                const Icon = style.icon;
                const isLast = i === home.approach.phases.items.length - 1;

                return (
                  <li
                    key={phase.num}
                    className="relative flex h-full items-stretch gap-3"
                  >
                    <article className="flex h-full min-w-0 flex-1 flex-col rounded-[1.35rem] bg-white p-5 shadow-[0_14px_36px_rgba(5,25,55,0.08)] md:rounded-[1.5rem] md:p-6">
                      <div className="flex w-full items-start gap-3.5 md:gap-4">
                        <span
                          className={cn(
                            "mt-0.5 grid size-11 shrink-0 place-items-center rounded-full",
                            style.tint,
                          )}
                        >
                          <Icon
                            className="size-5"
                            strokeWidth={1.75}
                            aria-hidden
                          />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-[0.65rem] font-semibold tracking-[0.14em] text-[#1E60FF] uppercase">
                            {phase.num} · {phase.label}
                          </p>
                          <h3 className="card-title mt-1.5">{phase.title}</h3>
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

            <div className="mt-10">
              <LinkArrow href={home.approach.cta.href}>
                {home.approach.cta.label}
              </LinkArrow>
            </div>
          </RevealOnScroll>
        </Container>
      </section>
    </>
  );
}
