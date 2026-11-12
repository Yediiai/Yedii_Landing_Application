import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: { absolute: "Yedii | Autonomous AI Agent Platform" },
  description:
    "Deploy production-grade conversational and workflow AI agents grounded on your company data. Automate customer support, sales, and operations with zero hallucination.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Yedii | Autonomous AI Agent Platform",
    description:
      "Deploy production-grade conversational and workflow AI agents grounded on your company data.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Yedii — Autonomous AI Agent Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yedii | Autonomous AI Agent Platform",
    description:
      "Deploy production-grade conversational and workflow AI agents grounded on your company data.",
    images: [DEFAULT_OG_IMAGE],
  },
};
import { Hero } from "@/components/Hero";
import { InteractivePlayground } from "@/components/InteractivePlayground";
import { SocialProof } from "@/components/SocialProof";
import { WhyChooseYediiSection } from "@/components/WhyChooseYediiSection";
import { Testimonials } from "@/components/Testimonials";
import { PricingSection } from "@/components/PricingSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-zinc-950 font-sans selection:bg-zinc-900 selection:text-white relative z-10">
      {/* Peec AI Style Fixed/Sticky Navbar */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* ElevenLabs + Peec AI Live Interactive Agent Playground */}
        <InteractivePlayground />

        {/* Social Proof Marquee & Platform Statistics */}
        <SocialProof />

        {/* Why Teams Choose Yedii (6 Core Differentiator Cards) */}
        <WhyChooseYediiSection />

        {/* Customer Success Stories & Reviews */}
        <Testimonials />

        {/* Transparent Pricing Calculator */}
        <PricingSection />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      <Footer />
    </div>
  );
}
