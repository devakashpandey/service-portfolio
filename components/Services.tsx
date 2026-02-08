"use client";

import { services } from "@/data/portfolio";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Globe, Zap, Smartphone } from "lucide-react";

const IconMap: { [key: string]: any } = {
    Globe: Globe,
    Zap: Zap,
    Smartphone: Smartphone,
};

export default function Services() {
    return (
        <section id="services" className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        My Services
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
                        Complete digital solutions to take your business online
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.map((service) => {
                        const Icon = IconMap[service.icon];
                        return (
                            <Card key={service.id} className="group relative flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-background/50 backdrop-blur-sm border-border/80 overflow-hidden">
                                {/* Subtle pattern/gradient background for cards */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none transition-colors group-hover:bg-primary/10" />

                                <CardHeader className="p-5 relative z-10">
                                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                                        {Icon && <Icon size={18} />}
                                    </div>
                                    <CardTitle className="text-lg font-bold">{service.title}</CardTitle>
                                    <p className="text-xs md:text-sm text-muted-foreground mt-1.5 leading-relaxed">{service.description}</p>
                                </CardHeader>

                                <CardContent className="px-5 pb-3 flex-grow relative z-10">
                                    <ul className="space-y-1.5">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-2 text-[12px] md:text-[12.5px]">
                                                <Check className="w-3 h-3 text-primary shrink-0 mt-1" />
                                                <span className="text-muted-foreground group-hover:text-foreground transition-colors">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>

                                <CardFooter className="px-5 py-3 border-t border-border/40 flex items-center justify-end bg-muted/5 relative z-10 ">

                                    <button className="text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full border border-primary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                                        Get Quote
                                    </button>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
