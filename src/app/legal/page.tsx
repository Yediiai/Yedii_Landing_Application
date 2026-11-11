import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Scale, Shield, FileText, Lock, Cpu, ArrowRight, Search } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ALL_LEGAL_DOCUMENTS, LEGAL_CATEGORIES } from "@/data/legal";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: "Legal & Compliance Hub | Yedii",
  description:
    "Explore the centralized Yedii legal and compliance documentation: Terms of Service, Privacy Policy, DPA, AI Usage Policy, Security, and Enterprise agreements.",
  alternates: { canonical: `${SITE_URL}/legal` },
  openGraph: {
    title: "Legal & Compliance Hub | Yedii",
    description:
      "Explore the centralized Yedii legal and compliance documentation: Terms of Service, Privacy Policy, DPA, AI Usage Policy, Security, and Enterprise agreements.",
    url: `${SITE_URL}/legal`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Yedii Legal & Compliance Hub" }],
  },
};

export default function LegalHubPage() {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "ESSENTIAL":
        return <FileText className="w-5 h-5 text-zinc-900" />;
      case "AI_DATA":
        return <Cpu className="w-5 h-5 text-zinc-900" />;
      case "ENTERPRISE":
        return <Lock className="w-5 h-5 text-zinc-900" />;
      default:
        return <Scale className="w-5 h-5 text-zinc-900" />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-black selection:text-white">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 border-b border-zinc-200">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 leading-[1.15]">
              Yedii Legal &amp; Compliance Hub
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
              We hold our enterprise AI customer support platform to the highest standards of data security, contractual clarity, and global privacy compliance. Review all 17 public policies and agreements below.
            </p>
          </div>
        </section>

        {/* Categories & Document Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          {LEGAL_CATEGORIES.map((cat) => {
            const docs = ALL_LEGAL_DOCUMENTS.filter((d) => d.category === cat.id);

            return (
              <div key={cat.id} className="space-y-6">
                <div className="flex items-center gap-3 pb-2 border-b border-zinc-200">
                  <div className="p-2 rounded-xl bg-zinc-100">{getCategoryIcon(cat.id)}</div>
                  <div>
                    <h2 className="text-xl font-bold text-zinc-900 tracking-tight">{cat.title}</h2>
                    <p className="text-xs text-zinc-500">{cat.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {docs.map((doc) => (
                    <Link
                      key={doc.slug}
                      href={`/legal/${doc.slug}`}
                      className="group p-5 rounded-2xl border border-zinc-200 bg-white hover:border-black hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-2">
                        <h3 className="text-base font-bold text-zinc-900 group-hover:text-black transition-colors">
                          {doc.title}
                        </h3>
                        <p className="text-xs text-zinc-600 line-clamp-3 leading-relaxed">
                          {doc.description}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-black group-hover:translate-x-0.5 transition-transform">
                        <span>Read Policy</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      </main>

      <Footer />
    </div>
  );
}

