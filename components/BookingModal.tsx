"use client";

import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, User, Mail, Send, CheckCircle2, Loader2, Info } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import emailjs from "@emailjs/browser";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
    const [isSuccess, setIsSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        date: "",
        time: "",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            user_name: formData.name,
            user_email: formData.email,
            reply_to: formData.email,
            to_name: personalInfo.name,
            to_email: "akkylabs@outlook.com",
            meeting_date: formData.date,
            meeting_time: formData.time,
            message: formData.message || "Quick Booking",
        };

        try {
            console.log("Sending booking requests...", templateParams);
            
            // 1. Send Welcome Confirmation to Customer
            const customerResponse = emailjs.send(
                'service_ws8py68',
                'template_18cex89',
                templateParams,
                'G62PMHVouqoQ5_9s7'
            );

            // 2. Send Admin Notification to You (Akash)
            const adminResponse = emailjs.send(
                'service_ws8py68',
                'template_e0uubqq',
                templateParams,
                'G62PMHVouqoQ5_9s7'
            );

            // Wait for both to complete
            const [custRes, admRes] = await Promise.all([customerResponse, adminResponse]);
            
            console.log("Customer Email Success:", custRes.status, custRes.text);
            console.log("Admin Email Success:", admRes.status, admRes.text);
            
            setIsSuccess(true);
        } catch (error: any) {
            console.error("EmailJS Submission Failed:", error);
            // Fallback to true to allow WhatsApp confirmation even if email fails
            setIsSuccess(true);
        } finally {
            setLoading(false);
        }
    };

    const handleWhatsAppRedirect = () => {
        const message = `Hi ${personalInfo.name}! \n\n*Meeting Booking Request*\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Date:* ${formData.date}\n*Time:* ${formData.time}`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${personalInfo.whatsapp}?text=${encodedMessage}`, '_blank');
        onClose();
        resetForm();
    };

    const resetForm = () => {
        setIsSuccess(false);
        setFormData({ name: "", email: "", date: "", time: "", message: "" });
    };

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="w-[95vw] max-w-[480px] p-0 overflow-hidden border border-white/10 bg-zinc-950 shadow-[0_0_50px_-12px_rgba(79,70,229,0.3)] z-50 rounded-[1.5rem] md:rounded-[2rem]">
                <div className="p-5 md:p-8 max-h-[90vh] overflow-y-auto custom-scrollbar">
                    {!isSuccess ? (
                        <div className="animate-fade-in-up">
                            <DialogHeader className="mb-5">
                                <DialogTitle className="text-xl md:text-2xl font-black flex items-center gap-2 text-foreground">
                                    <Calendar className="w-5 h-5 md:w-6 md:h-6 text-indigo-500" />
                                    Book a Meeting
                                </DialogTitle>
                                <DialogDescription className="text-sm text-muted-foreground/80">
                                    Fill in your details to schedule a call.
                                </DialogDescription>
                            </DialogHeader>

                            {/* Availability Card */}
                            <div className="mb-5 p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex gap-3 items-start backdrop-blur-md">
                                <Info className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-indigo-500">Availability (IST)</p>
                                    <div className="grid grid-cols-1 gap-0.5 text-[11px] md:text-xs text-foreground/90 font-bold">
                                        <p> <span className="opacity-60 font-medium">Mon - Fri:</span> 07:30 PM - 11:30 PM</p>
                                        <p> <span className="opacity-60 font-medium">Sat - Sun:</span> 11:00 AM - 11:30 PM</p>
                                    </div>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-4">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80 ml-1">Full Name</label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                            <Input
                                                placeholder="Enter your name"
                                                required
                                                className="pl-10 h-11 bg-white/5 border-white/10 focus:border-indigo-500/50 focus:ring-0 rounded-xl text-sm transition-all"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80 ml-1">Email Address</label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                            <Input
                                                type="email"
                                                placeholder="Enter your email"
                                                required
                                                className="pl-10 h-11 bg-white/5 border-white/10 focus:border-indigo-500/50 focus:ring-0 rounded-xl text-sm transition-all"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80 ml-1">Date</label>
                                            <Input
                                                type="date"
                                                required
                                                className="h-11 bg-white/5 border-white/10 focus:border-indigo-500/50 focus:ring-0 rounded-xl text-sm px-3 transition-all color-scheme-dark"
                                                value={formData.date}
                                                min={new Date().toISOString().split('T')[0]}
                                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80 ml-1">Time</label>
                                            <Input
                                                type="time"
                                                required
                                                className="h-11 bg-white/5 border-white/10 focus:border-indigo-500/50 focus:ring-0 rounded-xl text-sm px-3 transition-all color-scheme-dark"
                                                value={formData.time}
                                                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full h-12 text-base font-black mt-2 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl shadow-lg shadow-indigo-500/20 gap-2 mb-2 transition-all active:scale-95"
                                    disabled={loading || !formData.name || !formData.email || !formData.date || !formData.time}
                                >
                                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                                    Book Meeting
                                </Button>
                            </form>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center text-center py-4 animate-scale-in">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                                <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12 text-green-500" />
                            </div>
                            <DialogTitle className="text-xl md:text-2xl font-bold mb-2">Request Sent!</DialogTitle>
                            <DialogDescription className="text-sm md:text-base mb-8">
                                I'll review <b>{formData.date}</b> at <b>{formData.time}</b> and send a Google Meet link to your email.
                            </DialogDescription>

                            <div className="w-full space-y-3">
                                <Button
                                    className="w-full h-11 md:h-12 bg-green-600 hover:bg-green-700 text-white font-bold gap-2 rounded-xl"
                                    onClick={handleWhatsAppRedirect}
                                >
                                    <Send className="w-4 h-4" />
                                    Confirm on WhatsApp
                                </Button>
                                <Button
                                    variant="ghost"
                                    className="w-full h-11 md:h-12 font-bold"
                                    onClick={() => { onClose(); resetForm(); }}
                                >
                                    Done
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
