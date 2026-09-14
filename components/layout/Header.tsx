"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { cta, primaryNav } from "@/content/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors",
        scrolled || open
          ? "border-b border-border bg-ink/95 backdrop-blur-md"
          : "bg-ink/40 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-4 px-5 md:px-6 lg:px-8">
        <Logo size="nav" variant="mark" priority />

        <nav className="hidden items-center gap-6 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-teal"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={cta.quote.href}>{cta.quote.label}</Button>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-sm border border-border text-text lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-ink lg:hidden">
          <nav className="mx-auto flex max-w-[1200px] flex-col gap-1 px-5 py-4">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-sm px-3 py-3 text-base text-text hover:bg-surface"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 px-3">
              <Button href={cta.quote.href} className="w-full">
                {cta.quote.label}
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
