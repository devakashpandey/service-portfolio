"use client";

import { demos } from "@/data/portfolio";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

export default function AllProjectsPage() {
    return (
        <>
            <Navbar />
            <main className="pt-24 min-h-screen bg-background text-foreground overflow-x-hidden">
                {/* Background Decorations */}
                <div className="fixed inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-x-0 inset-y-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:32px_32px]" />
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
                    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full" />
                </div>

                <div className="container relative z-10 mx-auto px-6 py-12 md:py-20">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
                            All <span className="text-primary">Projects</span>
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Explore all my projects across different industries.
                            From small business websites to complex web applications.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {demos.map((demo) => (
                            <ProjectCard key={demo.id} demo={demo} />
                        ))}
                    </div>

                    {demos.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-muted-foreground text-lg italic">No projects found yet.</p>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
