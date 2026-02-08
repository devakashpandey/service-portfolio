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
    Globe
} from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-[85vh] pt-10 pb-16 md:pt-20 lg:py-0 flex items-center justify-center overflow-hidden bg-background mt-10">
            {/* Background Decorations */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-x-0 inset-y-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full opacity-40" />
            </div>

            <div className="container relative z-10 mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-10 items-center">

                    {/* LEFT SIDE: Profile Card */}
                    <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
                        <div className="relative group w-full max-w-sm">
                            <div className="absolute -inset-1 bg-primary/20 rounded-[2rem] blur-xl opacity-30 transition duration-700" />

                            <Card className="relative w-full border-border/80 bg-background/60 backdrop-blur-xl overflow-hidden text-center p-6 md:p-10 rounded-[2rem] shadow-lg">
                                <CardContent className="p-0">
                                    <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto mb-6">
                                        <div className="absolute inset-0 bg-primary/5 rounded-full" />
                                        <div className="absolute inset-2 overflow-hidden bg-background rounded-full flex items-center justify-center shadow-lg ring-4 ring-background">
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
                                            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.2em]">
                                                {personalInfo.title}
                                            </span>
                                            <span className="px-3 py-1 bg-muted/50 rounded-full text-[11px] font-medium text-muted-foreground border border-border/50 italic">
                                                Building @ Akky Labs
                                            </span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-1 pt-6 border-t border-border/60">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-muted-foreground uppercase font-semibold">Years</span>
                                            <span className="font-bold text-base md:text-lg">{personalInfo.experience.split(' ')[0]}+</span>
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
                                            <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                                                <Github className="w-4 h-4" />
                                            </a>
                                        )}
                                        {personalInfo.social.linkedin && (
                                            <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                                                <Linkedin className="w-4 h-4" />
                                            </a>
                                        )}
                                        {(personalInfo.social as any).twitter && (
                                            <a href={(personalInfo.social as any).twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                                                <Twitter className="w-4 h-4" />
                                            </a>
                                        )}
                                        {personalInfo.social.instagram && (
                                            <a href={personalInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                                                <Instagram className="w-4 h-4" />
                                            </a>
                                        )}
                                        {(personalInfo.social as any).whatsapp && (
                                            <a href={(personalInfo.social as any).whatsapp} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                                                <MessageSquare className="w-4 h-4" />
                                            </a>
                                        )}
                                        {personalInfo.social.portfolio && (
                                            <a href={personalInfo.social.portfolio} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
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
                            <div className="space-y-2">
                                <p className="text-muted-foreground text-lg md:text-xl font-medium italic underline underline-offset-8 decoration-primary/20">Grow your business with a professional</p>
                                <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.1]">
                                    Digital Presence & <span className="text-primary italic">Success</span>
                                </h1>
                            </div>

                            <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                                Helping local businesses go online. Hum aapke business ke liye high-quality websites aur mobile apps banate hain, taki aap zyada customers tak pahunch sakein. Like <span className="text-foreground font-medium">grocery store, boutique or any professional service.</span>
                            </p>
                        </div>

                        {/* Business Benefits */}
                        <div className="pt-1">
                            <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.3em] mb-3">Key Benefits</h4>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    { text: "Fast & Responsive", color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20" },
                                    { text: "WhatsApp Ready", color: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20" },
                                    { text: "Google Ready", color: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20" },
                                    { text: "1 Year Support", color: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20" }
                                ].map((benefit) => (
                                    <span key={benefit.text} className={`px-3 py-1.5 rounded-lg border ${benefit.color} text-[11px] font-bold uppercase`}>
                                        {benefit.text}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-1">
                            <Button asChild size="lg" className="h-12 px-8 rounded-xl text-base font-bold shadow-md shadow-primary/10 gap-2">
                                <a href="#contact">
                                    Start Project
                                    <ChevronRight className="w-4 h-4" />
                                </a>
                            </Button>
                            <Button asChild variant="ghost" size="lg" className="h-12 px-8 rounded-xl text-base font-bold gap-2 text-muted-foreground hover:text-foreground">
                                <a href="#portfolio">
                                    View Works
                                    <ExternalLink className="w-4 h-4 opacity-50" />
                                </a>
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
