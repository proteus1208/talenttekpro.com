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
        "inline-flex items-center justify-center rounded-sm px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors",
        variant === "primary" && "ttp-btn-primary",
        variant === "secondary" && "ttp-btn-secondary",
        variant === "ghost" && "ttp-btn-ghost",
        className,
      )}
    >
      {children}
    </Link>
  );
}
