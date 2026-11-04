import type { Metadata } from "next";
import { intercomComparison } from "@/data/comparisons";
import { ComparisonTemplate } from "@/components/comparison/ComparisonTemplate";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: intercomComparison.meta.title,
  description: intercomComparison.meta.description,
  keywords: intercomComparison.meta.keywords,
  alternates: { canonical: `${SITE_URL}/compare/${intercomComparison.slug}` },
  openGraph: {
    title: intercomComparison.meta.title,
    description: intercomComparison.meta.description,
    url: `${SITE_URL}/compare/${intercomComparison.slug}`,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Yedii vs Intercom AI Customer Support Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: intercomComparison.meta.title,
    description: intercomComparison.meta.description,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function YediiVsIntercomPage() {
  return <ComparisonTemplate comparison={intercomComparison} />;
}

