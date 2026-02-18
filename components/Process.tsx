"use client";

import { workSteps } from "@/data/portfolio";

const stepColors = [
    { bg: "bg-blue-500/10", text: "text-blue-500", border: "border-blue-500/20" },
    { bg: "bg-violet-500/10", text: "text-violet-500", border: "border-violet-500/20" },
    { bg: "bg-emerald-500/10", text: "text-emerald-500", border: "border-emerald-500/20" },
    { bg: "bg-amber-500/10", text: "text-amber-500", border: "border-amber-500/20" },
];

export default function Process() {
    return (
        <section id="process" className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Our Process
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
                        A transparent and strategic approach to bringing your business online with confidence.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {workSteps.map((step, index) => {
                        const color = stepColors[index % stepColors.length];
                        return (
                            <div key={index} className={`relative p-6 rounded-2xl border ${color.border} bg-card backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
                                {/* Step Number */}
                                <div className={`w-8 h-8 rounded-lg ${color.bg} flex items-center justify-center mb-4`}>
                                    <span className={`text-sm font-extrabold ${color.text}`}>{index + 1}</span>
                                </div>

                                {/* Connector line for desktop */}
                                {index < workSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border/60 z-0" />
                                )}

                                <div className="relative z-10">
                                    <h3 className={`text-base font-bold mb-2 ${color.text}`}>{step.title}</h3>
                                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                                        {step.description}
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
