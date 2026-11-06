import { DocArticle, DocCategory, DocSectionKey, SearchResultItem } from './types';
import { PRODUCT_ARTICLES } from './product-docs';
import { DEVELOPER_ARTICLES } from './developer-docs';
import { LEARNING_ARTICLES } from './learning-center-docs';
import { API_ENDPOINTS } from './api-reference-data';

export * from './types';
export * from './api-reference-data';

export const ALL_DOC_ARTICLES: DocArticle[] = [
  ...PRODUCT_ARTICLES,
  ...DEVELOPER_ARTICLES,
  ...LEARNING_ARTICLES,
];

export const DOC_SECTIONS: {
  key: DocSectionKey;
  title: string;
  shortTitle: string;
  description: string;
  badge: string;
  href: string;
}[] = [
  {
    key: 'product',
    title: 'Product Documentation',
    shortTitle: 'Product Docs',
    description: 'Master the Yedii platform: setup workspaces, build AI agents, configure crawling, and manage retention.',
    badge: 'Customer Guides',
    href: '/docs/product',
  },
  {
    key: 'developer',
    title: 'Developer Documentation',
    shortTitle: 'Developer Docs',
    description: 'Integrate the chat widget into React & Next.js, explore real REST APIs, and handle secure webhooks.',
    badge: 'SDK & APIs',
    href: '/docs/developer',
  },
  {
    key: 'learning',
    title: 'Learning Center',
    shortTitle: 'Learning Center',
    description: 'Comprehensive tutorials, e-commerce use cases, prompt engineering best practices, and copy-paste templates.',
    badge: 'Guides & Use Cases',
    href: '/docs/learning',
  },
];

export const CATEGORIES_BY_SECTION: Record<DocSectionKey, DocCategory[]> = {
  product: [
    {
      id: 'getting-started',
      name: 'Getting Started',
      section: 'product',
      description: 'First steps, account setup, and quickstart paths for Yedii.',
      iconName: 'Rocket',
      order: 1,
      articleSlugs: [
        'getting-started/introduction-to-yedii',
        'getting-started/how-yedii-works',
        'getting-started/create-your-first-ai-agent',
        'getting-started/launch-your-first-chatbot',
      ],
    },
    {
      id: 'ai-agent-management',
      name: 'AI Agent Management',
      section: 'product',
      description: 'Personas, system instructions, LLM models, and fallback failovers.',
      iconName: 'Bot',
      order: 2,
      articleSlugs: [
        'ai-agent-management/system-instructions',
        'ai-agent-management/model-fallback-configuration',
      ],
    },
    {
      id: 'knowledge-base',
      name: 'Knowledge Base',
      section: 'product',
      description: 'Website crawling, XML sitemaps, and PDF document indexing.',
      iconName: 'Database',
      order: 3,
      articleSlugs: [
        'knowledge-base/website-crawling',
        'knowledge-base/pdf-uploads',
      ],
    },
    {
      id: 'chatbot-configuration',
      name: 'Chatbot Configuration',
      section: 'product',
      description: 'Colors, typography, launcher buttons, and layout modes.',
      iconName: 'Sliders',
      order: 4,
      articleSlugs: [
        'chatbot-configuration/widget-appearance',
      ],
    },
    {
      id: 'conversations',
      name: 'Conversations & Retention',
      section: 'product',
      description: 'Conversation tracking, inbox resolution, and automated retention.',
      iconName: 'MessageSquare',
      order: 5,
      articleSlugs: [
        'conversations/conversation-retention',
      ],
    },
    {
      id: 'workspace-and-team',
      name: 'Workspace & Team Management',
      section: 'product',
      description: 'RBAC permissions, member invitations, and organization settings.',
      iconName: 'Users',
      order: 6,
      articleSlugs: [
        'workspace-and-team/user-roles-and-permissions',
      ],
    },
    {
      id: 'usage-and-billing',
      name: 'Usage & Billing',
      section: 'product',
      description: 'AI credits, token consumption, Paddle checkout, and plans.',
      iconName: 'CreditCard',
      order: 7,
      articleSlugs: [
        'usage-and-billing/understanding-ai-credits',
      ],
    },
  ],
  developer: [
    {
      id: 'quickstart',
      name: 'Quick Start',
      section: 'developer',
      description: 'API conventions, environments, and token authentication.',
      iconName: 'Terminal',
      order: 1,
      articleSlugs: [
        'quickstart/developer-introduction',
        'quickstart/authentication-overview',
      ],
    },
    {
      id: 'widget-integration',
      name: 'Website Widget Integration',
      section: 'developer',
      description: 'HTML script, React component, Next.js script, and postMessage.',
      iconName: 'Code2',
      order: 2,
      articleSlugs: [
        'widget-integration/widget-overview',
      ],
    },
    {
      id: 'webhooks',
      name: 'Webhooks & Events',
      section: 'developer',
      description: 'HMAC signature verification and Paddle subscription webhooks.',
      iconName: 'Webhook',
      order: 3,
      articleSlugs: [
        'webhooks/paddle-and-event-webhooks',
      ],
    },
    {
      id: 'advanced-resources',
      name: 'Advanced Developer Resources',
      section: 'developer',
      description: 'Rate limits, error responses, pagination, and best practices.',
      iconName: 'ShieldAlert',
      order: 4,
      articleSlugs: [
        'advanced-resources/rate-limits-and-error-codes',
      ],
    },
  ],
  learning: [
    {
      id: 'tutorials',
      name: 'Tutorials',
      section: 'learning',
      description: 'Hands-on practical walkthroughs and step-by-step guides.',
      iconName: 'GraduationCap',
      order: 1,
      articleSlugs: [
        'tutorials/build-your-first-ai-support-agent',
        'tutorials/train-agent-using-website-content',
      ],
    },
    {
      id: 'use-cases',
      name: 'Use Cases',
      section: 'learning',
      description: 'Real-world customer workflows for e-commerce and SaaS.',
      iconName: 'Briefcase',
      order: 2,
      articleSlugs: [
        'use-cases/ecommerce-customer-support',
        'use-cases/saas-customer-support',
      ],
    },
    {
      id: 'best-practices',
      name: 'Best Practices',
      section: 'learning',
      description: 'Eliminating hallucinations and optimizing credit spend.',
      iconName: 'Sparkles',
      order: 3,
      articleSlugs: [
        'best-practices/reducing-hallucinations',
        'best-practices/optimizing-ai-credit-consumption',
      ],
    },
    {
      id: 'templates',
      name: 'Examples & Templates',
      section: 'learning',
      description: 'Production-ready system prompts and configuration templates.',
      iconName: 'FileText',
      order: 4,
      articleSlugs: [
        'templates/customer-support-agent-template',
        'templates/technical-support-agent-template',
      ],
    },
    {
      id: 'glossary',
      name: 'Glossary',
      section: 'learning',
      description: 'Definitions of key AI, RAG, and customer support terms.',
      iconName: 'BookMarked',
      order: 5,
      articleSlugs: [
        'glossary/ai-customer-support-terms',
      ],
    },
  ],
};

// ── Article Query Helpers ─────────────────────────────────

export function getAllArticles(includeDrafts = false): DocArticle[] {
  if (includeDrafts) return ALL_DOC_ARTICLES;
  return ALL_DOC_ARTICLES.filter((a) => a.status === 'PUBLISHED');
}

export function getArticlesBySection(section: DocSectionKey, includeDrafts = false): DocArticle[] {
  return getAllArticles(includeDrafts).filter((a) => a.section === section);
}

export function getArticleBySlug(
  section: DocSectionKey,
  slugParts: string[] | string,
  includeDrafts = true
): DocArticle | undefined {
  const normalizedSlug = Array.isArray(slugParts) ? slugParts.join('/') : slugParts;
  return ALL_DOC_ARTICLES.find(
    (a) => a.section === section && a.slug.toLowerCase() === normalizedSlug.toLowerCase() && (includeDrafts || a.status === 'PUBLISHED')
  );
}

export function getCategoriesBySection(section: DocSectionKey): DocCategory[] {
  return CATEGORIES_BY_SECTION[section] || [];
}

export function getAdjacentArticles(currentArticle: DocArticle): {
  prev?: { title: string; href: string };
  next?: { title: string; href: string };
} {
  const sectionArticles = getArticlesBySection(currentArticle.section).sort(
    (a, b) => (a.order || 99) - (b.order || 99)
  );
  const currentIndex = sectionArticles.findIndex((a) => a.id === currentArticle.id);

  if (currentIndex === -1) return {};

  const prev = currentIndex > 0 ? sectionArticles[currentIndex - 1] : undefined;
  const next = currentIndex < sectionArticles.length - 1 ? sectionArticles[currentIndex + 1] : undefined;

  return {
    prev: prev ? { title: prev.title, href: `/docs/${prev.section}/${prev.slug}` } : undefined,
    next: next ? { title: next.title, href: `/docs/${next.section}/${next.slug}` } : undefined,
  };
}

export function getRelatedArticles(currentArticle: DocArticle, limit = 3): DocArticle[] {
  const otherArticles = getAllArticles().filter((a) => a.id !== currentArticle.id);

  // Score articles by shared tags and section
  const scored = otherArticles.map((art) => {
    let score = 0;
    if (art.section === currentArticle.section) score += 2;
    if (art.category === currentArticle.category) score += 3;

    const sharedTags = art.tags.filter((t) => currentArticle.tags.includes(t));
    score += sharedTags.length * 2;

    return { article: art, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.article);
}

export function getFeaturedArticles(): DocArticle[] {
  return getAllArticles().filter((a) => a.featured);
}

export function getRecentArticles(limit = 4): DocArticle[] {
  return [...getAllArticles()]
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, limit);
}

// ── Search Engine ─────────────────────────────────────────

export function searchDocs(query: string, sectionFilter?: DocSectionKey | 'all'): SearchResultItem[] {
  if (!query || !query.trim()) return [];

  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const articles = getAllArticles();

  const results: { item: SearchResultItem; score: number }[] = [];

  for (const art of articles) {
    if (sectionFilter && sectionFilter !== 'all' && art.section !== sectionFilter) {
      continue;
    }

    const titleLower = art.title.toLowerCase();
    const descLower = art.description.toLowerCase();
    const contentLower = art.content.toLowerCase();
    const tagsLower = art.tags.map((t) => t.toLowerCase()).join(' ');

    let score = 0;
    let matchExcerpt = art.description;

    for (const term of terms) {
      if (titleLower.includes(term)) {
        score += 15;
      }
      if (tagsLower.includes(term)) {
        score += 8;
      }
      if (descLower.includes(term)) {
        score += 6;
      }
      if (contentLower.includes(term)) {
        score += 3;

        // Generate excerpt around the matching term
        const termIdx = contentLower.indexOf(term);
        const start = Math.max(0, termIdx - 40);
        const end = Math.min(art.content.length, termIdx + 100);
        matchExcerpt = '...' + art.content.slice(start, end).replace(/[#*`_]/g, '') + '...';
      }
    }

    if (score > 0) {
      results.push({
        item: {
          id: art.id,
          title: art.title,
          slug: `/docs/${art.section}/${art.slug}`,
          section: art.section,
          category: art.category,
          description: art.description,
          excerpt: matchExcerpt,
          badge: art.badge,
        },
        score,
      });
    }
  }

  // Also search API endpoints if developer or all
  if (!sectionFilter || sectionFilter === 'all' || sectionFilter === 'developer') {
    for (const ep of API_ENDPOINTS) {
      const pathLower = ep.path.toLowerCase();
      const summaryLower = ep.summary.toLowerCase();
      const descLower = ep.description.toLowerCase();

      let score = 0;
      for (const term of terms) {
        if (pathLower.includes(term)) score += 20;
        if (summaryLower.includes(term)) score += 12;
        if (descLower.includes(term)) score += 5;
      }

      if (score > 0) {
        results.push({
          item: {
            id: ep.id,
            title: `${ep.method} ${ep.path}`,
            slug: `/docs/developer/api-reference#${ep.id}`,
            section: 'developer',
            category: `API Reference: ${ep.group}`,
            description: ep.summary,
            excerpt: ep.description,
            badge: ep.method,
          },
          score,
        });
      }
    }
  }

  results.sort((a, b) => b.score - a.score);
  return results.slice(0, 15).map((r) => r.item);
}

