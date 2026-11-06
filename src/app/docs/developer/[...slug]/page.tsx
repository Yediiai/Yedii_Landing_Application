import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocsSidebar } from "@/docs/components/DocsSidebar";
import { TableOfContents } from "@/docs/components/TableOfContents";
import { ArticleHeader } from "@/docs/components/ArticleHeader";
import { ArticleContentRenderer } from "@/docs/components/ArticleContentRenderer";
import { FeedbackWidget } from "@/docs/components/FeedbackWidget";
import { PreviousNextNavigation } from "@/docs/components/PreviousNextNavigation";
import { RelatedArticles } from "@/docs/components/RelatedArticles";
import {
  getArticleBySlug,
  getArticlesBySection,
  getAdjacentArticles,
  getRelatedArticles,
} from "@/docs/data";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  const articles = getArticlesBySection("developer");
  return articles.map((art) => ({
    slug: art.slug.split("/"),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const article = getArticleBySlug("developer", resolvedParams.slug);

  if (!article) {
    return {
      title: "Article Not Found | Yedii Documentation",
    };
  }

  const canonicalUrl = `${SITE_URL}/docs/developer/${article.slug}`;

  return {
    title: `${article.title} | Yedii Developer Documentation`,
    description: article.description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `${article.title} — Yedii Developer Docs`,
      description: article.description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type: "article",
      publishedTime: article.createdAt,
      modifiedTime: article.updatedAt,
      authors: [article.author],
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: article.title }],
    },
  };
}

export default async function DeveloperArticlePage({ params }: PageProps) {
  const resolvedParams = await params;
  const article = getArticleBySlug("developer", resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const { prev, next } = getAdjacentArticles(article);
  const relatedArticles = getRelatedArticles(article, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: article.title,
    description: article.description,
    datePublished: article.createdAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Organization",
      name: "Yedii Developer Platform",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Yedii",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/docs/developer/${article.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col lg:flex-row gap-8">
        {/* Left Column: Hierarchical Navigation */}
        <DocsSidebar currentSection="developer" />

        {/* Center Column: Main Article Content */}
        <main className="flex-1 py-8 max-w-3xl min-w-0">
          <article>
            <ArticleHeader article={article} />
            <ArticleContentRenderer content={article.content} />
            <FeedbackWidget articleId={article.id} />
            <PreviousNextNavigation prev={prev} next={next} />
            <RelatedArticles articles={relatedArticles} />
          </article>
        </main>

        {/* Right Column: On This Page Table of Contents */}
        <TableOfContents headings={article.headings} />
      </div>
    </>
  );
}

