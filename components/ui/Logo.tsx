import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/content/site";

/**
 * public/logo/
 * - logo-no-text-512.png     → mark only (favicon, compact nav)
 * - logo-main-white-text.png → full lockup for dark UI
 * - logo-main.png            → full lockup (darker wordmark; light surfaces)
 */

export type LogoVariant = "mark" | "lockup" | "lockupLight";

type LogoProps = {
  href?: string | null;
  className?: string;
  variant?: LogoVariant;
  /** nav = mark + wordmark text; footer/hero = full lockup image */
  size?: "nav" | "footer" | "hero";
  priority?: boolean;
  showWordmark?: boolean;
  wordmarkClassName?: string;
};

const assets = {
  mark: {
    src: "/logo/logo-no-text-512.png",
    width: 883,
    height: 883,
  },
  lockup: {
    src: "/logo/logo-main-white-text.png",
    width: 1254,
    height: 1254,
  },
  lockupLight: {
    src: "/logo/logo-main.png",
    width: 1254,
    height: 1254,
  },
} as const;

const markSizes = {
  nav: "h-9 w-9 md:h-10 md:w-10",
  footer: "h-12 w-12",
  hero: "h-20 w-20",
} as const;

const lockupSizes = {
  nav: "h-[56px] w-[56px]",
  footer: "h-[96px] w-[96px]",
  hero: "h-40 w-40",
} as const;

export function Logo({
  href = "/",
  className,
  variant,
  size = "nav",
  priority = false,
  showWordmark,
  wordmarkClassName,
}: LogoProps) {
  const resolvedVariant: LogoVariant =
    variant ?? (size === "nav" ? "mark" : "lockup");
  const withWordmark = showWordmark ?? resolvedVariant === "mark";
  const asset = assets[resolvedVariant];
  const box =
    resolvedVariant === "mark" ? markSizes[size] : lockupSizes[size];

  // Native img: avoid next/image blur styles; suppressHydrationWarning
  // ignores extension-injected filter:blur(0px) on <img>.
  const image = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={asset.src}
      alt={
        resolvedVariant === "mark"
          ? `${site.name} mark`
          : `${site.name}: ${site.tagline}`
      }
      width={asset.width}
      height={asset.height}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      className={cn(box, "object-contain", !withWordmark && className)}
      suppressHydrationWarning
    />
  );

  const content = withWordmark ? (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      {image}
      <span
        className={cn(
          "font-display text-base font-semibold tracking-tight text-text md:text-[1.05rem]",
          wordmarkClassName,
        )}
      >
        {site.name}
      </span>
    </span>
  ) : (
    image
  );

  if (href === null) return content;

  return (
    <Link
      href={href}
      className="inline-flex shrink-0 items-center"
      aria-label={`${site.name} home`}
    >
      {content}
    </Link>
  );
}
