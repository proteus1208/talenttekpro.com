import type { Metadata } from "next";
import {
  Brain,
  Check,
  Cloud,
  Code2,
  Compass,
  FileSignature,
  HeartPulse,
  Users,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { PageCta } from "@/components/page/PageCta";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { ScrollShape } from "@/components/effects/ScrollShape";
import { SoftRegion } from "@/components/effects/SoftRegion";
import { SectionEdge } from "@/components/ui/SectionShell";
import { servicesPage } from "@/content/services";
import { media } from "@/content/media";
import { cta } from "@/content/site";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: servicesPage.metaTitle,
  description: servicesPage.metaDescription,
};

const tones = [
  {
    iconBg: "bg-[#1E60FF]",
    check: "text-[#1E60FF]",
    num: "text-blue-300",
    corner: "bg-[#DBEAFE]",
  },
  {
    iconBg: "bg-[#16A34A]",
    check: "text-[#16A34A]",
    num: "text-green-300",
    corner: "bg-[#DCFCE7]",
  },
  {
    iconBg: "bg-[#7C3AED]",
    check: "text-[#7C3AED]",
    num: "text-violet-300",
    corner: "bg-[#EDE9FE]",
  },
  {
    iconBg: "bg-[#0284C7]",
    check: "text-[#0284C7]",
    num: "text-sky-300",
    corner: "bg-[#E0F2FE]",
  },
  {
    iconBg: "bg-[#0D9488]",
    check: "text-[#0D9488]",
    num: "text-teal-300",
    corner: "bg-[#CCFBF1]",
  },
  {
    iconBg: "bg-[#6D28D9]",
    check: "text-[#6D28D9]",
    num: "text-purple-300",
    corner: "bg-[#EDE9FE]",
  },
  {
    iconBg: "bg-[#2563EB]",
    check: "text-[#2563EB]",
    num: "text-blue-300",
    corner: "bg-[#DBEAFE]",
  },
  {
    iconBg: "bg-[#059669]",
    check: "text-[#059669]",
    num: "text-emerald-300",
    corner: "bg-[#D1FAE5]",
  },
] as const;

const icons: LucideIcon[] = [
  Users,
  UsersRound,
  FileSignature,
  Brain,
  Code2,
  Cloud,
  Compass,
  HeartPulse,
];

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <PageHero
        crumbs={[{ label: "Services" }]}
        eyebrow={servicesPage.hero.eyebrow}
        title={servicesPage.hero.title}
        titleAccent={servicesPage.hero.titleAccent}
        support={servicesPage.hero.support}
        image={{ src: media.servicesHero.src, alt: media.servicesHero.alt }}
      />

      {/* Integrated intro */}
      <section className="relative z-[1] overflow-visible bg-white section-pad">
        <SectionEdge fill="#ffffff" variant="soft" position="top" />
        <ScrollShape
          className="top-20 -right-10 h-40 w-48 text-[#1E60FF] md:h-52 md:w-60"
          reverse
        >
          <SoftRegion variant="cloud" />
        </ScrollShape>

        <Container className="relative z-10">
          <RevealOnScroll>
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-6">
                <h2 className="section-title">
                  {servicesPage.integrated.headline}{" "}
                  <span className="hero-gradient-text">
                    {servicesPage.integrated.headlineAccent}
                  </span>
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-[#64748B]">
                  {servicesPage.integrated.body}
                </p>
              </div>
              <div className="relative aspect-[3/2] overflow-hidden rounded-[1.5rem] shadow-[0_24px_60px_rgba(5,25,55,0.12)] md:rounded-[1.75rem] lg:col-span-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={media.approach.src}
                  alt={media.approach.alt}
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                  suppressHydrationWarning
                />
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      {/* Disciplines */}
      <section className="relative z-[1] overflow-visible bg-[#F5F9FC] section-pad">
        <SectionEdge fill="#F5F9FC" variant="wave" position="top" />
        <ScrollShape
          className="top-[28%] -left-12 h-48 w-52 text-[#1E60FF] md:h-64 md:w-64"
        >
          <SoftRegion variant="pebble" />
        </ScrollShape>

        <Container className="relative z-10">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <h2 className="section-title">
                {servicesPage.disciplines.headline}{" "}
                <span className="hero-gradient-text">
                  {servicesPage.disciplines.headlineAccent}
                </span>
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#64748B]">
                {servicesPage.disciplines.support}
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {servicesPage.disciplines.items.map((d, i) => {
                const tone = tones[i % tones.length];
                const Icon = icons[i % icons.length];
                return (
                  <article
                    key={d.id}
                    id={d.id}
                    className="group relative flex min-h-[280px] scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-black/[0.04] bg-white p-6 shadow-[0_12px_40px_rgba(5,25,55,0.06)]"
                  >
                    <div className="relative z-10 flex items-center gap-3">
                      <span
                        className={cn(
                          "grid size-11 shrink-0 place-items-center rounded-2xl text-white shadow-sm",
                          tone.iconBg,
                        )}
                      >
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <span
                        className={cn(
                          "font-display text-2xl font-semibold tracking-tight",
                          tone.num,
                        )}
                      >
                        {d.num}
                      </span>
                    </div>

                    <h3 className="card-title relative z-10 mt-5">{d.title}</h3>
                    <p className="relative z-10 mt-2 text-sm text-[#94A3B8]">
                      {d.aim}
                    </p>

                    <ul className="relative z-10 mt-4 flex-1 space-y-2.5">
                      {d.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-sm leading-snug text-[#64748B]"
                        >
                          <Check
                            className={cn("mt-0.5 size-4 shrink-0", tone.check)}
                            strokeWidth={2.5}
                            aria-hidden
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div
                      className={cn(
                        "pointer-events-none absolute right-0 bottom-0 size-[5.5rem] rounded-tl-full",
                        tone.corner,
                      )}
                      aria-hidden
                    />
                  </article>
                );
              })}
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      {/* Engagement models */}
      <section className="relative z-[1] overflow-visible bg-white section-pad">
        <SectionEdge fill="#ffffff" variant="bump" position="top" />
        <ScrollShape
          className="bottom-12 -right-6 h-36 w-44 text-[#00B4FF] md:h-48 md:w-56"
          reverse
        >
          <SoftRegion variant="bean" />
        </ScrollShape>

        <Container className="relative z-10">
          <RevealOnScroll>
            <h2 className="section-title">
              {servicesPage.models.headline}{" "}
              <span className="hero-gradient-text">
                {servicesPage.models.headlineAccent}
              </span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#64748B]">
              {servicesPage.models.support}
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {servicesPage.models.items.map((m) => (
                <div
                  key={m.id}
                  className="rounded-[1.35rem] border-t-2 border-[#1E60FF]/35 bg-[#F5F9FC] p-6 shadow-[0_8px_28px_rgba(5,25,55,0.04)]"
                >
                  <h3 className="card-title">{m.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                    {m.aim}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-[#1E60FF]">
                    {m.price}
                  </p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <PageCta
        headline={servicesPage.cta.headline}
        headlineAccent={servicesPage.cta.headlineAccent}
        support={servicesPage.cta.support}
        primary={cta.proposal}
      />
    </main>
  );
}
