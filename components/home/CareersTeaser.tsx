import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { home } from "@/content/home";

export function CareersTeaser() {
  return (
    <section className="section-dark section-pad border-t border-border">
      <Container>
        <RevealOnScroll>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-text md:text-4xl">
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
                  className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-xs tracking-wide text-faint uppercase">
                      {role.track}
                    </p>
                    <p className="mt-1 text-base font-medium text-text transition-colors group-hover:text-teal">
                      {role.title}
                    </p>
                  </div>
                  <p className="text-sm text-muted group-hover:text-teal">
                    {role.location} →
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
