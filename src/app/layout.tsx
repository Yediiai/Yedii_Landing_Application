import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  LINKEDIN_URL,
  REDDIT_URL,
} from "@/lib/seo/config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Yedii | Autonomous AI Agent Platform",
    template: "%s | Yedii",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "AI customer support",
    "AI agent platform",
    "autonomous AI agents",
    "customer support automation",
    "chatbot platform",
    "conversational AI",
    "enterprise AI agents",
    "zero data retention AI",
  ],
  authors: [{ name: "Yedii" }],
  creator: "Yedii",
  publisher: "Yedii",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Yedii | Autonomous AI Agent Platform",
    description: SITE_DESCRIPTION,
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
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  alternates: { canonical: SITE_URL },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Yedii",
  url: "https://www.yedii.com",
  logo: "https://www.yedii.com/images/yedii-logo.png",
  sameAs: [LINKEDIN_URL, REDDIT_URL],
  description:
    "AI-powered autonomous agent platform for customer support automation",
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Yedii",
  url: "https://www.yedii.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.yedii.com/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth h-full antialiased`}
    >
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={webSiteSchema} />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.className} min-h-full flex flex-col font-sans antialiased text-[#141C2E] bg-[#FAFAFA]`}
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
