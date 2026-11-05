"use client";

import React, { useState, useEffect } from "react";
import { Cookie, Shield, Check, X, ChevronRight, Settings } from "lucide-react";

export interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
  version: string;
}

const STORAGE_KEY = "yedii_cookie_consent_v1";

export function CookieConsentManager() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
    timestamp: "",
    version: "1.0",
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Show consent banner after brief delay on first visit
      const timer = setTimeout(() => setIsOpen(true), 1200);
      return () => clearTimeout(timer);
    } else {
      try {
        setPreferences(JSON.parse(stored));
      } catch {
        setIsOpen(true);
      }
    }
  }, []);

  // Listen for open requests (e.g. from footer button)
  useEffect(() => {
    const handleOpenCookieSettings = () => {
      setShowCustomize(true);
      setIsOpen(true);
    };

    window.addEventListener("yedii:open_cookie_settings", handleOpenCookieSettings);
    return () => {
      window.removeEventListener("yedii:open_cookie_settings", handleOpenCookieSettings);
    };
  }, []);

  const saveConsent = (updated: CookiePreferences) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setPreferences(updated);
    setIsOpen(false);
    setShowCustomize(false);

    // Dispatch event for analytics scripts
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("yedii:cookie_consent_updated", { detail: updated }),
      );
    }

    // Async sync with backend (non-blocking)
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
      fetch(`${apiUrl}/api/v1/legal/cookie-consent`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          necessary: true,
          functional: updated.functional,
          analytics: updated.analytics,
          marketing: updated.marketing,
          consentVersion: updated.version,
        }),
      }).catch(() => {
        // Ignore backend errors in public anonymous context
      });
    } catch {
      // Ignore
    }
  };

  const handleAcceptAll = () => {
    saveConsent({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
      version: "1.0",
    });
  };

  const handleRejectOptional = () => {
    saveConsent({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
      version: "1.0",
    });
  };

  const handleSavePreferences = () => {
    saveConsent({
      ...preferences,
      necessary: true,
      timestamp: new Date().toISOString(),
    });
  };

  if (!isMounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-modal-title"
        className="w-full max-w-lg bg-[#0F0F11] text-zinc-200 border border-[#27272A] rounded-2xl shadow-2xl overflow-hidden p-6 space-y-5"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-zinc-800 text-white">
              <Cookie className="w-5 h-5" />
            </div>
            <div>
              <h3 id="cookie-modal-title" className="text-base font-semibold text-white">
                Privacy &amp; Cookie Preferences
              </h3>
              <p className="text-xs text-zinc-400">
                We respect your data privacy and control choices.
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cookie banner"
            className="text-zinc-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {!showCustomize ? (
          // Simple View
          <div className="space-y-4">
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Yedii uses strictly necessary cookies to keep you signed in securely and protect our infrastructure. We also use optional analytics and functional cookies to measure platform performance and enhance your user experience.
            </p>
            <div className="text-xs text-zinc-400">
              Read our full{" "}
              <a href="/legal/cookie-policy" className="underline text-white hover:text-zinc-200">
                Cookie Policy
              </a>{" "}
              and{" "}
              <a href="/legal/privacy-policy" className="underline text-white hover:text-zinc-200">
                Privacy Policy
              </a>
              .
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setShowCustomize(true)}
                className="px-4 py-2 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-lg transition-colors cursor-pointer text-center"
              >
                Customize
              </button>
              <button
                type="button"
                onClick={handleRejectOptional}
                className="px-4 py-2 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-lg transition-colors cursor-pointer text-center"
              >
                Reject Optional
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="px-4 py-2 text-xs font-medium text-black bg-white hover:bg-zinc-200 rounded-lg transition-colors cursor-pointer text-center font-semibold"
              >
                Accept All
              </button>
            </div>
          </div>
        ) : (
          // Detailed Customization View
          <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
            {/* Category 1: Strictly Necessary */}
            <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-zinc-400" />
                  Strictly Necessary (Always Active)
                </span>
                <span className="text-[11px] font-mono text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded">
                  Required
                </span>
              </div>
              <p className="text-[11px] text-zinc-400">
                Essential for core authentication, session management, CSRF prevention, and platform security. Cannot be disabled.
              </p>
            </div>

            {/* Category 2: Functional */}
            <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-white">Functional Cookies</span>
                <input
                  type="checkbox"
                  checked={preferences.functional}
                  onChange={(e) =>
                    setPreferences((prev) => ({ ...prev, functional: e.target.checked }))
                  }
                  className="w-4 h-4 rounded bg-zinc-800 border-zinc-700 text-white focus:ring-0 cursor-pointer accent-white"
                />
              </div>
              <p className="text-[11px] text-zinc-400">
                Remembers your selected workspace, interface customization, language preferences, and state.
              </p>
            </div>

            {/* Category 3: Analytics */}
            <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-white">Analytics Cookies</span>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    setPreferences((prev) => ({ ...prev, analytics: e.target.checked }))
                  }
                  className="w-4 h-4 rounded bg-zinc-800 border-zinc-700 text-white focus:ring-0 cursor-pointer accent-white"
                />
              </div>
              <p className="text-[11px] text-zinc-400">
                Aggregates anonymous usage statistics, vector retrieval latencies, and interaction volume to improve platform performance.
              </p>
            </div>

            {/* Category 4: Marketing */}
            <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-white">Marketing Cookies</span>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) =>
                    setPreferences((prev) => ({ ...prev, marketing: e.target.checked }))
                  }
                  className="w-4 h-4 rounded bg-zinc-800 border-zinc-700 text-white focus:ring-0 cursor-pointer accent-white"
                />
              </div>
              <p className="text-[11px] text-zinc-400">
                Used to deliver relevant product announcements and updates on third-party channels.
              </p>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => setShowCustomize(false)}
                className="text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                &larr; Back
              </button>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleRejectOptional}
                  className="px-3.5 py-1.5 text-xs text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-lg transition-colors cursor-pointer"
                >
                  Reject All
                </button>
                <button
                  type="button"
                  onClick={handleSavePreferences}
                  className="px-3.5 py-1.5 text-xs font-medium text-black bg-white hover:bg-zinc-200 rounded-lg transition-colors cursor-pointer font-semibold"
                >
                  Save Choices
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
