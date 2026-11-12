export type BillingCycle = "monthly" | "yearly";

export type PlanId = "free" | "starter" | "growth" | "pro" | "enterprise";

export interface PlanMetrics {
  aiAgents: string | number;
  creditsPerMonth: string;
  ragStorage: string;
  workspaces: string | number;
  members: string | number;
}

export interface PlanItem {
  id: PlanId;
  name: string;
  monthlyPrice: number | null;
  yearlyPrice: number | null;
  tagline: string;
  isRecommended?: boolean;
  isFree?: boolean;
  metrics: PlanMetrics;
  features: string[];
}

export interface ModelUsageItem {
  name: string;
  credits: string;
  capability: string;
  availability: string;
}

export const YEDII_APPLICATION_PLANS: PlanItem[] = [
  {
    id: "free",
    name: "Free",
    monthlyPrice: 0,
    yearlyPrice: 0,
    tagline: "For testing & exploration",
    isFree: true,
    metrics: {
      aiAgents: 1,
      creditsPerMonth: "50",
      ragStorage: "500 KB",
      workspaces: 1,
      members: 1,
    },
    features: [
      "Basic customizations",
      "Basic analytics",
      "Community support",
      "Standard Web Widget",
      "No credit card required",
    ],
  },
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: 19,
    yearlyPrice: 110,
    tagline: "For starter teams",
    metrics: {
      aiAgents: 1,
      creditsPerMonth: "500",
      ragStorage: "15 MB",
      workspaces: 1,
      members: 1,
    },
    features: [
      "Basic customizations",
      "Basic analytics",
      "Email support",
      "Re-Training",
      "Re-Crawling",
      "Quick Summary",
      "Remove Branding",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    monthlyPrice: 49,
    yearlyPrice: 468,
    isRecommended: true,
    tagline: "For growth teams",
    metrics: {
      aiAgents: 3,
      creditsPerMonth: "2,000",
      ragStorage: "15 MB",
      workspaces: 1,
      members: 3,
    },
    features: [
      "Standard customizations",
      "Advanced analytics",
      "Priority email support",
      "Re-Training",
      "Re-Crawling",
      "Quick Summary",
      "Remove Branding",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    monthlyPrice: 99,
    yearlyPrice: 990,
    tagline: "For pro teams",
    metrics: {
      aiAgents: 10,
      creditsPerMonth: "1,000",
      ragStorage: "15 MB",
      workspaces: 1,
      members: 10,
    },
    features: [
      "Advanced customizations",
      "Advanced analytics",
      "Priority chat support",
      "Re-Training",
      "Re-Crawling",
      "Quick Summary",
      "Remove Branding",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    monthlyPrice: 299,
    yearlyPrice: 2990,
    tagline: "For enterprise teams",
    metrics: {
      aiAgents: "Custom",
      creditsPerMonth: "Custom",
      ragStorage: "Custom",
      workspaces: "Custom",
      members: "Custom",
    },
    features: [
      "Custom customizations",
      "Enterprise analytics",
      "Dedicated manager support",
      "Re-Training",
      "Re-Crawling",
      "Quick Summary",
      "Remove Branding",
      "Two-factor authentication (2FA)",
    ],
  },
];

export const OPENAI_MODELS: ModelUsageItem[] = [
  { name: "text-embedding-3-large", credits: "—", capability: "All search embeddings · 1536 / 3072", availability: "All plans" },
  { name: "GPT-4 Mini", credits: "1 credit", capability: "High-volume, simple questions", availability: "Starter +" },
  { name: "GPT-4o Mini", credits: "1 credit", capability: "Everyday support replies", availability: "Starter +" },
  { name: "GPT-4o", credits: "5 credits", capability: "Everyday support replies & multi-modal", availability: "Starter +" },
  { name: "GPT-4", credits: "10 credits", capability: "Detailed, multi-step answers", availability: "Starter +" },
  { name: "GPT-4.5", credits: "25 credits", capability: "Complex reasoning & deep logic", availability: "Starter +" },
  { name: "GPT-4.5 Pro", credits: "50 credits", capability: "Advanced reasoning for difficult cases", availability: "Starter +" },
];

export const GEMINI_MODELS: ModelUsageItem[] = [
  { name: "Gemini 2.5 Flash-Lite", credits: "1 credit", capability: "High-volume, simple questions", availability: "Starter +" },
  { name: "Gemini 2.5 Flash", credits: "2 credits", capability: "Everyday support replies", availability: "Starter +" },
  { name: "Gemini 2.5 Pro", credits: "8 credits", capability: "Detailed, multi-step answers", availability: "Starter +" },
  { name: "DeepSeek V4.1 Flash", credits: "2 credits", capability: "High-speed reasoning & code", availability: "Starter +" },
];
