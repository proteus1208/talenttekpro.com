"use client";

import { useMemo, useState } from "react";
import { blogPage } from "@/content/blog";
import { cn } from "@/lib/cn";

export function BlogIndex() {
  const [category, setCategory] = useState<(typeof blogPage.categories)[number]>("All");

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
              "rounded-sm border px-4 py-2 text-sm transition-colors",
              category === c
                ? "border-border-strong bg-surface text-teal"
                : "border-border text-muted hover:border-border-strong hover:text-text",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {featured ? (
        <article className="mt-12 border-t-2 border-teal pt-6">
          <p className="text-xs font-medium tracking-wide text-teal uppercase">
            Featured · {featured.category} · {featured.read}
          </p>
          <h2 className="font-display mt-2 text-2xl font-semibold text-text md:text-3xl">
            {featured.title}
          </h2>
          <p className="mt-3 max-w-2xl text-muted">{featured.excerpt}</p>
        </article>
      ) : null}

      <ul className="mt-10 divide-y divide-border border-y border-border">
        {rest.map((post) => (
          <li key={post.slug} className="py-6">
            <p className="text-xs font-medium tracking-wide text-teal uppercase">
              {post.category} · {post.read}
            </p>
            <h3 className="font-display mt-2 text-lg font-semibold text-text">
              {post.title}
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-muted">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
