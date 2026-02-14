"use client";

import { testimonials } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const avatarColors = [
    "bg-gradient-to-br from-blue-500 to-indigo-600",
    "bg-gradient-to-br from-violet-500 to-purple-600",
    "bg-gradient-to-br from-emerald-500 to-teal-600",
    "bg-gradient-to-br from-amber-500 to-orange-600",
    "bg-gradient-to-br from-pink-500 to-rose-600",
];


export default function Testimonials() {
    // Only duplicate once (2x) instead of 3x
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-background via-purple-50/20 dark:via-purple-950/10 to-background relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 mb-16">
                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Client Testimonials
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
                        What my happy clients say about working with me
                    </p>
                </div>
            </div>

            {/* Marquee Container */}
            <div className="relative flex w-full overflow-hidden">
                <div
                    className="flex gap-6 md:gap-8 px-4 animate-marquee will-change-transform"
                    style={{ width: "fit-content" }}
                >
                    {duplicatedTestimonials.map((testimonial, idx) => (
                        <Card
                            key={`${testimonial.id}-${idx}`}
                            className="w-[300px] md:w-[450px] shrink-0 bg-card border-border/60 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <CardContent className="p-6 md:p-8 flex flex-col justify-between h-full">
                                <div className="mb-6">
                                    <Quote className="w-8 h-8 text-indigo-500/20 mb-4" fill="currentColor" />
                                    <p className="text-sm md:text-base text-muted-foreground italic leading-relaxed whitespace-normal line-clamp-4">
                                        &ldquo;{testimonial.feedback}&rdquo;
                                    </p>
                                </div>
                                <div className="flex items-center gap-3.5 pt-5 border-t border-border/40">
                                    <div className={`w-10 h-10 rounded-full ${avatarColors[idx % avatarColors.length]} flex items-center justify-center text-white font-bold text-sm shadow-md shrink-0`}>
                                        {testimonial.avatar}
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="font-bold text-foreground text-sm truncate">{testimonial.name}</p>
                                        <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest truncate">{testimonial.business}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Simple Gradient Fades */}
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />
        </section>
    );
}

