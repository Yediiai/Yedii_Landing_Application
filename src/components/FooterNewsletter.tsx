"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { isValidEmail, submitNewsletterAction } from "@/lib/newsletter";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

/** Email capture widget for Yedii product updates, industry insights, and events. */
export function FooterNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [feedback, setFeedback] = useState("");
  const [subscribedEmail, setSubscribedEmail] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setStatus("error");
      setFeedback("Please enter a valid work email address.");
      return;
    }

    setStatus("submitting");
    setFeedback("");

    try {
      const result = await submitNewsletterAction(email, "subscribe");
      setSubscribedEmail(result.email);
      setEmail("");
      setStatus("success");
      setFeedback(result.message);
    } catch (err) {
      setStatus("error");
      setFeedback(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  const unsubscribeHref = subscribedEmail
    ? `/unsubscribe?email=${encodeURIComponent(subscribedEmail)}`
    : "/unsubscribe";

  return (
    <div className="w-full">
      <h3 className="text-[18px] sm:text-[20px] font-bold text-white tracking-tight">
        Get industry insights and updates from Yedii
      </h3>

      {status === "success" ? (
        <div
          role="status"
          className="mt-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-3.5 py-2.5 bg-[#0D1912] border border-[#059669]/45 text-[13px] text-emerald-300"
        >
          <div className="flex items-center gap-2 min-w-0">
            <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" aria-hidden="true" />
            <span className="truncate">
              Subscribed <strong className="font-semibold text-white">{subscribedEmail}</strong> for Yedii updates.
            </span>
          </div>
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setFeedback("");
            }}
            className="text-[12px] font-medium text-[#A1A1AA] hover:text-white underline underline-offset-2 shrink-0 cursor-pointer text-left sm:text-right"
          >
            Add another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="mt-3.5">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") {
                  setStatus("idle");
                  setFeedback("");
                }
              }}
              placeholder="Enter work email"
              aria-label="Work email"
              aria-invalid={status === "error"}
              disabled={status === "submitting"}
              className={`w-full sm:flex-1 min-w-0 h-[40px] px-3.5 bg-[#111113] border text-[13.5px] text-white placeholder:text-[#8E8E93] focus:outline-none transition-colors disabled:opacity-60 ${
                status === "error"
                  ? "border-red-500/80 focus:border-red-400"
                  : "border-[#2C2C2E] focus:border-white"
              }`}
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="h-[40px] px-5 bg-white text-[#141C2E] hover:bg-zinc-200 text-[13.5px] font-semibold inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <span>{status === "submitting" ? "Subscribing..." : "Continue"}</span>
              <ChevronRight className="w-4 h-4 stroke-[2.25]" aria-hidden="true" />
            </button>
          </div>

          {status === "error" && feedback && (
            <p role="alert" className="mt-2 text-[12px] text-red-400">
              {feedback}
            </p>
          )}
        </form>
      )}

      <p className="mt-3 text-[12px] leading-[1.55] text-[#8E8E93]">
        Receive marketing communication from Yedii (including via automated systems) regarding product updates, industry news, and event invitations. You can{" "}
        <Link
          href={unsubscribeHref}
          className="underline underline-offset-2 text-[#A1A1AA] hover:text-white transition-colors"
        >
          unsubscribe
        </Link>{" "}
        at any time.{" "}
        <Link
          href="/legal/privacy-policy"
          className="underline underline-offset-2 text-[#A1A1AA] hover:text-white transition-colors"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}

