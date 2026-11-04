import type { Metadata } from "next";
import { zendeskComparison } from "@/data/comparisons";
import { ComparisonTemplate } from "@/components/comparison/ComparisonTemplate";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: zendeskComparison.meta.title,
  description: zendeskComparison.meta.description,
  keywords: zendeskComparison.meta.keywords,
  alternates: { canonical: `${SITE_URL}/compare/${zendeskComparison.slug}` },
  openGraph: {
    title: zendeskComparison.meta.title,
    description: zendeskComparison.meta.description,
    url: `${SITE_URL}/compare/${zendeskComparison.slug}`,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Yedii vs Zendesk AI Customer Support Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: zendeskComparison.meta.title,
    description: zendeskComparison.meta.description,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function YediiVsZendeskPage() {
  return <ComparisonTemplate comparison={zendeskComparison} />;
}

