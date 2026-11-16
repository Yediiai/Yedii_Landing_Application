"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Cookie, Shield, X, Check } from "lucide-react";
import {
  CookiePreferences,
  COOKIE_CONSENT_STORAGE_KEY,
  COOKIE_CONSENT_EVENT,
  OPEN_COOKIE_SETTINGS_EVENT,
  CURRENT_CONSENT_VERSION,
  DEFAULT_PREFERENCES,
  getSavedCookiePreferences,
} from "@/lib/cookie-consent";

export { type CookiePreferences } from "@/lib/cookie-consent";

interface ToggleSwitchProps {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label: string;
}

function ToggleSwitch({ checked, onChange, disabled = false, label }: ToggleSwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => {
        if (!disabled && onChange) {
          onChange(!checked);
        }
      }}
      className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors duration-200 ease-in-out select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 ${
        disabled
          ? "bg-zinc-700/80 cursor-not-allowed opacity-90"
          : checked
          ? "bg-white cursor-pointer"
          : "bg-zinc-800 hover:bg-zinc-700 border border-zinc-700/80 cursor-pointer"
      }`}
      style={{ borderRadius: "9999px" }}
    >
      <span
        aria-hidden="true"
        className={`inline-block h-3.5 w-3.5 rounded-full shadow-sm transition-transform duration-200 ease-in-out pointer-events-none ${
          checked
            ? "translate-x-[18px] bg-zinc-950"
            : "translate-x-0.5 bg-zinc-400"
        }`}
        style={{ borderRadius: "9999px" }}
      />
    </button>
  );
}

export function CookieConsentManager() {
  const [isBannerOpen, setIsBannerOpen] = useState(false);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFERENCES);
  const [isMounted, setIsMounted] = useState(false);

  // Check saved preferences on mount
  useEffect(() => {
    setIsMounted(true);
    const saved = getSavedCookiePreferences();
    if (!saved) {
      // First visit: show subtle banner in bottom-right corner after slight delay
      const timer = setTimeout(() => {
        setIsBannerOpen(true);
      }, 700);
      return () => clearTimeout(timer);
    } else {
      setPreferences(saved);
    }
  }, []);

  // Listen for open requests (e.g. from footer "Cookie Settings" button)
  useEffect(() => {
    const handleOpenCookieSettings = () => {
      setIsBannerOpen(false);
      setIsPreferencesOpen(true);
    };

    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, handleOpenCookieSettings);
    return () => {
      window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, handleOpenCookieSettings);
    };
  }, []);

  // Close preferences modal on Escape key
  useEffect(() => {
    if (!isPreferencesOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsPreferencesOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPreferencesOpen]);

  // Persist consent choices
  const saveConsent = useCallback((updated: CookiePreferences) => {
    try {
      localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn("Unable to save cookie consent to localStorage:", e);
    }

    setPreferences(updated);
    setIsBannerOpen(false);
    setIsPreferencesOpen(false);

    // Dispatch global event for analytics and marketing script loaders
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent(COOKIE_CONSENT_EVENT, { detail: updated }),
      );
    }

    // Optional non-blocking sync with backend
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";
      if (apiUrl) {
        fetch(`${apiUrl}/api/v1/legal/cookie-consent`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            necessary: true,
            functional: updated.functional,
            analytics: updated.analytics,
            marketing: updated.marketing,
            consentVersion: updated.version,
            timestamp: updated.timestamp,
          }),
        }).catch(() => {
          // Ignore backend errors in anonymous context
        });
      }
    } catch {
      // Ignore
    }
  }, []);

  const handleAcceptAll = useCallback(() => {
    saveConsent({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
      version: CURRENT_CONSENT_VERSION,
    });
  }, [saveConsent]);

  const handleRejectOptional = useCallback(() => {
    saveConsent({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
      version: CURRENT_CONSENT_VERSION,
    });
  }, [saveConsent]);

  const handleSavePreferences = useCallback(() => {
    saveConsent({
      ...preferences,
      necessary: true,
      timestamp: new Date().toISOString(),
      version: CURRENT_CONSENT_VERSION,
    });
  }, [preferences, saveConsent]);

  if (!isMounted) return null;

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. INITIAL BOTTOM-RIGHT COOKIE CONSENT BANNER                             */}
      {/* (Non-blocking, no full-screen blur/backdrop, 20-24px from bottom-right)  */}
      {/* ========================================================================= */}
      {isBannerOpen && !isPreferencesOpen && (
        <aside
          role="region"
          aria-label="Privacy and Cookie Preferences"
          className="cookie-consent-scope fixed z-50 bottom-5 right-5 sm:bottom-6 sm:right-6 w-[calc(100vw-32px)] sm:w-[420px] max-w-[440px] bg-[#111113] text-zinc-200 border border-zinc-800/90 rounded-2xl shadow-[0_20px_45px_rgba(0,0,0,0.6)] p-5 animate-in fade-in slide-in-from-bottom-3 duration-300 pointer-events-auto"
          style={{ borderRadius: "16px" }}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div
                className="w-7 h-7 rounded-lg bg-zinc-850 border border-zinc-750 flex items-center justify-center text-zinc-300 shrink-0"
                style={{ borderRadius: "8px" }}
              >
                <Cookie className="w-4 h-4 text-zinc-300" />
              </div>
              <h3 className="text-[13.5px] sm:text-[14px] font-semibold tracking-tight text-white">
                Privacy &amp; Cookie Preferences
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setIsBannerOpen(false)}
              aria-label="Close cookie banner"
              className="text-zinc-400 hover:text-white p-1 rounded-md transition-colors cursor-pointer"
              style={{ borderRadius: "6px" }}
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Body Description */}
          <p className="text-[12.5px] text-zinc-400 leading-relaxed mt-2.5">
            We use cookies to improve your experience, analyze website usage, and provide relevant updates. You can manage your preferences at any time.
          </p>

          {/* Policy Links */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-zinc-500 mt-2.5">
            <span>Learn more:</span>
            <Link
              href="/legal/privacy-policy"
              className="text-zinc-400 hover:text-zinc-200 underline underline-offset-2 transition-colors"
            >
              Privacy Policy
            </Link>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <Link
              href="/legal/cookie-policy"
              className="text-zinc-400 hover:text-zinc-200 underline underline-offset-2 transition-colors"
            >
              Cookie Policy
            </Link>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <Link
              href="/legal/terms-of-service"
              className="text-zinc-400 hover:text-zinc-200 underline underline-offset-2 transition-colors"
            >
              Terms of Service
            </Link>
          </div>

          {/* Action Buttons: Reject All, Customize, Accept All */}
          <div className="flex items-center justify-between gap-2 pt-3.5 mt-3 border-t border-zinc-800/80">
            <button
              type="button"
              onClick={() => {
                setIsBannerOpen(false);
                setIsPreferencesOpen(true);
              }}
              className="text-[12px] font-medium text-zinc-400 hover:text-white underline-offset-4 hover:underline transition-colors cursor-pointer py-1.5 px-1"
            >
              Customize
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleRejectOptional}
                className="px-3 py-1.5 text-[12px] font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-750 hover:border-zinc-650 rounded-lg transition-all cursor-pointer shadow-xs active:scale-[0.98]"
                style={{ borderRadius: "8px" }}
              >
                Reject All
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="px-3.5 py-1.5 text-[12px] font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-lg transition-all cursor-pointer shadow-sm hover:shadow active:scale-[0.98]"
                style={{ borderRadius: "8px" }}
              >
                Accept All
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* ========================================================================= */}
      {/* 2. DETAILED COOKIE PREFERENCES MODAL                                      */}
      {/* (Opened on 'Customize' or via footer event 'yedii:open_cookie_settings')  */}
      {/* ========================================================================= */}
      {isPreferencesOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-preferences-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={(e) => {
            // Close when clicking directly on the backdrop
            if (e.target === e.currentTarget) {
              setIsPreferencesOpen(false);
            }
          }}
        >
          <div
            className="cookie-consent-scope w-full max-w-[500px] bg-[#111113] text-zinc-200 border border-zinc-800/90 rounded-2xl shadow-2xl overflow-hidden p-5 sm:p-6 space-y-4 animate-in zoom-in-95 duration-200"
            style={{ borderRadius: "16px" }}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 rounded-md bg-zinc-850 border border-zinc-750 flex items-center justify-center text-zinc-300"
                    style={{ borderRadius: "6px" }}
                  >
                    <Shield className="w-3.5 h-3.5 text-zinc-300" />
                  </div>
                  <h3
                    id="cookie-preferences-title"
                    className="text-base font-semibold text-white tracking-tight"
                  >
                    Privacy &amp; Cookie Preferences
                  </h3>
                </div>
                <p className="text-[12px] text-zinc-400 leading-normal">
                  Manage your cookie settings below. Strictly necessary cookies cannot be disabled.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsPreferencesOpen(false)}
                aria-label="Close preferences"
                className="text-zinc-400 hover:text-white p-1 rounded-md transition-colors cursor-pointer shrink-0"
                style={{ borderRadius: "6px" }}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Cookie Categories List */}
            <div className="space-y-2.5 max-h-[55vh] overflow-y-auto pr-1">
              {/* Category 1: Strictly Necessary */}
              <div
                className="p-3.5 rounded-xl bg-[#161619] border border-zinc-800/80 space-y-1.5"
                style={{ borderRadius: "12px" }}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[13px] font-medium text-white flex items-center gap-1.5">
                    Strictly Necessary Cookies
                  </span>
                  <div className="flex items-center gap-2">
                    <span
                      className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 bg-zinc-800/90 border border-zinc-700/60 px-2 py-0.5 rounded-md"
                      style={{ borderRadius: "6px" }}
                    >
                      Always Active
                    </span>
                    <ToggleSwitch
                      checked={true}
                      disabled={true}
                      label="Strictly Necessary Cookies (Always Active)"
                    />
                  </div>
                </div>
                <p className="text-[11.5px] text-zinc-400 leading-relaxed">
                  Essential for core authentication, session management, CSRF prevention, and platform security. Cannot be disabled.
                </p>
              </div>

              {/* Category 2: Functional Cookies */}
              <div
                className="p-3.5 rounded-xl bg-[#161619] border border-zinc-800/80 space-y-1.5"
                style={{ borderRadius: "12px" }}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[13px] font-medium text-white">
                    Functional Cookies
                  </span>
                  <ToggleSwitch
                    checked={preferences.functional}
                    onChange={(val) =>
                      setPreferences((prev) => ({ ...prev, functional: val }))
                    }
                    label="Functional Cookies"
                  />
                </div>
                <p className="text-[11.5px] text-zinc-400 leading-relaxed">
                  Remembers your selected workspace, interface customization, language preferences, and state.
                </p>
              </div>

              {/* Category 3: Analytics Cookies */}
              <div
                className="p-3.5 rounded-xl bg-[#161619] border border-zinc-800/80 space-y-1.5"
                style={{ borderRadius: "12px" }}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[13px] font-medium text-white">
                    Analytics Cookies
                  </span>
                  <ToggleSwitch
                    checked={preferences.analytics}
                    onChange={(val) =>
                      setPreferences((prev) => ({ ...prev, analytics: val }))
                    }
                    label="Analytics Cookies"
                  />
                </div>
                <p className="text-[11.5px] text-zinc-400 leading-relaxed">
                  Aggregates anonymous usage statistics, vector retrieval latencies, and interaction volume to improve platform performance.
                </p>
              </div>

              {/* Category 4: Marketing Cookies */}
              <div
                className="p-3.5 rounded-xl bg-[#161619] border border-zinc-800/80 space-y-1.5"
                style={{ borderRadius: "12px" }}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[13px] font-medium text-white">
                    Marketing Cookies
                  </span>
                  <ToggleSwitch
                    checked={preferences.marketing}
                    onChange={(val) =>
                      setPreferences((prev) => ({ ...prev, marketing: val }))
                    }
                    label="Marketing Cookies"
                  />
                </div>
                <p className="text-[11.5px] text-zinc-400 leading-relaxed">
                  Used to deliver relevant product announcements and updates on third-party channels.
                </p>
              </div>
            </div>

            {/* Legal Links Footer */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-zinc-500 pt-1 border-t border-zinc-800/80">
              <Link
                href="/legal/privacy-policy"
                className="hover:text-zinc-300 underline underline-offset-2 transition-colors"
              >
                Privacy Policy
              </Link>
              <span aria-hidden="true" className="text-zinc-650">·</span>
              <Link
                href="/legal/cookie-policy"
                className="hover:text-zinc-300 underline underline-offset-2 transition-colors"
              >
                Cookie Policy
              </Link>
              <span aria-hidden="true" className="text-zinc-650">·</span>
              <Link
                href="/legal/terms-of-service"
                className="hover:text-zinc-300 underline underline-offset-2 transition-colors"
              >
                Terms of Service
              </Link>
            </div>

            {/* Modal Actions: Reject Optional, Save My Preferences, Accept All */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 pt-2">
              <button
                type="button"
                onClick={handleRejectOptional}
                className="px-3.5 py-2 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-750 hover:border-zinc-650 rounded-lg transition-all cursor-pointer text-center active:scale-[0.98]"
                style={{ borderRadius: "8px" }}
              >
                Reject Optional
              </button>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleSavePreferences}
                  className="flex-1 sm:flex-none px-3.5 py-2 text-xs font-medium text-zinc-200 hover:text-white bg-zinc-850 hover:bg-zinc-800 border border-zinc-700/80 rounded-lg transition-all cursor-pointer text-center active:scale-[0.98]"
                  style={{ borderRadius: "8px" }}
                >
                  Save My Preferences
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="flex-1 sm:flex-none px-4 py-2 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-lg transition-all cursor-pointer text-center shadow-sm active:scale-[0.98]"
                  style={{ borderRadius: "8px" }}
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
