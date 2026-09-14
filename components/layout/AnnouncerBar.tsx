"use client";

import Link from "next/link";
import { cta, site } from "@/content/site";

export function AnnouncerBar() {
  return (
    <div className="h-[var(--ttp-announcer-h)] border-b border-border bg-ink/90 text-xs text-muted backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-[1200px] flex-col justify-center gap-0.5 px-5 sm:flex-row sm:items-center sm:justify-between md:px-6 lg:px-8">
        <p className="truncate">{site.tagline}</p>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="hover:text-teal transition-colors"
          >
            {site.email}
          </a>
          <Link href={cta.primary.href} className="text-teal hover:text-text transition-colors">
            {cta.primary.label}
          </Link>
        </div>
      </div>
    </div>
  );
}
