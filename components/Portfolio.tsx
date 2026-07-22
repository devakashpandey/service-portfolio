"use client";

import { demos, Demo } from "@/data/portfolio";
import { Check, ChevronLeft, ChevronRight, ExternalLink, Eye, Layout, Palette, Rocket, Zap } from "lucide-react";
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
        <section id="portfolio" className="py-12 md:py-24 bg-background overflow-visible">
            <div className="container mx-auto px-6">
                <div className="relative text-center mb-20">
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl md:text-9xl lg:text-[14rem] font-black text-transparent [webkit-text-stroke:1.5px_hsl(var(--foreground)/0.08)] select-none tracking-[0.2em] uppercase whitespace-nowrap z-0 pointer-events-none">
                        Works
                    </span>
                    <h2 className="relative z-10 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                        Featured <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-600">Projects</span>
                    </h2>
                    <p className="relative z-10 text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
                        A selection of our best work, built with precision and a focus on high conversion.
                    </p>
                </div>

                {/* Stacking Cards Container */}
                <div className="relative max-w-6xl mx-auto space-y-0 pb-10">
                    {featuredDemos.map((project, index) => {
                        const projectImages = project.images && project.images.length > 0 ? project.images : [project.image];
                        const currentIndex = projectImageIndexes[project.id] ?? 0;

                        return (
                            <div
                                key={project.id}
                                className="sticky w-full mb-8 md:mb-16"
                                style={{
                                    zIndex: index + 1,
                                    top: `calc(${index * 2}rem + 8rem)`
                                }}
                            >
                                <div className="group relative bg-white dark:bg-zinc-950 border border-black/5 dark:border-white/8 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-md transition-all duration-500 hover:shadow-indigo-500/10 hover:border-indigo-500/20 will-change-transform">
                                    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0 overflow-hidden lg:min-h-[540px]">
                                        {/* Project Info */}
                                        <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center order-2 lg:order-1 relative z-10 bg-white dark:bg-zinc-950">
                                            <div className="flex items-center gap-3 mb-4 md:mb-6">
                                                <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500 text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
                                                    {project.category}
                                                </span>
                                            </div>

                                            <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-5 group-hover:text-indigo-500 transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-5 max-w-xl line-clamp-2 md:line-clamp-none">
                                                {project.description}
                                            </p>

                                            {/* Project Tags */}
                                            {project.tags && project.tags.length > 0 && (
                                                <div className="flex flex-wrap gap-1.5 mb-5">
                                                    {project.tags.map(tag => (
                                                        <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-zinc-100 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 border border-black/5 dark:border-white/5">
                                                            #{tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Key Highlights & Impact */}
                                            {project.caseStudy && (
                                                <div className="mb-6 space-y-4">
                                                    {project.caseStudy.whyItWorks && (
                                                        <div className="space-y-2">
                                                            <span className="text-[10px] font-black text-indigo-500 dark:text-indigo-400 uppercase tracking-widest block">
                                                                Key Highlights
                                                            </span>
                                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                                                {project.caseStudy.whyItWorks.map((item, idx) => (
                                                                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
                                                                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0">
                                                                            <Check className="w-3 h-3" />
                                                                        </div>
                                                                        <span className="font-semibold tracking-tight">{item}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}

                                                    {project.caseStudy.result && (
                                                        <div className="pt-3 border-t border-black/5 dark:border-white/5 flex items-center gap-2 text-xs sm:text-sm">
                                                            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-extrabold uppercase text-[9px] tracking-wider shrink-0">
                                                                Result
                                                            </span>
                                                            <span className="text-muted-foreground font-medium">
                                                                {project.caseStudy.result}
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                            )}

                                            {/* Extra details only for Desktop/Large Screens - Hidden on Mobile/Tab */}
                                            <div className="hidden lg:grid grid-cols-2 gap-8 mb-6">
                                                <div className="space-y-0">
                                                    <div className="flex items-center gap-3 text-foreground/90">
                                                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                                                            <Rocket className="w-5 h-5 text-indigo-500" />
                                                        </div>
                                                        <span className="text-base font-bold italic tracking-tight uppercase">High Conversion</span>
                                                    </div>
                                                </div>
                                                <div className="space-y-0">
                                                    <div className="flex items-center gap-3 text-foreground/90">
                                                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                                                            <Zap className="w-5 h-5 text-purple-500" />
                                                        </div>
                                                        <span className="text-base font-bold italic tracking-tight uppercase">Fast Loading</span>
                                                    </div>
                                                </div>
                                            </div>

                                             <div className="flex flex-wrap gap-4 mt-auto">
                                                {project.link ? (
                                                    <div className="group/eye relative">
                                                        <Button asChild size="lg" className="h-10 md:h-12 lg:h-14 w-10 md:w-12 lg:w-14 p-0 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-none shadow-xl shadow-indigo-500/25 active:scale-[0.98] transition-all">
                                                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                                 <Eye className="w-5 h-5 lg:w-6 lg:h-6" />
                                                            </a>
                                                        </Button>
                                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold rounded-lg opacity-0 group-hover/eye:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-2xl translate-y-1 group-hover/eye:translate-y-0 border border-white/5">
                                                            View Full Website
                                                        </div>
                                                    </div>
                                                ) : (
                                                     <a href="#contact" className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-indigo-500/10 hover:bg-indigo-500 text-indigo-500 hover:text-white border border-indigo-500/20 transition-all shadow-sm active:scale-[0.98] font-bold text-xs uppercase tracking-wider">
                                                         Request Live Demo
                                                     </a>
                                                )}
                                            </div>
                                         </div>

                                        {/* Project Image Panel with slider */}
                                        <div className="relative min-h-[300px] sm:min-h-[400px] lg:h-full bg-zinc-50/50 dark:bg-zinc-900/10 overflow-hidden group/img order-1 lg:order-2 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                                            
                                            {/* Blurred Background to make it look premium and vibrant */}
                                            <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                                                <Image
                                                    src={projectImages[currentIndex]}
                                                    alt=""
                                                    fill
                                                    unoptimized={true}
                                                    className="object-cover blur-2xl opacity-20 dark:opacity-30 scale-110 transition-all duration-700"
                                                />
                                            </div>

                                            {/* Browser Mockup Container */}
                                            <div className="relative w-full max-w-[95%] lg:max-w-full rounded-xl md:rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl bg-zinc-950 flex flex-col transition-all duration-500 hover:scale-[1.02] z-10">
                                                
                                                {/* Browser Header Bar */}
                                                <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-100 dark:bg-zinc-900 border-b border-black/5 dark:border-white/5 shrink-0 select-none">
                                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500/80" />
                                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-500/80" />
                                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500/80" />
                                                    <div className="ml-3 flex-1 max-w-[120px] sm:max-w-[200px] lg:max-w-xs h-3.5 sm:h-4.5 rounded bg-zinc-200/50 dark:bg-zinc-800/50 border border-black/5 dark:border-white/5 flex items-center justify-center text-[8px] sm:text-[9px] text-zinc-500 font-mono overflow-hidden truncate">
                                                        {project.link ? project.link.replace(/^https?:\/\//, '') : project.title.toLowerCase().replace(/\s+/g, '') + '.com'}
                                                    </div>
                                                </div>

                                                {/* Browser Viewport Area - Aspect ratio matches the standard desktop screenshot aspect ratio */}
                                                <div className="relative w-full aspect-[293/160] overflow-hidden bg-zinc-900/50 dark:bg-zinc-950">
                                                    <Image
                                                        src={projectImages[currentIndex]}
                                                        alt={`${project.title} - Preview ${currentIndex + 1}`}
                                                        fill
                                                        unoptimized={true}
                                                        className="object-cover object-top transition-all duration-700"
                                                        priority={index === 0}
                                                    />
                                                </div>
                                            </div>

                                            {/* Image Navigation */}
                                            {projectImages.length > 1 && (
                                                <div className="absolute inset-x-0 bottom-4 md:bottom-6 lg:bottom-10 flex justify-between px-4 md:px-6 lg:px-10 items-center z-20">
                                                    <Button
                                                        onClick={() => prevImage(project.id, projectImages.length)}
                                                        variant="outline"
                                                        size="icon"
                                                        className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/10 hover:bg-indigo-600 transition-all shadow-xl"
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
                                                        className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/10 hover:bg-indigo-600 transition-all shadow-xl"
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

                <div className="mt-8 md:mt-12 flex justify-center">
                    <Button asChild variant="outline" size="lg" className="h-11 md:h-14 px-6 md:px-10 rounded-xl md:rounded-2xl font-bold group gap-2 border-indigo-500/20 hover:border-indigo-500 hover:bg-indigo-500/5 transition-all text-sm md:text-base">
                        <Link href="/projects/all-projects">
                            Browse All Works
                            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </div>


        </section>
    );
}
