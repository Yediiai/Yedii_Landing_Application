import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PlansView } from "@/components/plans";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: "Pricing & Plans",
  description:
    "Explore available plans to unlock additional features and expand your AI capabilities.",
  alternates: { canonical: `${SITE_URL}/pricing` },
  openGraph: {
    title: "Pricing & Plans | Yedii",
    description:
      "Explore available plans to unlock additional features and expand your AI capabilities.",
    url: `${SITE_URL}/pricing`,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Yedii Pricing & Plans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing & Plans | Yedii",
    description:
      "Explore available plans to unlock additional features and expand your AI capabilities.",
    images: [DEFAULT_OG_IMAGE],
  },
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
