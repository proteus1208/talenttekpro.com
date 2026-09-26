"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight, Clock3 } from "lucide-react";
import { SafeImage } from "@/components/ui/SafeImage";
import { blogPage, type BlogPost } from "@/content/blog";
import { cn } from "@/lib/cn";

function PostMeta({
  post,
  tone = "muted",
}: {
  post: BlogPost;
  tone?: "muted" | "light";
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-3 gap-y-1 text-sm",
        tone === "light" ? "text-white/75" : "text-[#64748B]",
      )}
    >
      <span
        className={cn(
          "font-medium",
          tone === "light" ? "text-white" : "text-[#1E60FF]",
        )}
      >
        {post.category}
      </span>
      <span aria-hidden>·</span>
      <span>{post.date}</span>
      <span aria-hidden>·</span>
      <span className="inline-flex items-center gap-1.5">
        <Clock3 className="size-3.5 opacity-70" aria-hidden />
        {post.read} read
      </span>
    </div>
  );
}

function TagRow({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag, i) => (
        <span
          key={tag}
          className={cn(
            "rounded-full px-2.5 py-0.5 text-[0.65rem] font-medium",
            i % 3 === 0 && "bg-[#EFF6FF] text-[#1E60FF]",
            i % 3 === 1 && "bg-[#ECFEFF] text-[#0891B2]",
            i % 3 === 2 && "bg-[#F0FDF4] text-[#16A34A]",
          )}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export function BlogIndex() {
  const [category, setCategory] =
    useState<(typeof blogPage.categories)[number]>("All");

  const posts = useMemo(() => {
    if (category === "All") return blogPage.posts;
    return blogPage.posts.filter((p) => p.category === category);
  }, [category]);

  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => p.slug !== featured?.slug);

  return (
    <div>
      <div
        className="flex flex-wrap gap-x-1 gap-y-2 border-b border-[#1E60FF]/12 pb-1"
        role="tablist"
        aria-label="Filter by category"
      >
        {blogPage.categories.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={category === c}
            onClick={() => setCategory(c)}
            className={cn(
              "relative px-3 py-2.5 text-sm font-medium transition-colors",
              category === c
                ? "text-[#1E60FF]"
                : "text-[#64748B] hover:text-[#051937]",
            )}
          >
            {c}
            {category === c ? (
              <span
                className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-[#1E60FF]"
                aria-hidden
              />
            ) : null}
          </button>
        ))}
      </div>

      {featured ? (
        <Link
          href={`/blog/${featured.slug}`}
          className="group mt-10 grid overflow-hidden rounded-[1.75rem] border border-[#D7E4F0] bg-white shadow-[0_18px_48px_rgba(5,25,55,0.07)] transition-transform duration-300 hover:-translate-y-0.5 lg:grid-cols-12"
        >
          <div className="relative aspect-[16/11] overflow-hidden lg:col-span-7 lg:aspect-auto lg:min-h-[360px]">
            <SafeImage
              src={featured.cover.src}
              alt={featured.cover.alt}
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          </div>

          <div className="relative flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:col-span-5 lg:px-10">
            <p className="text-[0.75rem] font-semibold tracking-[0.16em] text-[#1E60FF] uppercase">
              Featured note
            </p>
            <div className="mt-5">
              <PostMeta post={featured} />
            </div>
            <h2 className="font-display mt-4 text-2xl font-semibold tracking-tight text-[#051937] md:text-3xl">
              {featured.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#64748B] md:text-[0.95rem]">
              {featured.excerpt}
            </p>
            <div className="mt-5">
              <TagRow tags={featured.tags.slice(0, 3)} />
            </div>
            <div className="mt-8 flex items-center justify-between gap-4 border-t border-[#D7E4F0] pt-6">
              <div>
                <p className="text-sm font-medium text-[#051937]">{featured.author}</p>
                <p className="mt-0.5 text-xs text-[#94A3B8]">{featured.role}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E60FF]">
                Read
                <ArrowUpRight
                  className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </span>
            </div>
          </div>
        </Link>
      ) : null}

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
        {rest.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-[0_14px_40px_rgba(5,25,55,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(5,25,55,0.1)]"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <SafeImage
                src={post.cover.src}
                alt={post.cover.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <span className="absolute top-3 left-3 z-10 inline-flex rounded-full bg-[#1E60FF] px-2.5 py-1 text-[0.7rem] font-semibold tracking-wide text-white shadow-sm">
                {post.category}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-5 md:p-6">
              <TagRow tags={post.tags.slice(0, 3)} />
              <h3 className="card-title mt-3 transition-colors group-hover:text-[#1E60FF]">
                {post.title}
              </h3>
              <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[#64748B]">
                {post.excerpt}
              </p>

              <div className="mt-5 flex items-end justify-between gap-3 border-t border-[#1E60FF]/10 pt-4">
                <div>
                  <p className="text-sm font-medium text-[#051937]">
                    {post.author}
                  </p>
                  <p className="mt-0.5 text-xs text-[#94A3B8]">
                    {post.date} · {post.read}
                  </p>
                </div>
                <span
                  className="grid size-9 shrink-0 place-items-center rounded-full border border-[#1E60FF]/25 text-[#1E60FF] transition-colors group-hover:border-[#1E60FF] group-hover:bg-[#1E60FF] group-hover:text-white"
                  aria-hidden
                >
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {posts.length === 0 ? (
        <p className="mt-10 text-[#64748B]">No articles in this category yet.</p>
      ) : null}
    </div>
  );
}
