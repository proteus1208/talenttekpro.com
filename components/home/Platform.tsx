"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { PipelineSceneDynamic } from "@/components/effects/PipelineSceneDynamic";
import { home } from "@/content/home";
import { cn } from "@/lib/cn";

export function Platform() {
  const tabs = home.platform.tabs;
  const [active, setActive] = useState<string>(tabs[0].id);
  const tab = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <section className="border-t border-border py-24 md:py-32">
      <Container>
        <RevealOnScroll>
          <SectionIndex label={home.platform.index} />
          <p className="mt-4 text-sm font-medium tracking-wide text-teal">
            {home.platform.eyebrow}
          </p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-text md:text-4xl">
            {home.platform.headline}
          </h2>
          <p className="mt-4 max-w-2xl text-muted">{home.platform.support}</p>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div>
              <div
                role="tablist"
                aria-label="Platform views"
                className="flex flex-wrap gap-2"
              >
                {tabs.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={active === item.id}
                    onClick={() => setActive(item.id)}
                    className={cn(
                      "rounded-sm border px-4 py-2 text-sm transition-colors",
                      active === item.id
                        ? "border-teal bg-surface text-teal"
                        : "border-border text-muted hover:text-text",
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div
                role="tabpanel"
                className="mt-6 rounded-sm border border-border bg-surface p-6"
              >
                <h3 className="font-display text-xl font-semibold text-text">
                  {tab.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {tab.description}
                </p>
                <dl className="mt-6 grid grid-cols-3 gap-4">
                  {tab.stats.map((stat) => (
                    <div key={stat.label}>
                      <dt className="text-[0.7rem] tracking-wide text-faint uppercase">
                        {stat.label}
                      </dt>
                      <dd className="font-mono mt-1 text-lg text-teal">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div>
              <PipelineSceneDynamic />
              <p className="mt-3 font-mono text-[0.7rem] tracking-wide text-faint uppercase">
                talent → match → ship · tilt with pointer
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
