"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { home } from "@/content/home";
import { projects, type Project } from "@/content/projects";
import { SectionEdge } from "@/components/ui/SectionShell";
import { cn } from "@/lib/cn";

function BorderBeam({ radius = 18 }: { radius?: number }) {
  const uid = useId();
  const gradId = `beam-${uid.replace(/:/g, "")}`;

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-20 size-full overflow-visible"
      aria-hidden
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1E60FF" stopOpacity="0" />
          <stop offset="35%" stopColor="#1E60FF" stopOpacity="1" />
          <stop offset="65%" stopColor="#00D2FF" stopOpacity="1" />
          <stop offset="100%" stopColor="#00D2FF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect
        x="1.5"
        y="1.5"
        width="100%"
        height="100%"
        rx={radius}
        ry={radius}
        pathLength={100}
        className="project-card-beam"
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth="2.5"
        strokeLinecap="round"
        style={{
          width: "calc(100% - 3px)",
          height: "calc(100% - 3px)",
        }}
      />
    </svg>
  );
}

function ProjectCard({
  project,
  featured = false,
  className,
}: {
  project: Project;
  featured?: boolean;
  className?: string;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotY = (px - 0.5) * 12;
    const rotX = (0.5 - py) * 10;
    el.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0)`;
  };

  const onLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)";
  };

  return (
    <Link
      ref={cardRef}
      href={project.href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        "project-card group relative block overflow-hidden rounded-[1.25rem] bg-white will-change-transform",
        "shadow-[0_18px_50px_rgba(5,25,55,0.1)] transition-[transform,box-shadow] duration-300 ease-out",
        "hover:shadow-[0_28px_70px_rgba(5,25,55,0.16)]",
        featured ? "rounded-[1.35rem] p-3 md:p-4" : "p-2.5",
        className,
      )}
      style={{ transformStyle: "preserve-3d" }}
    >
      <BorderBeam radius={featured ? 20 : 16} />

      <div
        className={cn(
          "relative overflow-hidden bg-[#F5F9FC]",
          featured ? "rounded-2xl" : "rounded-xl",
        )}
        style={{ transform: "translateZ(20px)" }}
      >
        <div
          className={cn(
            "relative overflow-hidden",
            featured ? "aspect-[16/10]" : "aspect-[16/11]",
          )}
        >
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            sizes={
              featured
                ? "(max-width: 1024px) 100vw, 50vw"
                : "(max-width: 640px) 100vw, 25vw"
            }
            priority={featured}
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#051937]/40 via-transparent to-transparent"
            aria-hidden
          />
        </div>

        <div className={cn(featured ? "p-5 md:p-6" : "p-4")}>
          <p className="font-mono text-[0.65rem] tracking-wide text-[#94A3B8] uppercase">
            {featured
              ? `Featured · ${project.type} · ${project.year}`
              : project.year}
          </p>
          <h3
            className={cn(
              "font-display mt-1.5 font-semibold tracking-tight text-[#051937] transition-colors group-hover:text-[#1E60FF]",
              featured ? "text-2xl" : "text-lg",
            )}
          >
            {project.title}
          </h3>
          <p
            className={cn(
              "mt-2 leading-relaxed text-[#64748B]",
              featured ? "text-sm" : "line-clamp-2 text-xs",
            )}
          >
            {project.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

export function CaseStudies() {
  const [featured, ...rest] = projects;
  const secondary = rest.slice(0, 4);

  return (
    <section className="relative z-[1] overflow-visible bg-white section-pad">
      <SectionEdge fill="#ffffff" variant="soft" position="top" />
      <Container>
        <RevealOnScroll>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-text md:text-4xl">
                {home.cases.headline}
              </h2>
            </div>
            <LinkArrow href="/projects">View all projects</LinkArrow>
          </div>

          <div
            className="mt-12 grid gap-8 lg:grid-cols-2"
            style={{ perspective: "1200px" }}
          >
            <ProjectCard project={featured} featured />

            <div className="grid gap-6 sm:grid-cols-2">
              {secondary.map((item) => (
                <ProjectCard key={item.href} project={item} />
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
