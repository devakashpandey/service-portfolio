"use client";

import { services } from "@/data/portfolio";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Globe, Zap, Smartphone, Brain } from "lucide-react";

const IconMap: { [key: string]: any } = {
    Globe: Globe,
    Zap: Zap,
    Smartphone: Smartphone,
    Brain: Brain,
};

const cardAccents = [
    { iconBg: "bg-blue-500/10 group-hover:bg-blue-500", iconText: "text-blue-500 group-hover:text-white", border: "hover:border-blue-500/30" },
    { iconBg: "bg-violet-500/10 group-hover:bg-violet-500", iconText: "text-violet-500 group-hover:text-white", border: "hover:border-violet-500/30" },
    { iconBg: "bg-emerald-500/10 group-hover:bg-emerald-500", iconText: "text-emerald-500 group-hover:text-white", border: "hover:border-emerald-500/30" },
    { iconBg: "bg-amber-500/10 group-hover:bg-amber-500", iconText: "text-amber-500 group-hover:text-white", border: "hover:border-amber-500/30" },
];

export default function Services() {
    return (
        <section id="services" className="py-16 md:py-20 bg-background overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="relative text-center mb-16">
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl md:text-9xl lg:text-[14rem] font-black text-transparent [webkit-text-stroke:1.5px_hsl(var(--foreground)/0.08)] select-none tracking-[0.2em] uppercase whitespace-nowrap z-0 pointer-events-none">
                        Services
                    </span>
                    <h2 className="relative z-10 text-3xl md:text-5xl font-bold tracking-tight">
                        Our Expert <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-600">Services</span>
                    </h2>
                    <p className="relative z-10 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
                        Modern digital solutions integrated with latest tech to scale your business
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {services.map((service, index) => {
                        const Icon = IconMap[service.icon];
                        const accent = cardAccents[index % cardAccents.length];
                        return (
                            <Card
                                key={service.id}
                                className={`group relative flex flex-col bg-card border-border/60 overflow-hidden rounded-2xl transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2 opacity-0 animate-fade-in-up ${accent.border}`}
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <CardHeader className="p-5 pt-4 relative z-10 pb-1">
                                    <div className={`w-11 h-11 rounded-xl ${accent.iconBg} flex items-center justify-center ${accent.iconText} mb-4 transition-all duration-500 group-hover:scale-110`}>
                                        {Icon && <Icon size={22} />}
                                    </div>
                                    <CardTitle className="text-lg font-bold tracking-tight">{service.title}</CardTitle>
                                    <p className="text-[13px] text-muted-foreground mt-1.5 leading-relaxed">{service.description}</p>
                                </CardHeader>

                                <CardContent className="px-5 pb-6 grow relative z-10">
                                    <div className="h-px w-full bg-border/40 mt-0 mb-4" />
                                    <ul className="space-y-2.5">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-2.5 text-[13px]">
                                                <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                                <span className="text-muted-foreground/90">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
