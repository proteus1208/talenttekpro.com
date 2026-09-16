import { cn } from "@/lib/cn";

/**
 * Soft geometric regions: straight runs + large-radius corner fillets.
 * Every corner is a cubic with controls aligned to the adjacent edges
 * (no sharp vertices / pinch points).
 * viewBox 0 0 200 200
 */
const REGIONS = {
  /** Soft rounded rectangle */
  softSquare:
    "M56 24 H144 C168 24 184 40 184 64 V136 C184 160 168 176 144 176 H56 C32 176 16 160 16 136 V64 C16 40 32 24 56 24 Z",
  /** Soft wide capsule */
  wave:
    "M72 36 H128 C156 36 176 58 176 100 C176 142 156 164 128 164 H72 C44 164 24 142 24 100 C24 58 44 36 72 36 Z",
  /** Soft vertical tablet */
  droplet:
    "M68 20 H132 C154 20 168 36 168 58 V142 C168 164 154 180 132 180 H68 C46 180 32 164 32 142 V58 C32 36 46 20 68 20 Z",
  /** Soft parallelogram (skewed slab) */
  pebble:
    "M64 28 H148 C164 28 176 38 172 54 L148 150 C144 166 128 176 112 176 H40 C24 176 14 164 20 148 L44 44 C48 32 56 28 64 28 Z",
  /** Soft trapezoid */
  bean:
    "M52 44 H148 C166 44 178 56 174 74 L160 148 C156 164 142 174 126 174 H54 C38 174 28 160 34 144 L48 60 C50 50 50 44 52 44 Z",
  /** Soft diamond with big fillets */
  softFacet:
    "M100 20 C116 20 134 34 146 52 L172 100 C180 114 178 134 164 148 L124 176 C112 184 88 184 76 176 L36 148 C22 134 20 114 28 100 L54 52 C66 34 84 20 100 20 Z",
  /** Soft chevron / arrow plaque */
  ribbon:
    "M40 52 L104 28 C116 22 132 28 140 40 L176 108 C182 120 176 136 162 144 L108 172 C96 178 80 172 72 160 L28 96 C22 84 26 64 40 52 Z",
  /** Soft L-panel */
  swirl:
    "M36 24 H112 C132 24 144 38 144 56 V88 C144 100 152 108 164 108 H172 C184 108 192 118 192 132 V160 C192 174 180 184 164 184 H48 C32 184 20 170 20 154 V40 C20 30 28 24 36 24 Z",
  /** Soft tilted bar */
  petal:
    "M48 68 H140 C156 68 168 78 164 94 L148 148 C144 164 128 172 112 168 H40 C24 168 16 152 24 136 L40 84 C44 72 44 68 48 68 Z",
  /** Soft asymmetric plaque */
  amoeba:
    "M40 40 H136 C158 40 172 56 170 78 L166 140 C164 160 148 172 128 172 H52 C32 172 20 156 24 136 L36 68 C38 52 38 42 40 40 Z",
  /** Soft wide banner */
  cloud:
    "M28 64 H172 C186 64 192 76 188 90 L176 136 C172 152 156 160 140 160 H52 C36 160 24 148 28 132 L36 80 C38 68 28 64 28 64 Z",
  /** Soft shield / kite with flat base feel */
  kidney:
    "M100 22 C120 22 144 40 156 62 L174 112 C180 128 170 148 152 156 L100 178 C86 184 70 178 60 166 L36 128 C26 114 28 94 40 80 L64 44 C76 30 88 22 100 22 Z",
} as const;

export type SoftRegionVariant = keyof typeof REGIONS;

type SoftRegionProps = {
  variant: SoftRegionVariant;
  className?: string;
};

/** Soft geometric region — straight edges, smooth fillets only */
export function SoftRegion({ variant, className }: SoftRegionProps) {
  return (
    <svg
      className={cn("h-full w-full", className)}
      viewBox="0 0 200 200"
      fill="currentColor"
      aria-hidden
    >
      <path d={REGIONS[variant]} />
    </svg>
  );
}
