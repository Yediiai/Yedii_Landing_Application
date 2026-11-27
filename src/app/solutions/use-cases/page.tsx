import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ShoppingBag,
  Cpu,
  Headphones,
  LineChart,
  UserCheck,
  CreditCard,
  Building2,
  Plane,
  GraduationCap,
  Truck,
  CheckCircle2,
  Users,
  Settings2,
  TrendingUp,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SolutionsWorkflowDemo } from "@/components/solutions/SolutionsWorkflowDemo";
import { USE_CASES_LIST } from "@/data/solutions/use-cases-data";
import { INDUSTRIES_LIST } from "@/data/solutions/industries-data";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: "Solutions & Use Cases | Yedii AI Customer Support",
  description:
    "Discover how businesses across industries and departments use Yedii AI agents to automate customer interactions, resolve technical inquiries, and improve support efficiency.",
  alternates: { canonical: `${SITE_URL}/solutions/use-cases` },
  openGraph: {
    title: "Solutions & Use Cases | Yedii",
    description: "One AI platform. Multiple ways to serve your customers.",
    url: `${SITE_URL}/solutions/use-cases`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Yedii Solutions & Use Cases" }],
  },
};

const USE_CASE_ICONS: Record<string, React.ElementType> = {
  "customer-support": Headphones,
  "ecommerce-support": ShoppingBag,
  "technical-support": Cpu,
  "sales-assistance": LineChart,
  "customer-success": UserCheck,
  "billing-support": CreditCard,
};

const INDUSTRY_ICONS: Record<string, React.ElementType> = {
  "retail-ecommerce": ShoppingBag,
  "saas-technology": Cpu,
  "financial-services": Building2,
  "travel-hospitality": Plane,
  "education": GraduationCap,
  "logistics": Truck,
};

const TEAMS_LIST = [
  {
    title: "Customer Support",
    role: "Frontline Agents & Leads",
    desc: "Automate repetitive tier-1 inquiries, eliminate backlog fatigue, and improve customer resolution workflows.",
    icon: Headphones,
    highlights: ["74% autonomous deflection", "Zero-hallucination answers", "Contextual human escalation"],
  },
  {
    title: "Support Operations",
    role: "Operations & Workforce Managers",
    desc: "Reduce repetitive workloads, monitor CSAT sentiment trends in real time, and scale support without expanding headcount.",
    icon: Settings2,
    highlights: ["Real-time CSAT tracking", "Multi-model cost optimization", "Audit-ready conversation replays"],
  },
  {
    title: "Sales Teams",
    role: "Inbound Sales & Account Execs",
    desc: "Answer buying questions on pricing and product pages, qualify inbound interest 24/7, and book meetings directly for AEs.",
    icon: TrendingUp,
    highlights: ["Instant inbound qualification", "Automated Calendly booking", "Enterprise battlecard grounding"],
  },
  {
    title: "Customer Success Teams",
    role: "CSMs & Implementation Leads",
    desc: "Support customer onboarding, accelerate product adoption milestones, and provide self-service assistance that reduces churn.",
    icon: HeartHandshake,
    highlights: ["Guided workspace checklists", "Feature adoption nudges", "Proactive health alerts"],
  },
];

export default function UseCasesLandingPage() {
  return (
    <div className="min-h-screen bg-[#FBFBFC] text-[#141C2E] font-sans selection:bg-[#141C2E] selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-1 w-full pt-20 pb-16">
        {/* ======================================================== */}
        {/* A. HERO SECTION                                          */}
        {/* ======================================================== */}
        <section className="py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#E8E9EC] text-[#141C2E] text-xs font-semibold mb-4 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-zinc-900" />
            <span>Enterprise Solutions &amp; Use Cases</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#141C2E] leading-tight max-w-4xl mx-auto">
            One AI platform. Multiple ways to serve your customers.
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            Discover how Yedii helps teams automate customer interactions, resolve complex questions, and deliver better customer experiences across every touchpoint.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="#use-cases"
              className="w-full sm:w-auto px-6 py-3 rounded-[8px] bg-[#141C2E] text-white font-semibold text-xs sm:text-sm hover:bg-black transition-all shadow-xs inline-flex items-center justify-center gap-2"
            >
              <span>Explore Yedii</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="https://app.yedii.com/signup"
              className="w-full sm:w-auto px-6 py-3 rounded-[8px] bg-white text-[#141C2E] font-semibold text-xs sm:text-sm border border-[#E4E5E8] hover:bg-zinc-50 transition-all shadow-2xs inline-flex items-center justify-center gap-2"
            >
              <span>Get Started</span>
            </Link>
          </div>
        </section>

        {/* ======================================================== */}
        {/* B. USE CASE CARDS (6 PREMIUM CARDS)                      */}
        {/* ======================================================== */}
        <section id="use-cases" className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[11.5px] font-semibold uppercase tracking-wider text-[#8A9099]">
              By Use Case
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#141C2E] mt-1">
              Purpose-built AI agents for every customer journey
            </h2>
            <p className="text-xs sm:text-sm text-[#6B7280] mt-1.5 leading-relaxed">
              Specialized roles equipped with verified knowledge, strict boundary conditions, and direct integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {USE_CASES_LIST.map((uc) => {
              const Icon = USE_CASE_ICONS[uc.slug] || Headphones;
              return (
                <div
                  key={uc.slug}
                  className="rounded-[16px] border border-[#EAEAEC] bg-white p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Icon & Badge */}
                    <div className="w-10 h-10 rounded-[10px] bg-[#F4F5F7] border border-[#EAEAEC] flex items-center justify-center text-[#141C2E] mb-4 group-hover:bg-[#141C2E] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-lg font-bold text-[#141C2E] group-hover:text-black">
                      {uc.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-[13px] text-[#6B7280] leading-relaxed">
                      {uc.shortDesc}
                    </p>

                    {/* Key Capabilities */}
                    <div className="mt-5 pt-4 border-t border-[#F2F3F6] space-y-2">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8A9099]">
                        Key Capabilities
                      </div>
                      <ul className="space-y-1.5">
                        {uc.keyCapabilities.slice(0, 4).map((cap, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[#374151]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                            <span>{cap.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Learn More Link */}
                  <div className="mt-6 pt-4 border-t border-[#F2F3F6]">
                    <Link
                      href={`/solutions/use-cases/${uc.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#141C2E] group-hover:text-black hover:underline"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ======================================================== */}
        {/* C. SOLUTIONS BY INDUSTRY (6 CARDS)                       */}
        {/* ======================================================== */}
        <section id="by-industry" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[11.5px] font-semibold uppercase tracking-wider text-[#8A9099]">
              By Industry
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#141C2E] mt-1">
              AI customer support for every industry
            </h2>
            <p className="text-xs sm:text-sm text-[#6B7280] mt-1.5 leading-relaxed">
              Deliver consistent, intelligent customer experiences tailored to the needs of your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES_LIST.map((ind) => {
              const Icon = INDUSTRY_ICONS[ind.slug] || Building2;
              return (
                <div
                  key={ind.slug}
                  className="rounded-[16px] border border-[#EAEAEC] bg-white p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-[10px] bg-[#F4F5F7] border border-[#EAEAEC] flex items-center justify-center text-[#141C2E] mb-4 group-hover:bg-[#141C2E] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-lg font-bold text-[#141C2E] group-hover:text-black">
                      {ind.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-[13px] text-[#6B7280] leading-relaxed">
                      {ind.shortDesc}
                    </p>

                    {/* Common Inquiries Pill List */}
                    <div className="mt-5 pt-4 border-t border-[#F2F3F6] space-y-2">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8A9099]">
                        Common Inquiries
                      </div>
                      <div className="space-y-1">
                        {ind.commonInquiries.slice(0, 2).map((inq, i) => (
                          <div key={i} className="text-[11.5px] text-[#4B5563] truncate">
                            • &ldquo;{inq}&rdquo;
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#F2F3F6]">
                    <Link
                      href={`/solutions/industries/${ind.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#141C2E] group-hover:text-black hover:underline"
                    >
                      <span>Explore Industry Solution</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ======================================================== */}
        {/* D. REAL-WORLD WORKFLOW DEMONSTRATIONS                    */}
        {/* ======================================================== */}
        <SolutionsWorkflowDemo />

        {/* ======================================================== */}
        {/* E. SOLUTIONS BY TEAM (4 EDITORIAL CARDS)                 */}
        {/* ======================================================== */}
        <section id="by-team" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[11.5px] font-semibold uppercase tracking-wider text-[#8A9099]">
              By Team
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#141C2E] mt-1">
              Empowering departments across your organization
            </h2>
            <p className="text-xs sm:text-sm text-[#6B7280] mt-1.5 leading-relaxed">
              Explore how support, operations, sales, and success teams unlock efficiency with autonomous AI agents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TEAMS_LIST.map((team, idx) => {
              const Icon = team.icon;
              return (
                <div
                  key={idx}
                  className="rounded-[16px] border border-[#EAEAEC] bg-white p-6 sm:p-8 shadow-xs hover:border-[#141C2E]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-[10px] bg-[#141C2E] text-white flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-semibold text-[#8A9099] uppercase tracking-wider">
                        {team.role}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#141C2E]">{team.title}</h3>

                    <p className="mt-2 text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                      {team.desc}
                    </p>

                    <div className="mt-6 pt-4 border-t border-[#F2F3F6] flex flex-wrap gap-2">
                      {team.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4F5F7] text-[11.5px] font-medium text-[#374151]"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>{h}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ======================================================== */}
        {/* F. FINAL ENTERPRISE CTA                                  */}
        {/* ======================================================== */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="rounded-[20px] bg-[#141C2E] text-white p-8 sm:p-12 text-center relative overflow-hidden">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white max-w-2xl mx-auto leading-tight">
              Ready to elevate your customer support experience?
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto leading-relaxed">
              Join leading organizations automating customer conversations, accelerating resolution times, and delivering delight 24/7.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="https://app.yedii.com/signup"
                className="w-full sm:w-auto px-6 py-3 rounded-[8px] bg-white text-[#141C2E] font-semibold text-xs sm:text-sm hover:bg-zinc-100 transition-all shadow-xs inline-flex items-center justify-center gap-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/pricing"
                className="w-full sm:w-auto px-6 py-3 rounded-[8px] bg-transparent text-white font-semibold text-xs sm:text-sm border border-white/20 hover:bg-white/10 transition-all shadow-xs inline-flex items-center justify-center gap-2"
              >
                <span>Schedule Enterprise Demo</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
