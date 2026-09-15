import type { Metadata } from "next";
import { PageHero } from "@/components/page/PageHero";
import { PageCta } from "@/components/page/PageCta";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { careersPage } from "@/content/careers";
import { media } from "@/content/media";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: careersPage.metaTitle,
  description: careersPage.metaDescription,
};

export default function CareersPage() {
  return (
    <main className="flex-1">
      <PageHero
        crumbs={[{ label: "Careers" }]}
        eyebrow={careersPage.hero.eyebrow}
        title={careersPage.hero.title}
        support={careersPage.hero.support}
        image={{ src: media.careersHero.src, alt: media.careersHero.alt }}
      />

      <section className="section-elevated border-t border-border section-pad">
        <Container>
          <RevealOnScroll>
            <h2 className="font-display text-2xl font-semibold text-text">Benefits</h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {careersPage.benefits.map((b) => (
                <li
                  key={b}
                  className="rounded-sm border border-border bg-surface px-4 py-3 text-sm text-muted"
                >
                  <span className="text-teal">→</span> {b}
                </li>
              ))}
            </ul>
            <h2 className="font-display mt-14 text-2xl font-semibold text-text">Culture</h2>
            <ul className="mt-6 space-y-2">
              {careersPage.culture.map((c) => (
                <li key={c} className="text-muted">
                  <span className="text-teal">→</span> {c}
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </Container>
      </section>

      <section id="open-roles" className="section-dark border-t border-border section-pad scroll-mt-28">
        <Container>
          <RevealOnScroll>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-text">
              Open roles
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-muted">{careersPage.applyNote}</p>
            <ul className="mt-10 divide-y divide-border border-y border-border">
              {careersPage.roles.map((role) => (
                <li
                  key={role.title}
                  className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-mono text-[0.65rem] tracking-wide text-faint uppercase">
                      {role.track}
                    </p>
                    <p className="mt-1 text-base font-medium text-text">{role.title}</p>
                    <p className="mt-1 text-sm text-muted">{role.location}</p>
                  </div>
                  <a
                    href={`mailto:${site.email}?subject=${encodeURIComponent(`Application: ${role.title}`)}&body=${encodeURIComponent("LinkedIn:\nRésumé attached or linked:\n")}`}
                    className="ttp-btn-secondary inline-flex items-center justify-center rounded-sm px-4 py-2 text-sm font-semibold"
                  >
                    Apply →
                  </a>
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </Container>
      </section>

      <PageCta
        headline={careersPage.cta.headline}
        primary={{ label: "View open roles →", href: "#open-roles" }}
        showEmail
      />
    </main>
  );
}
