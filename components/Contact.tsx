"use client";

import { personalInfo } from "@/data/portfolio";
import { Mail, MessageSquare, Send, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        project: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Construct WhatsApp Message
        const message = `Hi ${personalInfo.name}! \n\n*New Inquiry from Portfolio*\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Project Details:* ${formData.project}`;
        const encodedMessage = encodeURIComponent(message);

        // Using WhatsApp Link (Universal)
        const whatsappUrl = `https://wa.me/${personalInfo.whatsapp}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="contact" className="section relative overflow-hidden bg-bg-primary">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container relative z-10 mx-auto">
                <div className="section-header max-w-3xl mx-auto text-center mb-16">
                    <h2 className="section-title text-4xl md:text-5xl mb-6">Let&apos;s <span className="gradient-text">Connect</span></h2>
                    <p className="section-subtitle text-lg md:text-xl text-text-muted max-w-2xl mx-auto">
                        Have a project in mind? Reach out and let&apos;s discuss how I can help your business grow.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 pt-8">
                    {/* Direct Contact Cards */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="text-center lg:text-left">
                            <h3 className="text-2xl font-bold mb-2">Direct Contact</h3>
                            <p className="text-text-muted mb-8 text-sm">Quickest ways to reach out to me directly.</p>
                        </div>

                        <a
                            href={`https://wa.me/${personalInfo.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-5 p-6 rounded-2xl bg-bg-card border border-border-light hover:border-green-500/50 transition-all shadow-sm hover:shadow-xl hover:shadow-green-500/5"
                        >
                            <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                                <MessageSquare size={28} />
                            </div>
                            <div>
                                <div className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1">WhatsApp</div>
                                <div className="font-bold text-lg">Click to Chat</div>
                                <div className="text-sm text-green-500 font-medium">Fast Response</div>
                            </div>
                        </a>

                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="group flex items-center gap-5 p-6 rounded-2xl bg-bg-card border border-border-light hover:border-primary/50 transition-all shadow-sm hover:shadow-xl hover:shadow-primary/5"
                        >
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <Mail size={28} />
                            </div>
                            <div>
                                <div className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1">Email</div>
                                <div className="font-bold text-lg">{personalInfo.email}</div>
                                <div className="text-sm text-primary font-medium">Project Proposals</div>
                            </div>
                        </a>


                    </div>

                    {/* Enquiry Form */}
                    <div className="lg:col-span-8">
                        <div className="card card-glass p-8 md:p-10 border-border-light/50 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16" />

                            <div className="text-center mb-10">
                                <h3 className="text-2xl md:text-3xl font-bold mb-2">Send a Quick Message</h3>
                                <p className="text-text-muted text-sm">Fill out the form below and I'll get back to you on WhatsApp.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="group space-y-3 p-5 rounded-2xl bg-bg-primary/40 border border-border-light/50 focus-within:border-primary/50 focus-within:bg-bg-primary/80 transition-all">
                                        <label className="text-xs font-bold text-text-muted uppercase tracking-wider ml-1 block">Full Name</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-transparent border-none focus:ring-0 text-text-primary p-0 outline-none placeholder:text-text-muted/50"
                                        />
                                    </div>
                                    <div className="group space-y-3 p-5 rounded-2xl bg-bg-primary/40 border border-border-light/50 focus-within:border-primary/50 focus-within:bg-bg-primary/80 transition-all">
                                        <label className="text-xs font-bold text-text-muted uppercase tracking-wider ml-1 block">Phone Number</label>
                                        <input
                                            required
                                            type="tel"
                                            placeholder="+91 00000 00000"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full bg-transparent border-none focus:ring-0 text-text-primary p-0 outline-none placeholder:text-text-muted/50"
                                        />
                                    </div>
                                </div>
                                <div className="group space-y-3 p-5 rounded-2xl bg-bg-primary/40 border border-border-light/50 focus-within:border-primary/50 focus-within:bg-bg-primary/80 transition-all">
                                    <label className="text-xs font-bold text-text-muted uppercase tracking-wider ml-1 block">About Your Project</label>
                                    <textarea
                                        required
                                        rows={4}
                                        placeholder="Briefly describe your business and what you want to build..."
                                        value={formData.project}
                                        onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                                        className="w-full bg-transparent border-none focus:ring-0 text-text-primary p-0 outline-none resize-none placeholder:text-text-muted/50"
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary w-full py-5 text-lg flex items-center justify-center gap-3 shadow-glow group">
                                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    Send via WhatsApp
                                </button>

                                <p className="text-center text-xs text-text-muted">
                                    *Submitting will open your WhatsApp with the message pre-filled.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
