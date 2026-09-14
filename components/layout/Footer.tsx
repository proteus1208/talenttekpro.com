import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerColumns, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink">
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg font-semibold text-text">
              {site.name}
            </p>
            <p className="mt-2 text-sm text-muted">{site.descriptor}</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block text-sm text-teal hover:underline"
            >
              {site.email}
            </a>
          </div>

          <FooterCol title="Company" items={footerColumns.company} />
          <FooterCol title="Resources" items={footerColumns.resources} />
          <FooterCol title="Legal" items={footerColumns.legal} />
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col gap-3 py-5 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {site.copyrightYear} {site.legalName} All rights reserved.
          </p>
          <div className="flex gap-4">
            {footerColumns.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-muted transition-colors"
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
      <p className="text-sm font-medium text-text">{title}</p>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-teal"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
