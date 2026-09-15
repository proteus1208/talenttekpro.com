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
    <section className="relative z-0 overflow-hidden bg-[#F5F9FC] pt-24 pb-20 md:pt-28 md:pb-28">
      {/* Clear organic section shapes (no blur) */}
      <svg
        className="pointer-events-none absolute -top-16 -right-10 h-[22rem] w-[22rem] text-[#B8D4FF] md:h-[28rem] md:w-[28rem]"
        viewBox="0 0 400 400"
        fill="currentColor"
        aria-hidden
      >
        <path d="M320 40C380 90 410 170 390 240C370 310 300 360 220 370C140 380 60 340 30 260C0 180 30 90 100 50C170 10 260 -10 320 40Z" />
      </svg>
      <svg
        className="pointer-events-none absolute -bottom-24 -left-16 h-[24rem] w-[24rem] text-[#A8E8F5] md:h-[30rem] md:w-[30rem]"
        viewBox="0 0 400 400"
        fill="currentColor"
        aria-hidden
      >
        <path d="M80 360C20 300 -10 210 20 140C50 70 130 20 210 20C290 20 360 70 380 150C400 230 360 320 280 360C200 400 140 420 80 360Z" />
      </svg>
      <svg
        className="pointer-events-none absolute top-[38%] right-[18%] hidden h-40 w-40 text-[#C5F0FF] lg:block"
        viewBox="0 0 160 160"
        fill="currentColor"
        aria-hidden
      >
        <circle cx="80" cy="80" r="72" />
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

                  {/* Clear quarter-circle corner + arrow */}
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
