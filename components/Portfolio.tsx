"use client";

import { useState } from "react";
import { demos, categories } from "@/data/portfolio";

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredDemos = activeCategory === "all" ? demos : demos.filter((demo) => demo.category === activeCategory);

    return (
        <section id="portfolio" className="section bg-bg-secondary relative overflow-hidden">
            <div className="container relative z-10 mx-auto">
                <div className="section-header">
                    <h2 className="section-title">My <span className="gradient-text">Portfolio</span></h2>
                    <p className="section-subtitle">Check out some of my recent projects and demos</p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${activeCategory === category.id ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg" : "bg-bg-card hover:bg-bg-glass border border-border-light"}`}>{category.label}</button>
                    ))}
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredDemos.map((demo, index) => (
                        <div key={demo.id} className={`group card card-glass p-0 overflow-hidden animate-scale-in stagger-${(index % 6) + 1} opacity-0`}>
                            <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                                <div className="absolute inset-0 bg-grid opacity-30" />
                                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium text-white bg-primary/80">{demo.category}</div>
                                <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30">📂</div>
                            </div>
                            <div className="p-5">
                                <h3 className="font-bold text-lg mb-2">{demo.title}</h3>
                                <p className="text-sm text-text-secondary mb-4 line-clamp-2">{demo.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {demo.tags.map((tag) => <span key={tag} className="px-2 py-1 rounded-md bg-bg-primary/50 text-xs text-text-muted">{tag}</span>)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
