import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Font swap - text dikhega immediately, font baad mein load hoga
  preload: true,
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://akkylabs.com"), // Apna domain yahan dalo
  title: {
    default: "Akky Labs | Software Developer & Web Solutions for Your Business",
    template: "%s | Akky Labs",
  },
  description:
    "Professional web development services for shops and businesses. Get custom websites, web apps, and mobile apps to grow your business online. 3+ years of experience delivering premium digital solutions.",
  keywords: [
    "web developer",
    "website design",
    "web app development",
    "mobile app development",
    "business website",
    "e-commerce website",
    "shop website",
    "freelance developer",
    "India",
    "web development services",
    "website design company",
    "freelance web developer",
    "custom website development",
    "ecommerce website development",
    "business website design",
    "web application development",
    "hire web developer",
    "responsive website design",
    "professional web developer",
    "frontend developer",
    "full stack web developer",
    "react js developer",
    "next js developer",
    "startup website development",
    "saas website development",
    "portfolio website design",
    "website redesign services",
    "affordable web developer",
    "web developer in India",
  ],
  authors: [{ name: "Akky Labs" }],
  creator: "Akky Labs",
  publisher: "Akky Labs",
  icons: {
    icon: [
      { url: "/logo.png" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Akky Labs | Web Developer & App Solutions",
    description:
      "Transform your business with professional websites and apps. Custom solutions for shops and businesses.",
    type: "website",
    locale: "en_IN",
    siteName: "Akky Labs",
    url: "https://akkylabs.com", // Apna domain yahan dalo
  },
  twitter: {
    card: "summary_large_image",
    title: "Akky Labs | Web Developer & App Solutions",
    description:
      "Transform your business with professional websites and apps. Custom solutions for shops and businesses.",
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
  verification: {
    // Google Search Console se verification code milega
    // google: "your-google-verification-code",
  },
};

import { Providers } from "@/components/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data for SEO (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Akky Labs",
    description:
      "Professional web development services for shops and businesses. Custom websites, web apps, and mobile apps.",
    url: "https://akkylabs.com",
    logo: "https://akkylabs.com/logo.png",
    image: "https://akkylabs.com/logo.png",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    sameAs: [
      "https://github.com/devakashpandey",
      "https://linkedin.com/in/devakashpandey",
      "https://instagram.com/devakashpandey",
    ],
    serviceType: [
      "Web Development",
      "Website Design",
      "Mobile App Development",
      "E-commerce Development",
    ],
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Website Development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "E-commerce Website",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile App Development",
          },
        },
      ],
    },
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
