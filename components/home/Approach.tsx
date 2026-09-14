import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { ParallaxLayer } from "@/components/effects/ParallaxLayer";
import { home } from "@/content/home";
import { media } from "@/content/media";

export function Approach() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <Container>
        <RevealOnScroll>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionIndex label={home.approach.index} />
              <h2 className="font-display mt-6 text-3xl font-semibold tracking-tight text-text md:text-4xl">
                {home.approach.headline}
              </h2>
              <ul className="mt-6 space-y-2">
                {home.approach.bullets.map((b) => (
                  <li key={b} className="text-muted">
                    → {b}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <LinkArrow href={home.approach.cta.href}>
                  {home.approach.cta.label}
                </LinkArrow>
              </div>
            </div>

            <ParallaxLayer speed={0.05}>
              <div className="relative aspect-[3/2] overflow-hidden rounded-sm">
                <Image
                  src={media.approach.src}
                  alt={media.approach.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
            </ParallaxLayer>
          </div>

          <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {home.approach.phases.map((phase) => (
              <li key={phase.num} className="border-t border-border pt-5">
                <p className="font-mono text-xs text-faint">
                  {phase.num} · phase // {phase.label}
                </p>
                <h3 className="font-display mt-2 text-xl font-semibold text-text">
                  {phase.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{phase.body}</p>
              </li>
            ))}
          </ol>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
