import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = "2026-11-04";

  return [
    // Main Pages
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/customer-support-platform`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/pricing`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/enterprise`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },

    // Platform Pages
    {
      url: `${SITE_URL}/ai-playground`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/ai-agents`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/knowledge-base`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // Solutions Pages
    {
      url: `${SITE_URL}/solutions/customer-support`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/solutions/technical-support`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/solutions/ecommerce`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/solutions/sales-assistance`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/solutions/customer-success`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },

    // Resources Pages
    {
      url: `${SITE_URL}/docs`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/help-center`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/changelog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // Company & Information Pages
    {
      url: `${SITE_URL}/customers`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/careers`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/brand`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/entity-map`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/ai-instructions`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // Comparison Pages
    {
      url: `${SITE_URL}/compare/yedii-vs-intercom`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/compare/yedii-vs-zendesk`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/compare/yedii-vs-freshdesk`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/compare/yedii-vs-tidio`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/compare/ahrefs`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${SITE_URL}/compare/profound`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${SITE_URL}/compare/semrush`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.65,
    },
  ];
}
