"use client";

import { useMemo, useState, type MouseEvent } from "react";
import Link from "next/link";
import { ArrowUpRight, Calendar, Check, Copy } from "lucide-react";
import {
  projectCases,
  projectsPage,
  projectMedia,
  type ProjectCase,
  type ProjectFilter,
} from "@/content/projects";
import { PromptMedia } from "@/components/ui/PromptMedia";
import { cn } from "@/lib/cn";

function buildPdfBrief(item: ProjectCase) {
  const media = projectMedia(item);
  return [
    `# ${item.title}`,
    `${item.type} · ${item.year} · ${item.filters.join(", ")}`,
    "",
    "## Description",
    item.summary,
    "",
    "## Outcomes",
    ...item.outcome.map((o) => `- ${o}`),
    "",
    "## Stack",
    item.stack.join(", "),
    "",
    "## Image",
    `Save as: ${media.path}`,
    `Alt: ${media.alt}`,
    `Prompt: ${media.prompt}`,
  ].join("\n");
}

function CopyPdfButton({ item }: { item: ProjectCase }) {
  const [copied, setCopied] = useState(false);

  async function onCopy(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(buildPdfBrief(item));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard unavailable
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[0.7rem] font-semibold tracking-wide transition-colors",
        copied
          ? "border-emerald-500/40 bg-emerald-50 text-emerald-700"
          : "border-[#1E60FF]/25 bg-white text-[#1E60FF] hover:border-[#1E60FF] hover:bg-[#EFF6FF]",
      )}
      aria-label={copied ? "Copied PDF brief" : `Copy ${item.title} PDF brief`}
    >
      {copied ? (
        <Check className="size-3.5" aria-hidden />
      ) : (
        <Copy className="size-3.5" aria-hidden />
      )}
      {copied ? "Copied" : "Copy brief"}
    </button>
  );
}

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

      <p className="mt-4 text-sm text-[#64748B]">
        Media tiles show the ChatGPT prompt and save-as filename. Use the copy
        icon on the image, or <span className="font-medium text-[#475569]">Copy brief</span>{" "}
        for the full case write-up.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {items.map((item) => {
          const media = projectMedia(item);
          return (
            <article
              key={item.slug}
              className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_14px_40px_rgba(5,25,55,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(5,25,55,0.12)]"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <PromptMedia
                  asset={media}
                  className="absolute inset-0 h-full w-full"
                />
                <span className="absolute top-3 left-3 z-20 inline-flex rounded-full bg-[#1E60FF] px-2.5 py-1 text-[0.7rem] font-semibold tracking-wide text-white shadow-sm">
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

                <Link href={`/projects/${item.slug}`} className="group mt-3 block">
                  <h3 className="card-title transition-colors group-hover:text-[#1E60FF]">
                    {item.title}
                  </h3>
                </Link>

                <p className="mt-2 text-sm leading-relaxed text-[#64748B] select-text">
                  {item.summary}
                </p>

                <ul className="mt-3 space-y-1.5 border-t border-[#E8EEF5] pt-3">
                  {item.outcome.slice(0, 2).map((o) => (
                    <li
                      key={o}
                      className="text-xs leading-snug text-[#64748B] select-text"
                    >
                      <span className="text-[#1E60FF]">→</span> {o}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#64748B]">
                    <Calendar className="size-3.5 text-[#94A3B8]" aria-hidden />
                    {item.year}
                  </span>
                  <div className="flex items-center gap-2">
                    <CopyPdfButton item={item} />
                    <Link
                      href={`/projects/${item.slug}`}
                      className="grid size-9 place-items-center rounded-full border border-[#1E60FF]/25 text-[#1E60FF] transition-colors hover:border-[#1E60FF] hover:bg-[#1E60FF] hover:text-white"
                      aria-label={`Open ${item.title}`}
                    >
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {items.length === 0 ? (
        <p className="mt-10 text-[#64748B]">No case studies in this filter yet.</p>
      ) : null}
    </div>
  );
}
