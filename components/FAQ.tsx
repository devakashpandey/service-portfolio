"use client";

import { faqs } from "@/data/portfolio";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-16 md:py-20 bg-linear-to-b from-muted/20 via-background to-muted/20 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="relative text-center mb-16">
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl md:text-9xl lg:text-[14rem] font-black text-transparent [webkit-text-stroke:1.5px_hsl(var(--foreground)/0.08)] select-none tracking-[0.2em] uppercase whitespace-nowrap z-0 pointer-events-none">
                        FAQS
                    </span>
                    <h2 className="relative z-10 text-3xl md:text-5xl font-bold tracking-tight">
                        Common <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-600">Questions</span>
                    </h2>
                    <p className="relative z-10 text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
                        Everything you need to know about my services and the development process.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`group rounded-xl border bg-card backdrop-blur-sm overflow-hidden transition-all duration-300 ${openIndex === index
                                ? "border-indigo-500/30 shadow-md shadow-indigo-500/5"
                                : "border-border/60"
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-4 md:p-5 text-left transition-colors hover:bg-muted/30"
                            >
                                <span className="text-sm md:text-base font-bold text-foreground/90">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="w-4 h-4 text-indigo-500 shrink-0" />
                                ) : (
                                    <Plus className="w-4 h-4 text-muted-foreground shrink-0" />
                                )}
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="p-4 md:p-5 pt-0 text-xs md:text-sm text-muted-foreground leading-relaxed border-t border-border/10">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
