"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DataFlowCardProps {
    children: React.ReactNode;
    className?: string;
    badgeText?: string;
    cardClassName?: string;
}

export const DataFlowCard: React.FC<DataFlowCardProps> = ({ 
    children, 
    className, 
    badgeText,
    cardClassName 
}) => {
    return (
        <div className={cn("flex justify-center items-center py-8 md:py-10 w-full", className)}>
            <div className="relative group w-full max-w-sm">
                {/* SVG Pathway - Above */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-full h-24 md:h-32 z-0 pointer-events-none">
                    <svg width="100%" height="100%" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        {/* Dotted Paths */}
                        <path d="M85 0V40L95 70V100" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="2 4" className="text-foreground" />
                        <path d="M115 0V40L105 70V100" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="2 4" className="text-foreground" />
                        
                        {/* Moving Pulses - Simultaneous Flow */}
                        <path d="M85 0V40L95 70V100" stroke="url(#pulse-above-1)" strokeWidth="2" strokeLinecap="round" className="animate-pulse-flow shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
                        <path d="M115 0V40L105 70V100" stroke="url(#pulse-above-2)" strokeWidth="2" strokeLinecap="round" className="animate-pulse-flow shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
                        
                        <defs>
                            <linearGradient id="pulse-above-1" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="transparent" />
                                <stop offset="50%" stopColor="#6366f1" />
                                <stop offset="100%" stopColor="transparent" />
                            </linearGradient>
                            <linearGradient id="pulse-above-2" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="transparent" />
                                <stop offset="50%" stopColor="#a855f7" />
                                <stop offset="100%" stopColor="transparent" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* SVG Pathway - Below */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-full h-24 md:h-32 z-0 pointer-events-none">
                    <svg width="100%" height="100%" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        {/* Dotted Paths */}
                        <path d="M95 0V30L85 60V100" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="2 4" className="text-foreground" />
                        <path d="M105 0V30L115 60V100" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="2 4" className="text-foreground" />
                        
                        {/* Moving Pulses - Simultaneous Flow */}
                        <path d="M95 0V30L85 60V100" stroke="url(#pulse-below-1)" strokeWidth="2" strokeLinecap="round" className="animate-pulse-flow" />
                        <path d="M105 0V30L115 60V100" stroke="url(#pulse-below-2)" strokeWidth="2" strokeLinecap="round" className="animate-pulse-flow" />

                        <defs>
                            <linearGradient id="pulse-below-1" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="transparent" />
                                <stop offset="50%" stopColor="#6366f1" />
                                <stop offset="100%" stopColor="transparent" />
                            </linearGradient>
                            <linearGradient id="pulse-below-2" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="transparent" />
                                <stop offset="50%" stopColor="#a855f7" />
                                <stop offset="100%" stopColor="transparent" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <style jsx>{`
                    @keyframes flowPulse {
                        0% { stroke-dashoffset: 200; opacity: 0; }
                        5% { opacity: 1; }
                        95% { opacity: 1; }
                        100% { stroke-dashoffset: -200; opacity: 0; }
                    }

                    .animate-pulse-flow {
                        stroke-dasharray: 60 140;
                        animation: flowPulse 4s linear infinite;
                    }
                `}</style>
                
                {/* Glow Background */}
                <div className="absolute -inset-10 bg-indigo-500/10 rounded-full blur-[80px] opacity-50 transition-opacity duration-1000" />
                
                <Card className={cn(
                    "relative border-white/[0.08] bg-zinc-950 backdrop-blur-3xl overflow-hidden shadow-[0_0_50px_-12px_rgba(0,0,0,0.8)] z-10 transition-all duration-700",
                    cardClassName
                )}>
                    <CardContent className="p-0 w-full h-full flex flex-col items-center justify-center relative">
                        {/* Animated Grid Background */}
                        <div className="absolute inset-0 opacity-[0.05] z-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #6366f1 1px, transparent 0)', backgroundSize: '16px 16px' }} />
                        
                        {/* Children Content */}
                        <div className="relative z-10 w-full h-full">
                            {children}
                        </div>
                        

                    </CardContent>
                </Card>

                {/* Floating Badge (Optional) */}
                {badgeText && (
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-linear-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-size-[200%_auto] animate-[gradient_4s_linear_infinite] text-white rounded-2xl font-bold text-sm shadow-2xl shadow-indigo-500/20 backdrop-blur-md border border-white/10 z-20 whitespace-nowrap">
                        {badgeText}
                    </div>
                )}
            </div>
        </div>
    );
};
