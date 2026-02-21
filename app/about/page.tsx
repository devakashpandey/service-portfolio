"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { personalInfo } from "@/data/portfolio";
import Image from "next/image";
import { CheckCircle2, Users, Clock, TrendingUp, Code2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
    { label: "Years Experience", value: "3+", icon: Clock },
    { label: "Client Projects", value: "6+", icon: Users },
    { label: "Individual Projects", value: "15+", icon: Code2 },
    { label: "Happy Clients", value: "6+", icon: TrendingUp },
];

const aboutDetails = [
    "Full Stack Developer with expertise in React, Next.js, and Node.js",
    "Specialized in building scalable web applications and mobile apps",
    "Worked with startups and established businesses across India",
    "Passionate about creating premium digital experiences",
    "1 Year free support included with every project",
];

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="pt-24 min-h-screen bg-background text-foreground overflow-x-hidden">
                {/* Background Decorations */}
                <div className="fixed inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-x-0 inset-y-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-size-[32px_32px]" />
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
                    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full" />
                </div>

                {/* About Section */}
                <section className="relative z-10 py-12 md:py-20 overflow-hidden">
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
                                    Building premium digital solutions for businesses across India
                                </p>
                            </div>

                            {/* Main Content Grid */}
                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
                                {/* Left - Logo/Image */}
                                <div className="flex justify-center">
                                    <div className="relative group">
                                        <div className="absolute -inset-4 bg-primary/20 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                                        <Card className="relative w-72 h-72 md:w-80 md:h-80 rounded-[2rem] border-border/80 bg-background/60 backdrop-blur-xl overflow-hidden shadow-2xl">
                                            <CardContent className="p-0 w-full h-full flex items-center justify-center">
                                                <Image
                                                    src="/logo.png"
                                                    alt="Logo"
                                                    width={280}
                                                    height={280}
                                                    className="object-contain p-8"
                                                />
                                            </CardContent>
                                        </Card>
                                        {/* Floating Badge */}
                                        <div className="absolute -bottom-4 -right-4 px-5 py-2.5 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold text-sm shadow-xl shadow-indigo-500/20 backdrop-blur-sm border border-white/10">
                                            {personalInfo.experience} Experience
                                        </div>
                                    </div>
                                </div>

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
                                        I help businesses establish a strong online presence through custom websites,
                                        web applications, and mobile apps. Whether you run a local shop, a coaching center,
                                        or a startup, I create digital solutions that attract customers and grow your business.
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
                                    <Card key={index} className="border-border/60 bg-card/40 backdrop-blur-xl hover:border-indigo-500/30 transition-all duration-500 group">
                                        <CardContent className="p-6 text-center">
                                            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                                                <stat.icon className="w-6 h-6 text-indigo-500 group-hover:text-white transition-colors" />
                                            </div>
                                            <p className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-600 mb-1">{stat.value}</p>
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
