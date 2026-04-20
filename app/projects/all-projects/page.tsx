"use client";

import { demos } from "@/data/portfolio";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

export default function AllProjectsPage() {
    return (
        <>
            <Navbar />
            <main className="pt-24 min-h-screen bg-background text-foreground">
                <div className="container mx-auto px-6 py-12 md:py-20">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
                            All <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-600">Projects</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Explore our complete portfolio of high-converting digital solutions.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {demos.map((demo) => (
                            <ProjectCard key={demo.id} demo={demo} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
