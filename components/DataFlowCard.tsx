"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import GlareHover from "./ui/GlareHover/GlareHover";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

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
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div 
            className={cn("flex justify-center items-center py-8 md:py-10 w-full", className)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="relative group w-full max-w-sm" style={{ perspective: "1000px" }}>
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
                
                <motion.div
                    className="w-full"
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d",
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 30
                    }}
                >
                    <GlareHover
                        borderRadius="24px"
                        glareColor="#cbd5e1"
                        glareOpacity={0.2}
                        glareSize={100}
                        transitionDuration={1200}
                        className="w-full"
                    >
                        <Card className={cn(
                            "relative border-zinc-200/60 dark:border-white/[0.08] bg-white/50 dark:bg-zinc-950 backdrop-blur-3xl overflow-hidden shadow-none z-10 transition-all duration-700",
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
                    </GlareHover>
                </motion.div>


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
