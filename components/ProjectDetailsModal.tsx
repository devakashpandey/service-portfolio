"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Demo } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertCircle, Rocket, Zap, ExternalLink, MessageCircle } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ProjectDetailsModalProps {
    project: Demo | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectDetailsModal({ project, isOpen, onClose }: ProjectDetailsModalProps) {
    if (!project) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 border-none bg-background dark:bg-zinc-950 backdrop-blur-3xl shadow-2xl">
                <DialogHeader className="p-0 sticky top-0 z-50">
                    <div className="absolute right-12 top-4 z-50">
                        {/* Close handled by Dialog */}
                    </div>
                </DialogHeader>

                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Media Section */}
                    <div className="bg-muted/30 p-4 lg:p-0 flex items-center justify-center min-h-[300px] lg:h-auto lg:sticky lg:top-0">
                        <div className="relative aspect-video lg:aspect-square w-full h-full">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                unoptimized={true}
                                className="object-contain lg:object-cover"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 md:p-10 lg:p-12 space-y-10">
                        <div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map(tag => (
                                    <Badge key={tag} variant="secondary" className="bg-primary/5 text-primary border-primary/10 uppercase tracking-widest text-[9px] font-bold">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                            <DialogTitle className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                                {project.title}
                            </DialogTitle>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                {project.description}
                            </p>
                        </div>


                        {/* Case Study Details */}
                        {project.caseStudy && (
                            <div className="space-y-12">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-red-500">
                                        <AlertCircle className="w-6 h-6" />
                                        <h4 className="text-xl font-bold italic uppercase tracking-tight">The Problem</h4>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed pl-9">
                                        {project.caseStudy.problem}
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-amber-500">
                                        <Zap className="w-6 h-6" />
                                        <h4 className="text-xl font-bold italic uppercase tracking-tight">The Solution</h4>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed pl-9">
                                        {project.caseStudy.solution}
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-green-500">
                                        <Rocket className="w-6 h-6" />
                                        <h4 className="text-xl font-bold italic uppercase tracking-tight">The Result</h4>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed pl-9">
                                        {project.caseStudy.result}
                                    </p>
                                </div>

                                {/* Why it works */}
                                <div className="space-y-6 pt-6 border-t border-border/10">
                                    <h4 className="text-xl font-bold italic uppercase tracking-tight flex items-center gap-2">
                                        <div className="w-2 h-8 bg-primary rounded-full" />
                                        Why this design works
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {project.caseStudy.whyItWorks.map((point, index) => (
                                            <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-muted/50 border border-border/10">
                                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                <span className="text-sm font-bold tracking-tight">{point}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* CTAs */}
                        <div className="pt-10 flex flex-col sm:flex-row gap-4 border-t border-border/10">
                            {project.link && (
                                <Button asChild size="lg" className="rounded-2xl h-14 font-bold flex-1 bg-primary text-primary-foreground shadow-xl shadow-primary/20 transition-all hover:-translate-y-1">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="gap-2">
                                        Live Preview
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </Button>
                            )}
                            <Button asChild size="lg" variant="outline" className="rounded-2xl h-14 font-bold flex-1 border-indigo-500/20 hover:border-indigo-500 hover:bg-indigo-500/5 transition-all hover:-translate-y-1">
                                <a href={`https://wa.me/918709412383?text=Hi, I saw your ${project.title} project and I want a similar website for my business.`} target="_blank" rel="noopener noreferrer" className="gap-2">
                                    Get Quote
                                    <MessageCircle className="w-5 h-5" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
