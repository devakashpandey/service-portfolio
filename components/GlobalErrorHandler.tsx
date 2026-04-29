"use client";

import { useEffect } from "react";

export function GlobalErrorHandler() {
    useEffect(() => {
        const handleError = (event: ErrorEvent | PromiseRejectionEvent) => {
            const message = "reason" in event ? (event.reason?.message || "") : (event.message || "");
            
            if (
                message.includes("ChunkLoadError") || 
                message.includes("Loading chunk") ||
                message.includes("Failed to load chunk")
            ) {
                console.warn("ChunkLoadError detected. Reloading page to recover...");
                window.location.reload();
            }
        };

        window.addEventListener("error", handleError);
        window.addEventListener("unhandledrejection", handleError);

        return () => {
            window.removeEventListener("error", handleError);
            window.removeEventListener("unhandledrejection", handleError);
        };
    }, []);

    return null;
}
