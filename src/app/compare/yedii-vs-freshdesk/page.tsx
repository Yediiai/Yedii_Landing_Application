import type { Metadata } from "next";
import { freshdeskComparison } from "@/data/comparisons";
import { ComparisonTemplate } from "@/components/comparison/ComparisonTemplate";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: freshdeskComparison.meta.title,
  description: freshdeskComparison.meta.description,
  keywords: freshdeskComparison.meta.keywords,
  alternates: { canonical: `${SITE_URL}/compare/${freshdeskComparison.slug}` },
  openGraph: {
    title: freshdeskComparison.meta.title,
    description: freshdeskComparison.meta.description,
    url: `${SITE_URL}/compare/${freshdeskComparison.slug}`,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Yedii vs Freshdesk AI Customer Support Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: freshdeskComparison.meta.title,
    description: freshdeskComparison.meta.description,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function YediiVsFreshdeskPage() {
  return <ComparisonTemplate comparison={freshdeskComparison} />;
}

