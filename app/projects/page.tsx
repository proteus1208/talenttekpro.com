import type { Metadata } from "next";
import { PageHero } from "@/components/page/PageHero";
import { PageCta } from "@/components/page/PageCta";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { ScrollShape } from "@/components/effects/ScrollShape";
import { SoftRegion } from "@/components/effects/SoftRegion";
import { SectionEdge } from "@/components/ui/SectionShell";
import { ProjectsFilter } from "@/components/projects/ProjectsFilter";
import { projectsPage } from "@/content/projects";
import { media } from "@/content/media";
import { cta } from "@/content/site";

export const metadata: Metadata = {
  title: projectsPage.metaTitle,
  description: projectsPage.metaDescription,
};

export default function ProjectsPage() {
  return (
    <main className="flex-1">
      <PageHero
        crumbs={[{ label: "Case Studies" }]}
        eyebrow={projectsPage.hero.eyebrow}
        title={projectsPage.hero.title}
        titleAccent={projectsPage.hero.titleAccent}
        support={projectsPage.hero.support}
        image={{ src: media.projectsHero.src, alt: media.projectsHero.alt }}
      />

      {/* Stats */}
      <section className="relative z-[1] overflow-visible bg-white section-pad !py-14 md:!py-16">
        <SectionEdge fill="#ffffff" variant="soft" position="top" />
        <Container className="relative z-10">
          <RevealOnScroll>
            <dl className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-6">
              {projectsPage.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-[1.35rem] bg-[#F5F9FC] px-5 py-6 md:px-6"
                >
                  <dt className="text-[0.7rem] font-semibold tracking-[0.14em] text-[#94A3B8] uppercase">
                    {s.label}
                  </dt>
                  <dd className="font-display mt-2 text-3xl font-bold tracking-tight text-[#1E60FF] md:text-4xl">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </RevealOnScroll>
        </Container>
      </section>

      {/* Grid */}
      <section className="relative z-[1] overflow-visible bg-[#F0F7FC] section-pad">
        <SectionEdge fill="#F0F7FC" variant="wave" position="top" />
        <ScrollShape
          className="top-16 -right-8 h-40 w-48 text-[#1E60FF] md:h-52 md:w-60"
          reverse
        >
          <SoftRegion variant="ribbon" />
        </ScrollShape>

        <Container className="relative z-10">
          <RevealOnScroll>
            <h2 className="section-title">
              {projectsPage.list.headline}{" "}
              <span className="hero-gradient-text">
                {projectsPage.list.headlineAccent}
              </span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#64748B]">
              {projectsPage.list.support}
            </p>
            <div className="mt-10">
              <ProjectsFilter />
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <PageCta
        headline={projectsPage.cta.headline}
        headlineAccent={projectsPage.cta.headlineAccent}
        support={projectsPage.cta.support}
        primary={cta.primary}
        secondary={cta.quote}
      />
    </main>
  );
}
