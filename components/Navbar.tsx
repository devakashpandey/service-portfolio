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

    const navLinks = [
        { label: "About", href: "/#about" },
        { label: "Services", href: "/#services" },
        { label: "Portfolio", href: "/#portfolio" },
        { label: "Contact", href: "/#contact" },
    ];

    if (!mounted) return null;

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "py-3 bg-background/80 backdrop-blur-md border-b"
                : "py-5 bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold transition-transform group-hover:scale-105">
                        {personalInfo.name.charAt(0)}
                    </div>
                    <span className="font-bold text-xl tracking-tight hidden sm:block">
                        {personalInfo.name}
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors transition-all relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        aria-label="Toggle theme"
                        className="rounded-full h-10 w-10"
                    >
                        {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </Button>

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden rounded-full h-10 w-10">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full sm:w-[400px] border-l bg-background/95 backdrop-blur-2xl p-0" showCloseButton={false}>
                            {/* Decorative Background for Menu */}
                            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 blur-[120px] rounded-full -mr-40 -mt-40 pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/20 blur-[120px] rounded-full -ml-40 -mb-40 pointer-events-none" />

                            <div className="flex flex-col h-full relative z-10">
                                <SheetHeader className="p-6 border-b bg-background/50 flex flex-row items-center justify-between space-y-0">
                                    <SheetTitle className="flex items-center gap-3 text-left">
                                        <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg ring-4 ring-background/50">
                                            {personalInfo.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-xl leading-none">{personalInfo.name}</p>
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

                                <div className="flex-1 flex flex-col items-center justify-center gap-12 p-6">
                                    {navLinks.map((link) => (
                                        <SheetClose asChild key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-4xl md:text-5xl font-extrabold tracking-tighter hover:text-primary transition-all active:scale-95 text-foreground/70 hover:text-foreground"
                                            >
                                                {link.label}
                                            </Link>
                                        </SheetClose>
                                    ))}
                                </div>

                                <div className="p-10 border-t bg-muted/20 flex flex-col items-center gap-8">
                                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em]">Get in touch</p>
                                    <div className="flex gap-10">
                                        <Button asChild variant="outline" size="icon" className="rounded-2xl h-16 w-16 border-border/50 hover:border-primary hover:text-primary transition-all shadow-xl bg-background hover:-translate-y-1">
                                            <a href={`mailto:${personalInfo.email}`} aria-label="Email">
                                                <Mail className="h-7 w-7" />
                                            </a>
                                        </Button>
                                        <Button asChild variant="outline" size="icon" className="rounded-2xl h-16 w-16 border-border/50 hover:border-green-500 hover:text-green-500 transition-all shadow-xl bg-background hover:-translate-y-1">
                                            <a href={`https://wa.me/${personalInfo.whatsapp}`} aria-label="WhatsApp">
                                                <MessageSquare className="h-7 w-7" />
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
