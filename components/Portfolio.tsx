"use client";

import { demos } from "@/data/portfolio";
import { ChevronLeft, ChevronRight, ExternalLink, Layout, Palette } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Portfolio() {
    // Get the first 5 projects from the array for the home page
    const featuredDemos = demos.slice(0, 5);

    // Initial state for image indexes of featured projects
    const [projectImageIndexes, setProjectImageIndexes] = useState<{ [key: string]: number }>(
        Object.fromEntries(featuredDemos.map(d => [d.id, 0]))
    );

    const nextImage = (projectId: string, imagesCount: number) => {
        setProjectImageIndexes(prev => ({
            ...prev,
            [projectId]: (prev[projectId] + 1) % imagesCount
        }));
    };

    const prevImage = (projectId: string, imagesCount: number) => {
        setProjectImageIndexes(prev => ({
            ...prev,
            [projectId]: (prev[projectId] - 1 + imagesCount) % imagesCount
        }));
    };

    return (
        <section id="portfolio" className="py-24 bg-background overflow-visible">
            <div className="container mx-auto px-6">
                <div className="relative text-center mb-20">
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl md:text-9xl lg:text-[14rem] font-black text-transparent [webkit-text-stroke:1.5px_hsl(var(--foreground)/0.08)] select-none tracking-[0.2em] uppercase whitespace-nowrap z-0 pointer-events-none">
                        Works
                    </span>
                    <h2 className="relative z-10 text-3xl md:text-5xl font-bold tracking-tight">
                        Featured <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-600">Projects</span>
                    </h2>
                    <p className="relative z-10 text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
                        A selection of our best work, built with precision and a focus on high conversion.
                    </p>
                </div>

                {/* Stacking Cards Container */}
                <div className="relative max-w-6xl mx-auto space-y-0">
                    {featuredDemos.map((project, index) => {
                        const projectImages = project.images && project.images.length > 0 ? project.images : [project.image];
                        const currentIndex = projectImageIndexes[project.id] ?? 0;

                        return (
                            <div
                                key={project.id}
                                className="sticky top-24 md:top-32 w-full mb-8 md:mb-20 last:mb-0"
                                style={{
                                    zIndex: index + 1,
                                    top: `calc(${index * 2}rem + 8rem)`
                                }}
                            >
                                <div className="group relative bg-card border border-border/60 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-indigo-500/10">
                                    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0 overflow-hidden lg:min-h-[540px]">
                                        {/* Project Info */}
                                        <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                                            <div className="flex items-center gap-3 mb-4 md:mb-6">
                                                <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500 text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
                                                    {project.category}
                                                </span>
                                                <span className="w-1.5 h-1.5 rounded-full bg-border" />
                                                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                                                    Featured Work
                                                </span>
                                            </div>

                                            <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-5 group-hover:text-indigo-500 transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8 max-w-xl line-clamp-2 md:line-clamp-none">
                                                {project.description}
                                            </p>

                                            {/* Extra details only for Desktop/Large Screens - Hidden on Mobile/Tab */}
                                            <div className="hidden lg:grid grid-cols-2 gap-8 mb-8">
                                                <div className="space-y-0">
                                                    <div className="flex items-center gap-3 text-foreground/90">
                                                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                                                            <Layout className="w-5 h-5 text-indigo-500" />
                                                        </div>
                                                        <span className="text-base font-bold italic tracking-tight uppercase">Responsive</span>
                                                    </div>
                                                </div>
                                                <div className="space-y-0">
                                                    <div className="flex items-center gap-3 text-foreground/90">
                                                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                                                            <Palette className="w-5 h-5 text-purple-500" />
                                                        </div>
                                                        <span className="text-base font-bold italic tracking-tight uppercase">Modern UI</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap gap-4 mt-auto">
                                                <Button asChild size="lg" className="h-10 md:h-12 lg:h-14 px-6 md:px-8 lg:px-10 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-none shadow-xl shadow-indigo-500/25 active:scale-[0.98] transition-all font-bold text-sm md:text-base">
                                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 lg:gap-3">
                                                        Explore Full Project
                                                        <ExternalLink className="w-4 h-4 lg:w-5 lg:h-5" />
                                                    </a>
                                                </Button>
                                            </div>
                                        </div>

                                        {/* Project Image Panel with slider */}
                                        <div className="relative h-[250px] md:h-[350px] lg:h-full bg-muted/30 overflow-hidden group/img order-1 lg:order-2">
                                            <Image
                                                src={projectImages[currentIndex]}
                                                alt={`${project.title} - Preview ${currentIndex + 1}`}
                                                fill
                                                className="object-cover object-top transition-all duration-700"
                                                priority={index === 0}
                                            />

                                            {/* Image Navigation */}
                                            {projectImages.length > 1 && (
                                                <div className="absolute inset-x-0 bottom-4 md:bottom-6 lg:bottom-10 flex justify-between px-4 md:px-6 lg:px-10 items-center">
                                                    <Button
                                                        onClick={() => prevImage(project.id, projectImages.length)}
                                                        variant="outline"
                                                        size="icon"
                                                        className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 rounded-full bg-background/80 backdrop-blur-md border-border/40 hover:bg-indigo-500 hover:text-white transition-all shadow-xl"
                                                    >
                                                        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                                                    </Button>

                                                    <div className="flex gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                                                        {projectImages.map((_, i) => (
                                                            <div
                                                                key={i}
                                                                className={`h-1 md:h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? "w-4 md:w-8 bg-indigo-500" : "w-1 md:w-1.5 bg-white/40"}`}
                                                            />
                                                        ))}
                                                    </div>

                                                    <Button
                                                        onClick={() => nextImage(project.id, projectImages.length)}
                                                        variant="outline"
                                                        size="icon"
                                                        className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 rounded-full bg-background/80 backdrop-blur-md border-border/40 hover:bg-indigo-500 hover:text-white transition-all shadow-xl"
                                                    >
                                                        <ChevronRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                                                    </Button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-24 flex justify-center">
                    <Button asChild variant="outline" size="lg" className="h-14 px-10 rounded-2xl font-bold group gap-2 border-indigo-500/20 hover:border-indigo-500 hover:bg-indigo-500/5 transition-all text-base">
                        <Link href="/projects/all-projects">
                            Browse All 15+ Projects
                            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
