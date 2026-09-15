import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { home } from "@/content/home";
import { media } from "@/content/media";
import { SectionEdge } from "@/components/ui/SectionShell";

export function Approach() {
  return (
    <section className="relative z-[1] overflow-visible bg-[#EAF3FB] section-pad">
      <SectionEdge fill="#EAF3FB" variant="wave" position="top" />
      <Container>
        <RevealOnScroll>
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-text md:text-4xl">
                {home.approach.headline}
              </h2>
              <ul className="mt-6 space-y-2">
                {home.approach.bullets.map((b) => (
                  <li key={b} className="text-muted">
                    <span className="text-teal">→</span> {b}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <LinkArrow href={home.approach.cta.href}>
                  {home.approach.cta.label}
                </LinkArrow>
              </div>
            </div>

            <div className="relative aspect-[3/2] overflow-hidden rounded-sm border border-border-strong/40 lg:col-span-7">
              <Image
                src={media.approach.src}
                alt={media.approach.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 640px"
              />
            </div>
          </div>

          <ol className="mt-16 grid gap-0 border-t-2 border-teal/30 sm:grid-cols-2 lg:grid-cols-4">
            {home.approach.phases.map((phase, i) => (
              <li
                key={phase.num}
                className="border-border py-6 pr-6 sm:border-r lg:[&:nth-child(4)]:border-r-0"
              >
                <p className="font-mono text-xs text-teal">
                  {phase.num}
                  {i < home.approach.phases.length - 1 ? " →" : ""}
                </p>
                <p className="mt-2 font-mono text-[0.65rem] tracking-wide text-faint uppercase">
                  phase // {phase.label}
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
