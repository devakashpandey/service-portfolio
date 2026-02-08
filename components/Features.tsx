"use client";

import {
    Globe, Zap, Shield, Palette, Rocket, Smartphone, Code2,
    Headphones, TrendingUp, Cpu, Database, Layout, Lock, MessageSquare,
    Bell, CreditCard, Cloud, BarChart, Server, Layers, Command,
    SmartphoneNfc, MousePointer2, Brain
} from "lucide-react";

const row1 = [
    { icon: Globe, text: "Responsive Design" },
    { icon: Brain, text: "AI Model Integration" },
    { icon: Zap, text: "Fast Loading Speed" },
    { icon: Shield, text: "SSL Security" },
    { icon: Palette, text: "Modern UI/UX" },
    { icon: Rocket, text: "SEO Optimized" },
    { icon: MessageSquare, text: "AI Chatbots" },
    { icon: Cpu, text: "High Performance" },
];

const row2 = [
    { icon: Smartphone, text: "Native Performance" },
    { icon: Bell, text: "Push Notifications" },
    { icon: SmartphoneNfc, text: "Play Store Ready" },
    { icon: Layers, text: "Offline Support" },
    { icon: Zap, text: "Real-time Updates" },
    { icon: Lock, text: "Secure Auth" },
    { icon: Layout, text: "User Dashboard" },
    { icon: Palette, text: "Dark Mode Support" },
];

const row3 = [
    { icon: Command, text: "Admin Dashboard" },
    { icon: Cloud, text: "Cloud Hosted" },
    { icon: MousePointer2, text: "Custom Workflows" },
    { icon: BarChart, text: "Reports & Analytics" },
    { icon: Server, text: "API Integration" },
    { icon: Database, text: "Database Integration" },
    { icon: Cpu, text: "Scalable Backend" },
    { icon: Shield, text: "Daily Backups" },
];

const row4 = [
    { icon: Code2, text: "Clean Code" },
    { icon: Brain, text: "Predictive Analytics" },
    { icon: Headphones, text: "24/7 Support" },
    { icon: CreditCard, text: "Payment Gateways" },
    { icon: Palette, text: "Custom Icons" },
    { icon: Layout, text: "Smooth Animations" },
    { icon: TrendingUp, text: "Analytics Ready" },
    { icon: Server, text: "Reliable Hosting" },
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
                        className="flex items-center gap-2 px-4 py-2 bg-muted/30 border border-border/40 rounded-full whitespace-nowrap"
                    >
                        <feature.icon className="w-3.5 h-3.5 text-muted-foreground" />
                        <span className="text-[13px] font-medium text-foreground/80">{feature.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Features() {
    return (
        <section id="features" className="relative z-10 py-20 md:py-32 bg-background overflow-hidden">
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

