"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import { LoadingScreen } from "./LoadingScreen";

export function Providers({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);
    const [loadingFinished, setLoadingFinished] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            {!loadingFinished && (
                <LoadingScreen onComplete={() => setLoadingFinished(true)} />
            )}
            <div className={`transition-opacity duration-1000 ${loadingFinished ? 'opacity-100' : 'opacity-0'}`}>
                {children}
            </div>
        </ThemeProvider>
    );
}
