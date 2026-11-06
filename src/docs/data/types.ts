export type DocSectionKey = 'product' | 'developer' | 'learning';

export type ArticleLifecycleStatus = 'DRAFT' | 'REVIEW' | 'PUBLISHED' | 'ARCHIVED';

export interface DocHeading {
  id: string;
  title: string;
  level: number; // 2 or 3
}

export interface DocArticle {
  id: string;
  slug: string;
  title: string;
  description: string;
  section: DocSectionKey;
  category: string;
  tags: string[];
  author: string;
  createdAt: string;
  updatedAt: string;
  status: ArticleLifecycleStatus;
  version: string;
  readingTimeMinutes: number;
  featured?: boolean;
  order?: number;
  seoTitle?: string;
  seoDescription?: string;
  headings: DocHeading[];
  content: string; // Markdown / Component-ready string
  relatedArticles?: string[]; // IDs or slugs of related articles
  badge?: 'New' | 'Updated' | 'Popular' | 'Beta';
}

export interface DocCategory {
  id: string;
  name: string;
  section: DocSectionKey;
  description: string;
  iconName: string;
  order: number;
  articleSlugs: string[];
}

export interface ApiParam {
  name: string;
  type: string;
  required: boolean;
  description: string;
  default?: string;
  example?: string;
}

export interface ApiEndpointDoc {
  id: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  path: string;
  group: string;
  summary: string;
  description: string;
  requiresAuth: boolean;
  authType?: 'Bearer' | 'API Key' | 'None' | 'Admin';
  headers?: ApiParam[];
  pathParams?: ApiParam[];
  queryParams?: ApiParam[];
  requestBody?: {
    contentType: string;
    schema: string;
    example: string;
  };
  responseBody?: {
    statusCode: number;
    contentType: string;
    schema: string;
    example: string;
  };
  errorResponses?: {
    statusCode: number;
    description: string;
    example: string;
  }[];
  rateLimit?: string;
  codeExamples: {
    curl: string;
    javascript: string;
    typescript: string;
    node: string;
  };
}

export interface SearchResultItem {
  id: string;
  title: string;
  slug: string;
  section: DocSectionKey;
  category: string;
  description: string;
  excerpt: string;
  badge?: string;
}

export interface DocumentationFeedback {
  articleId: string;
  isHelpful: boolean;
  comment?: string;
  timestamp: string;
  userAgent?: string;
}

export interface SearchQueryLog {
  query: string;
  resultsCount: number;
  selectedArticleId?: string;
  timestamp: string;
  section?: string;
}

