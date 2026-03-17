import PageHero from "@/components/PageHero";
import Image from "next/image";

export default function IndustriesPage() {
  const sectors = [
    {
      title: "Steel & Rolling Mills",
      description: "Monitoring critical gearbox health, cooling beds, and rolling stands where high-heat and extreme loads make manual inspection impossible.",
      icon: "🏗️",
      image: "/images/steel-mill.jpg" 
    },
    {
      title: "Wind Power Generation",
      description: "Advanced drivetrain monitoring for main bearings and planetary gearboxes, specifically tuned for variable speed and low-RPM operation.",
      icon: "🌬️",
      image: "/images/wind-turbine.jpg"
    },
    {
      title: "Oil, Gas & Petrochemical",
      description: "Continuous monitoring for pumps, compressors, and fans in hazardous areas, ensuring uptime in high-stakes processing environments.",
      icon: "⛽",
      image: "/images/oil-gas.jpg"
    },
    {
      title: "Railways & Infrastructure",
      description: "Structural health and dynamic monitoring for bridges and critical rolling stock components to ensure public safety and asset longevity.",
      icon: "🚆",
      image: "/images/railway.jpg"
    }
  ];

  return (
    <div className="flex flex-col items-center bg-slate-950 min-h-screen text-slate-300 pb-24 font-sans">
      
      {/* 1. HERO SECTION */}
      <PageHero 
        title="Industries We Empower" 
        backgroundImage="/images/industrial-bg.jpg" 
      />
      
      {/* 2. INDUSTRY GRID */}
      <div className="w-full max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">Target Sectors</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Built for the Rigors of Heavy Industry</h3>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-slate-400">
            JaaRi Sense isn't a generic monitoring tool. Our algorithms are specifically tuned for the unique vibration signatures of these critical environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sectors.map((sector, index) => (
            <div key={index} className="group relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all shadow-xl">
              <div className="p-8 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{sector.icon}</span>
                  <h4 className="text-2xl font-bold text-white">{sector.title}</h4>
                </div>
                <p className="text-slate-400 leading-relaxed mb-6 flex-grow">
                  {sector.description}
                </p>
                <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">JaaRi Sense Certified</span>
                  <span className="text-blue-500 group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. EXPERIENCE HIGHLIGHT */}
      <div className="w-full max-w-5xl mx-auto px-6 py-12 bg-blue-900/10 border border-blue-500/20 rounded-3xl text-center">
        <p className="text-lg text-blue-100 italic">
          "With 15+ years in vibration analysis, we’ve developed sector-specific baselines that allow us to detect faults in steel mills and turbines that generic AI systems simply miss."
        </p>
      </div>
    </div>
  );
}