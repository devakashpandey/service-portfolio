"use client";

import { personalInfo } from "@/data/portfolio";
import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function WhatsAppFloat() {
    const [isVisible, setIsVisible] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

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

    useEffect(() => {
        let timer: NodeJS.Timeout;
        let interval: NodeJS.Timeout;

        if (isVisible) {
            // Show message for the first time 2.5s AFTER the button appears
            timer = setTimeout(() => {
                setShowMessage(true);
                // Hide after 5 seconds
                setTimeout(() => setShowMessage(false), 5000);
            }, 2500);

            // Repeat every 15 seconds
            interval = setInterval(() => {
                setShowMessage(true);
                setTimeout(() => setShowMessage(false), 5000);
            }, 15000);
        } else {
            setShowMessage(false);
        }

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, [isVisible]);

    return (
        <div
            className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
                }`}
        >
            {/* Premium Message Bubble */}
            <div
                className={`absolute bottom-20 right-0 w-64 p-4 bg-card border border-border/60 rounded-2xl shadow-2xl transition-all duration-500 transform origin-bottom-right ${showMessage ? "scale-100 opacity-100" : "scale-50 opacity-0 pointer-events-none"
                    }`}
            >
                <button
                    onClick={() => setShowMessage(false)}
                    className="absolute top-2 right-2 p-1 rounded-full hover:bg-muted transition-colors"
                >
                    <X className="w-3 h-3 text-muted-foreground" />
                </button>
                <div className="flex items-center gap-2 mb-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-green-500">We&apos;re Online</span>
                </div>
                <p className="text-xs text-foreground leading-relaxed font-medium">
                    👋 Need help growing your business? Let&apos;s chat on WhatsApp!
                </p>
                {/* Little triangle for bubble */}
                <div className="absolute -bottom-2 right-6 w-4 h-4 bg-card border-r border-b border-border/60 transform rotate-45" />
            </div>

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
