"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Demo } from "@/data/portfolio";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
    demo: Demo;
}

export default function ProjectCard({ demo }: ProjectCardProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = demo.images && demo.images.length > 0 ? demo.images : [demo.image];

    const nextImage = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <Card
            key={demo.id}
            className="group overflow-hidden border-border/80 bg-background/50 backdrop-blur-sm flex flex-col h-full p-0 transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1.5"
        >
            <CardHeader className="p-0 border-b border-border/10 block">
                <div className="relative aspect-video overflow-hidden bg-muted">
                    {/* Simple image without animation */}
                    <Image
                        src={images[currentImageIndex]}
                        alt={`${demo.title} - Image ${currentImageIndex + 1}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-opacity duration-300"
                        priority={false}
                        loading="lazy"
                    />

                    {/* Overlay Gradient - only show on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

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
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{demo.title}</h3>
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

