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

export default function Services() {
    return (
        <section id="services" className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        My Services
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
                        Modern digital solutions integrated with the latest AI technologies to scale your business
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {services.map((service, index) => {
                        const Icon = IconMap[service.icon];
                        return (
                            <Card
                                key={service.id}
                                className="group relative flex flex-col bg-background border-border/80 overflow-hidden rounded-2xl transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1.5 opacity-0 animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <CardHeader className="p-5 relative z-10 pb-2">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        {Icon && <Icon size={20} />}
                                    </div>
                                    <CardTitle className="text-lg font-bold tracking-tight">{service.title}</CardTitle>
                                    <p className="text-[13px] text-muted-foreground mt-2 leading-relaxed">{service.description}</p>
                                </CardHeader>

                                <CardContent className="px-5 pb-6 grow relative z-10">
                                    <ul className="space-y-2 mt-2">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-2.5 text-[12.5px]">
                                                <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                                                <span className="text-muted-foreground">{feature}</span>
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
