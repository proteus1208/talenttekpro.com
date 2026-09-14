import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-sm px-5 py-2.5 text-sm font-medium transition-colors",
        variant === "primary" &&
          "bg-ember text-ink hover:bg-ember-hover",
        variant === "secondary" &&
          "border border-border bg-transparent text-text hover:border-teal hover:text-teal",
        variant === "ghost" && "text-teal hover:text-text",
        className,
      )}
    >
      {children}
    </Link>
  );
}
