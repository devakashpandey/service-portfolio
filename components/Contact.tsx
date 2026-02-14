"use client";

import { personalInfo } from "@/data/portfolio";
import { Mail, MessageSquare, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

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

        // Simulate a small delay for premium feel
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Construct WhatsApp Message
        const message = `Hi ${personalInfo.name}! \n\n*New Inquiry from Portfolio*\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Project Details:* ${formData.project}`;
        const encodedMessage = encodeURIComponent(message);

        // Using WhatsApp Link (Universal)
        const whatsappUrl = `https://wa.me/${personalInfo.whatsapp}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
        setIsSubmitting(false);
        setFormData({ name: "", phone: "", project: "" });
    };

    return (
        <section id="contact" className="py-12 md:py-16 bg-muted/20">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Let&apos;s Connect
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
                        Have a project in mind? Reach out and let&apos;s discuss how I can help your business grow.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <Card className="border-border/80 shadow-lg bg-background/50 backdrop-blur-sm overflow-hidden">
                        <CardHeader className="text-center pt-6 px-6 pb-2">
                            <CardTitle className="text-xl md:text-2xl font-bold">Send a Message</CardTitle>
                            <CardDescription className="text-sm">
                                Fill out the form below and I&apos;ll get back to you on WhatsApp within a few hours.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-6 md:p-8 pb-8">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground ml-1">Full Name</label>
                                        <Input
                                            required
                                            disabled={isSubmitting}
                                            placeholder="Your name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="h-10 bg-background/80 border-border/60 text-sm focus:ring-1 focus:ring-primary/20"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground ml-1">Phone Number</label>
                                        <Input
                                            required
                                            disabled={isSubmitting}
                                            type="tel"
                                            placeholder="+91"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="h-11 bg-background/80 border-border/60 text-sm focus:ring-1 focus:ring-primary/20"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1.5 pt-1">
                                    <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground ml-1">Your Project Details</label>
                                    <Textarea
                                        required
                                        disabled={isSubmitting}
                                        rows={3}
                                        placeholder="Goals or requirements..."
                                        value={formData.project}
                                        onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                                        className="bg-background/80 border-border/60 text-sm resize-none focus:ring-1 focus:ring-primary/20"
                                    />
                                </div>

                                <div className="space-y-4 pt-1">
                                    <Button
                                        type="submit"
                                        size="lg"
                                        disabled={isSubmitting}
                                        className="w-full h-11 text-base font-bold gap-2 shadow-md shadow-primary/10 transition-transform active:scale-[0.98]"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 size={16} className="animate-spin" />
                                                Opening WhatsApp...
                                            </>
                                        ) : (
                                            <>
                                                <Send size={16} />
                                                Send Message
                                            </>
                                        )}
                                    </Button>

                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 border-t border-border/40">
                                        <a
                                            href={`mailto:${personalInfo.email}`}
                                            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-bold text-[10px] uppercase tracking-widest"
                                        >
                                            <Mail size={14} />
                                            {personalInfo.email}
                                        </a>
                                        <div className="hidden sm:block w-1 h-1 bg-border/60 rounded-full" />
                                        <a
                                            href={`https://wa.me/${personalInfo.whatsapp}`}
                                            className="flex items-center gap-2 text-muted-foreground hover:text-green-500 transition-colors font-bold text-[10px] uppercase tracking-widest"
                                        >
                                            <MessageSquare size={14} />
                                            WhatsApp Chat
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
