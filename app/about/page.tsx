import PageHero from "@/components/PageHero";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center bg-slate-950 min-h-screen text-slate-300 pb-24 font-sans">
      
      {/* 1. HERO SECTION - Extended Background */}
      <PageHero 
        title="The Team Behind JaaRi" 
        backgroundImage="/images/team-industrial.jpg" 
        className="pb-32 md:pb-48"
      />
      
      {/* 2. THE CORE IDENTITY SECTION */}
      <div className="w-full max-w-5xl mx-auto px-6 py-20 text-center relative z-20 -mt-16">
        <h2 className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">Our Origin</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight drop-shadow-2xl">
          Built by <span className="text-blue-500">Reliability Engineers</span>. <br/> Not Just Data Scientists.
        </h3>
        
        <p className="text-xl leading-relaxed text-slate-300 mb-16 max-w-4xl mx-auto">
          JaaRi (Joint Analytics for Asset Reliability Insights) was founded by a mechanical team with 15+ years of field experience in vibration analysis and thermography. We built the platform we always wished we had in the trenches.
        </p>

        {/* 3. AIM & VISION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 p-10 rounded-3xl text-left shadow-2xl">
            <h4 className="text-orange-500 font-mono text-sm uppercase tracking-widest mb-4">Our Aim</h4>
            <h5 className="text-3xl font-bold text-white mb-4">Zero Unplanned Downtime</h5>
            <p className="text-slate-400 leading-relaxed text-lg">
              To transform industrial maintenance from a reactive "break-fix" cycle into a proactive, autonomous reliability ecosystem. We aim to provide absolute diagnostic certainty for the world's most critical rotating assets.
            </p>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 p-10 rounded-3xl text-left shadow-2xl">
            <h4 className="text-blue-500 font-mono text-sm uppercase tracking-widest mb-4">Our Vision</h4>
            <h5 className="text-3xl font-bold text-white mb-4">The Intelligence Layer</h5>
            <p className="text-slate-400 leading-relaxed text-lg">
              To become the global standard intelligence layer for industrial machinery—where every machine signal is instantly translated into an actionable reliability scorecard, merging human mechanical expertise with scalable AI.
            </p>
          </div>
        </div>

        {/* 4. CORE VALUES SECTION */}
        <div className="py-16 border-t border-slate-800">
          <h3 className="text-3xl font-bold text-white mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center border border-blue-500/30 mb-6 text-2xl text-blue-400">🔬</div>
              <h4 className="text-xl font-bold text-white mb-2">Physics First</h4>
              <p className="text-slate-500 text-sm leading-relaxed">We don't guess. Every AI insight is backed by the fundamental laws of vibration physics and mechanical engineering.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-900/30 rounded-full flex items-center justify-center border border-orange-500/30 mb-6 text-2xl text-orange-400">🤝</div>
              <h4 className="text-xl font-bold text-white mb-2">Joint Analytics</h4>
              <p className="text-slate-500 text-sm leading-relaxed">We believe in the power of "Human+AI"—empowering technicians with advanced tools rather than trying to replace their expertise.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center border border-blue-500/30 mb-6 text-2xl text-blue-400">🌐</div>
              <h4 className="text-xl font-bold text-white mb-2">Open Integrity</h4>
              <p className="text-slate-500 text-sm leading-relaxed">No data silos. We advocate for open protocols (MQTT/OPC-UA) so your data remains your most valuable asset.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}