import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { DocsSidebar } from "@/docs/components/DocsSidebar";
import { getArticlesBySection, CATEGORIES_BY_SECTION } from "@/docs/data";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: "Product Documentation | Yedii AI",
  description:
    "Learn how to configure and manage Yedii. Step-by-step guides for AI agent setup, website crawling, sitemaps, system instructions, and conversation retention.",
  alternates: { canonical: `${SITE_URL}/docs/product` },
  openGraph: {
    title: "Yedii Product Documentation",
    description: "Build, configure, and manage autonomous AI customer support agents with zero hallucination.",
    url: `${SITE_URL}/docs/product`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Yedii Product Docs" }],
  },
};

export default function ProductDocsIndexPage() {
  const categories = CATEGORIES_BY_SECTION.product;
  const articles = getArticlesBySection("product");

  return (
    <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col lg:flex-row gap-8 bg-[#FAFAFA]">
      {/* Left Navigation Sidebar */}
      <DocsSidebar currentSection="product" />

      {/* Main Content */}
      <main className="flex-1 py-8 max-w-4xl">
        <div className="mb-8 pb-6 border-b border-[#E5E7EB]">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200 font-mono text-xs font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Product Documentation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111827] mb-3">
            Product Documentation & Operator Guides
          </h1>
          <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
            Everything you need to understand, configure, operate, and manage the Yedii platform without depending on external support.
          </p>
        </div>

        {/* Featured Quickstart Banner */}
        <div className="p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-mono uppercase font-bold text-blue-600">
              Recommended Path
            </span>
            <h3 className="text-lg font-bold text-[#111827] mt-1">
              Create Your First AI Agent in 3 Minutes
            </h3>
            <p className="text-xs text-[#6B7280] mt-1">
              Follow our quickstart walkthrough to provision an agent, attach website content, and test responses.
            </p>
          </div>
          <Link
            href="/docs/product/getting-started/create-your-first-ai-agent"
            className="px-4 py-2 rounded-lg bg-[#141C2E] text-white font-semibold text-xs shrink-0 hover:bg-black transition-colors flex items-center gap-1.5 shadow-2xs"
          >
            <span>Start Quickstart</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="space-y-10">
          {categories.map((cat) => {
            const catArticles = cat.articleSlugs
              .map((slug) => articles.find((a) => a.slug === slug))
              .filter(Boolean);

            return (
              <section key={cat.id} className="space-y-4">
                <div>
                  <h2 className="text-xl font-bold text-[#111827]">
                    {cat.name}
                  </h2>
                  <p className="text-xs text-zinc-500 mt-0.5">{cat.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {catArticles.map((art) => {
                    if (!art) return null;
                    return (
                      <Link
                        key={art.id}
                        href={`/docs/product/${art.slug}`}
                        className="p-4 rounded-xl border border-[#E5E7EB] bg-white hover:border-[#141C2E] shadow-2xs hover:shadow-xs transition-all group flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[11px] font-mono text-zinc-400">
                              {art.readingTimeMinutes} min read
                            </span>
                            {art.badge && (
                              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold uppercase">
                                {art.badge}
                              </span>
                            )}
                          </div>
                          <h3 className="text-sm font-semibold text-[#111827] group-hover:text-blue-600 transition-colors">
                            {art.title}
                          </h3>
                          <p className="text-xs text-[#6B7280] mt-1 line-clamp-2 leading-relaxed">
                            {art.description}
                          </p>
                        </div>

                        <div className="mt-4 pt-2 flex items-center gap-1 text-xs text-zinc-400 group-hover:text-black font-medium">
                          <span>Read guide</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}
