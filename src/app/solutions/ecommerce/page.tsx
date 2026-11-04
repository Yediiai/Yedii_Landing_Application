import type { Metadata } from "next";
import {
  ShoppingBag,
  Truck,
  RotateCcw,
  Sparkles,
  MessageCircle,
  TrendingUp,
} from "lucide-react";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";
import { DedicatedPageTemplate } from "@/components/templates/DedicatedPageTemplate";

export const metadata: Metadata = {
  title: "AI E-Commerce Customer Support | 24/7 Shopping Assistant",
  description:
    "Automate order tracking, return processing, product sizing recommendations, and 24/7 shopping assistance on WhatsApp and web chat with Yedii.",
  alternates: { canonical: `${SITE_URL}/solutions/ecommerce` },
  openGraph: {
    title: "AI E-Commerce Customer Support | Yedii",
    description: "Autonomous AI agents for e-commerce: parcel tracking, returns, product discovery, and cart recovery.",
    url: `${SITE_URL}/solutions/ecommerce`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Yedii E-Commerce Solution" }],
  },
};

export default function EcommerceSolutionPage() {
  return (
    <DedicatedPageTemplate
      badge={{
        icon: ShoppingBag,
        text: "Solutions • E-Commerce & Retail Automation",
      }}
      hero={{
        title: "Turn customer support into a 24/7 revenue driver for your store",
        subtitle:
          "Provide instant order status updates, automate returns, and answer sizing questions around the clock. Yedii connects directly to your catalog and order APIs to resolve retail inquiries on your site and WhatsApp.",
        primaryCta: { text: "Deploy Store Agent", href: "https://app.yedii.com/signup" },
        secondaryCta: { text: "See Retail Case Study", href: "/customers" },
      }}
      mockPreview={
        <div className="bg-[#141C2E] rounded-[14px] p-6 text-white font-mono text-xs space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-zinc-300 font-semibold text-sm">WhatsApp Store Assistant • Zenith Retail</span>
            <span className="text-emerald-400">Order API: Connected</span>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-white/5 rounded-[8px] border border-white/10">
              <span className="text-zinc-400 block mb-1">Shopper (WhatsApp):</span>
              <p className="text-zinc-100 font-sans text-sm">&quot;Where is my order #ZN-89214? I ordered it 3 days ago for a birthday.&quot;</p>
            </div>
            <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-[8px]">
              <span className="text-emerald-400 font-semibold block mb-1">Yedii Agent [Carrier API Lookup - FedEx 492049102]:</span>
              <p className="text-emerald-100 font-sans text-sm leading-relaxed">
                &quot;Great news! Your order #ZN-89214 is out for delivery today by FedEx and is estimated to arrive before 4:00 PM. Here is your live tracking link: [track.fedex.com/492049102]. You will receive an SMS as soon as it is delivered!&quot;
              </p>
            </div>
          </div>
        </div>
      }
      problemSolution={{
        title: "Retail shoppers expect instant answers, especially on mobile",
        subtitle:
          "Slow customer support leads directly to abandoned carts, lost holiday sales, and negative merchant ratings.",
        items: [
          {
            problem: "70% of inbound retail tickets are repetitive 'Where is my order?' (WISMO) questions.",
            solution: "Yedii connects to your order management API to look up real-time shipping carrier tracking instantly.",
            benefit: "70% Reduction in WISMO Tickets",
          },
          {
            problem: "Shoppers abandoning carts late at night because sizing or return policy details are hard to find.",
            solution: "24/7 web chat and WhatsApp agents answer sizing, fabric, and return window questions in seconds.",
            benefit: "+18.4% Cart Recovery",
          },
          {
            problem: "Hiring and training seasonal customer service contractors for Black Friday is costly and inconsistent.",
            solution: "Yedii scales elastically to handle 10x traffic surges with zero additional headcount required.",
            benefit: "100% Peak Surge Uptime",
          },
        ],
      }}
      features={{
        title: "Omni-channel capabilities tailored for high-growth online brands",
        subtitle: "Engage shoppers where they buy and resolve inquiries before they escalate.",
        items: [
          {
            icon: Truck,
            title: "Automated WISMO & Tracking",
            desc: "Customers type their order number or email to receive real-time parcel delivery status and tracking links.",
            value: "Instant tracking lookup",
          },
          {
            icon: RotateCcw,
            title: "Return & Exchange Processing",
            desc: "Guides shoppers through your return policy rules, generates return portal links, and verifies eligibility.",
            value: "Automated returns workflow",
          },
          {
            icon: Sparkles,
            title: "Product Sizing & Fit Advisor",
            desc: "Indexes size charts, fabric specifications, and customer fit guidelines to recommend accurate apparel sizes.",
            value: "Fewer returns & higher CSAT",
          },
          {
            icon: MessageCircle,
            title: "WhatsApp & Instagram Messaging",
            desc: "Deploy conversational shopping agents directly on WhatsApp Business and Instagram Direct messages.",
            value: "Conversational commerce channel",
          },
          {
            icon: TrendingUp,
            title: "Personalized Product Discovery",
            desc: "Recommends complementary items based on customer questions and in-stock catalog availability.",
            value: "Higher average order value",
          },
          {
            icon: ShoppingBag,
            title: "Seamless Store Integrations",
            desc: "Available out-of-the-box via webhooks and REST APIs. (Native Shopify & Klaviyo app listings launching soon).",
            value: "Flexible retail architecture",
          },
        ],
      }}
      howItWorks={{
        title: "How Yedii powers autonomous e-commerce customer service",
        subtitle: "From shopper question to verified fulfillment update.",
        steps: [
          {
            step: "01",
            title: "Index Store Policies",
            desc: "Upload return policies, shipping FAQs, size charts, and warranty terms into Yedii in seconds.",
            badge: "Knowledge Sync",
          },
          {
            step: "02",
            title: "Connect Order APIs",
            desc: "Hook up your order management webhook to enable authenticated order lookups and tracking status checks.",
            badge: "Webhook Integration",
          },
          {
            step: "03",
            title: "Deploy on Site & WhatsApp",
            desc: "Add our lightweight shopping widget to your checkout and product pages, and activate your WhatsApp phone number.",
            badge: "Multi-Channel",
          },
          {
            step: "04",
            title: "Automate & Convert",
            desc: "Yedii resolves support tickets, recovers abandoned shoppers, and escalates complex returns to your human reps.",
            badge: "24/7 Revenue",
          },
        ],
      }}
      useCases={{
        title: "E-Commerce brands scaling with Yedii",
        subtitle: "Proven results across direct-to-consumer and omni-channel retail.",
        items: [
          {
            industry: "Global Fashion & Apparel",
            title: "Automating Sizing & 30-Day Returns",
            desc: "Zenith Retail automated holiday order tracking and return label requests across WhatsApp and web chat.",
            outcome: "Handled 400% Black Friday surge with 0 temp staff",
          },
          {
            industry: "Consumer Electronics",
            title: "Pre-Purchase Compatibility Checks",
            desc: "Answered technical wattage, port compatibility, and warranty questions directly on PDP pages.",
            outcome: "+14.2% lift in direct checkout conversion",
          },
          {
            industry: "Home & Furniture",
            title: "Delivery Scheduling & Freight Tracking",
            desc: "Automated white-glove delivery scheduling coordination and shipment delay notifications for customers.",
            outcome: "62% drop in manual carrier dispatch calls",
          },
        ],
      }}
      benefits={{
        title: "The bottom-line value for e-commerce founders & CX heads",
        subtitle: "Drive down cost-per-ticket while boosting repeat purchase rates.",
        items: [
          { value: "70%", label: "WISMO Deflection", desc: "Automate delivery and shipping inquiries completely." },
          { value: "+18.4%", label: "Cart Recovery", desc: "Convert hesitant shoppers with instant 24/7 product answers." },
          { value: "< 10s", label: "Response Speed", desc: "Keep shoppers engaged before they browse competitors." },
          { value: "0", label: "Seasonal Hires", desc: "Handle holiday traffic surges without adding payroll overhead." },
        ],
      }}
      faqs={{
        title: "E-Commerce Solution FAQs",
        subtitle: "Common retail implementation and capability questions.",
        items: [
          {
            q: "Can the AI agent look up customer orders securely?",
            a: "Yes. Customers verify their identity by entering their order number combined with their billing zip code or email before order details are displayed.",
          },
          {
            q: "Which e-commerce platforms can connect with Yedii?",
            a: "Yedii currently connects to any e-commerce platform with a REST API or webhook support (Custom stores, BigCommerce, Magento, WooCommerce, Shopify). Dedicated one-click app store listings are on our immediate product roadmap.",
          },
          {
            q: "Can the agent process payments directly inside the chat?",
            a: "Yedii generates secure, authenticated checkout links directing customers to your PCI-compliant checkout page rather than collecting raw credit card numbers in chat.",
          },
          {
            q: "How does the WhatsApp integration work for retail brands?",
            a: "Yedii connects to your official WhatsApp Business API phone number. Customers message your verified business profile and receive instant AI answers.",
          },
        ],
      }}
      cta={{
        title: "Supercharge your store support and drive holiday revenue",
        subtitle: "Deploy an e-commerce support agent in 10 minutes with our 14-day free trial.",
        primaryText: "Deploy Store Agent",
        primaryHref: "https://app.yedii.com/signup",
      }}
    />
  );
}

