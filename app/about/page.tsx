"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { personalInfo } from "@/data/portfolio";
import Image from "next/image";
import { CheckCircle2, Users, Clock, TrendingUp, Code2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { DataFlowCard } from "@/components/DataFlowCard";

const stats = [
    { label: "Years Experience", value: "3+", icon: Clock },
    { label: "Client Projects", value: "6+", icon: Users },
    { label: "Individual Projects", value: "15+", icon: Code2 },
    { label: "Happy Clients", value: "6+", icon: TrendingUp },
];

const aboutDetails = [
    "Full Stack Developer with expertise in React, Next.js, and Node.js",
    "Specialized in building scalable web applications and mobile apps",
    "Worked with startups and established businesses worldwide",
    "Passionate about creating premium digital experiences",
    "1 Year free support included with every project",
];

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="pt-16 min-h-screen bg-background text-foreground overflow-x-hidden">
                {/* Background Decorations */}
                <div className="fixed inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-x-0 inset-y-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-size-[32px_32px]" />
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
                    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full" />
                </div>

                {/* About Section */}
                <section className="relative z-10 py-8 md:py-12 overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            {/* Header */}
                            <div className="relative text-center mb-16">
                                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl md:text-9xl lg:text-[14rem] font-black text-transparent [webkit-text-stroke:1.5px_hsl(var(--foreground)/0.08)] select-none tracking-[0.2em] uppercase whitespace-nowrap z-0 pointer-events-none">
                                    About
                                </span>
                                <h1 className="relative z-10 text-3xl md:text-5xl font-black tracking-tight mb-4">
                                    About <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-600">Me</span>
                                </h1>
                                <p className="relative z-10 text-lg text-muted-foreground max-w-2xl mx-auto">
                                    Crafting world-class digital experiences for a global clientele
                                </p>
                            </div>

                            {/* Main Content Grid */}
                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
                                {/* Left - Logo/Image with Premium Data-Flow Effect */}
                                <DataFlowCard >
                                    <div className="flex flex-col items-center justify-center h-full p-12 transition-transform duration-500">
                                        <Image
                                            src="/logo.png"
                                            alt="Logo"
                                            width={240}
                                            height={240}
                                            className="object-contain drop-shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                                        />
                                    </div>
                                </DataFlowCard>

                                {/* Right - About Info */}
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold mb-1">
                                            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-600">{personalInfo.name}</span>
                                        </h2>
                                        <p className="text-[14px] font-bold text-muted-foreground mb-2 uppercase tracking-wider italic">Building @ Akky Labs</p>
                                        <p className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-600 font-semibold uppercase tracking-[0.15em] text-sm">
                                            {personalInfo.title}
                                        </p>
                                    </div>

                                    <p className="text-muted-foreground leading-relaxed">
I help businesses across industries build a professional online presence that strengthens credibility, turns visitors into real enquiries, builds trust, and improves efficiency through smart digital solutions, useful AI features, and simple automation tools.
                                    </p>

                                    {/* Key Points */}
                                    <div className="space-y-3">
                                        {aboutDetails.map((detail, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
                                                <span className="text-sm text-muted-foreground">{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-24">
                                {stats.map((stat, index) => (
                                    <Card key={index} className="border-black/5 dark:border-white/[0.08] bg-white/70 dark:bg-zinc-900/50 backdrop-blur-xl transition-all duration-700">
                                        <CardContent className="p-6 text-center">
                                            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mx-auto mb-4 transition-all duration-500">
                                                <stat.icon className="w-6 h-6 text-indigo-500 transition-colors" />
                                            </div>
                                            <p className="text-3xl md:text-4xl font-black text-foreground mb-1">{stat.value}</p>
                                            <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">{stat.label}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
