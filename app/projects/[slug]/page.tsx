import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page/PageHero";
import { PageCta } from "@/components/page/PageCta";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { getProject, projectCases, projectMedia } from "@/content/projects";
import { cta } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projectCases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: `${project.title} | Projects | TalentTekPro`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const media = projectMedia(project);

  return (
    <main className="flex-1">
      <PageHero
        crumbs={[
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
        eyebrow={`${project.type} · ${project.year}`}
        title={project.title}
        support={project.summary}
      />

      <section className="section-elevated border-t border-border section-pad">
        <Container>
          <RevealOnScroll>
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-border lg:col-span-7">
                <Image
                  src={media.src}
                  alt={media.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 640px"
                  priority
                />
              </div>
              <div className="lg:col-span-5">
                <h2 className="font-display text-2xl font-semibold text-text">Outcomes</h2>
                <ul className="mt-4 space-y-2">
                  {project.outcome.map((o) => (
                    <li key={o} className="text-muted">
                      <span className="text-teal">→</span> {o}
                    </li>
                  ))}
                </ul>
                <h3 className="font-display mt-8 text-lg font-semibold text-text">Stack</h3>
                <p className="mt-2 font-mono text-sm text-teal">
                  {project.stack.join(" · ")}
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <PageCta
        headline="Have a similar challenge?"
        support="We’ll match the team and the delivery model to your metrics."
        primary={cta.primary}
        secondary={{ label: "All projects", href: "/projects" }}
      />
    </main>
  );
}
