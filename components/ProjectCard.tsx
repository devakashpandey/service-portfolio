"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Demo } from "@/data/portfolio";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
    demo: Demo;
}

export default function ProjectCard({ demo }: ProjectCardProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const images = demo.images && demo.images.length > 0 ? demo.images : [demo.image];

    const nextImage = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsLoading(true);
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsLoading(true);
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <Card
            key={demo.id}
            className="group overflow-hidden border-border/60 bg-card backdrop-blur-sm flex flex-col h-full p-0 transition-all duration-300 ease-out hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1.5"
        >
            <CardHeader className="p-0 border-b border-border/10 block">
                <div className="relative aspect-video overflow-hidden bg-muted">
                    {/* Loading Skeleton */}
                    <div className={`absolute inset-0 animate-pulse bg-muted-foreground/10 ${isLoading ? 'opacity-100' : 'opacity-0'}`} />

                    <Image
                        src={images[currentImageIndex]}
                        alt={`${demo.title} - Image ${currentImageIndex + 1}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className={`object-cover transition-all duration-700 ${isLoading ? 'scale-110 blur-sm opacity-0' : 'scale-100 blur-0 opacity-100'}`}
                        priority={false}
                        loading="lazy"
                        onLoad={() => setIsLoading(false)}
                    />

                    {/* Overlay Gradient - only show on hover */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {images.length > 1 && (
                        <div className="absolute inset-x-0 bottom-4 flex justify-between px-3 items-center">
                            <button
                                onClick={prevImage}
                                className="p-1.5 rounded-full bg-background/80 backdrop-blur-md text-foreground border border-border/40 hover:bg-primary hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>

                            <div className="flex gap-1.5">
                                {images.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${i === currentImageIndex ? "w-4 bg-primary" : "w-1.5 bg-white/50"
                                            }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextImage}
                                className="p-1.5 rounded-full bg-background/80 backdrop-blur-md text-foreground border border-border/40 hover:bg-primary hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                                aria-label="Next image"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    )}
                </div>
            </CardHeader>
            <CardContent className="p-6 flex flex-col grow gap-0">
                <div className="flex justify-between items-start mb-2 gap-2">
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-1">{demo.title}</h3>
                    <a
                        href={demo.link}
                        target={demo.link !== "#" ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="group/btn flex items-center gap-1.5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider bg-transparent text-primary hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 whitespace-nowrap border border-primary/20 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 active:scale-95"
                        onClick={(e) => e.stopPropagation()}
                    >
                        View
                        <Eye className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:scale-110" />
                    </a>
                </div>
                <p className="text-[13px] text-muted-foreground mb-5 line-clamp-2 leading-relaxed">
                    {demo.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-1.5">
                    {demo.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-[9px] uppercase tracking-wider font-bold py-1 px-2.5 bg-muted/50 text-muted-foreground/80 rounded border border-border/20"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
