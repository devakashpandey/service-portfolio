"use client";

import { personalInfo } from "@/data/portfolio";
import { Github, Linkedin, Twitter, Instagram, MessageSquare, Globe, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Portfolio", href: "/#portfolio" },
        { name: "Testimonials", href: "/#testimonials" },
        { name: "Contact", href: "/#contact" },
        { name: "FAQ", href: "/#faq" },
    ];

    const serviceLinks = [
        { name: "Website Design", href: "/#services" },
        { name: "Web Development", href: "/#services" },
        { name: "E-commerce Solutions", href: "/#services" },
        { name: "Mobile App Development", href: "/#services" },
        { name: "UI/UX Design", href: "/#services" },
        { name: "SEO Optimization", href: "/#services" },
    ];

    const legalLinks = [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
    ];

    return (
        <footer className="relative mt-20 border-t border-black/5 dark:border-white/[0.08] bg-slate-50 dark:bg-zinc-950 rounded-t-[3rem] md:rounded-t-[4.5rem] overflow-hidden">
            {/* Premium Background Decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-linear-to-r from-transparent via-indigo-500/50 to-transparent" />
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                                <Image
                                    src="/logo.png"
                                    alt="Akky Labs Logo"
                                    width={48}
                                    height={48}
                                    className="object-contain"
                                />
                            </div>
                            <span className="font-bold text-lg tracking-tight">{personalInfo.brandName}</span>
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Professional web development services for businesses. Custom websites, web apps, and mobile apps to grow your business online.
                        </p>
                        {/* Social Icons */}
                        <div className="flex items-center gap-3 pt-2">
                            {personalInfo.social.github && (
                                <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-9 h-9 rounded-lg bg-white dark:bg-zinc-900/50 backdrop-blur-xl border border-black/5 dark:border-white/[0.08] flex items-center justify-center text-muted-foreground hover:text-white hover:bg-gray-800 transition-all">
                                    <Github className="w-4 h-4" />
                                </a>
                            )}
                            {personalInfo.social.linkedin && (
                                <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-white dark:bg-zinc-900/50 backdrop-blur-xl border border-black/5 dark:border-white/[0.08] flex items-center justify-center text-muted-foreground hover:text-white hover:bg-blue-600 transition-all">
                                    <Linkedin className="w-4 h-4" />
                                </a>
                            )}
                            {personalInfo.social.instagram && (
                                <a href={personalInfo.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-white dark:bg-zinc-900/50 backdrop-blur-xl border border-black/5 dark:border-white/[0.08] flex items-center justify-center text-muted-foreground hover:text-white hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 transition-all">
                                    <Instagram className="w-4 h-4" />
                                </a>
                            )}
                            {(personalInfo.social as any).whatsapp && (
                                <a href={(personalInfo.social as any).whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-9 h-9 rounded-lg bg-white dark:bg-zinc-900/50 backdrop-blur-xl border border-black/5 dark:border-white/[0.08] flex items-center justify-center text-muted-foreground hover:text-white hover:bg-green-500 transition-all">
                                    <MessageSquare className="w-4 h-4" />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-sm uppercase tracking-wider text-foreground">Quick Links</h3>
                        <ul className="space-y-2.5">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-indigo-500 transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-sm uppercase tracking-wider text-foreground">Services</h3>
                        <ul className="space-y-2.5">
                            {serviceLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-indigo-500 transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-sm uppercase tracking-wider text-foreground">Get In Touch</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-indigo-500 transition-colors">
                                    <Mail className="w-4 h-4 shrink-0" />
                                    <span>{personalInfo.email}</span>
                                </a>
                            </li>
                            <li>
                                <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-indigo-500 transition-colors">
                                    <Phone className="w-4 h-4 shrink-0" />
                                    <span>{personalInfo.phone}</span>
                                </a>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-muted-foreground">
                                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                                <span>{personalInfo.location}</span>
                            </li>
                        </ul>
                        {/* CTA Button */}
                        <Link href="/#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/20 active:scale-95">
                            Get Free Quote
                            <MessageSquare className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-black/5 dark:border-white/[0.05] bg-white/50 dark:bg-zinc-950/50 backdrop-blur-md">
                <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-muted-foreground">
                        © {currentYear} {personalInfo.brandName}. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        {legalLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="text-xs text-muted-foreground hover:text-indigo-500 transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

