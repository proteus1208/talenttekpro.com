import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

type StubPageProps = {
  title: string;
  description?: string;
};

export function StubPage({ title, description }: StubPageProps) {
  return (
    <main className="bg-wash flex-1 py-28 md:py-36">
      <Container>
        <p className="font-mono text-xs tracking-widest text-faint uppercase">
          Coming next
        </p>
        <h1 className="font-display mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-text md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-muted">
          {description ??
            `Full ${title} page will ship next. The landing and chrome are live — content stays in typed modules for easy extension.`}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/">Back home</Button>
          <Button href="/contact" variant="secondary">
            Contact {site.name}
          </Button>
        </div>
        <p className="mt-10 text-sm text-faint">
          <Link href="mailto:contact@talenttekpro.com" className="text-teal hover:underline">
            contact@talenttekpro.com
          </Link>
        </p>
      </Container>
    </main>
  );
}
