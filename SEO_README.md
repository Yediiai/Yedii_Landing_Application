# Yedii SEO Architecture & Developer Guide

## Overview

This repository implements production-grade SEO architecture for the **Yedii** landing application (`https://www.yedii.com`), built on Next.js 16.4.3 (App Router) with full static site generation (SSG).

---

## Key Files & Structure

```
d:\Yedii_Landing_Application\
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root metadataBase, title template, default OG, JSON-LD
│   │   ├── page.tsx                # Homepage metadata & canonical
│   │   ├── customers/
│   │   │   ├── page.tsx            # Server Component exporting metadata
│   │   │   └── CustomersClient.tsx # Client Component containing interactive UI
│   │   ├── enterprise/
│   │   │   ├── page.tsx            # Server Component exporting metadata
│   │   │   └── EnterpriseClient.tsx# Client Component containing interactive UI & ROI calculator
│   │   ├── pricing/
│   │   │   └── page.tsx            # Pricing metadata, canonical, OG tags
│   │   ├── robots.ts               # Environment-gated crawler directives
│   │   └── sitemap.ts              # Canonical XML sitemap generation
│   ├── components/
│   │   └── seo/
│   │       └── JsonLd.tsx          # XSS-safe JSON-LD structured data renderer
│   └── lib/
│       └── seo/
│           └── config.ts           # Central SEO constants (SITE_URL, defaults)
├── docs/
│   └── seo/
│       ├── audit-report.md         # Comprehensive SEO audit & findings
│       ├── indexation-matrix.md    # Indexation rules for all routes
│       └── 30-60-90-roadmap.md     # Prioritized SEO roadmap
└── SEO_README.md                   # This file
```

---

## Architectural Rules & Standards

### 1. Server vs. Client Component Split for Metadata
In Next.js App Router, `metadata` and `generateMetadata()` **cannot** be exported from files containing `"use client"`.
When a page requires interactive React state or hooks:
- Keep `page.tsx` as a **Server Component** that exports `metadata` and renders `<XxxClient />`.
- Move the interactive client UI into `XxxClient.tsx` marked with `"use client"`.

### 2. Canonical URLs
Every indexable page must define an absolute self-referencing canonical URL:
```typescript
alternates: {
  canonical: `${SITE_URL}/your-route`,
}
```

### 3. Open Graph & Social Cards
Every page specifies page-specific titles, descriptions, and Open Graph objects using `DEFAULT_OG_IMAGE` fallback (`1200x630px`).

### 4. Environment-Gated Indexing
`src/app/robots.ts` checks `process.env.NODE_ENV`. Non-production environments automatically output `disallow: /` to prevent accidental staging indexation.

---

## Verification Commands

To check TypeScript, linting, and static build generation:

```bash
# Lint code (must pass with 0 errors, 0 warnings)
npm run lint

# Build production static bundle (verifies all routes compile statically)
npm run build
```

---

## Immediate Next Steps for the Team

1. **Add `public/og-default.png`**: Place a 1200×630 branded image for social link previews.
2. **Handle Footer 404 Links**: The footer contains links to non-existent pages (`/careers`, `/blog`, `/docs`, etc.). Create placeholder pages or adjust links to avoid crawl errors.
3. **Connect Search Console & Bing Webmaster**: Verify domain ownership using DNS records or meta tags.

