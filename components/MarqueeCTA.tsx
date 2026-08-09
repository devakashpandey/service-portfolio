"use client";

import { ArrowUpRight } from "lucide-react";

export default function MarqueeCTA() {
    const handleScrollToContact = (e: React.MouseEvent) => {
        e.preventDefault();
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const marqueeItems = Array(5).fill("START A PROJECT");

    return (
        <a 
            href="#contact" 
            onClick={handleScrollToContact}
            className="block py-6 md:py-8 bg-transparent hover:bg-black/[0.01] dark:hover:bg-white/[0.02] border-y border-black/10 dark:border-white/[0.08] overflow-hidden relative cursor-pointer group select-none transition-colors duration-300"
        >
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes marquee-reverse {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(0%); }
                }
                .animate-marquee-left-to-right {
                    animation: marquee-reverse 20s linear infinite;
                }
            `}} />
            
            <div className="relative flex overflow-x-hidden w-full">
                <div className="animate-marquee-left-to-right flex whitespace-nowrap gap-8 sm:gap-12 md:gap-16 shrink-0 items-center pr-8 sm:pr-12 md:pr-16">
                    {marqueeItems.map((text, idx) => (
                        <div key={idx} className="flex items-center gap-8 sm:gap-12 md:gap-16">
                            <span className="font-sans font-black text-zinc-950 dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-wider group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors duration-300">
                                {text}
                            </span>
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black shrink-0 group-hover:bg-zinc-700 dark:group-hover:bg-zinc-300 group-hover:rotate-45 transition-all duration-300">
                                <ArrowUpRight className="w-6 h-6 sm:w-7 sm:h-7" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="animate-marquee-left-to-right flex whitespace-nowrap gap-8 sm:gap-12 md:gap-16 shrink-0 items-center pr-8 sm:pr-12 md:pr-16" aria-hidden="true">
                    {marqueeItems.map((text, idx) => (
                        <div key={idx} className="flex items-center gap-8 sm:gap-12 md:gap-16">
                            <span className="font-sans font-black text-zinc-950 dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-wider group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors duration-300">
                                {text}
                            </span>
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black shrink-0 group-hover:bg-zinc-700 dark:group-hover:bg-zinc-300 group-hover:rotate-45 transition-all duration-300">
                                <ArrowUpRight className="w-6 h-6 sm:w-7 sm:h-7" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </a>
    );
}
