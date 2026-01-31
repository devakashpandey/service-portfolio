"use client";

import { testimonials } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";


export default function Testimonials() {
    return (
        <section id="testimonials" className="py-16 md:py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 mb-12">
                <div className="text-center">
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-3">
                        Client <span className="text-primary">Testimonials</span>
                    </h2>
                    <p className="text-base text-muted-foreground max-w-xl mx-auto">
                        What my happy clients say about working with me
                    </p>
                </div>
            </div>

            {/* Marquee Container */}
            <div className="relative flex w-full overflow-hidden group">
                <div
                    className="flex gap-6 md:gap-8 px-4 animate-marquee group-hover:pause"
                    style={{ width: "fit-content" }}
                >
                    {/* Multiply items to ensure seamless loop */}
                    {[...testimonials, ...testimonials, ...testimonials].map((testimonial, idx) => (
                        <Card
                            key={`${testimonial.id}-${idx}`}
                            className="w-[300px] md:w-[450px] shrink-0 transition-all duration-300 bg-background/50 backdrop-blur-md border-border shadow-none hover:border-primary/30 hover:bg-background/80"
                        >
                            <CardContent className="p-6 md:p-8 flex flex-col justify-between h-full">
                                <div className="mb-6">
                                    <Quote className="w-8 h-8 text-primary/10 mb-4" fill="currentColor" />
                                    <p className="text-sm md:text-base text-muted-foreground italic leading-relaxed whitespace-normal line-clamp-4">
                                        &ldquo;{testimonial.feedback}&rdquo;
                                    </p>
                                </div>
                                <div className="flex items-center gap-3.5 pt-5 border-t border-border/40">
                                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shadow-md shrink-0">
                                        {testimonial.avatar}
                                    </div>
                                    <div className="overflow-hidden">
                                        <h4 className="font-bold text-foreground text-sm truncate">{testimonial.name}</h4>
                                        <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest truncate">{testimonial.business}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Gradient Fades for Slider */}
            <div className="absolute inset-y-0 left-0 w-24 md:w-60 bg-gradient-to-r from-background via-background/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 md:w-60 bg-gradient-to-l from-background via-background/80 to-transparent z-20 pointer-events-none" />

            {/* Background Decorations */}
            <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 blur-[100px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3" />
        </section>
    );
}
