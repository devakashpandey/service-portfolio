"use client";

import { workSteps } from "@/data/portfolio";

export default function Process() {
    return (
        <section id="process" className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
                        How I <span className="text-primary italic">Work</span>
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
                        Hamara process simple aur transparent hai, taki aapka business bina kisi tension ke online aa sake.
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
