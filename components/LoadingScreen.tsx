"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface LoadingScreenProps {
    onComplete?: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const duration = 1400; // 3 seconds total
        const intervalTime = 30; // 30ms for smooth update
        const increment = (100 / (duration / intervalTime));

        const timer = setInterval(() => {
            setProgress((prev) => {
                const next = prev + increment;
                if (next >= 100) {
                    clearInterval(timer);
                    // Slight delay at 100% for smooth transition
                    setTimeout(() => {
                        setIsVisible(false);
                        if (onComplete) onComplete();
                    }, 300);
                    return 100;
                }
                return next;
            });
        }, intervalTime);

        return () => clearInterval(timer);
    }, [onComplete]);

    if (!isVisible) return null;

    return (
        <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background transition-all duration-700 ${progress === 100 ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100'}`}>
            <div className="relative flex flex-col items-center gap-8">
                {/* Logo with pulse effect */}
                <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-card p-4 shadow-2xl transition-transform duration-500">
                    <div className="absolute inset-0 animate-pulse bg-gradient-to-tr from-primary/20 to-transparent" />
                    <Image
                        src="/logo.png"
                        alt="Akky Labs"
                        width={80}
                        height={80}
                        className="h-full w-full object-contain"
                        priority
                    />
                </div>

                {/* Progress Bar Container */}
                <div className="w-64 space-y-2">
                    <div className="flex justify-between text-sm font-medium text-muted-foreground">
                        <span>Loading Akky Labs</span>
                        <span>{Math.round(progress)}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                        <div
                            className="h-full bg-primary transition-all duration-75 ease-linear"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                {/* Tagline */}
                <p className="animate-pulse text-xs font-light tracking-[0.2em] uppercase text-muted-foreground">
                    Digital Excellence in Progress
                </p>
            </div>

            {/* Background elements for depth */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-[20%] left-[10%] h-64 w-64 rounded-full bg-primary/5 blur-[120px]" />
                <div className="absolute bottom-[20%] right-[10%] h-64 w-64 rounded-full bg-primary/5 blur-[120px]" />
            </div>
        </div>
    );
}
