import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { home } from "@/content/home";
import { cta, site } from "@/content/site";

export function GetStarted() {
  return (
    <section className="relative isolate overflow-hidden border-t border-border section-pad">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/imgs/Landing.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/70" />
      </div>
      <Container>
        <RevealOnScroll>
          <h2 className="font-display max-w-2xl text-3xl font-semibold tracking-tight text-text md:text-4xl">
            {home.getStarted.headline}
          </h2>
          <p className="mt-4 max-w-xl text-muted">{home.getStarted.support}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={cta.primary.href} className="rounded-full">
              {cta.primary.label}
            </Button>
            <a
              href={`mailto:${site.email}`}
              className="text-sm font-medium text-[#1E60FF] hover:underline"
            >
              {site.email}
            </a>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
