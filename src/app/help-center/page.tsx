import type { Metadata } from "next";
import Link from "next/link";
import {
  LifeBuoy,
  Search,
  CreditCard,
  Bot,
  Database,
  Sliders,
  Share2,
  AlertCircle,
  Mail,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: "Help Center & Customer Support Hub | Yedii",
  description:
    "Find answers, troubleshooting guides, setup tutorials, and contact support options for Yedii AI agent platform and integrations.",
  alternates: { canonical: `${SITE_URL}/help-center` },
  openGraph: {
    title: "Yedii Help Center & Support Hub",
    description: "Search help articles, troubleshoot configurations, and connect with technical support.",
    url: `${SITE_URL}/help-center`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Yedii Help Center" }],
  },
};

const helpCategories = [
  {
    icon: Bot,
    title: "Agent Setup & Behavior",
    desc: "Configure system instructions, conversation memory, tone calibration, and fallback behaviors.",
    articles: [
      "How to set strict guardrails for sensitive topics",
      "Configuring agent fallback when no answer is found",
      "Customizing welcome greeting and suggested starter prompts",
      "Testing agent responses in the AI Playground",
    ],
  },
  {
    icon: Database,
    title: "Knowledge Base & Sources",
    desc: "Upload files, configure web crawlers, manage sync frequencies, and inspect indexed chunks.",
    articles: [
      "Supported file formats (PDF, DOCX, CSV, TXT, MD)",
      "How to exclude private URLs from website crawling",
      "Setting up automated daily or weekly knowledge refreshes",
      "Troubleshooting failed document parsing or extraction",
    ],
  },
  {
    icon: Sliders,
    title: "Widget & Theming",
    desc: "Embed chat bubbles, custom triggers, brand colors, typography, and domain security.",
    articles: [
      "Embedding the widget on Shopify, Webflow, or WordPress",
      "Restricting widget loading to allowed domains only",
      "Styling custom CSS variables and launcher icon",
      "Passing user session data (JWT) to the chat widget",
    ],
  },
  {
    icon: Share2,
    title: "Omnichannel Integrations",
    desc: "Connect AI agents to WhatsApp, Slack, Discord, Zendesk, and custom webhook workflows.",
    articles: [
      "Connecting WhatsApp Business API via Meta Cloud",
      "Installing the Yedii Slack Bot to private channels",
      "Configuring Zendesk ticket escalation triggers",
      "Setting up HMAC-verified webhook listeners",
    ],
  },
  {
    icon: CreditCard,
    title: "Billing & Subscriptions",
    desc: "Manage plans, seat allocations, monthly message quotas, and invoice downloads.",
    articles: [
      "Upgrading or downgrading your subscription plan",
      "How message quotas and AI credits are calculated",
      "Updating credit card information and billing emails",
      "Requesting enterprise annual invoicing and POs",
    ],
  },
  {
    icon: AlertCircle,
    title: "Troubleshooting & Security",
    desc: "Diagnose API error codes, audit logs, rate limits, and compliance verification.",
    articles: [
      "Resolving HTTP 401 Unauthorized and 403 Forbidden errors",
      "Viewing real-time conversation transcripts and audit logs",
      "Data privacy compliance (SOC 2, GDPR, HIPAA guidelines)",
      "Exporting historical customer conversation data",
    ],
  },
];

const topFaqs = [
  {
    q: "How do I prevent my AI agent from giving inaccurate answers?",
    a: "Yedii enforces strict citation-backed RAG retrieval. If you turn on 'Strict Grounding' in agent settings, the agent will refuse to answer any query not supported by your uploaded knowledge sources.",
  },
  {
    q: "Can I test my agent before making it live to my website visitors?",
    a: "Yes! The built-in AI Playground lets you simulate user queries, inspect retrieved chunks, and refine system prompts in real time without affecting production users.",
  },
  {
    q: "What happens if a user asks a question the agent cannot answer?",
    a: "You can configure a graceful fallback message, collect the visitor's email for follow-up, or route the conversation directly to your human support team via Zendesk, Freshdesk, or Slack.",
  },
  {
    q: "How often does Yedii re-index my website content?",
    a: "Depending on your plan, you can schedule automatic re-indexing daily, weekly, or trigger an instant refresh anytime via our API or dashboard.",
  },
];

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#141C2E] flex flex-col font-sans selection:bg-[#141C2E] selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 md:px-8 max-w-6xl mx-auto border-b border-[#141C2E]/10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141C2E]/5 border border-[#141C2E]/10 text-xs font-medium text-[#141C2E]">
              <LifeBuoy className="w-3.5 h-3.5 text-zinc-600" />
              Yedii Help Center & Support
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-medium text-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              All Systems Operational (99.99%)
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#141C2E] mb-6 font-serif">
            How can we help you today?
          </h1>
          <p className="text-lg md:text-xl text-[#141C2E]/70 max-w-2xl leading-relaxed mb-8">
            Find answers, step-by-step troubleshooting guides, and configuration tutorials to keep your AI agents running seamlessly.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <input
              type="text"
              readOnly
              value="Search help articles, error codes, or setup questions..."
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-[#141C2E]/15 rounded-xl text-sm text-zinc-500 shadow-sm cursor-pointer hover:border-[#141C2E]/40 transition-colors"
            />
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold font-serif mb-2">Browse by Topic</h2>
            <p className="text-[#141C2E]/70 text-sm">Select a category to find targeted answers and guides.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#141C2E]/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#141C2E]/5 border border-[#141C2E]/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[#141C2E]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#141C2E] mb-2">{cat.title}</h3>
                    <p className="text-xs text-[#141C2E]/70 leading-relaxed mb-6">{cat.desc}</p>
                  </div>

                  <ul className="space-y-2 pt-4 border-t border-zinc-100">
                    {cat.articles.map((art, aIdx) => (
                      <li key={aIdx} className="text-xs text-zinc-600 hover:text-black transition-colors cursor-pointer flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                        <span className="line-clamp-1">{art}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Top FAQs Section */}
        <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto border-t border-[#141C2E]/10">
          <h2 className="text-2xl md:text-3xl font-bold font-serif mb-8 text-center">
            Frequently Asked Help Questions
          </h2>
          <div className="space-y-4">
            {topFaqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-[#141C2E]/10 rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-sm text-[#141C2E] mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-xs text-[#141C2E]/70 leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Support Channels */}
        <section className="py-16 px-4 md:px-8 bg-[#141C2E] text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-wider text-emerald-400 font-mono font-semibold">
                Direct Assistance
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-serif mt-2 mb-3">
                Still need help? We’re here for you.
              </h2>
              <p className="text-zinc-400 text-xs md:text-sm">
                Our customer engineering and support teams respond promptly to resolve any questions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#1C253B] border border-white/10 rounded-2xl p-6 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="font-bold text-base mb-1">Email Support</h3>
                <p className="text-xs text-zinc-400 mb-4">Average response under 2 hours during business hours.</p>
                <a
                  href="mailto:support@yedii.com"
                  className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 mt-auto"
                >
                  support@yedii.com <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="bg-[#1C253B] border border-white/10 rounded-2xl p-6 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <MessageSquare className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="font-bold text-base mb-1">Live AI Assistant</h3>
                <p className="text-xs text-zinc-400 mb-4">Chat 24/7 with our AI support agent trained on all Yedii docs.</p>
                <Link
                  href="/ai-playground"
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 mt-auto"
                >
                  Launch Assistant <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="bg-[#1C253B] border border-white/10 rounded-2xl p-6 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <ExternalLink className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="font-bold text-base mb-1">Enterprise Slack Connect</h3>
                <p className="text-xs text-zinc-400 mb-4">Dedicated private Slack channel for Enterprise plan customers.</p>
                <Link
                  href="/enterprise"
                  className="text-xs font-semibold text-purple-400 hover:text-purple-300 inline-flex items-center gap-1 mt-auto"
                >
                  Learn About Enterprise <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
