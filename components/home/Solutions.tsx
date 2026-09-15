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
import { home } from "@/content/home";
import { cn } from "@/lib/cn";

const tones = [
  {
    iconBg: "bg-[#1E60FF]",
    check: "text-[#1E60FF]",
    num: "text-blue-300",
    corner: "bg-[#DBEAFE]",
    btn: "bg-white text-[#1E60FF] shadow-sm group-hover:bg-[#1E60FF] group-hover:text-white",
  },
  {
    iconBg: "bg-[#16A34A]",
    check: "text-[#16A34A]",
    num: "text-green-300",
    corner: "bg-[#DCFCE7]",
    btn: "bg-white text-[#16A34A] shadow-sm group-hover:bg-[#16A34A] group-hover:text-white",
  },
  {
    iconBg: "bg-[#7C3AED]",
    check: "text-[#7C3AED]",
    num: "text-violet-300",
    corner: "bg-[#EDE9FE]",
    btn: "bg-white text-[#7C3AED] shadow-sm group-hover:bg-[#7C3AED] group-hover:text-white",
  },
  {
    iconBg: "bg-[#0284C7]",
    check: "text-[#0284C7]",
    num: "text-sky-300",
    corner: "bg-[#E0F2FE]",
    btn: "bg-white text-[#0284C7] shadow-sm group-hover:bg-[#0284C7] group-hover:text-white",
  },
  {
    iconBg: "bg-[#0D9488]",
    check: "text-[#0D9488]",
    num: "text-teal-300",
    corner: "bg-[#CCFBF1]",
    btn: "bg-white text-[#0D9488] shadow-sm group-hover:bg-[#0D9488] group-hover:text-white",
  },
  {
    iconBg: "bg-[#6D28D9]",
    check: "text-[#6D28D9]",
    num: "text-purple-300",
    corner: "bg-[#EDE9FE]",
    btn: "bg-white text-[#6D28D9] shadow-sm group-hover:bg-[#6D28D9] group-hover:text-white",
  },
  {
    iconBg: "bg-[#2563EB]",
    check: "text-[#2563EB]",
    num: "text-blue-300",
    corner: "bg-[#DBEAFE]",
    btn: "bg-white text-[#2563EB] shadow-sm group-hover:bg-[#2563EB] group-hover:text-white",
  },
  {
    iconBg: "bg-[#059669]",
    check: "text-[#059669]",
    num: "text-emerald-300",
    corner: "bg-[#D1FAE5]",
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
    <section className="relative z-0 overflow-hidden bg-[#F5F9FC] pt-28 pb-24 md:pt-32 md:pb-28">
      {/* Distinct shapes: rounded triangle + hexagon + ring (not circles/blobs) */}
      <svg
        className="pointer-events-none absolute top-[38%] -right-10 h-[17rem] w-[17rem] text-[#B8D4FF] md:h-[22rem] md:w-[22rem]"
        viewBox="0 0 200 200"
        fill="currentColor"
        aria-hidden
      >
        <path d="M100 18 C108 18 116 22 120 30 L172 128 C176 136 174 146 166 152 C162 155 157 156 152 156 L48 156 C40 156 33 151 30 144 C27 137 29 129 34 124 L86 30 C90 22 96 18 100 18 Z" />
      </svg>
      <svg
        className="pointer-events-none absolute top-[52%] -left-14 h-[14rem] w-[14rem] text-[#A8E8F5] md:h-[18rem] md:w-[18rem]"
        viewBox="0 0 200 200"
        fill="currentColor"
        aria-hidden
      >
        <path d="M100 12 L168 52 L168 148 L100 188 L32 148 L32 52 Z" />
      </svg>
      <svg
        className="pointer-events-none absolute top-[28%] left-[48%] hidden h-28 w-28 text-[#C5E7FF] lg:block"
        viewBox="0 0 120 120"
        fill="none"
        stroke="currentColor"
        strokeWidth="14"
        aria-hidden
      >
        <circle cx="60" cy="60" r="42" />
      </svg>

      <Container className="relative z-10">
        <RevealOnScroll>
          <div className="max-w-3xl">
            <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-[#1E60FF] uppercase">
              <span className="inline-block h-px w-5 bg-[#1E60FF]" aria-hidden />
              Our Services
            </p>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-[#051937] md:text-4xl lg:text-[2.75rem]">
              Flexible talent.{" "}
              <span className="bg-gradient-to-r from-[#1E60FF] to-[#00D2FF] bg-clip-text text-transparent">
                Real impact.
              </span>
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#64748B] md:text-lg">
              We provide AI-assisted tech talent and embedded engineering squads
              to help you build, scale, and innovate faster — without the hiring
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
                  className="group relative flex min-h-[280px] flex-col overflow-hidden rounded-3xl border border-black/[0.04] bg-white p-6 shadow-[0_12px_40px_rgba(5,25,55,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(5,25,55,0.1)]"
                >
                  <div className="relative z-10 flex items-center gap-3">
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

                  <h3 className="font-display relative z-10 mt-5 text-lg font-bold tracking-tight text-[#051937]">
                    {d.title}
                  </h3>

                  <ul className="relative z-10 mt-4 flex-1 space-y-2.5">
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

                  <div
                    className={cn(
                      "pointer-events-none absolute right-0 bottom-0 size-[5.5rem] rounded-tl-full",
                      tone.corner,
                    )}
                    aria-hidden
                  />
                  <span
                    className={cn(
                      "absolute right-4 bottom-4 grid size-10 place-items-center rounded-full transition-colors duration-300",
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
