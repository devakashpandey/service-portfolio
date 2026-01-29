"use client";

import { services } from "@/data/portfolio";

export default function Services() {
    return (
        <section id="services" className="section relative overflow-hidden bg-noise">
            <div className="container relative z-10 mx-auto">
                <div className="section-header">
                    <h2 className="section-title">My <span className="gradient-text">Services</span></h2>
                    <p className="section-subtitle">Complete digital solutions to take your business online</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div key={service.id} className={`card card-glass group hover:border-primary animate-fade-in-up stagger-${index + 1} opacity-0`}>
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-3xl mb-6">{service.icon}</div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-text-secondary mb-6">{service.description}</p>
                            <ul className="space-y-3 mb-6">
                                {service.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-sm">
                                        <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-auto pt-6 border-t border-border-light flex items-center justify-between">
                                <span className="text-lg font-bold gradient-text">{service.price}</span>
                                <a href="#contact" className="text-primary font-medium hover:underline">Get Quote</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
