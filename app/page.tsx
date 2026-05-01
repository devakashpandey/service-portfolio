import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Lazy load below-the-fold components — SSR disabled since these are client-heavy
// This allows the Hero to be interactive before these components load
const Services = dynamic(() => import("@/components/Services"));
const Features = dynamic(() => import("@/components/Features"));
const Portfolio = dynamic(() => import("@/components/Portfolio"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const WhyUs = dynamic(() => import("@/components/WhyUs"));
const GrowthSection = dynamic(() => import("@/components/GrowthSection"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));
const WhatsAppFloat = dynamic(() => import("@/components/WhatsAppFloat"));
const BusinessComparison = dynamic(() => import("@/components/BusinessComparison"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BusinessComparison />
        <GrowthSection />
        <Services />
        <Features />
        <Portfolio />
        <Testimonials />
        <WhyUs />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
