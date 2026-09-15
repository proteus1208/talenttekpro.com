import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { ParallaxLayer } from "@/components/effects/ParallaxLayer";
import { home } from "@/content/home";
import { media } from "@/content/media";

export function Manifesto() {
  return (
    <section className="section-dark section-pad border-t border-border">
      <Container>
        <RevealOnScroll>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-tight text-text md:text-[2.75rem]">
                {home.manifesto.headline}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                {home.manifesto.body}
              </p>
            </div>
            <ParallaxLayer
              speed={0.28}
              scale={1.12}
              className="rounded-sm lg:col-span-6"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-border">
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
