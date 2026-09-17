import Link from "next/link";
import { Linkedin, Mail, Youtube } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { footerColumns, site } from "@/content/site";

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socialIcons = {
  LinkedIn: Linkedin,
  X: XIcon,
  YouTube: Youtube,
} as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white">
      <Container className="relative py-14 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          <div className="lg:border-r lg:border-black/8 lg:pr-10">
            <Logo
              size="footer"
              variant="mark"
              showWordmark
              wordmarkClassName="text-[#051937]"
            />
            <p className="mt-3 text-sm text-[#64748B]">{site.descriptor}</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#051937] transition-colors hover:text-[#1E60FF]"
            >
              <Mail className="size-4 text-[#1E60FF]" aria-hidden />
              {site.email}
            </a>
            <div className="mt-6 flex items-center gap-2.5">
              {site.social.map((item) => {
                const Icon = socialIcons[item.label as keyof typeof socialIcons];
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="grid size-9 place-items-center rounded-full border border-black/10 text-[#051937] transition-colors hover:border-[#1E60FF]/40 hover:text-[#1E60FF]"
                  >
                    {Icon ? <Icon className="size-3.5" /> : null}
                  </a>
                );
              })}
            </div>
          </div>

          <FooterCol title="Company" items={footerColumns.company} />
          <FooterCol title="Resources" items={footerColumns.resources} />
          <FooterCol title="Legal" items={footerColumns.legal} />
        </div>
      </Container>

      <div className="border-t border-black/8">
        <Container className="flex flex-col gap-3 py-5 text-sm text-[#94A3B8] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {site.copyrightYear} {site.legalName} All rights reserved.
          </p>
          <div className="flex gap-4">
            {footerColumns.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-[#051937]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: readonly { label: string; href: string }[];
}) {
  return (
    <div className="lg:border-r lg:border-black/8 lg:px-10 lg:last:border-r-0">
      <p className="text-xs font-semibold tracking-[0.14em] text-[#051937] uppercase">
        {title}
      </p>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm text-[#64748B] transition-colors hover:text-[#1E60FF]"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
