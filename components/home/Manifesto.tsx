"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { ScrollShape } from "@/components/effects/ScrollShape";
import { SoftRegion } from "@/components/effects/SoftRegion";
import { SectionEdge } from "@/components/ui/SectionShell";
import { home } from "@/content/home";
import { media } from "@/content/media";

export function Manifesto() {
  return (
    <section className="relative z-[1] overflow-visible bg-white pt-20 pb-24 md:pt-24 md:pb-28">
      <SectionEdge fill="#ffffff" variant="wave" position="top" />

      <ScrollShape
        className="top-[36%] -left-16 h-56 w-56 text-[#1E60FF] md:h-72 md:w-72"
      >
        <SoftRegion variant="pebble" />
      </ScrollShape>

      <Container className="relative z-10">
        <RevealOnScroll>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <div className="max-w-xl">
              <h2 className="section-title">
                {home.manifesto.headline}{" "}
                <span className="hero-gradient-text">
                  {home.manifesto.headlineAccent}
                </span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#64748B] md:text-lg">
                {home.manifesto.body}
              </p>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl md:rounded-3xl">
              <Image
                src={media.manifesto.src}
                alt={media.manifesto.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
