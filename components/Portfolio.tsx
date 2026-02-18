"use client";

import { demos } from "@/data/portfolio";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Portfolio() {
    // Show featured projects on the home page
    const featuredDemos = demos.filter(demo => demo.featured).slice(0, 3);

    return (
        <section id="portfolio" className="pt-12 pb-24 bg-gradient-to-b from-muted/20 via-blue-50/20 dark:via-blue-950/10 to-muted/20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
                        A selection of our best work across various industries
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
                    {featuredDemos.map((demo) => (
                        <ProjectCard key={demo.id} demo={demo} />
                    ))}
                </div>

                <div className="flex justify-center">
                    <Button asChild variant="outline" size="lg" className="h-12 px-8 rounded-xl font-bold group gap-2 border-indigo-500/20 hover:border-indigo-500 hover:bg-indigo-500/5 transition-all">
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
