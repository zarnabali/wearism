import React from "react";
import type { Metadata, Viewport } from "next";
import "./globals.css";
// SF Pro Display is the only family the design uses. The other families live
// in ./fonts.unused.ts and are deliberately not imported: next/font executes
// every localFont() call in an imported module with no tree-shaking, so an
// unused family here would still preload ~2MB of font files on every page.
import { sfPro } from "./fonts";
import SmoothScroll from "@/components/ui/SmoothScroll";

const SITE = "https://thewearism.com";
const TITLE = "Wearism — AI styling for the clothes you already own";
const DESCRIPTION =
  "Wearism digitises your wardrobe from a single photo, plans your outfits from clothes you already own, and lets you swap pieces with people you trust. AI fashion intelligence for iOS and Android.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: TITLE,
    template: "%s · Wearism",
  },
  description: DESCRIPTION,
  applicationName: "Wearism",
  keywords: [
    "AI stylist",
    "digital wardrobe",
    "outfit planner app",
    "clothing swap app",
    "sustainable fashion",
    "wardrobe management",
    "fashion intelligence",
    "Wearism",
  ],
  authors: [{ name: "Wearism" }],
  creator: "Wearism",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Wearism",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    images: [{ url: "/logo/wearism.png", width: 1200, height: 630, alt: "Wearism" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Wearismfashion",
    creator: "@Wearismfashion",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/logo/wearism.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/logo/wearism-short-w.png",
    apple: "/logo/wearism-short-w.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBF9F6" },
    { media: "(prefers-color-scheme: dark)", color: "#0E0D0C" },
  ],
  width: "device-width",
  initialScale: 1,
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Wearism",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS, Android",
  description: DESCRIPTION,
  url: SITE,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free tier with wardrobe digitisation and daily outfit suggestions.",
  },
  author: {
    "@type": "Organization",
    name: "Wearism",
    url: SITE,
    email: "wearismfashion@gmail.com",
    sameAs: [
      "https://www.instagram.com/wearismfashion/",
      "https://www.linkedin.com/company/wearism/",
      "https://x.com/Wearismfashion",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sfPro.variable} antialiased`}
      >
        <a href="#main" className="skip-link btn btn-accent btn-sm">
          Skip to content
        </a>
        <SmoothScroll />
        {children}
        <script
          type="application/ld+json"
          // Static, author-controlled object — no user input reaches this string.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </body>
    </html>
  );
}
