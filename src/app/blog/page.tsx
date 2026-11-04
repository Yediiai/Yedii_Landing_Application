import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: "Blog & AI Engineering Insights | Yedii",
  description:
    "Explore in-depth articles on autonomous AI agents, multi-agent customer support architecture, hybrid RAG pipelines, and enterprise LLM governance.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Yedii Blog & Engineering Insights",
    description: "Deep dives on AI agent architectures, zero-hallucination RAG, and scaling 24/7 customer support.",
    url: `${SITE_URL}/blog`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Yedii Blog" }],
  },
};

const featuredPost = {
  title: "How We Scaled Multi-Agent Hybrid RAG for Enterprise Support With Zero Hallucinations",
  slug: "scaling-multi-agent-rag-support",
  excerpt:
    "A deep architectural breakdown of our dual-index vector retrieval, cross-encoder reranking, and citation verification mechanisms that prevent hallucination in mission-critical customer support.",
  category: "Architecture",
  date: "October 28, 2026",
  readTime: "8 min read",
  author: {
    name: "Alex Vance",
    role: "Head of AI Engineering",
  },
};

const blogPosts = [
  {
    title: "Why Traditional Chatbots Fail at Technical Support (And How Agentic Workflows Fix It)",
    slug: "why-chatbots-fail-technical-support",
    excerpt: "Static decision trees fail when users paste error stacks. Learn how step-by-step reasoning agents debug code and parse server logs in real time.",
    category: "Engineering",
    date: "October 19, 2026",
    readTime: "6 min read",
    author: { name: "Elena Rostova", role: "Staff AI Researcher" },
  },
  {
    title: "Connecting WhatsApp Business API to Autonomous Customer Support Agents",
    slug: "whatsapp-business-api-ai-agent-guide",
    excerpt: "Step-by-step implementation guide to handle 10,000+ daily WhatsApp customer queries with sub-second latency and verified knowledge bases.",
    category: "Tutorials",
    date: "October 12, 2026",
    readTime: "5 min read",
    author: { name: "Marcus Chen", role: "DevRel Lead" },
  },
  {
    title: "Enterprise Data Privacy in the LLM Era: Zero Retention, SOC 2, and Single-Tenant VPCs",
    slug: "enterprise-data-privacy-llm-security",
    excerpt: "How security-conscious organizations deploy AI support agents without risking proprietary knowledge or PII leaks to public foundation models.",
    category: "Security",
    date: "September 29, 2026",
    readTime: "7 min read",
    author: { name: "Sarah Jenkins", role: "VP of Security & Compliance" },
  },
  {
    title: "E-commerce Support Benchmarks: Measuring Resolution Time vs. Customer CSAT",
    slug: "ecommerce-support-benchmarks-csat",
    excerpt: "We analyzed 250,000 e-commerce support interactions to discover the exact threshold where automation boosts CSAT instead of frustrating shoppers.",
    category: "Case Studies",
    date: "September 15, 2026",
    readTime: "9 min read",
    author: { name: "David Miller", role: "Product Analytics" },
  },
  {
    title: "Semantic Chunking vs. Fixed Window Ingestion for Product Documentation",
    slug: "semantic-chunking-vs-fixed-window-rag",
    excerpt: "Why fixed 512-token chunks destroy code blocks and markdown tables in technical docs, and how AST-aware parsing improves retrieval precision by 42%.",
    category: "Engineering",
    date: "August 28, 2026",
    readTime: "6 min read",
    author: { name: "Alex Vance", role: "Head of AI Engineering" },
  },
  {
    title: "The Shift from Reactive Ticketing to Autonomous Proactive Customer Success",
    slug: "proactive-customer-success-shift",
    excerpt: "How modern SaaS companies detect user struggle states before churn tickets are opened, turning customer success into an automated growth engine.",
    category: "Product",
    date: "August 14, 2026",
    readTime: "5 min read",
    author: { name: "Elena Rostova", role: "Staff AI Researcher" },
  },
];

const categories = ["All", "Architecture", "Engineering", "Tutorials", "Security", "Case Studies", "Product"];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#141C2E] flex flex-col font-sans selection:bg-[#141C2E] selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 md:px-8 max-w-6xl mx-auto border-b border-[#141C2E]/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141C2E]/5 border border-[#141C2E]/10 text-xs font-medium text-[#141C2E] mb-6">
            <BookOpen className="w-3.5 h-3.5 text-zinc-600" />
            Yedii Engineering & Research
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#141C2E] mb-6 font-serif">
            The Yedii Blog
          </h1>
          <p className="text-lg md:text-xl text-[#141C2E]/70 max-w-2xl leading-relaxed mb-8">
            Perspectives, architectural deep dives, and technical guides on building reliable, autonomous AI agents for modern enterprise operations.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                type="button"
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  idx === 0
                    ? "bg-[#141C2E] text-white"
                    : "bg-white border border-[#141C2E]/10 text-zinc-700 hover:border-[#141C2E]/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 mb-4 block">
            Featured Deep Dive
          </span>

          <div className="bg-white border border-[#141C2E]/10 rounded-2xl p-6 md:p-10 shadow-sm hover:border-[#141C2E]/30 transition-all group">
            <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 mb-4">
              <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 font-medium border border-emerald-200">
                {featuredPost.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {featuredPost.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif mb-4 text-[#141C2E] group-hover:text-blue-900 transition-colors">
              <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
            </h2>

            <p className="text-sm md:text-base text-[#141C2E]/70 leading-relaxed mb-6 max-w-4xl">
              {featuredPost.excerpt}
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-zinc-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#141C2E] text-white flex items-center justify-center font-bold text-xs">
                  {featuredPost.author.name.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-bold text-[#141C2E]">{featuredPost.author.name}</div>
                  <div className="text-[11px] text-zinc-500">{featuredPost.author.role}</div>
                </div>
              </div>

              <Link
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#141C2E] group-hover:translate-x-1 transition-transform"
              >
                Read Article <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-8 pb-20 px-4 md:px-8 max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl md:text-2xl font-bold font-serif">Latest Articles</h3>
            <span className="text-xs text-zinc-500 font-mono">Showing 6 articles</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, idx) => (
              <article
                key={idx}
                className="bg-white border border-[#141C2E]/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-zinc-500 mb-3">
                    <span className="px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 font-medium">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px]">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#141C2E] mb-2 leading-snug group-hover:text-blue-900 transition-colors font-serif">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h4>

                  <p className="text-xs text-[#141C2E]/70 leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
                  <span>{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-semibold text-[#141C2E] group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1"
                  >
                    Read <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 px-4 md:px-8 bg-[#141C2E] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs uppercase tracking-wider text-emerald-400 font-mono font-semibold">
              Stay Informed
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-serif mt-2 mb-3">
              Get the latest AI architecture breakthroughs in your inbox
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm max-w-xl mx-auto mb-6">
              Bi-weekly engineering essays on vector retrieval, evaluation metrics, and multi-agent coordination. No marketing spam.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your work email"
                className="w-full sm:flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-zinc-400 text-xs focus:outline-none focus:border-white"
              />
              <button
                type="button"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white text-[#141C2E] font-semibold text-xs hover:bg-zinc-100 transition-colors cursor-pointer"
              >
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
