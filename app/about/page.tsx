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
                <section className="relative z-10 py-12 md:py-20">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            {/* Header */}
                            <div className="text-center mb-16">
                                <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
                                    About <span className="text-primary">Me</span>
                                </h1>
                                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                                        <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-primary text-primary-foreground rounded-xl font-bold text-sm shadow-lg">
                                            {personalInfo.experience} Experience
                                        </div>
                                    </div>
                                </div>

                                {/* Right - About Info */}
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold mb-1">
                                            Hi, I&apos;m <span className="text-primary">{personalInfo.name}</span>
                                        </h2>
                                        <p className="text-[14px] font-bold text-muted-foreground mb-2 uppercase tracking-wider italic">Building @ Akky Labs</p>
                                        <p className="text-primary font-semibold uppercase tracking-[0.15em] text-sm">
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
                                                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                                <span className="text-sm text-muted-foreground">{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-24">
                                {stats.map((stat, index) => (
                                    <Card key={index} className="border-border/60 bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-colors">
                                        <CardContent className="p-6 text-center">
                                            <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                                            <p className="text-3xl md:text-4xl font-black text-foreground mb-1">{stat.value}</p>
                                            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{stat.label}</p>
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
