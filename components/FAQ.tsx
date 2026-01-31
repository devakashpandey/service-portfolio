"use client";

import { faqs } from "@/data/portfolio";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-16 md:py-20 bg-muted/20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
                        Common <span className="text-primary italic">Questions</span>
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
                        Aapke mann mein jo bhi sawal hain, unke jawab yahan mil jayenge.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="group rounded-xl border border-border/80 bg-background/50 backdrop-blur-sm overflow-hidden transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-4 md:p-5 text-left transition-colors hover:bg-muted/30"
                            >
                                <span className="text-sm md:text-base font-bold text-foreground/90">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="w-4 h-4 text-primary shrink-0" />
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
