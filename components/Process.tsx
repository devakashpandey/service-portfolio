"use client";

import { workSteps } from "@/data/portfolio";

export default function Process() {
    return (
        <section id="process" className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        How I Work
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
                        A transparent and strategic approach to bringing your business online with confidence.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {workSteps.map((step, index) => (
                        <div key={index} className="relative p-6 rounded-2xl border border-border/80 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                            {/* Connector line for desktop */}
                            {index < workSteps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1px] bg-border/60 z-0" />
                            )}

                            <div className="relative z-10">
                                <h3 className="text-base font-bold mb-2 text-primary">{step.title}</h3>
                                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
