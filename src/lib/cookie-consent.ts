export interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
  version: string;
}

export const COOKIE_CONSENT_STORAGE_KEY = "yedii_cookie_consent_v1";
export const COOKIE_CONSENT_EVENT = "yedii:cookie_consent_updated";
export const OPEN_COOKIE_SETTINGS_EVENT = "yedii:open_cookie_settings";
export const CURRENT_CONSENT_VERSION = "1.0";

export const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
  timestamp: "",
  version: CURRENT_CONSENT_VERSION,
};

/**
 * Retrieve saved cookie preferences from localStorage.
 * Returns null if the user has not yet submitted consent.
 */
export function getSavedCookiePreferences(): CookiePreferences | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed === "object" && parsed !== null && parsed.necessary === true) {
      return parsed as CookiePreferences;
    }
  } catch (err) {
    console.warn("Failed to parse cookie preferences:", err);
  }
  return null;
}

/**
 * Check if a specific cookie category is consented to.
 */
export function hasCookieConsent(category: keyof Omit<CookiePreferences, "timestamp" | "version">): boolean {
  if (category === "necessary") return true;
  const prefs = getSavedCookiePreferences();
  if (!prefs) return false;
  return Boolean(prefs[category]);
}

/**
 * Dispatch an open event to show the preferences panel.
 */
export function openCookiePreferences(): void {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(OPEN_COOKIE_SETTINGS_EVENT));
  }
}
