"use client";

import { personalInfo } from "@/data/portfolio";
import { Github, Linkedin, Twitter, Instagram, MessageSquare, Globe } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="py-5 md:py-6 border-t border-border bg-muted/50">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="hidden md:flex items-center gap-2 group cursor-default">
                    <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                    </div>
                    <span className="font-bold text-lg tracking-tight">{personalInfo.name}</span>
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                    © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                    <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</a>
                    <a href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
                    <a href="/#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</a>
                    <a href="/#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">Features</a>
                    <a href="/#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">Portfolio</a>
                    <a href="/#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors font-semibold">Contact</a>
                </div>
            </div>

            {/* Social Links Row */}
            <div className="container mx-auto px-4 mt-8 pt-6 border-t border-border/40 flex flex-wrap justify-center gap-6">
                {personalInfo.social.github && (
                    <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-primary transition-colors group">
                        <Github className="w-4 h-4" />
                        <span className="hidden sm:inline">GitHub</span>
                    </a>
                )}
                {personalInfo.social.linkedin && (
                    <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-primary transition-colors group">
                        <Linkedin className="w-4 h-4" />
                        <span className="hidden sm:inline">LinkedIn</span>
                    </a>
                )}
                {(personalInfo.social as any).twitter && (
                    <a href={(personalInfo.social as any).twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-primary transition-colors group">
                        <Twitter className="w-4 h-4" />
                        <span className="hidden sm:inline">Twitter</span>
                    </a>
                )}
                {personalInfo.social.instagram && (
                    <a href={personalInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-primary transition-colors group">
                        <Instagram className="w-4 h-4" />
                        <span className="hidden sm:inline">Instagram</span>
                    </a>
                )}
                {(personalInfo.social as any).whatsapp && (
                    <a href={(personalInfo.social as any).whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-primary transition-colors group">
                        <MessageSquare className="w-4 h-4" />
                        <span className="hidden sm:inline">WhatsApp</span>
                    </a>
                )}
                {personalInfo.social.portfolio && (
                    <a href={personalInfo.social.portfolio} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-primary transition-colors group">
                        <Globe className="w-4 h-4" />
                        <span className="hidden sm:inline">Portfolio</span>
                    </a>
                )}
            </div>
        </footer>
    );
}
