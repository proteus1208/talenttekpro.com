import { NextResponse } from "next/server";
import { site } from "@/content/site";

export const runtime = "nodejs";

const MAX_BYTES = 5 * 1024 * 1024;
const ALLOWED_EXT = new Set([".pdf", ".doc", ".docx"]);

function extensionOf(name: string) {
  const i = name.lastIndexOf(".");
  return i >= 0 ? name.slice(i).toLowerCase() : "";
}

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid form data." }, { status: 400 });
  }

  const roleTitle = String(form.get("roleTitle") ?? "").trim();
  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const linkedin = String(form.get("linkedin") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();
  const resume = form.get("resume");

  if (!roleTitle || !name || !email || !linkedin || !message) {
    return NextResponse.json(
      { ok: false, error: "Name, email, LinkedIn, cover letter, and role are required." },
      { status: 400 },
    );
  }

  if (!(resume instanceof File) || resume.size === 0) {
    return NextResponse.json({ ok: false, error: "Please upload your résumé." }, { status: 400 });
  }

  if (resume.size > MAX_BYTES) {
    return NextResponse.json(
      { ok: false, error: "Résumé must be 5 MB or smaller." },
      { status: 400 },
    );
  }

  if (!ALLOWED_EXT.has(extensionOf(resume.name))) {
    return NextResponse.json(
      { ok: false, error: "Please upload a PDF or Word file (.pdf, .doc, .docx)." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CAREERS_FROM_EMAIL ?? "TalentTekPro Careers <onboarding@resend.dev>";
  const to = process.env.CAREERS_TO_EMAIL ?? site.email;

  if (!apiKey) {
    return NextResponse.json({ ok: true, mode: "local" });
  }

  const bytes = Buffer.from(await resume.arrayBuffer());
  const text = [
    `Role: ${roleTitle}`,
    `Name: ${name}`,
    `Email: ${email}`,
    `LinkedIn: ${linkedin}`,
    `Résumé: ${resume.name}`,
    "",
    "Cover letter:",
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
      subject: `Application: ${roleTitle}`,
      text,
      attachments: [
        {
          filename: resume.name,
          content: bytes.toString("base64"),
        },
      ],
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("Careers apply email failed:", res.status, detail);
    return NextResponse.json(
      { ok: false, error: "Could not send your application. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, mode: "email" });
}
