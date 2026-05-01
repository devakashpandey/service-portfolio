"use client";

import { personalInfo } from "@/data/portfolio";
import { MessageCircle, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function WhatsAppFloat() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setIsVisible(window.scrollY > 300);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div
            className={`fixed bottom-6 right-4 md:right-6 z-50 flex flex-col gap-3 transition-all duration-500 transform ${isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-4 opacity-0 scale-90 pointer-events-none"
                }`}
        >
            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className="flex items-center justify-center w-12 h-12 bg-white dark:bg-zinc-900 text-foreground rounded-full shadow-xl border border-black/5 dark:border-white/10 hover:scale-110 active:scale-95 transition-all duration-300 group"
                aria-label="Scroll to top"
            >
                <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>

            {/* WhatsApp Button */}
            <a
                href={`https://wa.me/${personalInfo.whatsapp}?text=Hi Akky Labs, I saw your portfolio. I want to get my website ready in 3 days!`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-500 relative group"
                aria-label="Chat on WhatsApp"
            >
                {/* Official WhatsApp SVG Icon */}
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.462 0 .1 5.362.097 11.954c0 2.108.551 4.165 1.594 5.97L0 24l6.191-1.622a11.83 11.83 0 005.854 1.549h.005c6.59 0 11.956-5.363 11.959-11.956a11.84 11.84 0 00-3.535-8.447" />
                </svg>
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 -z-10" />

                {/* Urgency Message Badge */}
                <span className="absolute right-full mr-4 flex flex-col items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="px-3 py-1 bg-[#25D366] text-white text-[10px] font-bold uppercase tracking-widest rounded-lg shadow-xl whitespace-nowrap">
                        Get your website in 3 days
                    </span>
                </span>
            </a>
        </div>
    );
}
