"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { home } from "@/content/home";
import { cn } from "@/lib/cn";

export function FaqTeaser() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-dark section-pad border-t border-border">
      <Container className="max-w-3xl">
        <RevealOnScroll>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-text md:text-4xl">
            {home.faq.headline}
          </h2>
          <div className="mt-10 divide-y divide-border-strong/40 border-y border-border-strong/40">
            {home.faq.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="text-base font-medium text-text">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={cn(
                        "size-5 shrink-0 transition-transform",
                        isOpen ? "rotate-180 text-teal" : "text-muted",
                      )}
                    />
                  </button>
                  {isOpen ? (
                    <p className="pb-5 text-sm leading-relaxed text-muted">
                      {item.a}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
          <div className="mt-8">
            <LinkArrow href={home.faq.cta.href}>{home.faq.cta.label}</LinkArrow>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
