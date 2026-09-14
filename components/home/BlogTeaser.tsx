import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { home } from "@/content/home";

export function BlogTeaser() {
  return (
    <section className="border-t border-border bg-slate/20 py-24 md:py-28">
      <Container>
        <RevealOnScroll>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionIndex label={home.blog.index} />
              <h2 className="font-display mt-6 text-3xl font-semibold tracking-tight text-text md:text-4xl">
                {home.blog.headline}
              </h2>
            </div>
            <LinkArrow href="/blog">Read all</LinkArrow>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {home.blog.posts.map((post) => (
              <Link key={post.title} href={post.href} className="group block border-t border-border pt-5">
                <p className="text-xs font-medium tracking-wide text-teal uppercase">
                  {post.category}
                </p>
                <h3 className="font-display mt-2 text-lg font-semibold text-text transition-colors group-hover:text-teal">
                  {post.title}
                </h3>
                <p className="mt-3 text-xs text-faint">{post.read} read</p>
              </Link>
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
