"use client";

import Image from "next/image";

interface Client {
    name: string;
    logo: string;
}

export default function Clients() {
    const clients: Client[] = [
        { name: "Triveda Technologies", logo: "/clients/triveda.png" },
        { name: "Green Ganga Associates", logo: "/clients/green-ganga.png" },
        { name: "ITS", logo: "/clients/its.png" },
        { name: "SD Publication", logo: "/clients/sd-publication.jpg" },
        { name: "Tattoo House", logo: "/clients/tattoo-house.png" },
        { name: "Aachman", logo: "/clients/aachman.jpeg" },
    ];

    // Duplicate client list to ensure seamless marquee scrolling
    const doubleClients = [...clients, ...clients, ...clients];

    return (
        <section className="py-16 md:py-20 bg-background/50 border-y border-black/5 dark:border-white/[0.05] overflow-hidden select-none">
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes logoMarquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.333%); }
                }
                .animate-logo-marquee {
                    animation: logoMarquee 25s linear infinite;
                }
            `}} />

            <div className="container mx-auto px-6 mb-10 md:mb-14">
                <p className="text-center text-xs font-bold uppercase  text-zinc-500 dark:text-zinc-400">
                    Trusted By Forward-Thinking Businesses & Brands
                </p>
            </div>

            {/* Logo Marquee Row */}
            <div className="relative flex overflow-x-hidden w-full pointer-events-none select-none">
                {/* Left gradient fade */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                {/* Right gradient fade */}
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                <div className="animate-logo-marquee flex whitespace-nowrap gap-20 md:gap-28 items-center">
                    {doubleClients.map((client, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-center w-32 md:w-40 h-12 relative shrink-0 group"
                        >
                            <Image
                                src={client.logo}
                                alt={`${client.name} Logo`}
                                fill
                                className="object-contain filter dark:group-hover:opacity-100 transition-all duration-300"
                                unoptimized
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
