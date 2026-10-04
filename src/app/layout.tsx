import type { Metadata } from "next";
import { Cormorant_Garamond, Fraunces, Instrument_Serif, Outfit, Figtree, Newsreader } from "next/font/google";
import { brand } from "@/content/brand";
import { Footer, Header } from "@/components/chrome";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-serif-ribbon" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans-ribbon" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-serif-garden" });
const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans-garden" });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-serif-quiet" });
const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400", variable: "--font-serif-event" });

const fontClass = {
  ribbon: `${fraunces.variable} ${outfit.variable}`,
  garden: `${cormorant.variable} ${figtree.variable}`,
  quiet: `${newsreader.variable} ${figtree.variable}`,
  event: `${instrument.variable} ${outfit.variable}`,
}[brand.variant];

export const metadata: Metadata = {
  title: {
    default: `${brand.name} | ${brand.location}`,
    template: `%s | ${brand.name}`,
  },
  description: brand.subhead,
  openGraph: {
    title: `${brand.name} | ${brand.location}`,
    description: brand.subhead,
    locale: brand.country === "US" ? "en_US" : "en_CA",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Florist", "LocalBusiness"],
    name: brand.name,
    description: brand.subhead,
    url: brand.instagram,
    address: {
      "@type": "PostalAddress",
      addressLocality: brand.location,
      addressRegion: brand.region,
      addressCountry: brand.country,
    },
    sameAs: [brand.instagram],
    areaServed: brand.region,
  };

  return (
    <html lang="en" data-variant={brand.variant} className={fontClass}>
      <body
        style={{
          ["--font-serif" as string]:
            brand.variant === "ribbon"
              ? "var(--font-serif-ribbon)"
              : brand.variant === "garden"
                ? "var(--font-serif-garden)"
                : brand.variant === "quiet"
                  ? "var(--font-serif-quiet)"
                  : "var(--font-serif-event)",
          ["--font-sans" as string]:
            brand.variant === "garden" || brand.variant === "quiet"
              ? "var(--font-sans-garden)"
              : "var(--font-sans-ribbon)",
        }}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main id="content" className="pb-24 md:pb-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
