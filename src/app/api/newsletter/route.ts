import { NextResponse } from "next/server";
import { isValidEmail, normalizeEmail, type NewsletterAction } from "@/lib/newsletter";

function getConfiguredBackendUrl(): string | null {
  const candidate = process.env.YEDII_BACKEND_API_URL?.trim();
  if (!candidate || !/^https?:\/\//i.test(candidate)) {
    return null;
  }
  return candidate.replace(/\/$/, "");
}

export async function POST(request: Request) {
  let body: { email?: unknown; action?: unknown };
  try {
    body = (await request.json()) as { email?: unknown; action?: unknown };
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }

  if (typeof body.email !== "string" || !isValidEmail(body.email)) {
    return NextResponse.json(
      { error: "Please enter a valid work email address." },
      { status: 400 },
    );
  }

  const email = normalizeEmail(body.email);
  const action: NewsletterAction =
    body.action === "unsubscribe" ? "unsubscribe" : "subscribe";

  const backendUrl = getConfiguredBackendUrl();
  if (backendUrl) {
    // Best-effort sync with external backend when an HTTP base URL is configured.
    try {
      await fetch(`${backendUrl}/api/v1/newsletter/${action}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
        signal: AbortSignal.timeout(4000),
      });
    } catch {
      // Do not block landing-page opt-in/out if upstream marketing endpoint is unavailable.
    }
  }

  return NextResponse.json({
    ok: true,
    email,
    action,
    message:
      action === "subscribe"
        ? "You're subscribed to industry insights and updates from Yedii."
        : "You have been unsubscribed from Yedii marketing communications.",
  });
}

