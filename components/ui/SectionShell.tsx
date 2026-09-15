import { cn } from "@/lib/cn";

export type SectionEdgeVariant =
  | "wave"
  | "soft"
  | "slant"
  | "bump"
  | "valley"
  | "steps";

type SectionEdgeProps = {
  /** Must match the section’s background so the curve reads as the section edge */
  fill: string;
  variant?: SectionEdgeVariant;
  /** top = curve up into previous section; bottom = curve down into next */
  position?: "top" | "bottom";
  className?: string;
};

/**
 * Paths fill from the wavy crest down to y=80 (flat baseline).
 * Placed with bottom-full so the flat edge sits on the section top and the
 * curve paints over the previous section.
 */
const PATHS: Record<SectionEdgeVariant, string> = {
  wave: "M0,50 C180,10 320,78 480,42 C640,8 720,70 900,38 C1080,6 1260,72 1440,28 L1440,80 L0,80 Z",
  soft: "M0,40 C240,72 480,8 720,44 C960,80 1200,16 1440,48 L1440,80 L0,80 Z",
  slant: "M0,70 L1440,12 L1440,80 L0,80 Z",
  bump: "M0,48 C200,48 280,8 420,14 C600,24 640,68 820,58 C1000,48 1120,12 1440,22 L1440,80 L0,80 Z",
  valley: "M0,18 C240,70 480,12 720,60 C960,12 1200,70 1440,22 L1440,80 L0,80 Z",
  steps:
    "M0,56 L160,56 L160,28 L320,28 L320,60 L480,60 L480,20 L640,20 L640,52 L800,52 L800,24 L960,24 L960,56 L1120,56 L1120,32 L1280,32 L1280,48 L1440,48 L1440,80 L0,80 Z",
};

/**
 * Shaped seam that overlaps the adjacent section.
 * Parent section must be `relative overflow-visible` (and ideally a stacking
 * context so this paints above the band above).
 */
export function SectionEdge({
  fill,
  variant = "wave",
  position = "top",
  className,
}: SectionEdgeProps) {
  const isTop = position === "top";

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-0 z-[2] h-12 w-full md:h-16 lg:h-20",
        isTop ? "bottom-full" : "top-full",
        className,
      )}
      aria-hidden
    >
      <svg
        className={cn(
          "block h-full w-full",
          !isTop && "origin-center rotate-180",
        )}
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={PATHS[variant]} fill={fill} />
      </svg>
    </div>
  );
}

type SectionShellProps = {
  children: React.ReactNode;
  className?: string;
  fill: string;
  topVariant?: SectionEdgeVariant | "none";
  bottomVariant?: SectionEdgeVariant | "none";
  id?: string;
};

export function SectionShell({
  children,
  className,
  fill,
  topVariant = "wave",
  bottomVariant = "none",
  id,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn("relative z-[1] overflow-visible", className)}
      style={{ backgroundColor: fill }}
    >
      {topVariant !== "none" ? (
        <SectionEdge fill={fill} variant={topVariant} position="top" />
      ) : null}
      <div className="relative z-10">{children}</div>
      {bottomVariant !== "none" ? (
        <SectionEdge fill={fill} variant={bottomVariant} position="bottom" />
      ) : null}
    </section>
  );
}
