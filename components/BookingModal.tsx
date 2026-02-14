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
            name: formData.name,
            email: formData.email,
            from_name: formData.name,
            from_email: formData.email,
            meeting_date: formData.date,
            meeting_time: formData.time,
            message: formData.message || "Quick Booking",
            to_email: "devakashpandey04@gmail.com"
        };

        try {
            await emailjs.send(
                'service_u696v1g',
                'template_18cex89',
                templateParams,
                'G62PMHVouqoQ5_9s7'
            );
            setIsSuccess(true);
        } catch (error: any) {
            console.error("Booking Error:", error);
            setIsSuccess(true); // Fallback to success for WhatsApp
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
            <DialogContent className="w-[95vw] max-w-[480px] p-0 overflow-hidden border-none bg-background shadow-2xl z-50 rounded-[1.5rem] md:rounded-[2rem]">
                <div className="p-5 md:p-8 max-h-[90vh] overflow-y-auto custom-scrollbar">
                    {!isSuccess ? (
                        <div className="animate-fade-in-up">
                            <DialogHeader className="mb-5">
                                <DialogTitle className="text-xl md:text-2xl font-bold flex items-center gap-2">
                                    <Calendar className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                                    Book a Meeting
                                </DialogTitle>
                                <DialogDescription className="text-sm">
                                    Fill in your details to schedule a call.
                                </DialogDescription>
                            </DialogHeader>

                            {/* Availability Card */}
                            <div className="mb-5 p-3.5 rounded-2xl bg-primary/5 border border-primary/10 flex gap-3 items-start">
                                <Info className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                <div className="space-y-1">
                                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-primary">Availability (IST)</p>
                                    <div className="grid grid-cols-1 gap-0.5 text-[11px] md:text-xs text-muted-foreground font-medium">
                                        <p> <b>Mon - Fri:</b> 07:30 PM - 11:30 PM</p>
                                        <p> <b>Sat - Sun:</b> 11:00 AM - 11:30 PM</p>
                                    </div>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-4">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                            <Input
                                                placeholder="Enter your name"
                                                required
                                                className="pl-10 h-11 bg-muted/20 border-border/40 focus:ring-primary/20 rounded-xl text-sm"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                            <Input
                                                type="email"
                                                placeholder="Enter your email"
                                                required
                                                className="pl-10 h-11 bg-muted/20 border-border/40 focus:ring-primary/20 rounded-xl text-sm"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Date</label>
                                            <Input
                                                type="date"
                                                required
                                                className="h-11 bg-muted/20 border-border/40 focus:ring-primary/20 rounded-xl text-sm px-3"
                                                value={formData.date}
                                                min={new Date().toISOString().split('T')[0]}
                                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Time</label>
                                            <Input
                                                type="time"
                                                required
                                                className="h-11 bg-muted/20 border-border/40 focus:ring-primary/20 rounded-xl text-sm px-3"
                                                value={formData.time}
                                                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full h-12 text-base font-bold mt-2 rounded-xl shadow-lg shadow-primary/10 gap-2 mb-2"
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
