"use client";

import { useRef, useState } from "react";
import { FileUp, X } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

type CareerApplyFormProps = {
  roleTitle: string;
};

const ACCEPTED = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
] as const;

const ACCEPT_ATTR = ".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document";
const MAX_BYTES = 5 * 1024 * 1024;

function isAllowedResume(file: File) {
  const name = file.name.toLowerCase();
  const byExt = name.endsWith(".pdf") || name.endsWith(".doc") || name.endsWith(".docx");
  const byType = ACCEPTED.includes(file.type as (typeof ACCEPTED)[number]) || file.type === "";
  return byExt && byType;
}

export function CareerApplyForm({ roleTitle }: CareerApplyFormProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "fallback">("idle");

  function pickResume(file: File | null) {
    setError("");
    if (!file) {
      setResume(null);
      return;
    }
    if (!isAllowedResume(file)) {
      setResume(null);
      setError("Please upload a PDF or Word file (.pdf, .doc, .docx).");
      return;
    }
    if (file.size > MAX_BYTES) {
      setResume(null);
      setError("Résumé must be 5 MB or smaller.");
      return;
    }
    setResume(file);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!resume) {
      setError("Please upload your résumé.");
      return;
    }

    setStatus("sending");

    const formData = new FormData();
    formData.set("roleTitle", roleTitle);
    formData.set("name", name);
    formData.set("email", email);
    formData.set("linkedin", linkedin);
    formData.set("message", message);
    formData.set("resume", resume, resume.name);

    try {
      const res = await fetch("/api/careers/apply", {
        method: "POST",
        body: formData,
      });
      const data = (await res.json().catch(() => null)) as
        | { ok?: boolean; mode?: string; error?: string }
        | null;

      if (res.ok && data?.ok && data.mode === "email") {
        setStatus("sent");
        setName("");
        setEmail("");
        setLinkedin("");
        setMessage("");
        setResume(null);
        if (inputRef.current) inputRef.current.value = "";
        return;
      }

      if (!res.ok && data?.error) {
        setError(data.error);
        setStatus("idle");
        return;
      }
    } catch {
      // Fall through to mailto + local file hand-off.
    }

    // No mail provider configured: open a draft and keep the file ready to attach.
    const subject = encodeURIComponent(`Application: ${roleTitle}`);
    const body = encodeURIComponent(
      [
        `Role: ${roleTitle}`,
        `Name: ${name}`,
        `Email: ${email}`,
        `LinkedIn: ${linkedin}`,
        `Résumé file: ${resume.name}`,
        "",
        "Cover letter:",
        message,
        "",
        "Please attach the résumé file from this application.",
      ].join("\n"),
    );
    const objectUrl = URL.createObjectURL(resume);
    const a = document.createElement("a");
    a.href = objectUrl;
    a.download = resume.name;
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.setTimeout(() => URL.revokeObjectURL(objectUrl), 2000);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("fallback");
  }

  const field =
    "w-full rounded-sm border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-faint focus:border-border-strong";

  if (status === "sent") {
    return (
      <div className="rounded-sm border border-[#1E60FF]/20 bg-white px-4 py-5">
        <p className="text-sm font-medium text-[#051937]">Application sent.</p>
        <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
          Thanks. We received your résumé and will reply with next steps.
        </p>
        <button
          type="button"
          className="mt-4 text-sm font-medium text-[#1E60FF] hover:underline"
          onClick={() => setStatus("idle")}
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-2 block text-muted">Full name</span>
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
          <span className="mb-2 block text-muted">Email</span>
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
        <span className="mb-2 block text-muted">LinkedIn profile URL</span>
        <input
          required
          type="url"
          name="linkedin"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
          placeholder="https://linkedin.com/in/…"
          className={field}
        />
      </label>

      <div className="block text-sm">
        <span className="mb-2 block text-muted">Résumé</span>
        <input
          ref={inputRef}
          required={!resume}
          type="file"
          name="resume"
          accept={ACCEPT_ATTR}
          className="sr-only"
          onChange={(e) => pickResume(e.target.files?.[0] ?? null)}
        />
        {resume ? (
          <div className="flex items-center gap-3 rounded-sm border border-border bg-surface px-4 py-3">
            <FileUp className="size-4 shrink-0 text-[#1E60FF]" aria-hidden />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-[#051937]">{resume.name}</p>
              <p className="text-xs text-[#94A3B8]">
                {(resume.size / 1024).toFixed(0)} KB · PDF or Word
              </p>
            </div>
            <button
              type="button"
              aria-label="Remove résumé"
              className="grid size-8 shrink-0 place-items-center rounded-full text-[#94A3B8] transition-colors hover:bg-[#F1F5F9] hover:text-[#051937]"
              onClick={() => {
                setResume(null);
                if (inputRef.current) inputRef.current.value = "";
              }}
            >
              <X className="size-4" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="flex w-full flex-col items-center justify-center gap-2 rounded-sm border border-dashed border-border bg-surface px-4 py-8 text-center transition-colors hover:border-border-strong hover:bg-white"
          >
            <span className="grid size-10 place-items-center rounded-full bg-[#EFF6FF] text-[#1E60FF]">
              <FileUp className="size-5" aria-hidden />
            </span>
            <span className="text-sm font-medium text-[#051937]">Upload résumé</span>
            <span className="text-xs text-[#94A3B8]">PDF, DOC, or DOCX · up to 5 MB</span>
          </button>
        )}
      </div>

      <label className="block text-sm">
        <span className="mb-2 block text-muted">Cover letter</span>
        <textarea
          required
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Why this role, and what you want to be known for."
          className={cn(field, "resize-y")}
        />
      </label>

      {error ? <p className="text-sm text-[#E25C5C]">{error}</p> : null}
      {status === "fallback" ? (
        <p className="text-sm leading-relaxed text-[#64748B]">
          Your résumé downloaded and an email draft opened. Attach that file in the draft, then
          send to {site.email}.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="ttp-btn-primary rounded-full px-5 py-2.5 text-sm font-semibold disabled:opacity-60"
      >
        {status === "sending" ? "Submitting…" : "Submit application →"}
      </button>
    </form>
  );
}
