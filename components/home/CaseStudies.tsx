import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { home } from "@/content/home";

export function CaseStudies() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <Container>
        <RevealOnScroll>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionIndex label={home.cases.index} />
              <h2 className="font-display mt-6 text-3xl font-semibold tracking-tight text-text md:text-4xl">
                {home.cases.headline}
              </h2>
            </div>
            <LinkArrow href="/projects">View all projects</LinkArrow>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {home.cases.items.map((item, i) => (
              <Link
                key={item.title}
                href={item.href}
                className="group block"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
                  <Image
                    src={item.media.src}
                    alt={item.media.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={i === 0}
                  />
                </div>
                <p className="mt-4 font-mono text-[0.7rem] tracking-wide text-faint uppercase">
                  {item.type} · {item.year}
                </p>
                <h3 className="font-display mt-1 text-xl font-semibold text-text group-hover:text-teal transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.summary}
                </p>
                <p className="mt-3 text-xs text-faint">{item.tags.join(" · ")}</p>
              </Link>
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
