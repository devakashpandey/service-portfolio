"use client";

import { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolio";
import { Moon, Sun, Menu, X, MessageSquare } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
    SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 50);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/#services" },
        { label: "Why Us", href: "/#why-us" },
        { label: "Portfolio", href: "/#portfolio" },
        { label: "Contact", href: "/#contact" },
    ];


    if (!mounted) return null;

    return (
        <nav
            className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out flex justify-center pointer-events-none ${isScrolled ? "top-4 md:top-6 px-4 md:px-10 lg:px-0" : "top-0 md:top-2"
                }`}
        >
            <div
                className={`container mx-auto flex items-center justify-between transition-all duration-500 pointer-events-auto ${isScrolled
                    ? "max-w-6xl py-3 px-6 md:px-8 bg-background/60 backdrop-blur-xl rounded-full border border-indigo-500/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)]"
                    : "max-w-full py-5 px-6 md:px-10 bg-transparent border-transparent"
                    }`}
            >
                <Link href="/" className="flex items-center gap-2 group">
                    <div className={`transition-all duration-500 rounded-xl overflow-hidden flex items-center justify-center ${isScrolled ? "w-10 h-10" : "w-12 h-12"}`}>
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={120}
                            height={120}
                            className="object-contain"
                        />
                    </div>
                    <span className={`font-bold tracking-tight hidden lg:block transition-all duration-500 ${isScrolled ? "text-lg" : "text-xl"}`}>
                        {personalInfo.brandName}
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-6 lg:gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-sm font-semibold text-muted-foreground hover:text-indigo-500 transition-all relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-indigo-500 to-purple-600 transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        aria-label="Toggle theme"
                        className="rounded-full h-9 w-9 md:h-10 md:w-10 hover:bg-indigo-500/5 text-foreground"
                    >
                        {theme === "dark" ? <Sun className="h-4 w-4 md:h-5 md:w-5" /> : <Moon className="h-4 w-4 md:h-5 md:w-5" />}
                    </Button>

                    <div className="hidden lg:flex items-center gap-4">
                        <Button
                            asChild
                            className={`rounded-full shadow-lg transition-all duration-300 active:scale-95 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-none font-bold text-xs ${isScrolled ? "h-9 px-5" : "h-10 px-6"}`}
                        >
                            <a href={`https://wa.me/${personalInfo.whatsapp}`} className="flex items-center gap-2">
                                <MessageSquare className="h-3.5 w-3.5" />
                                Chat with Us
                            </a>
                        </Button>
                    </div>

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="lg:hidden rounded-full h-9 w-9" aria-label="Open menu">
                                <Menu className="h-4 w-4" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full sm:w-[350px] border-l border-white/5 bg-zinc-950/95 backdrop-blur-3xl p-0 flex flex-col" showCloseButton={false}>
                            {/* Decorative background glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

                            <SheetHeader className="p-8 pb-10 flex flex-row items-center justify-between space-y-0 relative z-10">
                                <SheetTitle className="text-left">
                                    <span className="text-xl font-bold tracking-tighter text-white block">
                                        {personalInfo.brandName}
                                    </span>

                                </SheetTitle>
                                <SheetClose asChild>
                                    <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 text-white/50 hover:text-white hover:bg-white/5 transition-all">
                                        <X className="h-5 w-5" />
                                    </Button>
                                </SheetClose>
                            </SheetHeader>

                            <div className="flex-1 flex flex-col gap-10 p-8 pt-4 relative z-10">
                                {navLinks.map((link, index) => (
                                    <SheetClose asChild key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="group flex items-center gap-4 transition-all"
                                        >
                                            <span className="text-[10px] font-bold text-indigo-500/40 group-hover:text-indigo-500 transition-colors tracking-tighter">
                                                0{index + 1}
                                            </span>
                                            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-white/60 group-hover:text-white group-hover:translate-x-2 transition-all">
                                                {link.label}
                                            </span>
                                        </Link>
                                    </SheetClose>
                                ))}
                            </div>

                            <div className="p-8 space-y-8 relative z-10">
                                {/* Subtle Socials */}
                                <div className="flex items-center gap-4 px-1">
                                    <div className="h-px flex-1 bg-white/5" />
                                    <div className="flex gap-4">
                                        {["TW", "IG", "LI"].map(social => (
                                            <span key={social} className="text-[9px] font-black text-white/20 hover:text-indigo-500 cursor-pointer transition-colors tracking-widest">{social}</span>
                                        ))}
                                    </div>
                                    <div className="h-px flex-1 bg-white/5" />
                                </div>

                                <SheetClose asChild>
                                    <Button
                                        asChild
                                        className="w-full h-12 rounded-full bg-white text-black hover:bg-zinc-200 font-bold uppercase tracking-[0.2em] text-[10px] transition-all active:scale-[0.98] shadow-2xl shadow-white/5"
                                    >
                                        <a href="#contact">Book a Meeting</a>
                                    </Button>
                                </SheetClose>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
