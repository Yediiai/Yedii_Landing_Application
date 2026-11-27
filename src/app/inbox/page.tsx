import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Search, Users } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductInboxShowcase } from "@/components/inbox/ProductInboxShowcase";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: "Inbox | Unified Team Inbox for Customer Conversations",
  description:
    "Manage live and AI-handled customer conversations in one unified inbox with AI summaries, sentiment tracking, and instant resolution controls.",
  alternates: { canonical: `${SITE_URL}/inbox` },
  openGraph: {
    title: "Yedii Inbox | Every Customer Conversation in One Workspace",
    description:
      "Review message history, filter open and resolved threads, and inspect AI conversation summaries.",
    url: `${SITE_URL}/inbox`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Yedii Inbox" }],
  },
};

const INBOX_CAPABILITIES = [
  {
    icon: Search,
    title: "Open & Resolved Filters",
    desc: "Filter conversations by Open or Resolved status, search across messages, and spot unread threads instantly.",
  },
  {
    icon: Sparkles,
    title: "AI Summary & Sentiment",
    desc: "Inspect automatic conversation summaries, resolution status, and customer sentiment without reading every line.",
  },
  {
    icon: Users,
    title: "Seamless Team Handoff",
    desc: "Step into any live AI conversation, reply directly from the composer, and resolve tickets in one place.",
  },
  {
    icon: CheckCircle2,
    title: "Complete Conversation Context",
    desc: "View assigned agent, customer metadata, country, and timestamps alongside the full message thread.",
  },
];

export default function InboxPage() {
  return (
    <div className="min-h-screen bg-transparent text-[#141C2E] flex flex-col font-sans selection:bg-[#141C2E] selection:text-white relative z-10">
      <Navbar />

      <main className="flex-1 product-showcase-scope">
        {/* Hero */}
        <section className="pt-28 pb-12 md:pt-36 md:pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/85 border border-[#E8E9EC] text-xs font-semibold text-[#141C2E] mb-4 shadow-2xs">
            Shared Team Inbox
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-[52px] font-bold tracking-tight text-[#141C2E] leading-[1.1] max-w-4xl mx-auto">
            Every Customer Conversation. One Unified Inbox.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#565C66] max-w-2xl mx-auto leading-relaxed">
            Manage customer conversations in one organized workspace. Give your support team the
            visibility and tools they need to deliver faster, more consistent customer experiences.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#inbox-preview"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#141C2E] text-white text-sm font-semibold hover:bg-black transition-colors inline-flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Explore Inbox</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="https://app.yedii.com/signup"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white text-[#141C2E] text-sm font-semibold border border-[#E0E2E6] hover:bg-zinc-50 transition-colors inline-flex items-center justify-center shadow-2xs"
            >
              Get Started
            </Link>
          </div>
        </section>

        {/* Interactive Showcase */}
        <section id="inbox-preview" className="pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <ProductInboxShowcase />
        </section>

        {/* Capabilities */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-200/70">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8A9099] mb-2">
                Conversation Management
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141C2E]">
                Full Visibility Over Every Thread.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {INBOX_CAPABILITIES.map((cap) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={cap.title}
                    className="rounded-2xl bg-white border border-[#E8E9EC] p-6 space-y-3"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#F4F5F7] border border-[#E8E9EC] flex items-center justify-center text-[#141C2E]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-[#141C2E]">{cap.title}</h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{cap.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
