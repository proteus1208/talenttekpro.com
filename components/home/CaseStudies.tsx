import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { home } from "@/content/home";
import { SectionEdge } from "@/components/ui/SectionShell";

export function CaseStudies() {
  const [featured, ...rest] = home.cases.items;
  const secondary = rest.slice(0, 4);

  return (
    <section className="relative z-[1] overflow-visible bg-white section-pad">
      <SectionEdge fill="#ffffff" variant="soft" position="top" />
      <Container>
        <RevealOnScroll>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-text md:text-4xl">
                {home.cases.headline}
              </h2>
            </div>
            <LinkArrow href="/projects">View all projects</LinkArrow>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <Link
              href={featured.href}
              className="group block rounded-sm border border-transparent p-1 transition-colors hover:border-border-strong"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
                <Image
                  src={featured.media.src}
                  alt={featured.media.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <p className="mt-4 font-mono text-[0.7rem] tracking-wide text-faint uppercase">
                Featured · {featured.type} · {featured.year}
              </p>
              <h3 className="font-display mt-1 text-2xl font-semibold text-text transition-colors group-hover:text-teal">
                {featured.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {featured.summary}
              </p>
            </Link>

            <div className="grid gap-8 sm:grid-cols-2">
              {secondary.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group block border-t border-border pt-4 transition-colors hover:border-teal"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
                    <Image
                      src={item.media.src}
                      alt={item.media.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, 25vw"
                    />
                  </div>
                  <p className="mt-3 font-mono text-[0.65rem] tracking-wide text-faint uppercase">
                    {item.year}
                  </p>
                  <h3 className="font-display mt-1 text-lg font-semibold text-text transition-colors group-hover:text-teal">
                    {item.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
