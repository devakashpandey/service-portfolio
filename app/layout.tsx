import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.akkylabs.com"),
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
  authors: [{ name: "Akky Labs", url: "https://www.akkylabs.com/" }],
  creator: "Akky Labs",
  publisher: "Akky Labs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/logo.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon-96.png",
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Akky Labs",
  },
  openGraph: {
    title: "Akky Labs | Web Developer & App Solutions",
    description:
      "Transform your business with professional websites and apps. Custom solutions for shops and businesses.",
    type: "website",
    locale: "en_IN",
    siteName: "Akky Labs",
    url: "https://www.akkylabs.com",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Akky Labs Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akky Labs | Web Developer & App Solutions",
    description:
      "Transform your business with professional websites and apps. Custom solutions for shops and businesses.",
    images: ["/logo.png"],
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
  alternates: {
    canonical: "https://www.akkylabs.com",
  },
  verification: {
    // Yahan apna Google Search Console code dalo:
    // google: "yaha-code-aayega",
  },
  category: "technology",
};

import { Providers } from "@/components/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Akky Labs",
    description:
      "Professional web development services for shops and businesses. Custom websites, web apps, and mobile apps.",
    url: "https://www.akkylabs.com/",
    logo: "https://www.akkylabs.com/logo.png",
    image: "https://www.akkylabs.com/logo.png",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    sameAs: [
      "https://github.com/devakashpandey",
      "https://linkedin.com/in/devakashpandey",
      "https://instagram.com/akkylabs",
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
