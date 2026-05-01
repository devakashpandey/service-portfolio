"use client";

import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";

export function Providers({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Short delay to ensure a smooth transition even on fast connections
        const timer = setTimeout(() => setMounted(true), 1200);
        return () => clearTimeout(timer);
    }, []);

    if (!mounted) {
        return (
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
                <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background transition-opacity duration-500">
                    <div className="relative">
                        {/* Outer Glow */}
                        <div className="absolute inset-0 bg-indigo-500/20 blur-3xl animate-pulse rounded-full" />
                        
                        {/* Logo Container */}
                        <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-zinc-900/50 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl animate-scale-in">
                            <Image
                                src="/logo.png"
                                alt="Loading..."
                                width={80}
                                height={80}
                                className="object-contain animate-pulse"
                                priority
                            />
                        </div>
                    </div>
                    
                    {/* Subtle Brand Name */}
                    <div className="mt-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                        <span className="text-xl font-bold tracking-widest text-foreground/80 uppercase">Akky Labs</span>
                    </div>
                </div>
                <div className="hidden">{children}</div>
            </ThemeProvider>
        );
    }

    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            {children}
        </ThemeProvider>
    );
}
