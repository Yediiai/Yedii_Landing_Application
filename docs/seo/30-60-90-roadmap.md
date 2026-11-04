# Yedii SEO Strategy: 30 / 60 / 90 Day Roadmap

This document outlines the tactical and strategic steps to establish high discoverability, build organic search authority, and drive qualified leads for **Yedii** (`https://www.yedii.com`).

---

## 30-Day Focus: Technical Foundation & Brand SERP Ownership (P0 / P1)

### Technical Hygiene
- [x] Implement Next.js 16 metadata architecture across all static routes
- [x] Fix server/client split on interactive pages (`/customers`, `/enterprise`)
- [x] Implement dynamic `robots.ts` and `sitemap.ts`
- [x] Add Organization and WebSite structured data (JSON-LD)
- [ ] Provide 1200×630px default social card at `public/og-default.png` (*Needs design asset*)
- [ ] Resolve footer 404 links: Add minimal stub pages or redirect them to relevant landing sections (*Requires confirmation*)
- [ ] Verify Google Search Console & Bing Webmaster Tools properties (Domain level preferred)

### Search Engine Setup & Indexation
- [ ] Submit `https://www.yedii.com/sitemap.xml` to Google Search Console
- [ ] Monitor index coverage and ensure all 4 public routes index with 200 OK
- [ ] Configure IndexNow API key for instant Bing / Yandex submission on deployment

### Brand SERP
- [ ] Claim and link brand profiles (Twitter/X, LinkedIn, GitHub, YouTube) into `sameAs` schema in `layout.tsx`
- [ ] Create Google Business Profile if physical presence/local entity applies

---

## 60-Day Focus: Topical Authority & Comparison Strategy (P1 / P2)

### Bottom-of-Funnel (BOFU) Comparison Content
- [ ] Build high-intent vs pages:
  - `/compare/intercom-fin`
  - `/compare/zendesk-ai`
  - `/compare/tidio`
  - `/compare/chatbase`
- [ ] Include detailed feature-by-feature matrix, pricing transparency, and data isolation guarantees

### Solutions & Use Cases (MOFU)
- [ ] Build dedicated solution landing pages referenced in footer:
  - `/solutions/ecommerce-support-ai`
  - `/solutions/fintech-compliance-support`
  - `/solutions/developer-support-mcp`
- [ ] Add `SoftwareApplication` and `FAQPage` JSON-LD schema to these pages

### AI Answer Engine Optimization (GEO/AEO)
- [ ] Structure all product answers in concise, factual summaries that LLM crawlers (Perplexity, GPTBot, ClaudeBot) easily extract
- [ ] Provide an `llms.txt` file at the root documenting product specifications, architecture, and capabilities for AI agents

---

## 90-Day Focus: Content Velocity & Technical Scale (P2 / P3)

### Blog & Thought Leadership (TOFU)
- [ ] Set up Next.js content pipeline (MDX or headless CMS) for `/blog`
- [ ] Publish educational content targeting core problem queries:
  - "How to stop customer support AI hallucinations"
  - "Zero data retention AI architecture for enterprise"
  - "Model Context Protocol (MCP) in customer support"
- [ ] Add `Article` and `BreadcrumbList` structured data to all blog posts

### Performance & Core Web Vitals (CWV)
- [ ] Maintain sub-second LCP (Largest Contentful Paint) and 0 CLS (Cumulative Layout Shift)
- [ ] Monitor real-user metrics (CrUX) once organic traffic starts flowing
- [ ] Audit third-party script loading (chatbots, analytics) to ensure no render blocking

---

## Summary of Milestones

| Milestone | Target Horizon | Core KPI |
|-----------|----------------|----------|
| Full indexation of core pages | Day 15 | 100% valid pages indexed in GSC |
| Brand SERP rank #1 for "Yedii" | Day 30 | #1 ranking for brand queries |
| Comparison pages live | Day 60 | Impressions for "Yedii vs [Competitor]" |
| Top 10 rankings for niche long-tail terms | Day 90 | Qualified organic demo requests & signups |

