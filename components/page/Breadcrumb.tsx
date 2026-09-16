import Link from "next/link";
import { cn } from "@/lib/cn";

export type Crumb = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: Crumb[];
  className?: string;
};

/** Shared breadcrumb — same type + size on every inner page */
export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "text-[0.8rem] font-medium tracking-[0.04em] text-[#94A3B8]",
        className,
      )}
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-2">
              {i > 0 ? (
                <span className="text-[#CBD5E1]" aria-hidden>
                  /
                </span>
              ) : null}
              {item.href && !last ? (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-[#1E60FF]"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={last ? "text-[#64748B]" : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
