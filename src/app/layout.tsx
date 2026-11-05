import type { Metadata, Viewport } from "next";
import { CustomCursor } from "@/components/CustomCursor";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0A0908",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Syntheticae — Software for a quieter life.",
  description:
    "Syntheticae is an independent software studio creating small, careful apps for money, focus, words, and memory. Accrual, Rimba, TTS Bareng, and Noticed.",
  metadataBase: new URL("https://synthetic.ae/"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "Syntheticae",
    title: "Syntheticae — Software for a quieter life.",
    description:
      "Syntheticae is an independent software studio creating small, careful apps for money, focus, words, and memory.",
    url: "https://synthetic.ae/",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Syntheticae Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Syntheticae — Software for a quieter life.",
    description:
      "Syntheticae is an independent software studio creating small, careful apps for money, focus, words, and memory.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://synthetic.ae/#studio",
      "name": "Syntheticae",
      "url": "https://synthetic.ae/",
      "logo": "https://synthetic.ae/apple-touch-icon.png",
      "description":
        "At the intersection of logic and imagination. Creating enduring software through the power of synthesis.",
      "sameAs": ["https://instagram.com/synthetic.ae"],
    },
    {
      "@type": "SoftwareApplication",
      "name": "TTS Bareng",
      "operatingSystem": "iOS",
      "applicationCategory": "GameApplication",
      "inLanguage": "id",
      "description":
        "Kata-kata, dimainkan bareng. Permainan teka-teki silang multipemain modern dengan 220 bab, 2.652 kata KBBI, papan ko-op langsung, Arena 1v1, dan Daily Rush.",
      "url": "https://apps.apple.com/app/id6825594780",
      "installUrl": "https://apps.apple.com/app/id6825594780",
      "publisher": { "@id": "https://synthetic.ae/#studio" },
    },
    {
      "@type": "SoftwareApplication",
      "name": "Accrual",
      "operatingSystem": "iOS",
      "applicationCategory": "FinanceApplication",
      "description":
        "Where numbers become foresight. Private financial intelligence with voice input, receipt OCR, bank-statement parsing, NFC e-money, Monte Carlo simulation, and FIRE projections.",
      "publisher": { "@id": "https://synthetic.ae/#studio" },
    },
    {
      "@type": "SoftwareApplication",
      "name": "Rimba",
      "operatingSystem": "iOS",
      "applicationCategory": "ProductivityApplication",
      "description":
        "Where attention becomes a forest. Focus timer where a 3D tree grows in real time, with co-op planting and weekly streaks.",
      "publisher": { "@id": "https://synthetic.ae/#studio" },
    },
    {
      "@type": "SoftwareApplication",
      "name": "Noticed",
      "operatingSystem": "iOS",
      "applicationCategory": "LifestyleApplication",
      "description":
        "Where a passing moment becomes permanent. Field notebook and editorial journal with a 3D spatial bookshelf, manuscript stream, inline highlighter, and Zen Reading Mode.",
      "publisher": { "@id": "https://synthetic.ae/#studio" },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-[#0A0908] text-[#EDEAE4]">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Geist:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0A0908] text-[#EDEAE4] antialiased selection:bg-[#e85a2a] selection:text-white">
        <div className="film-grain" aria-hidden="true" />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
