"use client";

import {
    CheckCircle2,
    Clock,
    Users,
    Smartphone,
    Zap,
    ArrowUpRight
} from "lucide-react";

export default function GrowthSection() {
    const highlights = [
        {
            title: "Lead Generation",
            desc: "Strategic designs focused on helping you get more customers."
        },
        {
            title: "High-Performance Apps",
            desc: "Fast, stable, and reliable digital solutions tailored for your business."
        },
        {
            title: "1-Year Full Support",
            desc: "Reliable assistance to keep your platform running smoothly."
        },
        {
            title: "SEO-Ready Foundation",
            desc: "Built with the latest standards to help search engines find your brand."
        }
    ];

    const cards = [
        { title: "Open 24/7", desc: "Your shop never closes.", icon: Clock },
        { title: "Trust", desc: "Build a known brand.", icon: Users },
        { title: "Reach", desc: "Go beyond local borders.", icon: Smartphone },
        { title: "Automation", desc: "Everything is digital.", icon: Zap }
    ];

    return (
        <section id="growth" className="pt-6 pb-12 md:py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:items-stretch items-center max-w-6xl mx-auto">

                    {/* LEFT SIDE: Clean Typography */}
                    <div className="lg:col-span-5 flex flex-col justify-center space-y-8 py-4">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-500">Grow Business Online</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                                Why your Business needs an <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-600">Online Presence?</span>
                            </h2>
                            <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
                                Today, customers search online before visiting any store. If your business isn't online, you might be losing potential sales.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            {cards.map((item, idx) => (
                                <div key={idx} className="p-4 rounded-2xl border border-zinc-200/50 dark:border-white/[0.08] bg-white/30 dark:bg-zinc-900/40 backdrop-blur-md transition-all duration-300 group">
                                    <item.icon className="w-5 h-5 text-indigo-500/70 mb-2 transition-transform" />
                                    <h3 className="font-bold text-base mb-1">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-tight">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE: Compact Premium Card */}
                    <div className="lg:col-span-7 w-full lg:h-full">
                        <div className="relative p-8 md:p-10 rounded-[2rem] bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200/60 dark:border-white/[0.08] shadow-none overflow-hidden group h-full flex flex-col">
                            {/* Subtle Gradient Glow */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-700 pointer-events-none" />

                            <div className="relative flex-1 flex flex-col justify-center space-y-8">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500">Premium Support</p>
                                    <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-foreground">
                                        We Don't Just Build Websites
                                        <span className="block italic text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400 mt-1">
                                            We Grow Your Business
                                        </span>
                                    </h3>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6 py-2">
                                    {highlights.map((feature, idx) => (
                                        <div key={idx} className="flex gap-4 items-start">
                                            <div className="mt-0.5 bg-indigo-500/10 p-1.5 rounded-full border border-indigo-500/20 shrink-0">
                                                <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-sm text-foreground uppercase tracking-wide mb-1">
                                                    {feature.title}
                                                </h5>
                                                <p className="text-muted-foreground text-sm leading-relaxed">
                                                    {feature.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative pt-6 mt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <p className="text-sm text-muted-foreground italic max-w-[280px] leading-relaxed">
                                    "Our goal isn't just to build websites, it's to grow your online business."
                                </p>
                                <a
                                    href="#contact"
                                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-500 hover:text-indigo-400 transition-colors group/btn"
                                >
                                    Start Growth
                                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
