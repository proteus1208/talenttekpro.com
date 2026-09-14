import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { home } from "@/content/home";

export function CareersTeaser() {
  return (
    <section className="border-t border-border py-24 md:py-28">
      <Container>
        <RevealOnScroll>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionIndex label={home.careers.index} />
              <h2 className="font-display mt-6 text-3xl font-semibold tracking-tight text-text md:text-4xl">
                {home.careers.headline}
              </h2>
            </div>
            <LinkArrow href="/careers">All roles →</LinkArrow>
          </div>
          <ul className="mt-10 divide-y divide-border border-y border-border">
            {home.careers.roles.map((role) => (
              <li key={role.title}>
                <Link
                  href={role.href}
                  className="flex flex-col gap-1 py-5 transition-colors hover:text-teal sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-xs text-faint">{role.track}</p>
                    <p className="mt-1 text-base font-medium text-text">
                      {role.title}
                    </p>
                  </div>
                  <p className="text-sm text-muted">{role.location}</p>
                </Link>
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
