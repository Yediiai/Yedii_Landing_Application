// src/lib/seo/config.ts
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.yedii.com';
export const SITE_NAME = 'Yedii';
export const SITE_DESCRIPTION =
  'Deploy production-grade conversational and workflow AI agents grounded on your company data. Automate customer support, sales, and operations with zero hallucination.';
export const DEFAULT_OG_IMAGE = '/og-default.png';
export const TWITTER_HANDLE = '@yedii'; // Needs data — placeholder
export const IS_PRODUCTION = process.env.NODE_ENV === 'production';
