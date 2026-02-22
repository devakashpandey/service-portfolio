"use client";

import { whyUs } from "@/data/portfolio";
import {
    Award,
    Clock,
    ShieldCheck,
    BrainCircuit,
    BarChart3,
    BadgePercent
} from "lucide-react";

const iconMap = {
    Award: Award,
    Clock: Clock,
    ShieldCheck: ShieldCheck,
    BrainCircuit: BrainCircuit,
    BarChart3: BarChart3,
    BadgePercent: BadgePercent,
};

export default function WhyUs() {
    return (
        <section id="why-us" className="py-20 md:py-32 bg-background relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="relative text-center mb-16 md:mb-24">
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl md:text-9xl lg:text-[14rem] font-black text-transparent [webkit-text-stroke:1.5px_hsl(var(--foreground)/0.08)] select-none tracking-[0.2em] uppercase whitespace-nowrap z-0 pointer-events-none">
                        Reliable
                    </span>
                    <h2 className="relative z-10 text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Why Choose <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-600">US?</span>
                    </h2>
                    <p className="relative z-10 text-lg text-muted-foreground max-w-2xl mx-auto">
                        We help local businesses grow by creating professional websites that attract more customers, handle bookings automatically, and build a brand that people trust.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {whyUs.map((item, index) => {
                        const Icon = iconMap[item.icon as keyof typeof iconMap];
                        return (
                            <div
                                key={index}
                                className="group relative p-8 rounded-[2.5rem] border border-border/40 bg-card/40 backdrop-blur-md hover:bg-card/80 hover:border-indigo-500/40 transition-all duration-700 hover:shadow-lg overflow-hidden"
                            >
                                {/* Decorative background number */}
                                <span className="absolute -bottom-6 -right-4 text-9xl font-bold text-foreground/5 pointer-events-none select-none group-hover:text-indigo-500/10 transition-colors duration-700">
                                    0{index + 1}
                                </span>

                                {/* Glow effect on hover */}
                                <div className="absolute -top-24 -left-24 w-48 h-48 bg-indigo-500/5 rounded-full blur-[80px] group-hover:bg-indigo-500/20 transition-all duration-700" />

                                <div className="relative z-10">
                                    <div className="relative w-16 h-16 rounded-2xl bg-linear-to-br from-indigo-500/10 to-purple-500/10 flex items-center justify-center mb-8 transition-all duration-500">
                                        <div className="absolute inset-0 rounded-2xl border border-indigo-500/20 group-hover:border-indigo-500/40 transition-colors" />
                                        <Icon className="w-8 h-8 text-indigo-500 group-hover:text-purple-600 transition-colors" />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-indigo-500 transition-colors duration-500">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed text-[15px] max-w-[260px]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
