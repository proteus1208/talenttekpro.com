"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { home } from "@/content/home";
import { cn } from "@/lib/cn";

export function FaqTeaser() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-border py-24 md:py-28">
      <Container className="max-w-3xl">
        <RevealOnScroll>
          <SectionIndex label={home.faq.index} />
          <h2 className="font-display mt-6 text-3xl font-semibold tracking-tight text-text md:text-4xl">
            {home.faq.headline}
          </h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
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
                        "size-5 shrink-0 text-muted transition-transform",
                        isOpen && "rotate-180",
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
