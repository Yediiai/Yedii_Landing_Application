export type NewsletterAction = "subscribe" | "unsubscribe";

export interface NewsletterResponse {
  ok: boolean;
  email: string;
  action: NewsletterAction;
  message: string;
}

export const NEWSLETTER_STORAGE_KEY = "yedii_newsletter_subscription";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Normalizes user-provided email input before validation or persistence. */
export function normalizeEmail(value: string): string {
  return value.trim().toLowerCase();
}

/** Validates basic email syntax and RFC maximum address length. */
export function isValidEmail(value: string): boolean {
  const normalized = normalizeEmail(value);
  return normalized.length > 0 && normalized.length <= 254 && EMAIL_REGEX.test(normalized);
}

/** Reads the previously subscribed email stored locally in the browser, if any. */
export function getStoredNewsletterEmail(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(NEWSLETTER_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { email?: unknown };
    return typeof parsed.email === "string" && isValidEmail(parsed.email) ? parsed.email : null;
  } catch {
    return null;
  }
}

/** Submits a subscribe or unsubscribe request to the newsletter API and updates local browser state. */
export async function submitNewsletterAction(
  email: string,
  action: NewsletterAction,
): Promise<NewsletterResponse> {
  const normalized = normalizeEmail(email);

  const response = await fetch("/api/newsletter", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: normalized, action }),
  });

  const data = (await response.json().catch(() => ({}))) as Partial<NewsletterResponse> & {
    error?: string;
  };

  if (!response.ok) {
    throw new Error(data.error || "Unable to update email preferences right now. Please try again.");
  }

  if (typeof window !== "undefined") {
    try {
      if (action === "subscribe") {
        window.localStorage.setItem(
          NEWSLETTER_STORAGE_KEY,
          JSON.stringify({ email: normalized, subscribedAt: new Date().toISOString() }),
        );
      } else {
        window.localStorage.removeItem(NEWSLETTER_STORAGE_KEY);
      }
    } catch {
      // Ignore storage failures in restricted browsing contexts.
    }
  }

  return {
    ok: true,
    email: data.email || normalized,
    action,
    message:
      data.message ||
      (action === "subscribe"
        ? "You're subscribed to industry insights and updates from Yedii."
        : "You have been unsubscribed from Yedii marketing emails."),
  };
}

