import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ALL_LEGAL_DOCUMENTS, getLegalDocumentBySlug } from "@/data/legal";
import { LegalSidebar } from "@/components/legal/LegalSidebar";
import { LegalHeader } from "@/components/legal/LegalHeader";
import { LegalContentRenderer } from "@/components/legal/LegalContentRenderer";
import { LegalTOC } from "@/components/legal/LegalTOC";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_LEGAL_DOCUMENTS.map((doc) => ({
    slug: doc.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = getLegalDocumentBySlug(slug);

  if (!doc) {
    return {
      title: "Document Not Found | Yedii Legal",
    };
  }

  return {
    title: `${doc.title} | Yedii Legal & Compliance`,
    description: doc.metaDescription || doc.description,
    alternates: {
      canonical: `${SITE_URL}/legal/${doc.slug}`,
    },
    openGraph: {
      title: `${doc.title} | Yedii Legal & Compliance`,
      description: doc.metaDescription || doc.description,
      url: `${SITE_URL}/legal/${doc.slug}`,
      siteName: SITE_NAME,
      type: "website",
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${doc.title} - Yedii`,
        },
      ],
    },
  };
}

export default async function LegalDocumentPage({ params }: PageProps) {
  const { slug } = await params;
  const doc = getLegalDocumentBySlug(slug);

  if (!doc) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-black selection:text-white">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
            {/* Left Sidebar Navigation */}
            <LegalSidebar currentSlug={doc.slug} />

            {/* Central Legal Document Content */}
            <div className="flex-1 min-w-0">
              <LegalHeader document={doc} />
              <LegalContentRenderer document={doc} />
            </div>

            {/* Right Sticky Table of Contents */}
            <LegalTOC content={doc.content} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

