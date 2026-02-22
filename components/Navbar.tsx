"use client";

import { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolio";
import { Moon, Sun, Menu, X, Mail, MessageSquare } from "lucide-react";
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
        { label: "Features", href: "/#features" },
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
                        className="rounded-full h-9 w-9 md:h-10 md:w-10 hover:bg-indigo-500/5"
                    >
                        {theme === "dark" ? <Sun className="h-4 w-4 md:h-5 md:w-5" /> : <Moon className="h-4 w-4 md:h-5 md:w-5" />}
                    </Button>

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="lg:hidden rounded-full h-9 w-9" aria-label="Open menu">
                                <Menu className="h-4 w-4" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full sm:w-[400px] border-l bg-background p-0" showCloseButton={false}>
                            <div className="flex flex-col h-full relative z-10">
                                <SheetHeader className="p-4 border-b bg-muted/30 flex flex-row items-center justify-between space-y-0">
                                    <SheetTitle className="flex items-center gap-3 text-left">
                                        <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center shadow-lg ring-4 ring-background/50">
                                            <Image
                                                src="/logo.png"
                                                alt="Logo"
                                                width={64}
                                                height={64}
                                                className="object-contain"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-bold text-xl leading-none">{personalInfo.brandName}</p>
                                            <p className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.2em] mt-2">{personalInfo.title}</p>
                                        </div>
                                    </SheetTitle>
                                    <SheetClose asChild>
                                        <Button variant="ghost" size="icon" className="rounded-full h-12 w-12 hover:bg-muted/50 transition-colors">
                                            <X className="h-6 w-6" />
                                            <span className="sr-only">Close</span>
                                        </Button>
                                    </SheetClose>
                                </SheetHeader>

                                <div className="flex-1 flex flex-col items-center justify-center gap-6 p-4">
                                    {navLinks.map((link) => (
                                        <SheetClose asChild key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-2xl font-extrabold tracking-tight hover:text-indigo-500 transition-all active:scale-95 text-foreground/70"
                                            >
                                                {link.label}
                                            </Link>
                                        </SheetClose>
                                    ))}
                                </div>

                                <div className="p-6 border-t bg-muted/20 flex flex-col items-center gap-4">
                                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em]">Get in touch</p>
                                    <div className="flex gap-6">
                                        <Button asChild variant="outline" size="icon" className="rounded-xl h-12 w-12 border-border/50 hover:border-indigo-500 hover:text-indigo-500 transition-all shadow-xl bg-background hover:-translate-y-1">
                                            <a href={`mailto:${personalInfo.email}`} aria-label="Email">
                                                <Mail className="h-5 w-5" />
                                            </a>
                                        </Button>
                                        <Button asChild variant="outline" size="icon" className="rounded-xl h-12 w-12 border-border/50 hover:border-green-500 hover:text-green-500 transition-all shadow-xl bg-background hover:-translate-y-1">
                                            <a href={`https://wa.me/${personalInfo.whatsapp}`} aria-label="WhatsApp">
                                                <MessageSquare className="h-5 w-5" />
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
