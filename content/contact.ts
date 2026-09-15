export const contactPage = {
  metaTitle: "Contact | TalentTekPro",
  metaDescription:
    "Start a project or get a quote — talent, delivery, or both.",
  hero: {
    eyebrow: "Contact / Get a Quote",
    title: "Tell us what you need to hire — or ship.",
    support:
      "Share a short brief. We’ll reply with next steps for talent, delivery, or a hybrid engagement.",
  },
  needs: ["Talent", "Delivery", "Both"] as const,
  fields: {
    name: "Full name",
    email: "Work email",
    company: "Company",
    need: "What do you need?",
    message: "Message",
    submit: "Send message →",
  },
} as const;
