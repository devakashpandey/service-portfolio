"use client";

import { personalInfo } from "@/data/portfolio";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
    return (
        <a
            href={`https://wa.me/${personalInfo.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 group"
            aria-label="Chat on WhatsApp"
        >
            <div className="absolute -top-10 right-0 bg-background border border-border/40 px-3 py-1.5 rounded-lg text-[10px] font-bold text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-sm pointer-events-none">
                Chat on WhatsApp 👋
            </div>
            <MessageCircle className="w-7 h-7 fill-white" />
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 -z-10" />
        </a>
    );
}
