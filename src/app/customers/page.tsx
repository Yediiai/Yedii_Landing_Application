import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";
import { CustomersClient } from "./CustomersClient";

export const metadata: Metadata = {
  title: "Customer Stories",
  description:
    "See how high-growth startups and global enterprises automate support, accelerate sales cycles, and maintain strict data privacy with Yedii AI agents.",
  alternates: { canonical: `${SITE_URL}/customers` },
  openGraph: {
    title: "Customer Stories | Yedii",
    description:
      "See how leading companies automate operations with Yedii AI agents.",
    url: `${SITE_URL}/customers`,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Yedii Customer Stories",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Stories | Yedii",
    description:
      "See how leading companies automate operations with Yedii AI agents.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function CustomersPage() {
  return <CustomersClient />;
}
