"use client";

import dynamic from "next/dynamic";

export const PipelineSceneDynamic = dynamic(
  () =>
    import("@/components/effects/PipelineScene").then((m) => m.PipelineScene),
  {
    ssr: false,
    loading: () => (
      <div className="h-56 w-full animate-pulse rounded-sm border border-border bg-surface md:h-64" />
    ),
  },
);
