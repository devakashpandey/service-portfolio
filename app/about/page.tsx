"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { personalInfo } from "@/data/portfolio";
import {
    CheckCircle2, Users, Clock, TrendingUp, Code2,
    Rocket, Zap, Brain, Globe, Target, ShieldCheck,
    MessageSquare, Handshake, Lightbulb, BarChart3,
    ArrowRight, Layout, Sparkles
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { DataFlowCard } from "@/components/DataFlowCard";
import { motion } from "framer-motion";

const stats = [
    { label: "Years of Craft", value: personalInfo.experience + " Yrs", icon: Clock },
    { label: "Successful Launches", value: personalInfo.projectsCompleted, icon: Rocket },
    { label: "Client Satisfaction", value: "100%", icon: TrendingUp },
    { label: "Global Presence", value: "India", icon: Globe },
];

const philosophy = [
    { title: "Strategic ROI", icon: BarChart3, desc: "Every line of code is written with your business growth and return on investment in mind." },
    { title: "AI Transformation", icon: Brain, desc: "We integrate intelligent systems to automate workflows and unlock new revenue streams." },
    { title: "Scalable Infrastructure", icon: Zap, desc: "Building resilient digital architecture that grows seamlessly with your user base." },
    { title: "Advisory Partnership", icon: Handshake, desc: "We act as your CTO-on-demand, providing high-level technical consulting and strategy." },
];

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="pt-16 min-h-screen bg-background text-foreground overflow-x-hidden">
                {/* Background Decorations */}
                <div className="fixed inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-x-0 inset-y-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-size-[32px_32px]" />
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full" />
                    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full" />
                </div>

                {/* New Headline Section */}
                <section className="relative z-10 pt-8 md:pt-20 pb-12 md:pb-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <span className="inline-block px-4 py-1.5 mb-6 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase bg-indigo-500/10 text-indigo-500 rounded-full border border-indigo-500/20">
                                    Crafting Digital Success
                                </span>
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
                                    Building Value.<br />
                                    <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-600">
                                        Scaling Growth.
                                    </span>
                                </h1>
                                <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
                                    At <span className="text-foreground font-bold">Akky Labs</span>, we help brands build and scale their digital presence. Whether you&apos;re starting from zero or need to optimize your current platform for more <span className="text-indigo-500 font-bold">lead generation</span>, we bridge the gap with deep industry research. We aren&apos;t just developers - we are your strategic partners who handle the technology so you can focus on scaling your brand.
                                </p>
                            </motion.div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 text-center max-w-4xl mx-auto">
                                <div className="p-6 md:p-7 rounded-3xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/10 backdrop-blur-sm group hover:border-indigo-500/30 transition-all duration-500 shadow-sm dark:shadow-none">
                                    <div className="w-10 h-10 bg-indigo-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                        <Lightbulb className="w-5 h-5 text-indigo-500" />
                                    </div>
                                    <h3 className="font-bold mb-2 text-sm md:text-base text-foreground">Strategize</h3>
                                    <p className="text-[11px] text-muted-foreground leading-relaxed">Deep dive into your business goals to define a foolproof roadmap.</p>
                                </div>
                                <div className="p-6 md:p-7 rounded-3xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/10 backdrop-blur-sm group hover:border-purple-500/30 transition-all duration-500 shadow-sm dark:shadow-none">
                                    <div className="w-10 h-10 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                        <Code2 className="w-5 h-5 text-purple-500" />
                                    </div>
                                    <h3 className="font-bold mb-2 text-sm md:text-base text-foreground">Execute</h3>
                                    <p className="text-[11px] text-muted-foreground leading-relaxed">High-quality code meets premium design for an elite user experience.</p>
                                </div>
                                <div className="p-6 md:p-7 rounded-3xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/10 backdrop-blur-sm group hover:border-pink-500/30 transition-all duration-500 sm:col-span-2 md:col-span-1 shadow-sm dark:shadow-none">
                                    <div className="w-10 h-10 bg-pink-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                        <TrendingUp className="w-5 h-5 text-pink-500" />
                                    </div>
                                    <h3 className="font-bold mb-2 text-sm md:text-base text-foreground">Elevate</h3>
                                    <p className="text-[11px] text-muted-foreground leading-relaxed">Optimizing products for growth, speed, and real business results.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Akky Labs Edge */}
                <section className="relative z-10 py-16 md:py-24 bg-zinc-50 dark:bg-zinc-950/20 border-y border-zinc-200 dark:border-white/5">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                                <div className="space-y-6 md:space-y-8">
                                    <h2 className="text-4xl md:text-6xl font-black tracking-tight">
                                        The <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-600">Difference</span>
                                    </h2>
                                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                                        We treat your project as our own. Our focus goes beyond just writing code we focus on the <span className="text-foreground font-bold">outcome</span>. By combining modern tech stacks with a revenue-first mindset, we ensure your digital presence delivers measurable value.
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                                        {[
                                            { title: "Direct Collaboration", desc: "Work directly with the core team, no middle-men." },
                                            { title: "Modern Technology", desc: "We use the latest tools to build fast, secure, and modern platforms that don't get outdated." },
                                            { title: "Conversion Focus", desc: "Designed to turn visitors into long-term customers." },
                                            { title: "Ongoing Support", desc: "Free technical support to ensure smooth operations." }
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors shadow-sm dark:shadow-none">
                                                <div className="p-2 bg-indigo-500/10 rounded-lg h-fit">
                                                    <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                                                </div>
                                                <div>
                                                    <div className="font-bold text-sm mb-0.5 text-foreground">{item.title}</div>
                                                    <p className="text-[10px] text-muted-foreground leading-tight">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="w-full max-w-lg mx-auto lg:max-w-none">
                                    <DataFlowCard>
                                        <div className="p-5 md:p-7 space-y-4 md:space-y-6">
                                            <div className="space-y-2 md:space-y-3">
                                                <div className="p-2 md:p-3 bg-indigo-500/10 rounded-xl w-fit">
                                                    <Layout className="w-6 h-6 text-indigo-500" />
                                                </div>
                                                <h3 className="text-xl md:text-2xl font-bold">Driven by Expertise</h3>
                                                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                                                    With over {personalInfo.experience} years of hands-on experience in the digital space, we&apos;ve helped businesses scale from initial concepts to fully functional, high-traffic platforms.
                                                </p>
                                            </div>
                                            <div className="pt-3 md:pt-4 border-t border-white/10">
                                                <p className="text-2xl md:text-3xl font-bold mb-0.5">{personalInfo.projectsCompleted}</p>
                                                <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-500">Successful Global Projects</p>
                                            </div>
                                        </div>
                                    </DataFlowCard>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Grid */}
                <section className="relative z-10 py-12 md:py-20">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                                {stats.map((stat, index) => (
                                    <Card key={index} className="border-white/5 bg-white/5 backdrop-blur-xl group hover:border-indigo-500/30 transition-all duration-500">
                                        <CardContent className="p-5 text-center">
                                            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-500/20 transition-colors">
                                                <stat.icon className="w-5 h-5 text-indigo-500" />
                                            </div>
                                            <p className="text-2xl font-black text-foreground mb-1">{stat.value}</p>
                                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>



                {/* Mission & Vision */}
                <section className="relative z-10 py-16 md:py-24 pb-24 md:pb-40">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            <div className="p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-linear-to-br from-indigo-600 via-indigo-700 to-indigo-900 text-white relative overflow-hidden group">
                                <div className="relative z-10">
                                    <Target className="w-10 h-10 md:w-14 md:h-14 mb-6 md:mb-8 opacity-90" />
                                    <h3 className="text-4xl md:text-6xl font-black mb-4 md:mb-6 uppercase tracking-tight">The <span className="text-white/80">Mission</span></h3>
                                    <p className="text-lg md:text-xl opacity-90 leading-relaxed font-medium">
                                        To empower the next generation of businesses with intelligent, scalable, and high-converting technology.
                                    </p>
                                </div>
                                <div className="absolute bottom-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform duration-1000">
                                    <Target className="w-48 h-48 md:w-80 md:h-80 -mr-10 -mb-10 md:-mr-20 md:-mb-20" />
                                </div>
                            </div>
                            <div className="p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-linear-to-br from-purple-600 via-purple-700 to-purple-900 text-white relative overflow-hidden group">
                                <div className="relative z-10">
                                    <Sparkles className="w-10 h-10 md:w-14 md:h-14 mb-6 md:mb-8 opacity-90" />
                                    <h3 className="text-4xl md:text-6xl font-black mb-4 md:mb-6 uppercase tracking-tight">The <span className="text-white/80">Vision</span></h3>
                                    <p className="text-lg md:text-xl opacity-90 leading-relaxed font-medium">
                                        To become the world&apos;s most trusted partner for premium digital growth and AI transformation.
                                    </p>
                                </div>
                                <div className="absolute bottom-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform duration-1000">
                                    <Sparkles className="w-48 h-48 md:w-80 md:h-80 -mr-10 -mb-10 md:-mr-20 md:-mb-20" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Trust Section */}
                <section className="relative z-10 py-16 md:py-24 border-t border-white/5">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12 md:mb-16">
                                <h2 className="text-4xl md:text-6xl font-black tracking-tight">Why Clients Trust <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-600">Us</span></h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {[
                                    { title: "Portfolio Success", icon: ShieldCheck, desc: "Proven track record of high-impact digital delivery." },
                                    { title: "Rapid Execution", icon: Zap, desc: "Fast-to-market development without compromising quality." },
                                    { title: "Direct Access", icon: MessageSquare, desc: "Zero middlemen—work directly with the technology experts." },
                                    { title: "Outcome-Driven", icon: Target, desc: "Focus on real business results over just writing code." },
                                    { title: "Strategic Partner", icon: Handshake, desc: "Long-term commitment to your business growth." },
                                    { title: "AI-Powered", icon: Brain, desc: "Cutting-edge automation built into your core systems." },
                                ].map((item, i) => (
                                    <div key={i} className="group p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 hover:border-indigo-500/30 hover:bg-zinc-50 dark:hover:bg-zinc-900/60 transition-all duration-300 shadow-sm dark:shadow-none">
                                        <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <item.icon className="w-5 h-5 text-indigo-500" />
                                        </div>
                                        <h3 className="font-bold text-sm md:text-base mb-2 text-foreground">{item.title}</h3>
                                        <p className="text-[11px] text-muted-foreground leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* New Closing Section */}
                <section className="relative z-10 py-12 md:py-20 mb-8 md:mb-12">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto rounded-[2rem] md:rounded-[3rem] p-8 md:p-14 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 text-center relative overflow-hidden backdrop-blur-3xl shadow-lg shadow-black/5 dark:shadow-none">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight tracking-tight px-2">
                                Building the future of your business together.
                            </h2>
                            <p className="text-muted-foreground mb-6 md:mb-8 text-xs md:text-sm max-w-xl mx-auto">
                                Experience, transparency, and high-end technology—all working toward your growth.
                            </p>
                            <a
                                href={`https://wa.me/${personalInfo.whatsapp}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 md:px-8 py-3 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-black rounded-full hover:scale-105 active:scale-95 shadow-xl shadow-indigo-500/25 transition-all text-sm md:text-base group flex items-center gap-2 mx-auto w-fit"
                            >
                                Start Your Journey
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
