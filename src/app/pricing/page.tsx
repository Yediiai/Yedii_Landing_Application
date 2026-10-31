import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PricingSection } from "@/components/PricingSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Plans & Pricing | Yedii",
  description: "Explore available plans to unlock additional features and expand your AI support capabilities.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-950 font-sans selection:bg-zinc-900 selection:text-white pt-16">
      <Navbar />
      <main className="py-6">
        <PricingSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
