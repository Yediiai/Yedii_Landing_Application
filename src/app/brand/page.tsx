import type { Metadata } from "next";
import Image from "next/image";
import {
  Download,
  Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: "Brand Assets & Guidelines | Yedii",
  description:
    "Official brand assets, logos, color codes, typography standards, and usage guidelines for Yedii.",
  alternates: { canonical: `${SITE_URL}/brand` },
  openGraph: {
    title: "Yedii Brand Assets & Guidelines",
    description: "Official logos, brand colors, typography, and media kit assets.",
    url: `${SITE_URL}/brand`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Yedii Brand Kit" }],
  },
};

export default function BrandPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#141C2E] flex flex-col font-sans selection:bg-[#141C2E] selection:text-white">
      <Navbar />

      <main className="flex-1">
        <section className="pt-32 pb-16 px-4 md:px-8 max-w-5xl mx-auto border-b border-[#141C2E]/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141C2E]/5 border border-[#141C2E]/10 text-xs font-medium text-[#141C2E] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-zinc-600" />
            Media Kit & Identity
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#141C2E] mb-6 font-serif">
            Brand Assets & Guidelines
          </h1>
          <p className="text-lg md:text-xl text-[#141C2E]/70 max-w-2xl leading-relaxed mb-8">
            Guidelines and approved assets to represent the Yedii brand accurately across marketing materials, partner directories, and press publications.
          </p>
        </section>

        {/* Logos Section */}
        <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold font-serif mb-2">Approved Logos</h2>
            <p className="text-xs md:text-sm text-[#141C2E]/70">Use high-contrast versions with sufficient breathing room.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* Dark Mark */}
            <div className="bg-white border border-[#141C2E]/15 rounded-2xl p-8 flex flex-col justify-between shadow-sm">
              <div className="h-32 flex items-center justify-center">
                <Image
                  src="/images/yedii-logo.png"
                  alt="Yedii Dark Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-xs text-[#141C2E]">Yedii Icon (Dark)</div>
                  <div className="text-[11px] text-zinc-500">For light backgrounds</div>
                </div>
                <a
                  href="/images/yedii-logo.png"
                  download
                  className="px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-xs font-semibold text-zinc-800 inline-flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" /> PNG
                </a>
              </div>
            </div>

            {/* Light Mark */}
            <div className="bg-[#141C2E] rounded-2xl p-8 flex flex-col justify-between shadow-sm">
              <div className="h-32 flex items-center justify-center">
                <Image
                  src="/images/yedii-logo-white.png"
                  alt="Yedii Light Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-white">
                <div>
                  <div className="font-bold text-xs">Yedii Icon (White)</div>
                  <div className="text-[11px] text-zinc-400">For dark backgrounds</div>
                </div>
                <a
                  href="/images/yedii-logo-white.png"
                  download
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white inline-flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" /> PNG
                </a>
              </div>
            </div>
          </div>

          {/* Color Palette */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold font-serif mb-2">Core Color Palette</h2>
            <p className="text-xs md:text-sm text-[#141C2E]/70">Our signature enterprise dark navy and warm neutral parchment palette.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white border border-[#141C2E]/10 rounded-xl p-4 shadow-sm">
              <div className="h-16 rounded-lg bg-[#141C2E] mb-3" />
              <div className="font-bold text-xs text-[#141C2E]">Enterprise Navy</div>
              <div className="text-[11px] font-mono text-zinc-500">#141C2E</div>
            </div>
            <div className="bg-white border border-[#141C2E]/10 rounded-xl p-4 shadow-sm">
              <div className="h-16 rounded-lg bg-[#FDFBF7] border border-zinc-200 mb-3" />
              <div className="font-bold text-xs text-[#141C2E]">Warm Parchment</div>
              <div className="text-[11px] font-mono text-zinc-500">#FDFBF7</div>
            </div>
            <div className="bg-white border border-[#141C2E]/10 rounded-xl p-4 shadow-sm">
              <div className="h-16 rounded-lg bg-[#059669] mb-3" />
              <div className="font-bold text-xs text-[#141C2E]">Verified Emerald</div>
              <div className="text-[11px] font-mono text-zinc-500">#059669</div>
            </div>
            <div className="bg-white border border-[#141C2E]/10 rounded-xl p-4 shadow-sm">
              <div className="h-16 rounded-lg bg-[#000000] mb-3" />
              <div className="font-bold text-xs text-[#141C2E]">Deep Pitch Black</div>
              <div className="text-[11px] font-mono text-zinc-500">#000000</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
