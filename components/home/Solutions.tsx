"use client";

import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Check,
  Cloud,
  Code2,
  Compass,
  FileSignature,
  HeartPulse,
  Users,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { ScrollShape } from "@/components/effects/ScrollShape";
import { SoftRegion } from "@/components/effects/SoftRegion";
import { SectionEdge } from "@/components/ui/SectionShell";
import { home } from "@/content/home";
import { cn } from "@/lib/cn";

const tones = [
  {
    iconBg: "bg-[#1E60FF]",
    check: "text-[#1E60FF]",
    num: "text-blue-300",
    btn: "bg-white text-[#1E60FF] shadow-sm group-hover:bg-[#1E60FF] group-hover:text-white",
  },
  {
    iconBg: "bg-[#16A34A]",
    check: "text-[#16A34A]",
    num: "text-green-300",
    btn: "bg-white text-[#16A34A] shadow-sm group-hover:bg-[#16A34A] group-hover:text-white",
  },
  {
    iconBg: "bg-[#7C3AED]",
    check: "text-[#7C3AED]",
    num: "text-violet-300",
    btn: "bg-white text-[#7C3AED] shadow-sm group-hover:bg-[#7C3AED] group-hover:text-white",
  },
  {
    iconBg: "bg-[#0284C7]",
    check: "text-[#0284C7]",
    num: "text-sky-300",
    btn: "bg-white text-[#0284C7] shadow-sm group-hover:bg-[#0284C7] group-hover:text-white",
  },
  {
    iconBg: "bg-[#0D9488]",
    check: "text-[#0D9488]",
    num: "text-teal-300",
    btn: "bg-white text-[#0D9488] shadow-sm group-hover:bg-[#0D9488] group-hover:text-white",
  },
  {
    iconBg: "bg-[#6D28D9]",
    check: "text-[#6D28D9]",
    num: "text-purple-300",
    btn: "bg-white text-[#6D28D9] shadow-sm group-hover:bg-[#6D28D9] group-hover:text-white",
  },
  {
    iconBg: "bg-[#2563EB]",
    check: "text-[#2563EB]",
    num: "text-blue-300",
    btn: "bg-white text-[#2563EB] shadow-sm group-hover:bg-[#2563EB] group-hover:text-white",
  },
  {
    iconBg: "bg-[#059669]",
    check: "text-[#059669]",
    num: "text-emerald-300",
    btn: "bg-white text-[#059669] shadow-sm group-hover:bg-[#059669] group-hover:text-white",
  },
] as const;

const icons: LucideIcon[] = [
  Users,
  UsersRound,
  FileSignature,
  Brain,
  Code2,
  Cloud,
  Compass,
  HeartPulse,
];

export function Solutions() {
  return (
    <section className="relative z-[1] overflow-visible bg-[#F5F9FC] section-pad">
      <SectionEdge fill="#F5F9FC" variant="soft" position="top" />
      {/* Soft cloud region */}
      <ScrollShape
        className="top-[8%] left-[4%] h-36 w-40 text-[#1E60FF] md:h-48 md:w-52"
      >
        <SoftRegion variant="softSquare" />
      </ScrollShape>

      <Container className="relative z-10">
        <RevealOnScroll>
          <div className="max-w-3xl">
            <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-[#1E60FF] uppercase">
              <span className="inline-block h-px w-5 bg-[#1E60FF]" aria-hidden />
              Our Services
            </p>
            <h2 className="section-title mt-4">
              Flexible talent.{" "}
              <span className="hero-gradient-text">Real impact.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#64748B] md:text-lg">
              We provide AI-assisted tech talent and embedded engineering squads
              to help you build, scale, and innovate faster, without the hiring
              headaches.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {home.solutions.disciplines.map((d, i) => {
              const tone = tones[i % tones.length];
              const Icon = icons[i % icons.length];
              return (
                <Link
                  key={d.num}
                  href={d.href}
                  className="group relative flex min-h-[280px] flex-col rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-[0_12px_40px_rgba(5,25,55,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#CBD5E1] hover:shadow-[0_20px_50px_rgba(5,25,55,0.1)]"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "grid size-11 shrink-0 place-items-center rounded-2xl text-white shadow-sm",
                        tone.iconBg,
                      )}
                    >
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span
                      className={cn(
                        "font-display text-2xl font-semibold tracking-tight",
                        tone.num,
                      )}
                    >
                      {d.num}
                    </span>
                  </div>

                  <h3 className="card-title mt-5">{d.title}</h3>

                  <ul className="mt-4 flex-1 space-y-2.5">
                    {d.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm leading-snug text-[#64748B]"
                      >
                        <Check
                          className={cn("mt-0.5 size-4 shrink-0", tone.check)}
                          strokeWidth={2.5}
                          aria-hidden
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <span
                    className={cn(
                      "mt-5 ml-auto grid size-10 place-items-center rounded-full transition-colors duration-300",
                      tone.btn,
                    )}
                    aria-hidden
                  >
                    <ArrowRight className="size-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
