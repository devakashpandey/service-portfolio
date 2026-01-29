"use client";

import { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolio";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all ${isScrolled ? "py-3 bg-bg-glass backdrop-blur-xl border-b border-border-light" : "py-5"}`}>
            <div className="container mx-auto flex items-center justify-between">
                <a href="#" className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">{personalInfo.name.charAt(0)}</div>
                    <span className="font-bold text-xl">{personalInfo.name}</span>
                </a>
                <div className="hidden md:flex items-center gap-8">
                    {["About", "Services", "Portfolio", "Contact"].map((label) => (
                        <a key={label} href={`#${label.toLowerCase()}`} className="text-sm font-medium hover:text-primary transition-colors">{label}</a>
                    ))}
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-xl bg-bg-card hover:bg-bg-glass border border-border-light transition-all text-text-primary"
                        aria-label="Toggle theme"
                    >
                        {mounted && (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
                    </button>
                    <a href="#contact" className="btn btn-primary py-2 px-4 text-sm hidden sm:flex">Get Quote</a>
                </div>
            </div>
        </nav>
    );
}
