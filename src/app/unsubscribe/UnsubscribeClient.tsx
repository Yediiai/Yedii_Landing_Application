"use client";

import { useState, useSyncExternalStore, type FormEvent } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, MailX } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  getStoredNewsletterEmail,
  isValidEmail,
  normalizeEmail,
  submitNewsletterAction,
} from "@/lib/newsletter";

type UnsubscribeStatus = "idle" | "submitting" | "success" | "error";

function subscribeNoop() {
  return () => {};
}

function getInitialEmailSnapshot(): string {
  if (typeof window === "undefined") return "";
  const queryEmail = new URLSearchParams(window.location.search).get("email");
  if (queryEmail && isValidEmail(queryEmail)) {
    return normalizeEmail(queryEmail);
  }
  return getStoredNewsletterEmail() ?? "";
}

/** Client view for opting out of Yedii marketing communications. */
export function UnsubscribeClient() {
  const prefilledEmail = useSyncExternalStore(
    subscribeNoop,
    getInitialEmailSnapshot,
    () => "",
  );
  const [inputOverride, setInputOverride] = useState<string | null>(null);
  const [status, setStatus] = useState<UnsubscribeStatus>("idle");
  const [feedback, setFeedback] = useState("");
  const [unsubscribedEmail, setUnsubscribedEmail] = useState("");

  const email = inputOverride ?? prefilledEmail;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setStatus("error");
      setFeedback("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    setFeedback("");

    try {
      const result = await submitNewsletterAction(email, "unsubscribe");
      setUnsubscribedEmail(result.email);
      setInputOverride("");
      setStatus("success");
      setFeedback(result.message);
    } catch (err) {
      setStatus("error");
      setFeedback(
        err instanceof Error
          ? err.message
          : "Unable to process your request right now. Please try again.",
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#141C2E] flex flex-col font-sans selection:bg-[#141C2E] selection:text-white">
      <Navbar />

      <main className="flex-1 pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="w-full max-w-lg bg-white border border-[#E4E5E8] p-7 sm:p-9 shadow-xs">
          <div className="w-10 h-10 bg-[#141C2E]/5 border border-[#141C2E]/10 flex items-center justify-center mb-5">
            <MailX className="w-5 h-5 text-[#141C2E]" aria-hidden="true" />
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141C2E]">
            Manage email preferences
          </h1>
          <p className="mt-2.5 text-sm text-[#6B7280] leading-relaxed">
            Enter your work email below to unsubscribe from Yedii marketing communications, industry insights, product updates, and event invitations.
          </p>

          {status === "success" ? (
            <div
              role="status"
              className="mt-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2"
            >
              <div className="flex items-center gap-2 text-sm font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" aria-hidden="true" />
                <span>You&apos;ve been unsubscribed</span>
              </div>
              <p className="text-xs text-emerald-800 leading-relaxed">
                <strong>{unsubscribedEmail}</strong> will no longer receive marketing updates from Yedii. For account or privacy inquiries, review our{" "}
                <Link href="/legal/privacy-policy" className="underline font-medium">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-3">
              <div>
                <label
                  htmlFor="unsubscribe-email"
                  className="block text-xs font-semibold text-[#141C2E] mb-1.5"
                >
                  Email address
                </label>
                <input
                  id="unsubscribe-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setInputOverride(e.target.value);
                    if (status === "error") {
                      setStatus("idle");
                      setFeedback("");
                    }
                  }}
                  placeholder="Enter work email"
                  aria-invalid={status === "error"}
                  disabled={status === "submitting"}
                  className={`w-full h-[42px] px-3.5 bg-white border text-sm text-[#141C2E] placeholder:text-[#8A9099] focus:outline-none transition-colors ${
                    status === "error"
                      ? "border-red-500 focus:border-red-600"
                      : "border-[#D5D8DE] focus:border-[#141C2E]"
                  }`}
                />
              </div>

              {status === "error" && feedback && (
                <p role="alert" className="text-xs text-red-600">
                  {feedback}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full h-[42px] px-5 bg-[#141C2E] hover:bg-black text-white text-sm font-semibold transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Updating preferences..." : "Unsubscribe"}
              </button>
            </form>
          )}

          <div className="mt-6 pt-5 border-t border-[#E8E9EC] flex items-center justify-between text-xs text-[#6B7280]">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 font-medium text-[#141C2E] hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Back to Yedii</span>
            </Link>
            <Link href="/legal/privacy-policy" className="hover:text-[#141C2E] underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

