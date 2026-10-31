import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { InteractivePlayground } from "@/components/InteractivePlayground";
import { SocialProof } from "@/components/SocialProof";
import { FeaturesBento } from "@/components/FeaturesBento";
import { DeveloperSection } from "@/components/DeveloperSection";
import { ComparisonMatrix } from "@/components/ComparisonMatrix";
import { Testimonials } from "@/components/Testimonials";
import { PricingSection } from "@/components/PricingSection";
import { FaqSection } from "@/components/FaqSection";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-950 font-sans selection:bg-zinc-900 selection:text-white">
      {/* Peec AI Style Fixed/Sticky Navbar */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* ElevenLabs + Peec AI Live Interactive Agent Playground */}
        <InteractivePlayground />

        {/* Social Proof Marquee & Platform Statistics */}
        <SocialProof />

        {/* Bento Grid Feature Breakdown */}
        <FeaturesBento />

        {/* Developer Integration & Code Tabs */}
        <DeveloperSection />

        {/* Competitive Comparison Matrix */}
        <ComparisonMatrix />

        {/* Customer Success Stories & Reviews */}
        <Testimonials />

        {/* Transparent Pricing Calculator */}
        <PricingSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Dark Call-to-Action Card */}
        <CtaBanner />
      </main>

      {/* Modern High-Craft Footer */}
      <Footer />
    </div>
  );
}
