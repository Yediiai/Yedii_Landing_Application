import type { Metadata } from "next";
import { tidioComparison } from "@/data/comparisons";
import { ComparisonTemplate } from "@/components/comparison/ComparisonTemplate";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: tidioComparison.meta.title,
  description: tidioComparison.meta.description,
  keywords: tidioComparison.meta.keywords,
  alternates: { canonical: `${SITE_URL}/compare/${tidioComparison.slug}` },
  openGraph: {
    title: tidioComparison.meta.title,
    description: tidioComparison.meta.description,
    url: `${SITE_URL}/compare/${tidioComparison.slug}`,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Yedii vs Tidio AI Customer Support Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: tidioComparison.meta.title,
    description: tidioComparison.meta.description,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function YediiVsTidioPage() {
  return <ComparisonTemplate comparison={tidioComparison} />;
}

