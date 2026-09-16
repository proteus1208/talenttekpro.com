"use client";

import { useMemo, useState } from "react";
import { blogPage } from "@/content/blog";
import { cn } from "@/lib/cn";

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
      <div className="flex flex-wrap gap-2">
        {blogPage.categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              category === c
                ? "bg-[#1E60FF] text-white"
                : "bg-white text-[#64748B] shadow-[0_4px_16px_rgba(5,25,55,0.05)] hover:text-[#1E60FF]",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {featured ? (
        <article className="mt-12 border-t-2 border-[#1E60FF]/40 pt-6">
          <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-[#1E60FF] uppercase">
            Featured · {featured.category} · {featured.read}
          </p>
          <h2 className="section-title mt-3 max-w-3xl">{featured.title}</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#64748B]">
            {featured.excerpt}
          </p>
        </article>
      ) : null}

      <ul className="mt-10 divide-y divide-[#051937]/10 border-y border-[#051937]/10">
        {rest.map((post) => (
          <li key={post.slug} className="py-6">
            <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-[#94A3B8] uppercase">
              {post.category} · {post.read}
            </p>
            <h3 className="card-title mt-2">{post.title}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#64748B]">
              {post.excerpt}
            </p>
          </li>
        ))}
      </ul>

      {posts.length === 0 ? (
        <p className="mt-10 text-[#64748B]">No articles in this category yet.</p>
      ) : null}
    </div>
  );
}
