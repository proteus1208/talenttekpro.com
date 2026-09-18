"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { HeaderSearch } from "@/components/layout/HeaderSearch";
import { cta, primaryNav } from "@/content/site";

function navActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b bg-white transition-[box-shadow,border-color] duration-300",
          scrolled || open
            ? "border-black/8 shadow-[0_8px_32px_rgba(5,25,55,0.08)]"
            : "border-black/8 shadow-none",
        )}
      >
      <div className="mx-auto flex h-[var(--ttp-header-h)] max-w-[1200px] items-center justify-between gap-4 px-5 md:px-6 lg:px-8">
        <Logo
          size="nav"
          variant="mark"
          priority
          wordmarkClassName="text-[#051937]"
        />

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 xl:gap-7 lg:flex">
          {primaryNav.map((item) => {
            const active = navActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-[0.9375rem] font-medium transition-colors",
                  active
                    ? "text-[#1E60FF]"
                    : "text-[#334155] hover:text-[#1E60FF]",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <HeaderSearch />
          <Button href={cta.quote.href} className="rounded-full px-5">
            {cta.quote.label} →
          </Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <HeaderSearch forceClosed={open} onOpen={() => setOpen(false)} />
          <button
            type="button"
            className="grid size-10 place-items-center rounded-xl border border-black/10 text-[#051937]"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-black/8 bg-white/80 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-[1200px] flex-col gap-1 px-5 py-4">
            {primaryNav.map((item) => {
              const active = navActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-xl px-3 py-3 text-base font-medium",
                    active
                      ? "bg-[#EFF6FF] text-[#1E60FF]"
                      : "text-[#051937] hover:bg-[#F1F5F9]",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-2 px-3">
              <Button href={cta.quote.href} className="w-full rounded-full">
                {cta.quote.label} →
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
      </header>
      {/* Reserve space so fixed header doesn’t cover page content */}
      <div className="h-[var(--ttp-header-h)] shrink-0" aria-hidden />
    </>
  );
}
