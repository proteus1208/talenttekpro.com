import { NextResponse } from "next/server";
import { site } from "@/content/site";

export const runtime = "nodejs";

const NEEDS = new Set(["Talent", "Delivery", "Both"]);
const TIMELINES = new Set([
  "As soon as possible",
  "Within 30 days",
  "1–3 months",
  "Exploring options",
]);

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const company = String(data.company ?? "").trim();
  const role = String(data.role ?? "").trim();
  const need = String(data.need ?? "").trim();
  const timeline = String(data.timeline ?? "").trim();
  const message = String(data.message ?? "").trim();

  if (!name || !email || !company || !role || !need || !timeline || !message) {
    return NextResponse.json(
      {
        ok: false,
        error: "Name, work email, company, role, engagement type, timeline, and project brief are required.",
      },
      { status: 400 },
    );
  }

  if (!NEEDS.has(need)) {
    return NextResponse.json(
      { ok: false, error: "Select Talent, Delivery, or Hybrid." },
      { status: 400 },
    );
  }

  if (!TIMELINES.has(timeline)) {
    return NextResponse.json({ ok: false, error: "Select a valid timeline." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from =
    process.env.CONTACT_FROM_EMAIL ??
    process.env.CAREERS_FROM_EMAIL ??
    "TalentTekPro <onboarding@resend.dev>";
  const to = process.env.CONTACT_TO_EMAIL ?? process.env.CAREERS_TO_EMAIL ?? site.email;

  if (!apiKey) {
    return NextResponse.json({ ok: true, mode: "local" });
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company}`,
    `Role: ${role}`,
    `Need: ${need}`,
    `Timeline: ${timeline}`,
    "",
    "Project brief:",
    message,
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `TalentTekPro inquiry: ${need} / ${company}`,
      text,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("Contact form email failed:", res.status, detail);
    return NextResponse.json(
      { ok: false, error: "Could not send your message. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, mode: "email" });
}
