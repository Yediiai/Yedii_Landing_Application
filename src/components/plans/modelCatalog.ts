export type ModelProviderId =
  | "openai"
  | "google-gemini"
  | "grok"
  | "deepseek"
  | "kimi"
  | "qwen";

export type ModelCategory = "chat" | "embedding";

export type ModelTier = "fast" | "balanced" | "advanced";

export type ModelUseCaseFilter = "all" | "high-volume" | "everyday" | "complex";

export type ModelMinPlan = "free" | "starter" | "growth" | "pro" | "enterprise";

export type ModelTag = "Most used" | "High volume" | "Everyday support" | "Complex cases";

export interface ModelCatalogItem {
  id: string;
  provider: ModelProviderId;
  name: string;
  credits: number;
  useCase: string;
  tier: ModelTier;
  minPlan: ModelMinPlan;
  tags: ModelTag[];
}

export interface ModelProviderConfig {
  id: ModelProviderId;
  label: string;
}

export interface ModelTierConfig {
  id: ModelTier;
  label: string;
  description: string;
}

export interface ModelFilterChipConfig {
  id: ModelUseCaseFilter;
  label: string;
  matchTag?: ModelTag;
}

export const MAX_MODEL_CREDITS = 50;

export const MODEL_PROVIDERS: ModelProviderConfig[] = [
  { id: "openai", label: "OpenAI" },
  { id: "google-gemini", label: "Google Gemini" },
  { id: "grok", label: "Grok" },
  { id: "deepseek", label: "DeepSeek" },
  { id: "kimi", label: "Kimi" },
  { id: "qwen", label: "Qwen" },
];

export const MODEL_TIERS: ModelTierConfig[] = [
  {
    id: "fast",
    label: "Fast",
    description: "Low-cost models built for high-volume, straightforward questions.",
  },
  {
    id: "balanced",
    label: "Balanced",
    description: "Dependable everyday support with strong tone and accuracy.",
  },
  {
    id: "advanced",
    label: "Advanced",
    description: "Deep multi-step reasoning for complex or escalated tickets.",
  },
];

export const MODEL_FILTER_CHIPS: ModelFilterChipConfig[] = [
  { id: "all", label: "All models" },
  { id: "high-volume", label: "High volume", matchTag: "High volume" },
  { id: "everyday", label: "Everyday support", matchTag: "Everyday support" },
  { id: "complex", label: "Complex cases", matchTag: "Complex cases" },
];

export const PLAN_RANK: Record<ModelMinPlan, number> = {
  free: 0,
  starter: 1,
  growth: 2,
  pro: 3,
  enterprise: 4,
};

export const PLAN_LABELS: Record<ModelMinPlan, string> = {
  free: "Free",
  starter: "Starter",
  growth: "Growth",
  pro: "Pro",
  enterprise: "Enterprise",
};

export const MODEL_CATALOG: ModelCatalogItem[] = [
  // OpenAI
  {
    id: "openai-gpt-4-mini",
    provider: "openai",
    name: "GPT-4 Mini",
    credits: 1,
    useCase: "High-volume, simple questions",
    tier: "fast",
    minPlan: "starter",
    tags: ["High volume"],
  },
  {
    id: "openai-gpt-4o-mini",
    provider: "openai",
    name: "GPT-4o Mini",
    credits: 1,
    useCase: "Everyday support replies with fast turnaround",
    tier: "fast",
    minPlan: "starter",
    tags: ["Most used", "High volume", "Everyday support"],
  },
  {
    id: "openai-gpt-4o",
    provider: "openai",
    name: "GPT-4o",
    credits: 5,
    useCase: "Everyday support replies with nuanced tone",
    tier: "balanced",
    minPlan: "starter",
    tags: ["Everyday support"],
  },
  {
    id: "openai-gpt-4",
    provider: "openai",
    name: "GPT-4",
    credits: 10,
    useCase: "Detailed, multi-step answers",
    tier: "balanced",
    minPlan: "starter",
    tags: ["Everyday support"],
  },
  {
    id: "openai-astra",
    provider: "openai",
    name: "Astra",
    credits: 15,
    useCase: "Hardest support cases requiring policy synthesis",
    tier: "advanced",
    minPlan: "growth",
    tags: ["Complex cases"],
  },
  {
    id: "openai-gpt-4-5",
    provider: "openai",
    name: "GPT-4.5",
    credits: 25,
    useCase: "Complex reasoning across long customer threads",
    tier: "advanced",
    minPlan: "pro",
    tags: ["Complex cases"],
  },
  {
    id: "openai-gpt-4-5-pro",
    provider: "openai",
    name: "GPT-4.5 Pro",
    credits: 50,
    useCase: "Advanced reasoning for difficult cases",
    tier: "advanced",
    minPlan: "pro",
    tags: ["Complex cases"],
  },

  // Google Gemini
  {
    id: "gemini-2-5-flash-lite",
    provider: "google-gemini",
    name: "Gemini 2.5 Flash-Lite",
    credits: 1,
    useCase: "High-volume, simple questions",
    tier: "fast",
    minPlan: "starter",
    tags: ["High volume"],
  },
  {
    id: "gemini-1-5-flash",
    provider: "google-gemini",
    name: "Gemini 1.5 Flash",
    credits: 1,
    useCase: "Fast multimodal questions & answers",
    tier: "fast",
    minPlan: "starter",
    tags: ["High volume"],
  },
  {
    id: "gemini-3-1-flash-lite",
    provider: "google-gemini",
    name: "Gemini 3.1 Flash-Lite",
    credits: 1,
    useCase: "Lightweight everyday support replies",
    tier: "fast",
    minPlan: "starter",
    tags: ["Everyday support"],
  },
  {
    id: "gemini-2-5-flash",
    provider: "google-gemini",
    name: "Gemini 2.5 Flash",
    credits: 2,
    useCase: "Everyday support replies with balanced speed",
    tier: "balanced",
    minPlan: "starter",
    tags: ["Most used", "Everyday support"],
  },
  {
    id: "gemini-2-5-pro",
    provider: "google-gemini",
    name: "Gemini 2.5 Pro",
    credits: 8,
    useCase: "Detailed, multi-step answers",
    tier: "balanced",
    minPlan: "growth",
    tags: ["Everyday support", "Complex cases"],
  },
  {
    id: "gemini-1-5-pro",
    provider: "google-gemini",
    name: "Gemini 1.5 Pro",
    credits: 12,
    useCase: "Complex multimodal reasoning & large context",
    tier: "advanced",
    minPlan: "pro",
    tags: ["Complex cases"],
  },

  // Grok
  {
    id: "grok-3-mini",
    provider: "grok",
    name: "Grok 3 Mini",
    credits: 1,
    useCase: "Fast, concise replies for high-volume queues",
    tier: "fast",
    minPlan: "starter",
    tags: ["High volume"],
  },
  {
    id: "grok-3",
    provider: "grok",
    name: "Grok 3",
    credits: 6,
    useCase: "Natural everyday support with strong context recall",
    tier: "balanced",
    minPlan: "growth",
    tags: ["Most used", "Everyday support"],
  },
  {
    id: "grok-3-reasoning",
    provider: "grok",
    name: "Grok 3 Reasoning",
    credits: 18,
    useCase: "Deep troubleshooting for multi-part technical tickets",
    tier: "advanced",
    minPlan: "pro",
    tags: ["Complex cases"],
  },

  // DeepSeek
  {
    id: "deepseek-v4-1-flash",
    provider: "deepseek",
    name: "DeepSeek V4.1 Flash",
    credits: 1,
    useCase: "Efficient everyday support and quick triage",
    tier: "fast",
    minPlan: "starter",
    tags: ["Most used", "High volume", "Everyday support"],
  },
  {
    id: "deepseek-v3",
    provider: "deepseek",
    name: "DeepSeek V3",
    credits: 2,
    useCase: "Balanced reasoning for structured help-center replies",
    tier: "balanced",
    minPlan: "starter",
    tags: ["Everyday support"],
  },
  {
    id: "deepseek-r1",
    provider: "deepseek",
    name: "DeepSeek R1",
    credits: 10,
    useCase: "Chain-of-thought reasoning for complex edge cases",
    tier: "advanced",
    minPlan: "pro",
    tags: ["Complex cases"],
  },

  // Kimi
  {
    id: "kimi-k2-turbo",
    provider: "kimi",
    name: "Kimi K2 Turbo",
    credits: 2,
    useCase: "High-throughput replies across long knowledge docs",
    tier: "fast",
    minPlan: "starter",
    tags: ["High volume", "Everyday support"],
  },
  {
    id: "kimi-k2",
    provider: "kimi",
    name: "Kimi K2",
    credits: 5,
    useCase: "Long-context everyday support and policy lookup",
    tier: "balanced",
    minPlan: "growth",
    tags: ["Most used", "Everyday support"],
  },
  {
    id: "kimi-k2-thinking",
    provider: "kimi",
    name: "Kimi K2 Thinking",
    credits: 14,
    useCase: "Extended reasoning over multi-document escalations",
    tier: "advanced",
    minPlan: "pro",
    tags: ["Complex cases"],
  },

  // Qwen
  {
    id: "qwen-3-flash",
    provider: "qwen",
    name: "Qwen 3 Flash",
    credits: 1,
    useCase: "Rapid multilingual FAQ and order-status replies",
    tier: "fast",
    minPlan: "starter",
    tags: ["High volume"],
  },
  {
    id: "qwen-3-plus",
    provider: "qwen",
    name: "Qwen 3 Plus",
    credits: 4,
    useCase: "Reliable multilingual everyday support",
    tier: "balanced",
    minPlan: "starter",
    tags: ["Most used", "Everyday support"],
  },
  {
    id: "qwen-3-max",
    provider: "qwen",
    name: "Qwen 3 Max",
    credits: 12,
    useCase: "Complex multilingual reasoning and escalations",
    tier: "advanced",
    minPlan: "pro",
    tags: ["Complex cases"],
  },
];

export type EmbeddingUseCaseFilter = "all" | "high-accuracy" | "fast-indexing" | "multilingual";

export type EmbeddingTag = "High accuracy" | "Fast indexing" | "Multilingual";

export interface EmbeddingFilterChipConfig {
  id: EmbeddingUseCaseFilter;
  label: string;
  matchTag?: EmbeddingTag;
}

export const EMBEDDING_FILTER_CHIPS: EmbeddingFilterChipConfig[] = [
  { id: "all", label: "All models" },
  { id: "high-accuracy", label: "High accuracy", matchTag: "High accuracy" },
  { id: "fast-indexing", label: "Fast indexing", matchTag: "Fast indexing" },
  { id: "multilingual", label: "Multilingual", matchTag: "Multilingual" },
];

export interface EmbeddingCatalogItem {
  id: string;
  providerLabel: string;
  name: string;
  useCase: string;
  dimensions: string;
  minPlan: ModelMinPlan;
  tags: EmbeddingTag[];
  isRecommended?: boolean;
}

export const EMBEDDING_MODEL_CATALOG: EmbeddingCatalogItem[] = [
  {
    id: "openai-text-embedding-3-large",
    providerLabel: "OpenAI",
    name: "text-embedding-3-large",
    useCase: "High-accuracy search embeddings for knowledge bases",
    dimensions: "1536 / 3072 dims",
    minPlan: "free",
    tags: ["High accuracy"],
    isRecommended: true,
  },
  {
    id: "openai-text-embedding-3-small",
    providerLabel: "OpenAI",
    name: "text-embedding-3-small",
    useCase: "Fast, lightweight indexing for large document sets",
    dimensions: "512 / 1536 dims",
    minPlan: "free",
    tags: ["Fast indexing"],
  },
  {
    id: "google-text-embedding-004",
    providerLabel: "Google Gemini",
    name: "text-embedding-004",
    useCase: "Multilingual semantic retrieval across help docs",
    dimensions: "256 / 512 / 768 dims",
    minPlan: "free",
    tags: ["Multilingual", "Fast indexing"],
  },
  {
    id: "cohere-embed-v4",
    providerLabel: "Cohere",
    name: "embed-v4.0",
    useCase: "Precision RAG embeddings for multi-language support",
    dimensions: "1024 dims",
    minPlan: "starter",
    tags: ["High accuracy", "Multilingual"],
  },
  {
    id: "voyage-3-large",
    providerLabel: "Voyage",
    name: "voyage-3-large",
    useCase: "Domain-tuned retrieval for technical documentation",
    dimensions: "1024 dims",
    minPlan: "growth",
    tags: ["High accuracy"],
  },
  {
    id: "baai-bge-large",
    providerLabel: "BAAI",
    name: "bge-large-en-v1.5",
    useCase: "Open-weight semantic search for English knowledge bases",
    dimensions: "1024 dims",
    minPlan: "free",
    tags: ["Fast indexing"],
  },
];
