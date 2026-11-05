import { LEGAL_SEEDS, LegalSeedDocument } from './legal-seeds';

export interface LegalDocumentItem {
  key: string;
  slug: string;
  title: string;
  category: 'ESSENTIAL' | 'AI_DATA' | 'ENTERPRISE';
  description: string;
  jurisdiction: string;
  requiresAcceptance: boolean;
  isDownloadable: boolean;
  metaTitle: string;
  metaDescription: string;
  displayOrder: number;
  initialVersion: string;
  changeSummary: string;
  content: string;
  effectiveDate: string;
  lastUpdatedDate: string;
}

export const LEGAL_CATEGORIES = [
  { id: 'ESSENTIAL', title: 'Essential Policies', description: 'Core terms governing your account, privacy, and subscription.' },
  { id: 'AI_DATA', title: 'AI & Data Protection', description: 'Guarantees regarding LLMs, vector embeddings, and subprocessors.' },
  { id: 'ENTERPRISE', title: 'Enterprise & Contracts', description: 'Enterprise SLAs, master agreements, security breach and IP terms.' },
] as const;

export const ALL_LEGAL_DOCUMENTS: LegalDocumentItem[] = LEGAL_SEEDS.map((seed) => ({
  ...seed,
  category: seed.category as 'ESSENTIAL' | 'AI_DATA' | 'ENTERPRISE',
  effectiveDate: 'November 5, 2026',
  lastUpdatedDate: 'November 5, 2026',
}));

export function getLegalDocumentBySlug(slug: string): LegalDocumentItem | undefined {
  const normalized = slug.toLowerCase().trim();
  return ALL_LEGAL_DOCUMENTS.find(
    (doc) => doc.slug.toLowerCase() === normalized || doc.key.toLowerCase() === normalized,
  );
}

export function getRelatedLegalDocuments(currentSlug: string, count = 3): LegalDocumentItem[] {
  const current = getLegalDocumentBySlug(currentSlug);
  if (!current) return ALL_LEGAL_DOCUMENTS.slice(0, count);

  // Return documents from same category first, then others
  const sameCategory = ALL_LEGAL_DOCUMENTS.filter(
    (d) => d.slug !== current.slug && d.category === current.category,
  );
  const otherCategory = ALL_LEGAL_DOCUMENTS.filter(
    (d) => d.slug !== current.slug && d.category !== current.category,
  );

  return [...sameCategory, ...otherCategory].slice(0, count);
}
