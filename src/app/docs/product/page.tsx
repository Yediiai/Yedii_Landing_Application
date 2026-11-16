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
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col lg:flex-row gap-8 lg:gap-10">
      {/* Left Navigation Sidebar */}
      <DocsSidebar currentSection="product" />

      {/* Main Content */}
      <main className="flex-1 py-8 lg:py-10 max-w-4xl min-w-0">
        <div className="mb-8 pb-7 border-b border-zinc-200/80 dark:border-zinc-800/80">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/70 dark:border-zinc-700/70 font-mono text-xs font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Product Documentation</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 mb-3 leading-tight">
            Product Documentation & Operator Guides
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed max-w-3xl">
            Everything you need to understand, configure, operate, and manage the Yedii platform without depending on external support.
          </p>
        </div>

        {/* Featured Quickstart Banner */}
        <div className="p-6 rounded-xl bg-white dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800 shadow-2xs mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-zinc-500 dark:text-zinc-400">
              Recommended Path
            </span>
            <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-100 mt-1">
              Create Your First AI Agent in 3 Minutes
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed max-w-xl">
              Follow our quickstart walkthrough to provision an agent, attach website content, and test responses.
            </p>
          </div>
          <Link
            href="/docs/product/getting-started/create-your-first-ai-agent"
            className="px-3.5 py-2 rounded-md bg-zinc-900 hover:bg-black dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 font-medium text-xs shrink-0 transition-colors flex items-center gap-1.5 shadow-2xs"
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
                  <h2 className="text-lg sm:text-xl font-semibold text-zinc-950 dark:text-zinc-50 tracking-tight">
                    {cat.name}
                  </h2>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{cat.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {catArticles.map((art) => {
                    if (!art) return null;
                    return (
                      <Link
                        key={art.id}
                        href={`/docs/product/${art.slug}`}
                        className="p-4 sm:p-5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/70 shadow-2xs hover:shadow-xs transition-all group flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                              {art.readingTimeMinutes} min read
                            </span>
                            {art.badge && (
                              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60 font-semibold uppercase">
                                {art.badge}
                              </span>
                            )}
                          </div>
                          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors">
                            {art.title}
                          </h3>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                            {art.description}
                          </p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center gap-1.5 text-xs text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 font-medium transition-colors">
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
