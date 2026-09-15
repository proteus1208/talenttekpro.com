import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page/PageHero";
import { PageCta } from "@/components/page/PageCta";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { servicesPage } from "@/content/services";
import { media } from "@/content/media";
import { cta } from "@/content/site";

export const metadata: Metadata = {
  title: servicesPage.metaTitle,
  description: servicesPage.metaDescription,
};

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <PageHero
        crumbs={[{ label: "Services" }]}
        eyebrow={servicesPage.hero.eyebrow}
        title={servicesPage.hero.title}
        support={servicesPage.hero.support}
        image={{ src: media.servicesHero.src, alt: media.servicesHero.alt }}
      />

      <section className="section-elevated border-t border-border section-pad">
        <Container>
          <RevealOnScroll>
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <h2 className="font-display text-3xl font-semibold tracking-tight text-text md:text-4xl">
                  {servicesPage.integrated.headline}
                </h2>
                <p className="mt-4 max-w-xl text-muted">{servicesPage.integrated.body}</p>
              </div>
              <div className="relative aspect-[3/2] overflow-hidden rounded-sm border border-border lg:col-span-6">
                <Image
                  src={media.approach.src}
                  alt={media.approach.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="section-dark border-t border-border section-pad">
        <Container>
          <RevealOnScroll>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-text">
              Disciplines
            </h2>
            <div className="mt-12 grid gap-0 sm:grid-cols-2">
              {servicesPage.disciplines.map((d) => (
                <article
                  key={d.id}
                  id={d.id}
                  className="scroll-mt-28 border-t-2 border-teal/35 py-8 pr-6"
                >
                  <p className="font-mono text-xs text-teal">{d.num}</p>
                  <h3 className="font-display mt-2 text-xl font-semibold text-text">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{d.aim}</p>
                  <ul className="mt-4 space-y-1.5">
                    {d.bullets.map((b) => (
                      <li key={b} className="text-sm text-muted">
                        <span className="text-teal">→</span> {b}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="section-elevated border-t border-border section-pad">
        <Container>
          <RevealOnScroll>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-text">
              Engagement models
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {servicesPage.models.map((m) => (
                <div
                  key={m.id}
                  className="rounded-sm border border-border bg-surface p-5 border-t-2 border-t-teal/60"
                >
                  <h3 className="font-display text-lg font-semibold text-text">{m.name}</h3>
                  <p className="mt-2 text-sm text-muted">{m.aim}</p>
                  <p className="mt-4 font-mono text-sm text-teal">{m.price}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <PageCta
        headline={servicesPage.cta.headline}
        support={servicesPage.cta.support}
        primary={cta.proposal}
      />
    </main>
  );
}
