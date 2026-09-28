import { z } from "zod";
import { projectTypes } from "@/data/profile";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name should be at least 2 characters.").max(80),
  email: z.string().trim().email("Enter a valid email address.").max(120),
  projectType: z.enum(projectTypes, { message: "Choose a topic." }),
  message: z
    .string()
    .trim()
    .min(20, "Add a little more detail, at least 20 characters.")
    .max(4000, "Keep the message under 4000 characters."),
  website: z.string().max(0, "Unable to send this message."),
});

export type ContactInput = z.infer<typeof contactSchema>;

export interface ContactResult {
  ok: boolean;
  delivered: boolean;
  message: string;
  fieldErrors?: Partial<Record<keyof ContactInput, string>>;
}

const hits = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(key: string, limit = 5, windowMs = 10 * 60 * 1000) {
  const now = Date.now();
  const current = hits.get(key);

  if (!current || current.resetAt < now) {
    hits.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (current.count >= limit) {
    return false;
  }

  current.count += 1;
  return true;
}

export async function deliverContact(input: ContactInput): Promise<ContactResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL || "alyahmedrbk@gmail.com";

  if (!apiKey || !from) {
    return {
      ok: true,
      delivered: false,
      message:
        "The message is valid, and email delivery is not configured on this deployment. Email alyahmedrbk@gmail.com directly and it will reach me.",
    };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: input.email,
      subject: `Portfolio inquiry: ${input.projectType}`,
      text: [`From: ${input.name} <${input.email}>`, `Project: ${input.projectType}`, "", input.message].join(
        "\n",
      ),
    }),
  });

  if (!response.ok) {
    return {
      ok: false,
      delivered: false,
      message: "The mail service rejected the message. Email alyahmedrbk@gmail.com directly.",
    };
  }

  return {
    ok: true,
    delivered: true,
    message: "Message sent. I will reply by email.",
  };
}
