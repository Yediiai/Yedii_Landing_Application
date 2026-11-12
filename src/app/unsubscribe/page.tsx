import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/seo/config";
import { UnsubscribeClient } from "./UnsubscribeClient";

export const metadata: Metadata = {
  title: "Unsubscribe & Email Preferences",
  description:
    "Manage your marketing communication preferences or unsubscribe from Yedii product updates, industry news, and event invitations.",
  alternates: { canonical: `${SITE_URL}/unsubscribe` },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Manage Email Preferences | Yedii",
    description: "Unsubscribe from Yedii marketing emails and communications.",
    url: `${SITE_URL}/unsubscribe`,
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function UnsubscribePage() {
  return <UnsubscribeClient />;
}

