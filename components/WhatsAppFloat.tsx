"use client";

import { personalInfo } from "@/data/portfolio";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function WhatsAppFloat() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed bottom-6 right-4 md:right-6 z-50 transition-all duration-500 transform ${isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-4 opacity-0 scale-90 pointer-events-none"
                }`}
        >
            <a
                href={`https://wa.me/${personalInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:rotate-360 hover:scale-110 active:scale-95 transition-all duration-500 relative"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle className="w-7 h-7 fill-white" />
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 -z-10" />
            </a>
        </div>
    );
}
