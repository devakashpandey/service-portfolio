"use client";

import { demos } from "@/data/portfolio";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Portfolio() {
    // Show only the first 6 projects on the home page
    const featuredDemos = demos.slice(0, 6);

    return (
        <section id="portfolio" className="py-16 md:py-24 bg-muted/20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-3">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                    <p className="text-base text-muted-foreground max-w-xl mx-auto">
                        A selection of my best work across various industries
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
                    {featuredDemos.map((demo) => (
                        <ProjectCard key={demo.id} demo={demo} />
                    ))}
                </div>

                <div className="flex justify-center">
                    <Button asChild variant="outline" size="lg" className="h-12 px-8 rounded-xl font-bold group gap-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all">
                        <Link href="/projects/all-projects">
                            View All Projects
                            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
