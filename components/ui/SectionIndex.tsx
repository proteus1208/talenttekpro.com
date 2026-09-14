import { cn } from "@/lib/cn";

type SectionIndexProps = {
  label: string;
  className?: string;
};

export function SectionIndex({ label, className }: SectionIndexProps) {
  return (
    <p
      className={cn(
        "font-mono text-[0.75rem] font-medium tracking-[0.08em] text-faint uppercase",
        className,
      )}
    >
      {label}
    </p>
  );
}
