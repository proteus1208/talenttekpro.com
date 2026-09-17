"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { searchKindLabel, searchSite, type SearchHit, type SearchKind } from "@/lib/search";

const KIND_ORDER: SearchKind[] = ["case-study", "service", "blog"];

const overlayEase = [0.22, 1, 0.36, 1] as const;

type HeaderSearchProps = {
  className?: string;
  forceClosed?: boolean;
  onOpen?: () => void;
};

export function HeaderSearch({ className, forceClosed, onOpen }: HeaderSearchProps) {
  const pathname = usePathname();
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [mounted, setMounted] = useState(false);

  const results = useMemo(() => searchSite(query), [query]);
  const grouped = KIND_ORDER.map((kind) => ({
    kind,
    items: results.filter((hit) => hit.kind === kind),
  })).filter((group) => group.items.length > 0);

  const close = () => {
    setOpen(false);
    setQuery("");
  };

  const openSearch = () => {
    onOpen?.();
    setOpen(true);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    close();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (forceClosed) close();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forceClosed]);

  useEffect(() => {
    if (!open) return;

    const previous = document.activeElement as HTMLElement | null;
    const frame = window.requestAnimationFrame(() => inputRef.current?.focus());
    const html = document.documentElement;
    const body = document.body;
    const prevHtml = html.style.overflow;
    const prevBody = body.style.overflow;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("keydown", onKey);
      html.style.overflow = prevHtml;
      body.style.overflow = prevBody;
      previous?.focus?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const overlay =
    mounted &&
    createPortal(
      <AnimatePresence>
        {open ? (
          <motion.div
            key="site-search"
            className="fixed inset-x-0 bottom-0 top-[var(--ttp-header-h)] z-40 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: overlayEase }}
          >
            <button
              type="button"
              aria-label="Close search"
              className="absolute inset-0 bg-[#051937]/35 backdrop-blur-xl"
              onClick={close}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="site-search-title"
              className="relative border-b border-black/[0.06] bg-white shadow-[0_18px_48px_rgba(5,25,55,0.12)]"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.32, ease: overlayEase }}
            >
              <h2 id="site-search-title" className="sr-only">
                Search
              </h2>
              <div className="mx-auto flex max-w-[1200px] items-center gap-3 px-5 md:px-6 lg:px-8">
                <Search className="size-5 shrink-0 text-[#94A3B8]" aria-hidden />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search stack, services, articles"
                  className="search-field h-16 min-w-0 flex-1 border-0 bg-transparent text-base text-[#051937] shadow-none outline-none ring-0 placeholder:text-[#94A3B8] md:text-[1.05rem]"
                />
                <button
                  type="button"
                  aria-label="Close search"
                  onClick={close}
                  className="grid size-9 shrink-0 place-items-center rounded-full text-[#94A3B8] transition-colors hover:bg-[#F8FAFC] hover:text-[#051937]"
                >
                  <X className="size-4" />
                </button>
              </div>
              {query.trim() ? (
                <div className="mx-auto max-w-[1200px] px-2 pb-3 md:px-3 lg:px-5">
                  <ResultsBody query={query} grouped={grouped} onNavigate={close} />
                </div>
              ) : null}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>,
      document.body,
    );

  return (
    <>
      <button
        type="button"
        aria-label="Open search"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={openSearch}
        className={cn(
          "grid size-10 place-items-center rounded-full text-[#64748B] transition-colors hover:bg-[#F1F5F9] hover:text-[#051937]",
          className,
        )}
      >
        <Search className="size-5" />
      </button>
      {overlay}
    </>
  );
}

function ResultsBody({
  query,
  grouped,
  onNavigate,
}: {
  query: string;
  grouped: { kind: SearchKind; items: SearchHit[] }[];
  onNavigate: () => void;
}) {
  if (grouped.length === 0) {
    return (
      <p className="px-3 py-4 text-sm text-[#64748B] md:px-4">
        No matches for “{query.trim()}”.
      </p>
    );
  }

  return (
    <div className="max-h-[min(22rem,50vh)] overflow-y-auto pb-2">
      {grouped.map((group) => (
        <section key={group.kind} className="px-1 py-1">
          <p className="px-3 py-1.5 text-[0.68rem] font-medium tracking-[0.14em] text-[#94A3B8] uppercase">
            {searchKindLabel[group.kind]}
          </p>
          <ul>
            {group.items.map((hit) => (
              <ResultRow key={hit.href} hit={hit} onNavigate={onNavigate} />
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function ResultRow({ hit, onNavigate }: { hit: SearchHit; onNavigate: () => void }) {
  return (
    <li>
      <Link
        href={hit.href}
        onClick={onNavigate}
        className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-[#F8FAFC]"
      >
        <p className="text-sm font-medium text-[#051937]">{hit.title}</p>
        {hit.hint ? (
          <p className="mt-0.5 text-xs leading-snug text-[#64748B]">{hit.hint}</p>
        ) : null}
      </Link>
    </li>
  );
}
