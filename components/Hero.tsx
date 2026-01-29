"use client";

import { personalInfo } from "@/data/portfolio";

export default function Hero() {
    return (
        <section className="section relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-bg-primary bg-noise pt-24 pb-12">
            <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-10" />

            <div className="container relative z-10 mx-auto">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* LEFT SIDE: Profile Card (From About) */}
                    <div className="lg:col-span-5 flex justify-center animate-fade-in-up stagger-1 opacity-0">
                        <div className="relative group">
                            {/* Decorative Background Blobs */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

                            <div className="relative card card-glass border-border-light/50 overflow-hidden text-center p-8 rounded-[2rem]">
                                <div className="relative w-40 h-40 mx-auto mb-6">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full animate-spin-slow opacity-20" />
                                    <div className="absolute inset-2 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-6xl font-black shadow-xl">
                                        {personalInfo.name.charAt(0)}
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-bg-card rounded-2xl border border-border-light flex items-center justify-center text-2xl shadow-lg">
                                        🇮🇳
                                    </div>
                                </div>

                                <h2 className="text-2xl font-bold mb-1">{personalInfo.name}</h2>
                                <p className="text-primary font-semibold mb-6">{personalInfo.title}</p>

                                <div className="space-y-3 pt-6 border-t border-border-light">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-text-muted">Experience</span>
                                        <span className="font-bold">{personalInfo.experience}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-text-muted">Projects</span>
                                        <span className="font-bold">{personalInfo.projectsCompleted}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-text-muted">Clients</span>
                                        <span className="font-bold">{personalInfo.happyClients}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Content (From Hero & About Text) */}
                    <div className="lg:col-span-7 space-y-8 flex flex-col justify-center">
                        <div className="animate-fade-in-up stagger-2 opacity-0">


                            <h1 className="leading-tight mb-6">
                                <span className="block text-text-secondary text-xl font-medium mb-2">Build your digital presence with</span>
                                <span className="gradient-text text-5xl md:text-7xl font-black">{personalInfo.tagline}</span>
                            </h1>

                            <p className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed mb-8">
                                Namaste! I&apos;m a passionate <span className="text-primary font-bold">Full Stack Developer</span>.
                                Mera mission hai ki har <span className="text-accent font-bold">shop aur business</span> ko online laana,
                                chahe wo grocery store ho, restaurant ho, ya boutique.
                            </p>
                        </div>

                        {/* Tech Stack (From About) */}
                        <div className="animate-fade-in-up stagger-3 opacity-0 pt-4">
                            <h4 className="text-sm font-bold text-text-muted uppercase tracking-[0.2em] mb-4">Core Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                                {["React", "Next.js", "Node.js", "Flutter", "TypeScript", "Tailwind CSS", "MongoDB", "SQL"].map((skill) => (
                                    <span key={skill} className="px-4 py-2 rounded-xl bg-bg-card border border-border-light text-text-primary text-sm font-medium hover:border-primary/50 transition-colors">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="animate-fade-in-up stagger-4 opacity-0 flex flex-wrap gap-4 pt-6">
                            <a href="#contact" className="btn btn-primary px-10 shadow-glow">
                                Start Your Project
                            </a>
                            <a href="#portfolio" className="btn btn-secondary px-8">
                                View Case Studies
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
