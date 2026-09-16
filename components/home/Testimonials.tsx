import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { SectionEdge } from "@/components/ui/SectionShell";
import { home } from "@/content/home";
import { cn } from "@/lib/cn";

const avatarTones = [
  "bg-[#1E60FF]",
  "bg-[#60A5FA]",
  "bg-[#818CF8]",
] as const;

export function Testimonials() {
  return (
    <section className="relative z-[1] overflow-visible bg-[#F0F4F8] section-pad">
      <SectionEdge fill="#F0F4F8" variant="valley" position="top" />

      <div
        className="pointer-events-none absolute -top-8 right-0 h-72 w-72 translate-x-1/4 rounded-full bg-[#DBEAFE]/70 blur-3xl"
        aria-hidden
      />

      <Container className="relative z-10">
        <RevealOnScroll>
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.16em] text-[#1E60FF] uppercase">
              <span className="inline-block h-px w-6 bg-[#1E60FF]" aria-hidden />
              {home.testimonials.eyebrow}
            </p>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-[#051937] md:text-4xl lg:text-[2.75rem]">
              {home.testimonials.headline}{" "}
              <span className="hero-gradient-text">
                {home.testimonials.headlineAccent}
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#64748B] md:text-lg">
              {home.testimonials.support}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {home.testimonials.items.map((item, i) => (
              <blockquote
                key={item.name}
                className="flex h-full flex-col rounded-[1.35rem] bg-white p-7 shadow-[0_16px_40px_rgba(5,25,55,0.08)] md:rounded-[1.5rem] md:p-8"
              >
                <span
                  className="font-display text-5xl leading-none text-[#BFDBFE] select-none"
                  aria-hidden
                >
                  “
                </span>
                <p className="mt-4 flex-1 text-base leading-relaxed text-[#051937] md:text-[1.05rem]">
                  {item.quote}
                </p>
                <footer className="mt-8 flex items-center gap-3">
                  <span
                    className={cn(
                      "grid size-11 shrink-0 place-items-center rounded-full text-sm font-bold text-white",
                      avatarTones[i % avatarTones.length],
                    )}
                  >
                    {item.initials}
                  </span>
                  <div>
                    <cite className="not-italic text-sm font-bold text-[#051937]">
                      {item.name}
                    </cite>
                    <p className="mt-0.5 text-sm text-[#64748B]">
                      {item.title}, {item.company}
                    </p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
