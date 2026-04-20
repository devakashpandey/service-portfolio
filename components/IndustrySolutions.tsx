"use client";

import { Dumbbell, Scissors, Utensils, Heart, Home, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  {
    title: "For Gyms & Fitness",
    icon: <Dumbbell className="w-8 h-8" />,
    features: ["Membership Management", "Trainer Showcases", "Workout Tracking", "Lead Flow Optimization"],
    tagline: "Turn visitors into members",
    color: "from-orange-500 to-red-600"
  },
  {
    title: "For Salons & Beauty",
    icon: <Scissors className="w-8 h-8" />,
    features: ["Visual Service Catalog", "Price Transparency", "Direct Booking Flow", "Stunning Gallery"],
    tagline: "Fill your appointment calendar",
    color: "from-pink-500 to-rose-600"
  },
  {
    title: "For Restaurants & Cafes",
    icon: <Utensils className="w-8 h-8" />,
    features: ["Digital Visual Menus", "Reservation System", "Local SEO Optimization", "Event Promotion"],
    tagline: "Get more table bookings",
    color: "from-amber-500 to-orange-600"
  },
  {
    title: "For Healthcare",
    icon: <Heart className="w-8 h-8" />,
    features: ["Doctor Availability UI", "Trust-building Profiles", "Appointment Booking", "Emergency Info"],
    tagline: "Build patient trust instantly",
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "For Real Estate",
    icon: <Home className="w-8 h-8" />,
    features: ["Property Listings", "High-intent Lead Forms", "Virtual Tour Integration", "Agent Branding"],
    tagline: "Capture qualified buyers",
    color: "from-emerald-500 to-teal-600"
  },
  {
    title: "For Education",
    icon: <GraduationCap className="w-8 h-8" />,
    features: ["Course Management", "LMS Integration", "Student Dashboards", "Testimonial Walls"],
    tagline: "Sell more courses online",
    color: "from-indigo-500 to-purple-600"
  }
];

export default function IndustrySolutions() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 uppercase italic">
            Tailored <span className="text-primary">Industry</span> Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            We don't just build websites; we build business solutions tailored to your specific industry needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className="group p-8 rounded-[2rem] bg-white dark:bg-zinc-900 border border-border/10 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${industry.color} opacity-5 rounded-bl-full transition-all group-hover:scale-150`} />
              
              <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${industry.color} flex items-center justify-center text-white mb-8 shadow-lg transform group-hover:rotate-6 transition-transform`}>
                {industry.icon}
              </div>

              <h3 className="text-2xl font-black mb-2 tracking-tight">{industry.title}</h3>
              <p className="text-primary text-xs font-black uppercase tracking-[0.2em] mb-6 italic">{industry.tagline}</p>

              <ul className="space-y-3 mb-8">
                {industry.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant="ghost" className="p-0 h-auto hover:bg-transparent text-primary font-black uppercase tracking-widest text-[10px] items-center gap-2 group-hover:gap-3 transition-all">
                Get for my business
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
