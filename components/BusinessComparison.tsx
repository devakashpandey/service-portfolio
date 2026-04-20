"use client";

import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";

const comparisonData = [
  {
    feature: "Brand Trust",
    without: "No professional identity",
    with: "Premium, trustworthy brand image",
    status: true,
  },
  {
    feature: "Lead Generation",
    without: "Low enquiries & manual follow-up",
    with: "High enquiries & automated leads",
    status: true,
  },
  {
    feature: "Accessibility",
    without: "Business only open 10-6",
    with: "24/7 Digital Shop Front",
    status: true,
  },
  {
    feature: "Customer Interaction",
    without: "Cluttered phone bookings",
    with: "Seamless WhatsApp/Web booking",
    status: true,
  },
  {
    feature: "Market Presence",
    without: "Limited to local area only",
    with: "Global visibility & SEO presence",
    status: true,
  }
];

export default function BusinessComparison() {
  return (
    <section className="py-12 md:py-24 bg-zinc-50 dark:bg-zinc-950/50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Is Your Business <span className="text-red-500 italic">Losing</span> Money?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how a premium digital presence transforms your business from "Just Another Shop" to a "Market Leader".
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {/* Desktop Arrow */}
            <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-linear-to-r from-indigo-500 to-purple-600 text-white items-center justify-center z-20 shadow-[0_0_30px_rgba(79,70,229,0.4)] border-4 border-background dark:border-zinc-950 transition-transform hover:scale-110">
              <ArrowRight className="w-7 h-7" />
            </div>

            {/* WITHOUT SECTION */}
            <div className="space-y-4 p-8 rounded-[2rem] bg-white dark:bg-zinc-900 border border-red-500/10 shadow-xl shadow-red-500/5 transition-all hover:border-red-500/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500">
                  <XCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-red-500">Without Website</h3>
              </div>

              <div className="space-y-4">
                {comparisonData.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 opacity-60">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-1" />
                    <div>
                      <p className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">{item.feature}</p>
                      <p className="text-sm font-bold">{item.without}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WITH SECTION */}
            <div className="space-y-4 p-8 rounded-[2rem] bg-indigo-600 text-white shadow-2xl shadow-indigo-500/30 transition-all hover:scale-[1.02] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <CheckCircle2 className="w-40 h-40" />
              </div>
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight">With Akky Labs</h3>
              </div>

              <div className="space-y-4 relative z-10">
                {comparisonData.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                    <div>
                      <p className="text-[10px] font-bold uppercase text-indigo-100 tracking-widest">{item.feature}</p>
                      <p className="text-sm font-bold">{item.with}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 mb-8">
              <span className="text-sm font-semibold italic">“This single change usually increases lead conversion by over 100%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
