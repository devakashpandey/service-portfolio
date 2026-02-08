import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Akky Labs | Software Developer & Web Solutions for Your Business",
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
    "web developer in India"
  ],
  authors: [{ name: "Akky Labs" }],
  icons: {
    icon: [
      { url: "/logo.png" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Akky Labs | Web Developer & App Solutions",
    description:
      "Transform your business with professional websites and apps. Custom solutions for shops and businesses.",
    type: "website",
  },
};

import { Providers } from "@/components/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
