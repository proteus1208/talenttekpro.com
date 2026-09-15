"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  projectCases,
  projectsPage,
  projectMedia,
  type ProjectFilter,
} from "@/content/projects";
import { cn } from "@/lib/cn";

export function ProjectsFilter() {
  const [filter, setFilter] = useState<ProjectFilter>("All");

  const items = useMemo(() => {
    if (filter === "All") return projectCases;
    return projectCases.filter((c) => c.filters.includes(filter));
  }, [filter]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {projectsPage.filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-sm border px-4 py-2 text-sm transition-colors",
              filter === f
                ? "border-border-strong bg-surface text-teal"
                : "border-border text-muted hover:border-border-strong hover:text-text",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const media = projectMedia(item);
          return (
            <Link
              key={item.slug}
              href={`/projects/${item.slug}`}
              className="group block border-t-2 border-teal/35 pt-4 transition-colors hover:border-teal"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-border">
                <Image
                  src={media.src}
                  alt={media.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <p className="mt-3 font-mono text-[0.65rem] tracking-wide text-faint uppercase">
                {item.type} · {item.year}
              </p>
              <h3 className="font-display mt-1 text-lg font-semibold text-text transition-colors group-hover:text-teal">
                {item.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted">{item.summary}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
