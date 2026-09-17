"use client";

import { useState } from "react";
import { contactPage } from "@/content/contact";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [need, setNeed] = useState<(typeof contactPage.needs)[number]>("Both");
  const [message, setMessage] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `TalentTekPro inquiry — ${need} — ${company || "No company"}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company}`,
        `Need: ${need}`,
        "",
        message,
      ].join("\n"),
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  const field =
    "w-full rounded-sm border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-faint focus:border-border-strong";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-2 block text-muted">{contactPage.fields.name}</span>
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
          <span className="mb-2 block text-muted">{contactPage.fields.email}</span>
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
      <label className="block text-sm">
        <span className="mb-2 block text-muted">{contactPage.fields.company}</span>
        <input
          name="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className={field}
          autoComplete="organization"
        />
      </label>
      <fieldset>
        <legend className="mb-2 text-sm text-muted">{contactPage.fields.need}</legend>
        <div className="flex flex-wrap gap-2">
          {contactPage.needs.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setNeed(option)}
              className={cn(
                "rounded-sm border px-4 py-2 text-sm transition-colors",
                need === option
                  ? "border-border-strong bg-surface text-teal"
                  : "border-border text-muted hover:border-border-strong hover:text-text",
              )}
            >
              {option}
            </button>
          ))}
        </div>
      </fieldset>
      <label className="block text-sm">
        <span className="mb-2 block text-muted">{contactPage.fields.message}</span>
        <textarea
          required
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={cn(field, "resize-y")}
        />
      </label>
      <button type="submit" className="ttp-btn-primary rounded-sm px-5 py-2.5 text-sm font-semibold">
        {contactPage.fields.submit}
      </button>
    </form>
  );
}
