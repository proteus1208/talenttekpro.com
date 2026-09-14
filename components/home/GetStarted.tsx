import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { home } from "@/content/home";
import { media } from "@/content/media";
import { cta, site } from "@/content/site";

export function GetStarted() {
  return (
    <section className="relative isolate overflow-hidden border-t border-border py-24 md:py-32">
      <div className="absolute inset-0 -z-10">
        <Image
          src={media.getStarted.src}
          alt={media.getStarted.alt}
          fill
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/70" />
      </div>
      <Container>
        <RevealOnScroll>
          <SectionIndex label={home.getStarted.index} />
          <h2 className="font-display mt-6 max-w-2xl text-3xl font-semibold tracking-tight text-text md:text-4xl">
            {home.getStarted.headline}
          </h2>
          <p className="mt-4 max-w-xl text-muted">{home.getStarted.support}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={cta.primary.href}>{cta.primary.label}</Button>
            <a
              href={`mailto:${site.email}`}
              className="text-sm text-teal hover:underline"
            >
              {site.email}
            </a>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
