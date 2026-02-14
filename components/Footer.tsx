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
        <footer className="border-t border-border bg-gradient-to-b from-muted/30 to-muted/60">
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
                                <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-9 h-9 rounded-lg bg-card border border-border/60 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-gray-800 transition-all">
                                    <Github className="w-4 h-4" />
                                </a>
                            )}
                            {personalInfo.social.linkedin && (
                                <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-card border border-border/60 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-blue-600 transition-all">
                                    <Linkedin className="w-4 h-4" />
                                </a>
                            )}
                            {personalInfo.social.instagram && (
                                <a href={personalInfo.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-card border border-border/60 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 transition-all">
                                    <Instagram className="w-4 h-4" />
                                </a>
                            )}
                            {(personalInfo.social as any).whatsapp && (
                                <a href={(personalInfo.social as any).whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-9 h-9 rounded-lg bg-card border border-border/60 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-green-500 transition-all">
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
                        <Link href="/#contact" className="inline-block mt-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors">
                            Get Free Quote
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-border">
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

