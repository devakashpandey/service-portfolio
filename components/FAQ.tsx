"use client";

import { faqs } from "@/data/portfolio";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-16 md:py-20 bg-gradient-to-b from-muted/20 via-background to-muted/20 dark:from-muted/20 dark:via-background dark:to-muted/20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Common Questions
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
                        Aapke mann mein jo bhi sawal hain, unke jawab yahan mil jayenge.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`group rounded-xl border bg-card dark:bg-background/50 backdrop-blur-sm overflow-hidden transition-all duration-300 ${openIndex === index
                                    ? "border-indigo-500/30 dark:border-border shadow-md shadow-indigo-500/5 dark:shadow-none"
                                    : "border-border/60 dark:border-border/80"
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-4 md:p-5 text-left transition-colors hover:bg-muted/30"
                            >
                                <span className="text-sm md:text-base font-bold text-foreground/90">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="w-4 h-4 text-indigo-500 dark:text-primary shrink-0" />
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
