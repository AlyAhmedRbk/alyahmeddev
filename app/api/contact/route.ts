import { NextResponse } from "next/server";
import { contactSchema, deliverContact, rateLimit } from "@/lib/contact";

export async function POST(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const key = forwarded || "local";

  if (!rateLimit(key)) {
    return NextResponse.json(
      {
        ok: false,
        delivered: false,
        message: "Too many messages from this network. Email alyahmedrbk@gmail.com instead.",
      },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, delivered: false, message: "The form payload could not be read." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0];
      if (typeof field === "string" && !fieldErrors[field]) {
        fieldErrors[field] = issue.message;
      }
    }
    return NextResponse.json(
      {
        ok: false,
        delivered: false,
        message: "Check the highlighted fields.",
        fieldErrors,
      },
      { status: 400 },
    );
  }

  try {
    const result = await deliverContact(parsed.data);
    return NextResponse.json(result, { status: result.ok ? 200 : 502 });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        delivered: false,
        message: "The message could not be delivered. Email alyahmedrbk@gmail.com directly.",
      },
      { status: 502 },
    );
  }
}
