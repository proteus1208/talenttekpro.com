import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { home } from "@/content/home";
import { SectionEdge } from "@/components/ui/SectionShell";

export function BlogTeaser() {
  return (
    <section className="relative z-[1] overflow-visible bg-white section-pad">
      <SectionEdge fill="#ffffff" variant="wave" position="top" />
      <Container>
        <RevealOnScroll>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-text md:text-4xl">
                {home.blog.headline}
              </h2>
            </div>
            <LinkArrow href="/blog">Read all</LinkArrow>
          </div>
          <div className="mt-10 grid gap-0 md:grid-cols-3 md:gap-8">
            {home.blog.posts.map((post) => (
              <Link
                key={post.title}
                href={post.href}
                className="group block border-t border-border py-6 md:pt-5"
              >
                <p className="text-xs font-medium tracking-wide text-teal uppercase">
                  {post.category}
                </p>
                <h3 className="font-display mt-2 text-lg font-semibold text-text transition-colors group-hover:text-teal">
                  {post.title}
                </h3>
                <p className="mt-3 font-mono text-xs text-faint">
                  {post.read} read
                </p>
              </Link>
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
