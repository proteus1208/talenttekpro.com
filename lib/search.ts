import { blogPage } from "@/content/blog";
import { projectCases } from "@/content/projects";
import { servicesPage } from "@/content/services";

export type SearchKind = "service" | "case-study" | "blog";

export type SearchHit = {
  kind: SearchKind;
  title: string;
  href: string;
  hint: string;
};

export const searchKindLabel: Record<SearchKind, string> = {
  service: "Services",
  "case-study": "Case studies",
  blog: "Articles",
};

type SearchRecord = SearchHit & {
  titleNorm: string;
  words: string[];
  stackWords: string[];
};

function tokenize(value: string) {
  return value
    .toLowerCase()
    .split(/[^a-z0-9+#]+/)
    .filter(Boolean);
}

function wordMatches(word: string, token: string) {
  if (token.length <= 2) return word === token;
  return word === token || word.startsWith(token) || (token.length >= 4 && word.includes(token));
}

function hasToken(words: string[], token: string) {
  return words.some((word) => wordMatches(word, token));
}

const catalog: SearchRecord[] = [
  ...servicesPage.disciplines.items.map((item) => ({
    kind: "service" as const,
    title: item.title,
    href: `/services#${item.id}`,
    hint: item.aim,
    titleNorm: item.title.toLowerCase(),
    words: tokenize([item.title, item.aim, ...item.bullets].join(" ")),
    stackWords: [],
  })),
  ...projectCases.map((item) => ({
    kind: "case-study" as const,
    title: item.title,
    href: `/projects/${item.slug}`,
    hint: item.stack.join(" · "),
    titleNorm: item.title.toLowerCase(),
    words: tokenize([item.title, item.type, item.summary, ...item.stack, ...item.filters].join(" ")),
    stackWords: tokenize(item.stack.join(" ")),
  })),
  ...blogPage.posts.map((item) => ({
    kind: "blog" as const,
    title: item.title,
    href: `/blog#${item.slug}`,
    hint: item.category,
    titleNorm: item.title.toLowerCase(),
    words: tokenize([item.title, item.category, item.excerpt].join(" ")),
    stackWords: [],
  })),
];

function scoreHit(record: SearchRecord, query: string, tokens: string[]) {
  if (!tokens.every((token) => hasToken(record.words, token))) return null;

  let score = 1;
  if (record.titleNorm.includes(query)) score += 6;
  if (record.titleNorm.startsWith(query)) score += 4;
  if (record.kind === "case-study" && tokens.some((token) => hasToken(record.stackWords, token))) {
    score += 10;
  }

  return { hit: record, score };
}

export function searchSite(query: string): SearchHit[] {
  const q = query.trim().toLowerCase();
  if (q.length < 1) return [];

  const tokens = q.split(/\s+/).filter(Boolean);
  const ranked = catalog
    .map((record) => scoreHit(record, q, tokens))
    .filter((entry): entry is { hit: SearchRecord; score: number } => entry !== null)
    .sort((a, b) => b.score - a.score || a.hit.title.localeCompare(b.hit.title));

  const grouped: SearchHit[] = [];
  const order: SearchKind[] = ["case-study", "service", "blog"];

  for (const kind of order) {
    let count = 0;
    for (const entry of ranked) {
      if (entry.hit.kind !== kind || count >= 3) continue;
      count += 1;
      grouped.push({
        kind: entry.hit.kind,
        title: entry.hit.title,
        href: entry.hit.href,
        hint: entry.hit.hint,
      });
    }
  }

  return grouped;
}
