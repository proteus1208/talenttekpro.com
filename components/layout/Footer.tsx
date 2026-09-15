import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { footerColumns, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black/8 bg-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: "url(/assets/imgs/Frame.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <Container className="relative py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo
              size="footer"
              variant="mark"
              showWordmark
              wordmarkClassName="text-[#051937]"
            />
            <p className="mt-3 text-sm text-[#64748B]">{site.descriptor}</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block text-sm font-medium text-[#1E60FF] hover:underline"
            >
              {site.email}
            </a>
          </div>

          <FooterCol title="Company" items={footerColumns.company} />
          <FooterCol title="Resources" items={footerColumns.resources} />
          <FooterCol title="Legal" items={footerColumns.legal} />
        </div>
      </Container>

      <div className="relative border-t border-black/8">
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
    <div>
      <p className="text-sm font-semibold text-[#051937]">{title}</p>
      <ul className="mt-4 space-y-2">
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
