"use client";

import { personalInfo } from "@/data/portfolio";

export default function Footer() {
    return (
        <footer className="py-5 md:py-6 border-t border-border bg-muted/50">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="hidden md:flex items-center gap-2 group cursor-default">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold shadow-lg shadow-primary/10 transition-transform group-hover:scale-110">
                        {personalInfo.name.charAt(0)}
                    </div>
                    <span className="font-bold text-lg tracking-tight">{personalInfo.name}</span>
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                    © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                    <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
                    <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</a>
                    <a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">Portfolio</a>
                    <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors font-semibold">Contact</a>
                </div>
            </div>
        </footer>
    );
}
