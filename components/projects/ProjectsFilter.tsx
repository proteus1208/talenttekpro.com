"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
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
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              filter === f
                ? "bg-[#1E60FF] text-white"
                : "bg-white text-[#64748B] shadow-[0_4px_16px_rgba(5,25,55,0.05)] hover:text-[#1E60FF]",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {items.map((item) => {
          const media = projectMedia(item);
          return (
            <Link
              key={item.slug}
              href={`/projects/${item.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_14px_40px_rgba(5,25,55,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(5,25,55,0.12)]"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={media.src}
                  alt={media.alt}
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  suppressHydrationWarning
                />
                <span className="absolute top-3 left-3 inline-flex rounded-full bg-[#1E60FF] px-2.5 py-1 text-[0.7rem] font-semibold tracking-wide text-white shadow-sm">
                  {item.filters[0] ?? item.type}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-4 md:p-5">
                <div className="flex flex-wrap gap-1.5">
                  {item.stack.slice(0, 3).map((tag, i) => (
                    <span
                      key={tag}
                      className={cn(
                        "rounded-full px-2.5 py-0.5 text-[0.65rem] font-medium",
                        i === 0 && "bg-[#EFF6FF] text-[#1E60FF]",
                        i === 1 && "bg-[#ECFEFF] text-[#0891B2]",
                        i === 2 && "bg-[#F5F3FF] text-[#7C3AED]",
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="card-title mt-3 transition-colors group-hover:text-[#1E60FF]">
                  {item.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#64748B]">
                  {item.summary}
                </p>

                <div className="mt-auto flex items-center justify-between pt-5">
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#64748B]">
                    <Calendar className="size-3.5 text-[#94A3B8]" aria-hidden />
                    {item.year}
                  </span>
                  <span
                    className="grid size-9 place-items-center rounded-full border border-[#1E60FF]/25 text-[#1E60FF] transition-colors group-hover:border-[#1E60FF] group-hover:bg-[#1E60FF] group-hover:text-white"
                    aria-hidden
                  >
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {items.length === 0 ? (
        <p className="mt-10 text-[#64748B]">No case studies in this filter yet.</p>
      ) : null}
    </div>
  );
}
