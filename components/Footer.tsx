"use client";

import { personalInfo } from "@/data/portfolio";

export default function Footer() {
    return (
        <footer className="py-8 border-t border-border-light bg-bg-secondary">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
                        {personalInfo.name.charAt(0)}
                    </div>
                    <span className="font-bold">{personalInfo.name}</span>
                </div>
                <p className="text-sm text-text-muted">© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
            </div>
        </footer>
    );
}
