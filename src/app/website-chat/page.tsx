import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductWebsiteChatShowcase } from "@/components/deploy/ProductWebsiteChatShowcase";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: "Website Chat | Intelligent Customer Support Widget",
  description:
    "Bring intelligent AI-powered conversations to your website with customizable themes, grounded knowledge, and one-line deployment.",
  alternates: { canonical: `${SITE_URL}/website-chat` },
  openGraph: {
    title: "Yedii Website Chat | Deploy AI Support Anywhere",
    description:
      "Customize light/dark appearance, welcome messages, and embed Yedii AI chat via JavaScript, Hosted Page, or iframe.",
    url: `${SITE_URL}/website-chat`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Yedii Website Chat" }],
  },
};

const BENEFITS = [
  {
    title: "AI-powered customer conversations",
    desc: "Answer visitor questions immediately with context-aware responses.",
  },
  {
    title: "Customizable website experience",
    desc: "Switch between Light and Dark themes, customize welcome messages, and set language/region.",
  },
  {
    title: "Easy website installation",
    desc: "Deploy via JavaScript Embed, Hosted Chat Page, or Inline iframe in minutes.",
  },
  {
    title: "Consistent customer support",
    desc: "Deliver reliable 24/7 answers across every page of your website.",
  },
  {
    title: "Business knowledge-powered answers",
    desc: "Responses are grounded on your verified docs, websites, and PDFs.",
  },
];

export default function WebsiteChatPage() {
  return (
    <div className="min-h-screen bg-transparent text-[#141C2E] flex flex-col font-sans selection:bg-[#141C2E] selection:text-white relative z-10">
      <Navbar />

      <main className="flex-1 product-showcase-scope">
        {/* Hero */}
        <section className="pt-28 pb-12 md:pt-36 md:pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/85 border border-[#E8E9EC] text-xs font-semibold text-[#141C2E] mb-4 shadow-2xs">
            Website Chat
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-[52px] font-bold tracking-tight text-[#141C2E] leading-[1.1] max-w-4xl mx-auto">
            Turn Your Website Into an Intelligent Customer Support Experience.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#565C66] max-w-2xl mx-auto leading-relaxed">
            Bring intelligent AI-powered conversations to your website. Yedii helps businesses
            answer customer questions, deliver instant support, and create seamless customer
            experiences.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#website-chat-preview"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#141C2E] text-white text-sm font-semibold hover:bg-black transition-colors inline-flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Explore Website Chat</span>
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
        <section id="website-chat-preview" className="pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <ProductWebsiteChatShowcase />
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-200/70">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8A9099] mb-2">
                Why Website Chat
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141C2E]">
                Built for Instant, Branded Support.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {BENEFITS.map((b) => (
                <div
                  key={b.title}
                  className="rounded-2xl bg-white border border-[#E8E9EC] p-6 space-y-2.5"
                >
                  <div className="w-7 h-7 rounded-full bg-[#EAF8EE] text-[#15803D] flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-[#141C2E]">{b.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
