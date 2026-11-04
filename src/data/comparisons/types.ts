export type CompetitorId = "intercom" | "zendesk" | "freshdesk" | "tidio";

export interface FeatureRow {
  name: string;
  category: "core" | "knowledge" | "customization" | "integration" | "enterprise";
  yedii: {
    supported: boolean;
    label: string;
    detail?: string;
  };
  competitor: {
    supported: boolean | "partial" | "addon";
    label: string;
    detail?: string;
  };
}

export interface AICapabilityItem {
  dimension: string;
  yedii: string;
  competitor: string;
  verdict: string;
}

export interface PricingPlanDetail {
  platformName: string;
  startingPrice: string;
  billingPeriod: string;
  aiPricingModel: string;
  planRestrictions: string;
  verificationDate: string;
  highlights: string[];
}

export interface CompetitorComparison {
  id: CompetitorId;
  slug: string; // e.g. "yedii-vs-intercom"
  name: string;
  brandColor: string;
  tagline: string;
  shortDescription: string;
  cardHighlights: string[];
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    title: string;
    subtitle: string;
  };
  overview: {
    yediiSummary: string;
    competitorSummary: string;
    coreDifference: string;
  };
  featureTable: FeatureRow[];
  aiCapabilities: AICapabilityItem[];
  pricing: {
    yedii: PricingPlanDetail;
    competitor: PricingPlanDetail;
    summary: string;
  };
  prosAndConsiderations: {
    yediiPros: string[];
    yediiConsiderations: string[];
    competitorPros: string[];
    competitorConsiderations: string[];
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

