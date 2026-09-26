"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { contactPage } from "@/content/contact";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

type NeedId = (typeof contactPage.needs)[number]["id"];
type Timeline = (typeof contactPage.timelines)[number];

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [need, setNeed] = useState<NeedId>("Both");
  const [timeline, setTimeline] = useState<Timeline>("Within 30 days");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "fallback">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setStatus("sending");

    const payload = { name, email, company, role, need, timeline, message };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => null)) as
        | { ok?: boolean; mode?: string; error?: string }
        | null;

      if (res.ok && data?.ok && data.mode === "email") {
        setStatus("sent");
        setName("");
        setEmail("");
        setCompany("");
        setRole("");
        setNeed("Both");
        setTimeline("Within 30 days");
        setMessage("");
        return;
      }

      if (!res.ok && data?.error) {
        setError(data.error);
        setStatus("idle");
        return;
      }
    } catch {
      // Fall through to mailto.
    }

    const subject = encodeURIComponent(
      `TalentTekPro inquiry: ${need} / ${company || "No company"}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company}`,
        `Role: ${role}`,
        `Need: ${need}`,
        `Timeline: ${timeline}`,
        "",
        "Project brief:",
        message,
      ].join("\n"),
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("fallback");
  }

  const field =
    "w-full rounded-xl border border-[#D7E4F0] bg-white px-4 py-3.5 text-sm text-[#051937] outline-none transition-[border-color,box-shadow] placeholder:text-[#94A3B8] focus:border-[#1E60FF]/50 focus:shadow-[0_0_0_3px_rgba(30,96,255,0.08)]";

  if (status === "sent") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-[#1E60FF]/15 bg-[#F8FBFE] px-6 py-8">
        <span className="grid size-11 place-items-center rounded-full bg-[#EFF6FF] text-[#1E60FF]">
          <CheckCircle2 className="size-5" aria-hidden />
        </span>
        <div>
          <p className="font-display text-xl font-semibold tracking-tight text-[#051937]">
            Brief received.
          </p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-[#64748B]">
            Thanks. A partner will review your {need.toLowerCase()} inquiry and reply with
            next steps within 1–2 business days.
          </p>
        </div>
        <button
          type="button"
          className="text-sm font-medium text-[#1E60FF] transition-colors hover:text-[#3B7AFF]"
          onClick={() => setStatus("idle")}
        >
          Submit another brief
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-2 block font-medium text-[#334155]">
            {contactPage.fields.name}
          </span>
          <input
            required
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={field}
            autoComplete="name"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-2 block font-medium text-[#334155]">
            {contactPage.fields.email}
          </span>
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={field}
            autoComplete="email"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-2 block font-medium text-[#334155]">
            {contactPage.fields.company}
          </span>
          <input
            required
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className={field}
            autoComplete="organization"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-2 block font-medium text-[#334155]">
            {contactPage.fields.role}
          </span>
          <input
            required
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="e.g. VP Engineering"
            className={field}
            autoComplete="organization-title"
          />
        </label>
      </div>

      <fieldset>
        <legend className="mb-3 text-sm font-medium text-[#334155]">
          {contactPage.fields.need}
        </legend>
        <div className="grid gap-3 sm:grid-cols-3">
          {contactPage.needs.map((option) => {
            const active = need === option.id;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setNeed(option.id)}
                className={cn(
                  "rounded-2xl border px-4 py-4 text-left transition-colors",
                  active
                    ? "border-[#1E60FF] bg-[#EFF6FF]"
                    : "border-[#D7E4F0] bg-white hover:border-[#1E60FF]/35",
                )}
              >
                <span
                  className={cn(
                    "block text-sm font-semibold",
                    active ? "text-[#1E60FF]" : "text-[#051937]",
                  )}
                >
                  {option.title}
                </span>
                <span className="mt-1.5 block text-xs leading-relaxed text-[#64748B]">
                  {option.description}
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-3 text-sm font-medium text-[#334155]">
          {contactPage.fields.timeline}
        </legend>
        <div className="flex flex-wrap gap-2">
          {contactPage.timelines.map((option) => {
            const active = timeline === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setTimeline(option)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "border-[#1E60FF] bg-[#051937] text-white"
                    : "border-[#D7E4F0] bg-white text-[#64748B] hover:border-[#1E60FF]/35 hover:text-[#051937]",
                )}
              >
                {option}
              </button>
            );
          })}
        </div>
      </fieldset>

      <label className="block text-sm">
        <span className="mb-2 block font-medium text-[#334155]">
          {contactPage.fields.message}
        </span>
        <textarea
          required
          name="message"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Roles to fill, product goals, stack, constraints, and what success looks like in the next 90 days."
          className={cn(field, "min-h-[9rem] resize-y")}
        />
      </label>

      {error ? <p className="text-sm text-[#E25C5C]">{error}</p> : null}
      {status === "fallback" ? (
        <p className="text-sm leading-relaxed text-[#64748B]">
          Your email draft opened. Send it to {site.email} to complete the inquiry.
        </p>
      ) : null}

      <div className="flex flex-col gap-3 border-t border-[#D7E4F0] pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-relaxed text-[#94A3B8]">
          By submitting, you agree we may reply about your inquiry. We don’t share briefs with
          third parties.
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="ttp-btn-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : contactPage.fields.submit}
          {status !== "sending" ? <ArrowRight className="size-4" aria-hidden /> : null}
        </button>
      </div>
    </form>
  );
}
