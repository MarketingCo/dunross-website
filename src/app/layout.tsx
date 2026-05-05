import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const siteUrl = "https://dunross.co";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dunross Investments Limited | Family Investment Office",
    template: "%s | Dunross Investments Limited",
  },
  description:
    "A Scottish family investment office providing disciplined capital stewardship, strategic property investment, and enduring value creation — rooted in heritage and patience.",
  keywords: [
    "family investment office Scotland",
    "property investment Edinburgh",
    "commercial property investment Scotland",
    "commercial property management",
    "Dunross Investments",
    "Scottish commercial property",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Dunross Investments Limited",
    title: "Dunross Investments Limited | Family Investment Office",
    description:
      "A Scottish family investment office providing disciplined capital stewardship and strategic property investment across Scotland.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dunross Investments Limited",
    description:
      "A Scottish family investment office providing disciplined capital stewardship across Scotland.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": siteUrl,
  name: "Dunross Investments Limited",
  description:
    "Disciplined capital stewardship and strategic investment services across Scotland.",
  url: siteUrl,
  email: "info@dunross.co",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Titanium 1, King's Inch Place",
    addressLocality: "Renfrew",
    postalCode: "PA4 8WF",
    addressRegion: "Scotland",
    addressCountry: "GB",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Edinburgh" },
    { "@type": "AdministrativeArea", name: "Glasgow" },
    { "@type": "AdministrativeArea", name: "Scotland" },
  ],
  knowsAbout: [
    "Capital Stewardship",
    "Property Investment",
    "Asset Management",
    "Property Development",
    "Heritage Restoration",
  ],
  foundingDate: "2012",
  founder: {
    "@type": "Person",
    name: "John Dunn",
    jobTitle: "Chairman & Founder",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="bg-[#080a09] text-[#f0f4f1] font-sans antialiased min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
