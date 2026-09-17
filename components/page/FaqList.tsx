"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

type FaqItem = { q: string; a: string };

type FaqListProps = {
  items: readonly FaqItem[];
};

export function FaqList({ items }: FaqListProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border-strong/40 border-y border-border-strong/40">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="text-base font-medium text-text">{item.q}</span>
              <ChevronDown
                className={cn(
                  "size-5 shrink-0 transition-transform",
                  isOpen ? "rotate-180 text-teal" : "text-muted",
                )}
              />
            </button>
            {isOpen ? (
              <p className="pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
