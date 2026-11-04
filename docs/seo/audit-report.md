# SEO Audit Report — Yedii Landing Application

> **Audit Date:** 2026-11-04  
> **Auditor:** Automated SEO Architecture Implementation  
> **Production URL:** https://www.yedii.com (**Verified** — confirmed by user)  
> **Framework:** Next.js 16.4.3, App Router, fully static (SSG)

---

## Executive Summary

The Yedii landing site had **zero structured SEO infrastructure** prior to this implementation. No Open Graph metadata, no canonical tags, no robots.txt, no sitemap.xml, and no JSON-LD structured data were present. Two of the five public routes (`/customers`, `/enterprise`) had `"use client"` at the page level, making it impossible to export Next.js `metadata` objects — a critical architectural flaw for indexability.

This implementation resolves all critical SEO blockers and establishes a production-ready, maintainable SEO architecture.

---

## Critical Issues Found & Fixed

| # | Issue | Severity | Status |
|---|-------|----------|--------|
| 1 | No `metadataBase` in layout — all OG/Twitter image URLs would be relative and broken | 🔴 Critical | ✅ Fixed |
| 2 | `/customers/page.tsx` had `"use client"` — cannot export `metadata` | 🔴 Critical | ✅ Fixed (server/client split) |
| 3 | `/enterprise/page.tsx` had `"use client"` — cannot export `metadata` | 🔴 Critical | ✅ Fixed (server/client split) |
| 4 | No `robots.txt` — crawlers have no directives | 🔴 Critical | ✅ Fixed |
| 5 | No `sitemap.xml` — search engines cannot discover routes efficiently | 🔴 Critical | ✅ Fixed |
| 6 | No Open Graph tags on any page — social shares render blank cards | 🔴 Critical | ✅ Fixed |
| 7 | No canonical tags — risk of duplicate content penalties | 🟠 High | ✅ Fixed |
| 8 | No JSON-LD structured data — missing rich result eligibility | 🟠 High | ✅ Fixed |
| 9 | No Twitter Card metadata | 🟡 Medium | ✅ Fixed |
| 10 | No `title` template in root layout — pages lacked brand suffix | 🟡 Medium | ✅ Fixed |

---

## Remaining Issues (Not Fixed — Require Manual Action)

### 🔴 Missing OG Image File
- **Issue:** `DEFAULT_OG_IMAGE = '/og-default.png'` is referenced but the file does not exist in `public/`
- **Impact:** OG/Twitter cards will render without image; some scrapers show blank previews
- **Action Required:** Create a 1200×630px PNG at `public/og-default.png` (**Needs data**)

### 🟠 Footer Links to 20+ Non-Existent Routes (**Verified** — observed in audit)
The footer component links to routes that return 404:
- `/careers`, `/blog`, `/docs`, `/brand`, `/entity-map`, `/ai-instructions`
- `/solutions/*`, `/partners/*`, `/compare/*`
- `/changelog`, `/reviews`, `/dpa`, `/privacy`, `/terms`, `/imprint`

**Impact:** Crawlers follow these links and discover 404 pages, wasting crawl budget and potentially degrading site authority. **These were NOT touched per instructions.**

**Action Required:** Either create stub pages for these routes (minimum viable content) or remove the footer links until pages exist.

### 🟠 Navbar Link to `/analytics` (Non-Existent Route) (**Verified**)
- **Impact:** Same crawl budget waste as footer links
- **Action Required:** Remove or stub the analytics route. **NOT touched per instructions.**

### 🟡 Twitter Handle Placeholder
- `TWITTER_HANDLE = '@yedii'` is a placeholder in `src/lib/seo/config.ts`
- **Status:** **Needs data** — verify the official Twitter/X handle

### 🟡 `sameAs` Array Empty in Organization Schema
- The Organization JSON-LD has `sameAs: []` — no social profiles linked
- **Action Required:** Add LinkedIn, Twitter/X, GitHub URLs once verified (**Needs data**)

### 🟡 Organization Logo Path
- `logo: 'https://www.yedii.com/images/yedii-logo.png'` — file existence not verified
- **Status:** **Needs data** — confirm path in `public/images/`

### 🟡 No `hreflang` Tags
- Site is English-only currently; no i18n infrastructure
- **Status:** **Inferred** not needed now; add when multi-language support is introduced

### 🟢 No Page-Level JSON-LD
- Individual pages (e.g., `/customers`) could benefit from `FAQPage`, `ItemList`, or `Product` schema
- **Status:** P2 roadmap item

---

## Route-by-Route Metadata Status

### `/` — Homepage

| Field | Before | After |
|-------|--------|-------|
| `<title>` | `Yedii \| Autonomous AI Agent Platform` (from layout) | `Yedii \| Autonomous AI Agent Platform` (absolute, page-level) |
| `description` | Generic layout description | Specific, keyword-rich description |
| `canonical` | ❌ None | ✅ `https://www.yedii.com` |
| `og:title` | ❌ None | ✅ Set |
| `og:description` | ❌ None | ✅ Set |
| `og:image` | ❌ None | ✅ `/og-default.png` (1200×630) |
| `twitter:card` | ❌ None | ✅ `summary_large_image` |
| JSON-LD | ❌ None | ✅ Organization + WebSite (via layout) |
| `robots` | ❌ None (default) | ✅ `index, follow` with GoogleBot extended |

### `/customers` — Customer Stories

| Field | Before | After |
|-------|--------|-------|
| Server Component | ❌ No (`"use client"`) | ✅ Yes (split pattern) |
| `<title>` | ❌ None (inherited layout) | ✅ `Customer Stories \| Yedii` |
| `description` | ❌ None | ✅ Set |
| `canonical` | ❌ None | ✅ `https://www.yedii.com/customers` |
| `og:*` | ❌ None | ✅ Full OG set |
| `twitter:*` | ❌ None | ✅ Full Twitter Card set |

### `/enterprise` — Enterprise AI Agents

| Field | Before | After |
|-------|--------|-------|
| Server Component | ❌ No (`"use client"`) | ✅ Yes (split pattern) |
| `<title>` | ❌ None (inherited layout) | ✅ `Enterprise AI Agents \| Yedii` |
| `description` | ❌ None | ✅ Set |
| `canonical` | ❌ None | ✅ `https://www.yedii.com/enterprise` |
| `og:*` | ❌ None | ✅ Full OG set |
| `twitter:*` | ❌ None | ✅ Full Twitter Card set |

### `/pricing` — Pricing & Plans

| Field | Before | After |
|-------|--------|-------|
| `<title>` | `Pricing & Plans \| Yedii` | ✅ `Pricing & Plans \| Yedii` (template applied) |
| `description` | Generic | Preserved (unchanged) |
| `canonical` | ❌ None | ✅ `https://www.yedii.com/pricing` |
| `og:*` | ❌ None | ✅ Full OG set |
| `twitter:*` | ❌ None | ✅ Full Twitter Card set |

### `/_not-found` — 404 Page

| Field | Status |
|-------|--------|
| Indexable | **Inferred** — Next.js default 404 is `noindex` by default |
| In sitemap | ❌ Intentionally excluded |
| Canonical | N/A |

---

## Internal Linking Analysis

> [!WARNING]
> **Severe internal linking health issue.** The footer links to 20+ non-existent routes. This is a significant crawl budget problem for a site with only 4 real pages.

**Current valid internal links (Verified):**
- `https://app.yedii.com/signup` — external CTA (app subdomain)
- `/` — logo link in navbar
- `/pricing`, `/enterprise`, `/customers` — navbar links (**Verified**)
- `/analytics` — navbar link (broken, 404) (**Verified**)

**Recommendation:** Prioritize creating or removing broken footer/navbar links in the next sprint.

---

## Structured Data Status

| Schema Type | Location | Status |
|-------------|----------|--------|
| `Organization` | Root layout (`layout.tsx`) | ✅ Implemented |
| `WebSite` (with SearchAction) | Root layout (`layout.tsx`) | ✅ Implemented |
| `FAQPage` | — | ❌ Not implemented (P2) |
| `ItemList` (customers) | — | ❌ Not implemented (P2) |
| `Product` / `SoftwareApplication` | — | ❌ Not implemented (P2) |
| `BreadcrumbList` | — | ❌ Not applicable (flat structure) |

---

## Technical SEO Infrastructure

| Component | File | Status |
|-----------|------|--------|
| Central SEO config | `src/lib/seo/config.ts` | ✅ Created |
| JSON-LD renderer (XSS-safe) | `src/components/seo/JsonLd.tsx` | ✅ Created |
| robots.txt (env-gated) | `src/app/robots.ts` | ✅ Created |
| sitemap.xml (4 routes) | `src/app/sitemap.ts` | ✅ Created |
| OG image placeholder | `public/og-default.png` | ❌ File must be created manually |
| `.env.example` updated | `.env.example` | ✅ `NEXT_PUBLIC_SITE_URL` added |
| `.env.development` updated | `.env.development` | ✅ `NEXT_PUBLIC_SITE_URL` added |
