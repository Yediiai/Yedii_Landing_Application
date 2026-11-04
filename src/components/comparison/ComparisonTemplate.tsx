import React from "react";
import { CompetitorComparison } from "@/data/comparisons/types";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ComparisonHero } from "./ComparisonHero";
import { PlatformOverview } from "./PlatformOverview";
import { FeatureComparisonTable } from "./FeatureComparisonTable";
import { AICapabilitiesComparison } from "./AICapabilitiesComparison";
import { PricingComparison } from "./PricingComparison";
import { ProsAndConsiderations } from "./ProsAndConsiderations";
import { WhyChooseYedii } from "./WhyChooseYedii";
import { ComparisonFAQ } from "./ComparisonFAQ";
import { ComparisonCTA } from "./ComparisonCTA";

export function ComparisonTemplate({ comparison }: { comparison: CompetitorComparison }) {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#141C2E] flex flex-col font-sans selection:bg-[#141C2E] selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* A. Hero Section */}
        <ComparisonHero comparison={comparison} />

        {/* B. Platform Overview */}
        <PlatformOverview comparison={comparison} />

        {/* C. Feature Comparison */}
        <FeatureComparisonTable comparison={comparison} />

        {/* D. AI Capabilities Comparison */}
        <AICapabilitiesComparison comparison={comparison} />

        {/* E. Pricing Comparison */}
        <PricingComparison comparison={comparison} />

        {/* F. Pros and Considerations */}
        <ProsAndConsiderations comparison={comparison} />

        {/* G. Why Choose Yedii? */}
        <WhyChooseYedii />

        {/* H. Frequently Asked Questions */}
        <ComparisonFAQ faqs={comparison.faqs} competitorName={comparison.name} />

        {/* I. Final CTA */}
        <ComparisonCTA />
      </main>

      <Footer />
    </div>
  );
}

