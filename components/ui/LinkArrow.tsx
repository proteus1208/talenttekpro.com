import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type LinkArrowProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function LinkArrow({ href, children, className }: LinkArrowProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 text-sm font-medium text-[#1E60FF] transition-colors hover:text-[#051937]",
        className,
      )}
    >
      {children}
      <ArrowUpRight
        className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden
      />
    </Link>
  );
}
