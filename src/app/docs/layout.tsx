import type { Metadata } from "next";
import { DocsLayoutWrapper } from "@/docs/components/DocsLayoutWrapper";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: "Yedii Documentation | Enterprise AI Customer Support Platform",
  description:
    "Official Yedii documentation. Explore product guides, developer widget SDKs, REST API references, RAG knowledge base crawling, and AI agent configuration.",
  alternates: { canonical: `${SITE_URL}/docs` },
  openGraph: {
    title: "Yedii Documentation & Developer Guides",
    description: "Explore guides, API specifications, and tutorials to build, deploy, and scale autonomous AI customer support agents.",
    url: `${SITE_URL}/docs`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Yedii Documentation" }],
  },
};

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return <DocsLayoutWrapper>{children}</DocsLayoutWrapper>;
}

