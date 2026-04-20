"use client";

import { templates } from "@/data/portfolio";
import { CheckCircle2, Clock, MessageCircle, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Templates() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 text-[10px] font-black uppercase tracking-widest mb-4">
              <Sparkles className="w-3 h-3" />
              Ready to Launch
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Pre-Built <span className="text-indigo-500 italic">Premium</span> Templates
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose from our high-converting templates and get your business online in just 3-5 days.
            </p>
          </div>

          <div className="flex gap-3">
            <Button 
                variant="outline" 
                size="icon" 
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-2xl border-indigo-500/20 bg-white dark:bg-zinc-900 shadow-lg hover:bg-indigo-500 hover:text-white transition-all transition-transform active:scale-90"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button 
                variant="outline" 
                size="icon" 
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-2xl border-indigo-500/20 bg-white dark:bg-zinc-900 shadow-lg hover:bg-indigo-500 hover:text-white transition-all transition-transform active:scale-90"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {templates.map((template, index) => (
            <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="min-w-[300px] md:min-w-[380px] snap-center"
            >
                <div className="group bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-border/10 overflow-hidden shadow-2xl transition-all duration-500 hover:border-indigo-500/30">
                    <div className="relative aspect-[4/3] overflow-hidden">
                        <Image 
                        src={template.image} 
                        alt={template.title} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60" />
                        
                        <div className="absolute top-6 left-6">
                            <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest border border-white/10">
                                {template.category}
                            </span>
                        </div>
                        <div className="absolute bottom-6 right-6">
                            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-zinc-900 border border-border/10 shadow-lg transform group-hover:translate-x-[-4px] transition-transform duration-300">
                                <Clock className="w-3.5 h-3.5 text-indigo-500" />
                                <span className="text-[10px] font-black uppercase tracking-tight">{template.delivery} Delivery</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-8">
                        <h3 className="text-2xl font-black mb-4 tracking-tight">{template.title}</h3>
                        
                        <div className="space-y-3 mb-8">
                            {template.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-indigo-500/10 flex items-center justify-center">
                                        <CheckCircle2 className="w-3 h-3 text-indigo-500" />
                                    </div>
                                    <span className="text-sm font-bold text-muted-foreground">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <Button asChild className="w-full h-14 rounded-2xl font-bold bg-indigo-600 hover:bg-indigo-700 shadow-[0_10px_20px_-10px_rgba(79,70,229,0.4)] transition-all active:scale-95">
                            <a href={`https://wa.me/918709412383?text=Hi, I want the ${template.title} for my business.`} target="_blank" rel="noopener noreferrer" className="gap-2">
                                Get This Template
                                <MessageCircle className="w-5 h-5" />
                            </a>
                        </Button>
                    </div>
                </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest opacity-40 italic">
                * Drag or use arrows to explore more templates
            </p>
        </div>
      </div>
    </section>
  );
}
