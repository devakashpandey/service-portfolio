"use client";

import { testimonials } from "@/data/portfolio";

export default function Testimonials() {
    return (
        <section id="testimonials" className="section relative overflow-hidden bg-noise">
            <div className="container relative z-10 mx-auto">
                <div className="section-header">
                    <h2 className="section-title">Client <span className="gradient-text">Testimonials</span></h2>
                    <p className="section-subtitle">What my happy clients say about working with me</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div key={testimonial.id} className={`card card-glass animate-fade-in-up stagger-${index + 1} opacity-0`}>
                            <div className="text-primary/20 text-6xl font-serif leading-none mb-4">&ldquo;</div>
                            <p className="text-text-secondary italic mb-6 leading-relaxed">{testimonial.feedback}</p>
                            <div className="flex items-center gap-3 pt-4 border-t border-border-light">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">{testimonial.avatar}</div>
                                <div>
                                    <h4 className="font-semibold">{testimonial.name}</h4>
                                    <p className="text-sm text-text-muted">{testimonial.business}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
