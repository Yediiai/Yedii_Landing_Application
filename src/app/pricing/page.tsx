import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PlansView } from "@/components/plans";

export const metadata: Metadata = {
  title: "Pricing & Plans | Yedii",
  description: "Explore available plans to unlock additional features and expand your AI capabilities.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111827] font-sans selection:bg-[#141C2E] selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-1 w-full pt-20 pb-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <PlansView />
        </div>
      </main>

      <Footer />
    </div>
  );
}
