"use client";

import { personalInfo } from "@/data/portfolio";
import { Mail, MessageSquare, Send, Loader2, Phone, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        project: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        const message = `Hi ${personalInfo.name}! \n\n*Inquiry from Portfolio*\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Project:* ${formData.project}`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${personalInfo.whatsapp}?text=${encodedMessage}`, '_blank');
        setIsSubmitting(false);
        setFormData({ name: "", phone: "", project: "" });
    };

    return (
        <section id="contact" className="py-20 md:py-28 bg-background relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 -right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Side: Contact Info & Action Cards */}
                    <div>
                        <div className="relative mb-10">
                            <span className="absolute -top-10 -left-6 text-7xl md:text-8xl lg:text-[11rem] font-black text-transparent [webkit-text-stroke:1.5px_hsl(var(--foreground)/0.08)] select-none tracking-[0.2em] uppercase whitespace-nowrap z-0 pointer-events-none">
                                Contact
                            </span>
                            <h2 className="relative z-10 text-3xl md:text-5xl font-bold tracking-tight mb-6">
                                Ready to scale your <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-600">business?</span>
                            </h2>
                            <p className="relative z-10 text-lg text-muted-foreground leading-relaxed max-w-lg">
                                Whether you have a specific project in mind or just want to explore possibilities, I&apos;m here to help you build something extraordinary.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {/* WhatsApp Card */}
                            <a
                                href={`https://wa.me/${personalInfo.whatsapp}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-6 rounded-3xl bg-card border border-border/50 hover:border-green-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/5 hover:-translate-y-1"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 mb-4 group-hover:bg-green-500 group-hover:text-white transition-all duration-500">
                                    <MessageSquare size={24} />
                                </div>
                                <h3 className="font-bold text-lg mb-1">WhatsApp Chat</h3>
                                <p className="text-sm text-muted-foreground mb-4">Instance response</p>
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-green-500">
                                    Chat Now <ArrowUpRight size={14} />
                                </div>
                            </a>

                            {/* Email Card */}
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="group p-6 rounded-3xl bg-card border border-border/50 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/5 hover:-translate-y-1"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 mb-4 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                                    <Mail size={24} />
                                </div>
                                <h3 className="font-bold text-lg mb-1">Email Me</h3>
                                <p className="text-sm text-muted-foreground mb-4">Official inquiry</p>
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-500">
                                    Send Email <ArrowUpRight size={14} />
                                </div>
                            </a>
                        </div>

                    </div>

                    {/* Right Side: Modern Inquiry Form */}
                    <div className="bg-card border border-border/60 rounded-[2.5rem] p-6 md:p-10 shadow-2xl relative">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-2">Start a conversation</h3>
                            <p className="text-sm text-muted-foreground">Tell me about your project and I&apos;ll get back to you.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">What&apos;s your name?</label>
                                    <Input
                                        required
                                        disabled={isSubmitting}
                                        placeholder="Type your name here..."
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="h-14 bg-muted/30 border-none rounded-2xl px-6 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Your Phone / WhatsApp</label>
                                    <Input
                                        required
                                        disabled={isSubmitting}
                                        type="tel"
                                        placeholder="+91 00000 00000"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="h-14 bg-muted/30 border-none rounded-2xl px-6 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Project Details</label>
                                    <Textarea
                                        required
                                        disabled={isSubmitting}
                                        rows={4}
                                        placeholder="What are you looking to build?"
                                        value={formData.project}
                                        onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                                        className="bg-muted/30 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none"
                                    />
                                </div>
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                disabled={isSubmitting}
                                className="w-full h-14 rounded-2xl text-base font-bold gap-3 shadow-xl shadow-indigo-500/20 transition-all active:scale-[0.98] bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-none"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" />
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        Send Message
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
