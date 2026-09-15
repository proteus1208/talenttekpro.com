import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page/PageHero";
import { PageCta } from "@/components/page/PageCta";
import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/effects/CountUp";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { aboutPage } from "@/content/about";
import { media } from "@/content/media";
import { cta } from "@/content/site";

export const metadata: Metadata = {
  title: aboutPage.metaTitle,
  description: aboutPage.metaDescription,
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <PageHero
        crumbs={[{ label: "About" }]}
        eyebrow={aboutPage.hero.eyebrow}
        title={aboutPage.hero.title}
        support={aboutPage.hero.support}
        image={{ src: media.aboutHero.src, alt: media.aboutHero.alt }}
      />

      <section className="section-elevated border-t border-border section-pad">
        <Container>
          <RevealOnScroll>
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <h2 className="font-display text-3xl font-semibold tracking-tight text-text">
                  {aboutPage.who.headline}
                </h2>
                <p className="mt-4 text-muted">{aboutPage.who.body}</p>
              </div>
              <div className="relative aspect-[3/2] overflow-hidden rounded-sm border border-border lg:col-span-6">
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

      <section className="section-dark border-t border-border section-pad">
        <Container>
          <RevealOnScroll>
            <dl className="grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
              {aboutPage.metrics.map((m) => (
                <div
                  key={m.label}
                  className="border-t border-border py-7 pr-6 sm:border-r lg:[&:nth-child(3n)]:border-r-0"
                >
                  <dt className="text-sm text-faint">{m.label}</dt>
                  <dd className="font-display mt-3 text-4xl font-semibold text-teal">
                    <CountUp value={m.value} suffix={m.suffix} />
                  </dd>
                </div>
              ))}
            </dl>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="section-elevated border-t border-border section-pad">
        <Container>
          <RevealOnScroll>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-text">
              Six rules we don’t break
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {aboutPage.principles.map((p) => (
                <article key={p.num} className="border-t-2 border-teal/40 pt-4">
                  <p className="font-mono text-xs text-teal">{p.num}</p>
                  <h3 className="font-display mt-2 text-lg font-semibold text-text">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{p.body}</p>
                </article>
              ))}
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="section-dark border-t border-border section-pad">
        <Container>
          <RevealOnScroll>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-text">
              Timeline
            </h2>
            <ol className="mt-10 space-y-6 border-l border-border-strong pl-6">
              {aboutPage.timeline.map((t) => (
                <li key={t.year}>
                  <p className="font-mono text-xs text-teal">{t.year}</p>
                  <p className="mt-1 text-muted">{t.event}</p>
                </li>
              ))}
            </ol>
          </RevealOnScroll>
        </Container>
      </section>

      <PageCta
        headline={aboutPage.cta.headline}
        support={aboutPage.cta.support}
        primary={cta.primary}
        secondary={cta.secondary}
      />
    </main>
  );
}
