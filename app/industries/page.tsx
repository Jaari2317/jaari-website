import PageHero from "@/components/PageHero";

export default function IndustriesPage() {
  const industries = [
    { name: "Wind Energy", desc: "Gearbox, main bearing and generator fault prediction to reduce turbine downtime." },
    { name: "Steel Plants", desc: "Rolling mill motors, critical drives and thermal risk detection." },
    { name: "Cement Industry", desc: "Kiln and crusher vibration diagnostics with predictive alerts." },
    { name: "Power Generation", desc: "Turbine, boiler and auxiliary system monitoring." },
    { name: "Oil & Gas", desc: "Pump and compressor anomaly detection with lubrication analytics." },
    { name: "Heavy Manufacturing", desc: "Predictive reliability intelligence for rotating assets." }
  ];

  return (
    <div className="flex flex-col items-center bg-slate-950 min-h-screen text-slate-300 pb-20">
      <PageHero 
        title="Industries We Transform" 
        backgroundImage="/images/industrial-dashboard.png" 
      />
      
      <div className="w-full max-w-6xl px-6 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((ind, index) => (
          <div 
            key={index} 
            className="bg-slate-900 border border-slate-700 p-8 rounded-xl hover:border-orange-500 transition-colors duration-300 shadow-xl group flex flex-col relative overflow-hidden"
          >
            {/* Subtle glow effect inside the cards */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <span className="text-xs font-mono text-slate-500 mb-3 block group-hover:text-blue-400 transition">0{index + 1} // Industrial Sector</span>
            <h2 className="text-2xl font-bold text-orange-500 mb-3 tracking-tight">{ind.name}</h2>
            <p className="text-lg text-slate-300 leading-relaxed flex-grow">{ind.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}