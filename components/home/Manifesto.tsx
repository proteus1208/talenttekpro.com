import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { ParallaxLayer } from "@/components/effects/ParallaxLayer";
import { home } from "@/content/home";
import { media } from "@/content/media";

export function Manifesto() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <Container>
        <RevealOnScroll>
          <SectionIndex label={home.manifesto.index} />
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-text md:text-4xl">
                {home.manifesto.headline}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                {home.manifesto.body}
              </p>
            </div>
            <ParallaxLayer speed={0.06}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
                <Image
                  src={media.manifesto.src}
                  alt={media.manifesto.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
            </ParallaxLayer>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
