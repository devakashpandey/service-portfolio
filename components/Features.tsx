"use client";

import {
    Globe, Zap, Shield, Palette, Rocket, Smartphone, Code2,
    Headphones, TrendingUp, Cpu, Database, Layout, Lock, MessageSquare,
    Bell, CreditCard, Cloud, BarChart, Server, Layers, Command,
    SmartphoneNfc, MousePointer2, Brain
} from "lucide-react";

const row1 = [
    { icon: Globe, text: "Responsive Design", accent: "text-blue-500" },
    { icon: Brain, text: "AI Model Integration", accent: "text-violet-500" },
    { icon: Zap, text: "Fast Loading Speed", accent: "text-amber-500" },
    { icon: Shield, text: "SSL Security", accent: "text-emerald-500" },
    { icon: Palette, text: "Modern UI/UX", accent: "text-pink-500" },
    { icon: Rocket, text: "SEO Optimized", accent: "text-orange-500" },
    { icon: MessageSquare, text: "AI Chatbots", accent: "text-indigo-500" },
    { icon: Cpu, text: "High Performance", accent: "text-red-500" },
];

const row2 = [
    { icon: Smartphone, text: "Native Performance", accent: "text-cyan-500" },
    { icon: Bell, text: "Push Notifications", accent: "text-yellow-500" },
    { icon: SmartphoneNfc, text: "Play Store Ready", accent: "text-green-500" },
    { icon: Layers, text: "Offline Support", accent: "text-purple-500" },
    { icon: Zap, text: "Real-time Updates", accent: "text-amber-500" },
    { icon: Lock, text: "Secure Auth", accent: "text-emerald-500" },
    { icon: Layout, text: "User Dashboard", accent: "text-blue-500" },
    { icon: Palette, text: "Dark Mode Support", accent: "text-violet-500" },
];

const row3 = [
    { icon: Command, text: "Admin Dashboard", accent: "text-indigo-500" },
    { icon: Cloud, text: "Cloud Hosted", accent: "text-sky-500" },
    { icon: MousePointer2, text: "Custom Workflows", accent: "text-pink-500" },
    { icon: BarChart, text: "Reports & Analytics", accent: "text-orange-500" },
    { icon: Server, text: "API Integration", accent: "text-teal-500" },
    { icon: Database, text: "Database Integration", accent: "text-amber-500" },
    { icon: Cpu, text: "Scalable Backend", accent: "text-red-500" },
    { icon: Shield, text: "Daily Backups", accent: "text-emerald-500" },
];

const row4 = [
    { icon: Code2, text: "Clean Code", accent: "text-slate-500" },
    { icon: Brain, text: "Predictive Analytics", accent: "text-violet-500" },
    { icon: Headphones, text: "24/7 Support", accent: "text-green-500" },
    { icon: CreditCard, text: "Payment Gateways", accent: "text-blue-500" },
    { icon: Palette, text: "Custom Icons", accent: "text-pink-500" },
    { icon: Layout, text: "Smooth Animations", accent: "text-cyan-500" },
    { icon: TrendingUp, text: "Analytics Ready", accent: "text-orange-500" },
    { icon: Server, text: "Reliable Hosting", accent: "text-indigo-500" },
];

function FeatureRow({ features, direction }: { features: typeof row1; direction: "left" | "right" }) {
    // Only duplicate once (2x) instead of 4x - reduces DOM by 50%
    const duplicatedFeatures = [...features, ...features];

    return (
        <div className="relative overflow-hidden py-1">
            <div
                className={`flex gap-3 will-change-transform ${direction === "left" ? "animate-scroll-left" : "animate-scroll-right"}`}
                style={{ width: "max-content" }}
            >
                {duplicatedFeatures.map((feature, index) => (
                    <div
                        key={`${feature.text}-${index}`}
                        className="flex items-center gap-2 px-4 py-2 bg-card border border-border/60 rounded-full whitespace-nowrap shadow-sm hover:shadow-md transition-shadow"
                    >
                        <feature.icon className={`w-3.5 h-3.5 ${feature.accent}`} />
                        <span className="text-[13px] font-medium text-foreground/80">{feature.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Features() {
    return (
        <section id="features" className="relative z-10 py-20 md:py-32 bg-gradient-to-b from-background via-indigo-50/30 dark:via-indigo-950/10 to-background overflow-hidden">
            <div className="container relative z-10 mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-2xl font-semibold md:text-3xl">
                        Features that I provide
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto ">
                        One developer, thousands of possibilities. Every project comes packed with premium features.
                    </p>
                </div>

                <div className="space-y-4 max-w-7xl mx-auto">
                    <FeatureRow features={row1} direction="left" />
                    <FeatureRow features={row2} direction="right" />
                    <FeatureRow features={row3} direction="left" />
                    <FeatureRow features={row4} direction="right" />
                </div>

                <div className="mt-16 text-center">
                    <p className="text-sm text-muted-foreground italic font-medium">
                        PS: You can customize features based on your business requirements.
                    </p>
                </div>
            </div>

            <style jsx global>{`
                @keyframes scroll-left {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                @keyframes scroll-right {
                    0% {
                        transform: translateX(-50%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }

                .animate-scroll-left {
                    animation: scroll-left 30s linear infinite;
                }

                .animate-scroll-right {
                    animation: scroll-right 30s linear infinite;
                }

                @media (prefers-reduced-motion: reduce) {
                    .animate-scroll-left,
                    .animate-scroll-right {
                        animation: none;
                    }
                }
            `}</style>
        </section>
    );
}

