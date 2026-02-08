"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Demo } from "@/data/portfolio";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
            className="group overflow-hidden border-border/80 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full p-0"
        >
            <CardHeader className="p-0 border-b border-border/10 block">
                <div className="relative aspect-video overflow-hidden bg-muted">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentImageIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={images[currentImageIndex]}
                                alt={`${demo.title} - Image ${currentImageIndex + 1}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />



                    {images.length > 1 && (
                        <div className="absolute inset-x-0 bottom-4 flex justify-between px-3 items-center">
                            <button
                                onClick={prevImage}
                                className="p-1.5 rounded-full bg-background/80 backdrop-blur-md text-foreground border border-border/40 hover:bg-primary hover:text-white transition-all transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
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
                                className="p-1.5 rounded-full bg-background/80 backdrop-blur-md text-foreground border border-border/40 hover:bg-primary hover:text-white transition-all transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
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
