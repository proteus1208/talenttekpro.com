import type { Metadata } from "next";
import { PageHero } from "@/components/page/PageHero";
import { PageCta } from "@/components/page/PageCta";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { ProjectsFilter } from "@/components/projects/ProjectsFilter";
import { projectsPage } from "@/content/projects";
import { cta } from "@/content/site";

export const metadata: Metadata = {
  title: projectsPage.metaTitle,
  description: projectsPage.metaDescription,
};

export default function ProjectsPage() {
  return (
    <main className="flex-1">
      <PageHero
        crumbs={[{ label: "Projects" }]}
        eyebrow={projectsPage.hero.eyebrow}
        title={projectsPage.hero.title}
        support={projectsPage.hero.support}
      />

      <section className="section-elevated border-t border-border py-10">
        <Container>
          <dl className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {projectsPage.stats.map((s) => (
              <div key={s.label} className="border-t border-border pt-4">
                <dt className="text-xs tracking-wide text-faint uppercase">{s.label}</dt>
                <dd className="font-display mt-2 text-3xl font-semibold text-teal">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="section-dark border-t border-border section-pad">
        <Container>
          <RevealOnScroll>
            <ProjectsFilter />
          </RevealOnScroll>
        </Container>
      </section>

      <PageCta
        headline={projectsPage.cta.headline}
        primary={cta.primary}
        secondary={cta.quote}
      />
    </main>
  );
}
