import PageHero from "@/components/PageHero";
import Image from "next/image";

export default function TechnologyPage() {
  const techSpecs = [
    {
      title: "Smart MEMS Sensors",
      features: ["Tri-axial Vibration", "High-frequency Sampling", "IP67 Ruggedized", "Ultra-low Power Consumption"],
      image: "/images/jaari-diagnostic-loop.jpg" // Using your new sensor-focused graphic
    },
    {
      title: "Secure Edge Gateway",
      features: ["MQTT/OPC-UA Ready", "AES-256 Encryption", "Local Data Buffering", "Seamless Cloud Sync"],
      image: "/images/industrial-dashboard.png"
    }
  ];

  return (
    <div className="flex flex-col items-center bg-slate-950 min-h-screen text-slate-300 pb-24 font-sans">
      
      {/* 1. HERO SECTION */}
      <PageHero 
        title="Our Technology Stack" 
        backgroundImage="/images/industrial-bg.jpg" 
      />
      
      {/* 2. THE HARDWARE SECTION */}
      <div className="w-full max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">Hardware Excellence</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Smart & Secured Sensing</h3>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-slate-400">
            Engineered by reliability experts to capture the finest nuances of machine health in the most demanding industrial environments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {techSpecs.map((tech, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden flex flex-col">
              <div className="relative h-64 w-full">
                <Image 
                  src={tech.image} 
                  alt={tech.title} 
                  fill 
                  className="object-cover opacity-60 group-hover:opacity-100 transition"
                />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-white mb-4">{tech.title}</h4>
                <ul className="grid grid-cols-2 gap-3">
                  {tech.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                      <span className="text-orange-500">✔</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. THE AI ENGINE (Joint Analytics) */}
      <div className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-slate-800">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-bold text-white mb-6">The JaaRi AI Diagnostic Engine</h3>
            <p className="text-lg text-slate-400 leading-relaxed mb-6">
              Unlike black-box AI, our engine uses **Joint Analytics**—merging automated pattern detection with classical vibration physics rules.
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-slate-800/50 rounded-xl border-l-4 border-blue-500">
                <h5 className="text-white font-bold">Isolation Forest Baselining</h5>
                <p className="text-sm text-slate-400">Automated anomaly detection that learns the unique signature of every individual asset.</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl border-l-4 border-orange-500">
                <h5 className="text-white font-bold">DBSCAN Pattern Clustering</h5>
                <p className="text-sm text-slate-400">Grouping similar vibration behaviors to identify repeating fault patterns across your entire plant.</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl">
             <div className="text-center">
                <span className="text-5xl mb-4 block">🧠</span>
                <h4 className="text-xl font-bold text-white mb-2">15+ Fault Types Isolated</h4>
                <p className="text-slate-500">From bearing degradation and cage faults to misalignment and electrical discharge.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}