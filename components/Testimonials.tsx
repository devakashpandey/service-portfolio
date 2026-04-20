"use client";

import { testimonials } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, User } from "lucide-react";
import Image from "next/image";

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
        <section id="testimonials" className="py-12 md:py-24 bg-linear-to-b from-background via-purple-50/20 dark:via-purple-950/10 to-background relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 mb-16">
                <div className="relative text-center">
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl md:text-9xl lg:text-[14rem] font-black text-transparent [webkit-text-stroke:1.5px_hsl(var(--foreground)/0.08)] select-none tracking-[0.2em] uppercase whitespace-nowrap z-0 pointer-events-none">
                        Reviews
                    </span>
                    <h2 className="relative z-10 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                        Client <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-600">Reviews</span>
                    </h2>
                    <p className="relative z-10 text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
                        What our happy clients say about working with Akky Labs
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
                            className="w-[280px] md:w-[350px] shrink-0 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl border-black/5 dark:border-white/[0.08] shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 rounded-2xl"
                        >
                            <CardContent className="p-5 md:p-6 flex flex-col h-full gap-4">
                                {/* Top: Quote Icon */}
                                <div className="text-indigo-500/30">
                                    <Quote className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" />
                                </div>

                                {/* Middle: Testimonial Text */}
                                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed italic line-clamp-5">
                                    &ldquo;{testimonial.feedback}&rdquo;
                                </p>

                                {/* Bottom: User Info */}
                                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border/10">
                                    <div className={`w-11 h-11 rounded-full ${avatarColors[idx % avatarColors.length]} flex items-center justify-center text-white shadow-md shrink-0 overflow-hidden relative`}>
                                        {(testimonial as any).image ? (
                                            <Image
                                                src={(testimonial as any).image}
                                                alt={testimonial.name}
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            <User className="w-5 h-5" />
                                        )
                                        }
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="font-bold text-foreground text-sm md:text-base truncate">{testimonial.name}</p>
                                        <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest truncate">{testimonial.business}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Simple Gradient Fades */}
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-linear-to-r from-background to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-linear-to-l from-background to-transparent z-20 pointer-events-none" />
        </section>
    );
}
