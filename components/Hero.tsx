"use client";

import { personalInfo } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    ChevronRight,
    ExternalLink,
    Github,
    Linkedin,
    Twitter,
    Instagram,
    MessageSquare,
    Globe,
    Calendar
} from "lucide-react";
import Image from "next/image";
import { BookingModal } from "./BookingModal";
import { useState } from "react";

export default function Hero() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <section className="relative min-h-[85vh] pt-10 pb-16 md:pt-20 lg:py-0 flex items-center justify-center overflow-hidden bg-background mt-10">
            {/* Custom Booking Modal */}
            <BookingModal
                isOpen={isBookingOpen}
                onClose={() => setIsBookingOpen(false)}
            />

            {/* Background Decorations */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-x-0 inset-y-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[32px_32px]" />
                {/* Light mode decorative blobs */}
                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-500/4 dark:bg-indigo-500/6 blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-500/4 dark:bg-purple-500/6 blur-3xl" />
            </div>

            <div className="container relative z-10 mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-10 items-center">

                    {/* LEFT SIDE: Profile Card */}
                    <div className="lg:col-span-6 flex justify-center order-2 lg:order-1 opacity-0 animate-scale-in">
                        <div className="relative group w-full max-w-sm">
                            <Card className="relative w-full border-border/80 bg-card overflow-hidden text-center p-6 md:p-10 rounded-[2rem] shadow-lg shadow-indigo-500/6 dark:shadow-indigo-500/8">
                                <CardContent className="p-0">
                                    <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto mb-6">
                                        <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full" />
                                        <div className="absolute inset-2 overflow-hidden bg-card rounded-full flex items-center justify-center shadow-lg ring-4 ring-background">
                                            <Image
                                                src="/logo.png"
                                                alt="Logo"
                                                width={180}
                                                height={180}
                                                className="object-contain p-4"
                                            />
                                        </div>
                                        <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-card rounded-xl border border-border flex items-center justify-center text-xl shadow-md ring-2 ring-background">
                                            🇮🇳
                                        </div>
                                    </div>

                                    <div className="space-y-1.5 mb-6">
                                        <h2 className="text-2xl font-bold tracking-tight text-foreground">{personalInfo.name}</h2>
                                        <div className="flex flex-col items-center gap-1">
                                            <span className="text-indigo-600 dark:text-indigo-400 font-bold text-[10px] uppercase tracking-[0.2em]">
                                                {personalInfo.title}
                                            </span>
                                            <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-500/10 rounded-full text-[11px] font-medium text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20 italic">
                                                Building @ {personalInfo.brandName}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-1 pt-6 border-t border-border/60">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-muted-foreground uppercase font-semibold">Expertise</span>
                                            <span className="font-bold text-[10px] md:text-xs pt-1">{personalInfo.experience}</span>
                                        </div>
                                        <div className="flex flex-col border-x border-border/60">
                                            <span className="text-[10px] text-muted-foreground uppercase font-semibold">Projects</span>
                                            <span className="font-bold text-base md:text-lg">{personalInfo.projectsCompleted}</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-muted-foreground uppercase font-semibold">Clients</span>
                                            <span className="font-bold text-base md:text-lg">{personalInfo.happyClients}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-center gap-3 pt-6">
                                        {personalInfo.social.github && (
                                            <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-gray-700 hover:text-white transition-colors">
                                                <Github className="w-4 h-4" />
                                            </a>
                                        )}
                                        {personalInfo.social.linkedin && (
                                            <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-blue-500 hover:text-white transition-colors">
                                                <Linkedin className="w-4 h-4" />
                                            </a>
                                        )}
                                        {(personalInfo.social as any).twitter && (
                                            <a href={(personalInfo.social as any).twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-sky-500 hover:text-white transition-colors">
                                                <Twitter className="w-4 h-4" />
                                            </a>
                                        )}
                                        {personalInfo.social.instagram && (
                                            <a href={personalInfo.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-pink-500 hover:text-white transition-colors">
                                                <Instagram className="w-4 h-4" />
                                            </a>
                                        )}
                                        {(personalInfo.social as any).whatsapp && (
                                            <a href={(personalInfo.social as any).whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-green-500 hover:text-white transition-colors">
                                                <MessageSquare className="w-4 h-4" />
                                            </a>
                                        )}
                                        {personalInfo.social.portfolio && (
                                            <a href={personalInfo.social.portfolio} target="_blank" rel="noopener noreferrer" aria-label="Portfolio" className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-violet-500 hover:text-white transition-colors">
                                                <Globe className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Content */}
                    <div className="lg:col-span-6 space-y-6 order-1 lg:order-2 lg:pl-4">
                        <div className="space-y-2">
                            <div className="space-y-4">
                                <div className="inline-block border-b border-border/60 pb-1 opacity-0 animate-fade-in-up">
                                    <p className="text-muted-foreground text-lg md:text-xl font-medium italic">Transform your business into a digital powerhouse</p>
                                </div>
                                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-foreground tracking-tighter leading-none flex flex-col gap-1 opacity-0 animate-fade-in-up delay-100">
                                    <span className="block">Digital Presence &</span>
                                    <span className="italic bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Success</span>
                                </h1>
                            </div>

                            <div className="space-y-4 opacity-0 animate-fade-in-up delay-200">
                                <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                                    I help local businesses grow by building a professional online presence that actually works. From getting you more customers to setting up simple tools that save your time, I handle everything so you can focus on running your business.
                                </p>
                            </div>
                        </div>

                        {/* Business Benefits */}
                        <div className="pt-1 opacity-0 animate-fade-in-up delay-300">
                            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.3em] mb-3 block">Key Benefits</span>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    { text: "Growth-Focused", color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20" },
                                    { text: "More Customers", color: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20" },
                                    { text: "Dedicated Support", color: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20" },
                                    { text: "Premium Brand Look", color: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20" }
                                ].map((benefit) => (
                                    <span key={benefit.text} className={`px-3 py-1.5 rounded-lg border ${benefit.color} text-[11px] font-bold uppercase`}>
                                        {benefit.text}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-1 opacity-0 animate-fade-in-up delay-[400ms]">
                            <Button
                                onClick={() => setIsBookingOpen(true)}
                                size="lg"
                                className="h-12 px-8 rounded-xl text-base font-bold shadow-md shadow-indigo-500/15 gap-2 cursor-pointer bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
                            >
                                Book a Meeting
                                <Calendar className="w-4 h-4" />
                            </Button>
                            <Button asChild variant="ghost" size="lg" className="h-12 px-8 rounded-xl text-base font-bold gap-2 text-muted-foreground hover:text-foreground">
                                <a href="#portfolio">
                                    View Works

                                </a>
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
