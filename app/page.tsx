import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Lazy load below-the-fold components
const Services = dynamic(() => import("@/components/Services"), { ssr: true });
const Features = dynamic(() => import("@/components/Features"), { ssr: true });
const Process = dynamic(() => import("@/components/Process"), { ssr: true });
const Portfolio = dynamic(() => import("@/components/Portfolio"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: true });
const WhyUs = dynamic(() => import("@/components/WhyUs"), { ssr: true });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });
const WhatsAppFloat = dynamic(() => import("@/components/WhatsAppFloat"), { ssr: true });

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <Process />
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


