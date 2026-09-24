import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { ScrollShape } from "@/components/effects/ScrollShape";
import { SoftRegion } from "@/components/effects/SoftRegion";
import { SafeImage } from "@/components/ui/SafeImage";
import { PromptMedia } from "@/components/ui/PromptMedia";
import { home } from "@/content/home";
import { media } from "@/content/media";
import { cta, site } from "@/content/site";

export function GetStarted() {
  return (
    <section className="relative z-[1] overflow-visible bg-[#F8FBFE]">
      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          <clipPath id="cta-left-curve" clipPathUnits="objectBoundingBox">
            {/*
              One elliptical arc, same x at top & bottom → clean break with
              section borders, no corner kink in the middle of the edge.
            */}
            <path d="M0,0 H0.93 A0.30,0.50 0 0 0 0.93,1 H0 Z" />
          </clipPath>
        </defs>
      </svg>

      <ScrollShape
        className="top-[18%] left-[42%] hidden h-28 w-40 text-[#1E60FF] lg:block"
      >
        <SoftRegion variant="softSquare" />
      </ScrollShape>

      {/* Right photo plane — same vertical seal as the wash so borders stay flush */}
      <div className="absolute -top-px -bottom-px right-0 z-0 hidden w-[48%] lg:block xl:w-[46%]">
        <PromptMedia
          asset={media.getStarted}
          className="absolute inset-0 h-full w-full"
          imageClassName="object-[center_30%]"
        />
      </div>

      {/*
        Full-height wash; -top/-bottom seals hairlines so the arc meets the
        section borders cleanly (no floating gap, no extra seal shape).
      */}
      <div
        className="pointer-events-none absolute -top-px -bottom-px left-0 z-[1] hidden w-[68%] lg:block xl:w-[70%]"
        style={{
          filter: "drop-shadow(36px 0 48px rgba(5,25,55,0.1))",
        }}
        aria-hidden
      >
        <div
          className="h-full w-full bg-[#F8FBFE]"
          style={{ clipPath: "url(#cta-left-curve)" }}
        />
      </div>

      {/* Mobile / tablet photo underlay (atmosphere only; generate from desktop tile) */}
      <div className="absolute inset-0 z-0 lg:hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={media.getStarted.src}
          alt=""
          aria-hidden
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-30"
          suppressHydrationWarning
        />
        <div className="absolute inset-0 bg-[#F8FBFE]/88" aria-hidden />
      </div>

      {/* Watermark mark */}
      <div
        className="pointer-events-none absolute -top-8 -left-6 z-[1] opacity-[0.07] md:top-0 md:left-4"
        aria-hidden
      >
        <SafeImage
          src="/logo/logo-no-text-512.png"
          alt=""
          width={420}
          height={420}
          className="h-56 w-56 md:h-72 md:w-72 lg:h-80 lg:w-80"
        />
      </div>

      <Container className="relative z-10 py-20 md:py-24 lg:py-28">
        <RevealOnScroll>
          <div className="max-w-xl lg:max-w-[28rem] xl:max-w-[32rem]">
            <p className="inline-flex items-center rounded-full bg-[#E8F0FF] px-3.5 py-1.5 text-[0.7rem] font-semibold tracking-[0.14em] text-[#1E60FF] uppercase">
              {home.getStarted.eyebrow}
            </p>

            <h2 className="section-title mt-6">
              {home.getStarted.headline}{" "}
              <span className="hero-gradient-text">
                {home.getStarted.headlineAccent}
              </span>
            </h2>

            <p className="mt-4 text-base leading-relaxed text-[#64748B] md:text-lg">
              {home.getStarted.support}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href={cta.primary.href} className="rounded-full px-6 py-3">
                {cta.primary.label}
              </Button>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-[#1E60FF]/25 bg-white/80 px-5 py-3 text-sm font-medium text-[#051937] backdrop-blur-sm transition-colors hover:border-[#1E60FF]/45 hover:bg-white"
              >
                <Mail className="size-4 text-[#1E60FF]" aria-hidden />
                {site.email}
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
