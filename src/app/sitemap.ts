import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: "2026-11-01",
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/pricing`,
      lastModified: "2026-11-01",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/enterprise`,
      lastModified: "2026-11-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/customers`,
      lastModified: "2026-11-01",
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
