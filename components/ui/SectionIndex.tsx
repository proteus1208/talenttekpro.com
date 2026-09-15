import { cn } from "@/lib/cn";

type SectionIndexProps = {
  label: string;
  className?: string;
  /** Show cyan signal rule under the index (default true) */
  withRule?: boolean;
};

export function SectionIndex({
  label,
  className,
  withRule = true,
}: SectionIndexProps) {
  return (
    <div className={cn(className)}>
      <p className="font-mono text-[0.75rem] font-medium tracking-[0.08em] text-faint uppercase">
        {label}
      </p>
      {withRule ? <span className="section-rule" aria-hidden /> : null}
    </div>
  );
}
