"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Demo, categories } from "@/data/portfolio";

interface ProjectCardProps {
    demo: Demo;
}

export default function ProjectCard({ demo }: ProjectCardProps) {
    return (
        <Card
            key={demo.id}
            className="group overflow-hidden border-border/80 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
            <CardHeader className="p-0">
                <div className="relative aspect-video bg-muted/50 overflow-hidden flex items-center justify-center group-hover:bg-muted/30 transition-colors">
                    <div className="absolute inset-x-0 inset-y-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
                    <div className="text-5xl opacity-10 transition-transform duration-500 group-hover:scale-105">📂</div>
                    <Badge className="absolute top-4 left-4 text-[9px] font-bold uppercase tracking-widest bg-background/80 backdrop-blur-md text-foreground border-border/40 hover:bg-background">
                        {categories.find(c => c.id === demo.category)?.label || demo.category}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{demo.title}</h3>
                <p className="text-[13px] text-muted-foreground mb-5 line-clamp-2 leading-relaxed">
                    {demo.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
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
