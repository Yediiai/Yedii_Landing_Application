import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";
import { EnterpriseClient } from "./EnterpriseClient";

export const metadata: Metadata = {
  title: "Enterprise AI Agents",
  description:
    "Deploy isolated, high-concurrency AI agent infrastructure with Zero Data Retention, custom VPC peering, financial-backed SLAs, and dedicated security governance.",
  alternates: { canonical: `${SITE_URL}/enterprise` },
  openGraph: {
    title: "Enterprise AI Agents | Yedii",
    description:
      "Enterprise-grade AI agents with VPC isolation, zero data retention, and 99.99% SLA.",
    url: `${SITE_URL}/enterprise`,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Yedii Enterprise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise AI Agents | Yedii",
    description:
      "Enterprise-grade AI agents with VPC isolation, zero data retention, and 99.99% SLA.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function EnterprisePage() {
  return <EnterpriseClient />;
}
