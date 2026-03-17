import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="flex flex-col bg-slate-950 min-h-screen text-slate-300 font-sans">
      
      {/* 1. HERO SECTION */}
      <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden border-b border-slate-800">
        
        {/* UPDATED VISIBILITY: Increased image opacity, reduced dark overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/industrial-bg.jpg" 
            alt="Industrial Facility" 
            fill
            className="object-cover opacity-40" 
            priority
          />
          <div className="absolute inset-0 bg-slate-950/60"></div>
        </div>

        <div className="relative z-10 max-w-5xl px-6 py-20 text-center flex flex-col items-center mt-16">
          <span className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-4 bg-slate-950/50 px-4 py-1 rounded-full border border-slate-700 shadow-md">
            Condition Monitoring & Predictive Reliability
          </span>
          
          {/* Aligned to the Platform Page "Physics Meets AI" theme */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight text-white drop-shadow-lg">
            Where Physics Meets <span className="text-blue-500">AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-12 text-slate-200 drop-shadow">
            Empowering critical infrastructure with JaaRi Sense. We are the only industrial-grade platform that fuses classical vibration physics with advanced machine learning for absolute diagnostic certainty.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/platform">
              <button className="bg-orange-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-700 transition-all text-lg shadow-[0_0_20px_rgba(234,88,12,0.4)]">
                Explore the Platform
              </button>
            </Link>
            <Link href="/technology">
              <button className="bg-slate-900/80 border-2 border-slate-600 text-white px-8 py-4 rounded-lg font-bold hover:border-blue-500 hover:text-blue-400 transition-all text-lg">
                View Our Hardware
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. VALUE PROPOSITION SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-24 pb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Bridging the Physical and Digital</h2>
          <p className="text-lg max-w-2xl mx-auto text-slate-400">An open, comprehensive ecosystem built for the rigorous demands of heavy industry and vital infrastructure.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          
          {/* Card 1 - Smart Hardware */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-blue-500 transition-colors shadow-lg">
            <div className="w-14 h-14 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6 border border-blue-500/30">
              <span className="text-2xl text-blue-400">⦿</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Smart & Secure Hardware</h3>
            <p className="leading-relaxed text-slate-400">
              From wind turbines to O&G facilities, deploy highly sensitive wireless vibration and acoustic sensors built to survive extreme industrial environments.
            </p>
          </div>

          {/* Card 2 - AI with Human Intelligence (Aligned to Platform AI techniques) */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-orange-500 transition-colors shadow-lg relative">
            <div className="absolute top-0 right-0 p-4 pt-6 text-slate-600 text-xs font-mono uppercase tracking-widest">Platform Core</div>
            <div className="w-14 h-14 bg-orange-900/50 rounded-lg flex items-center justify-center mb-6 border border-orange-500/30">
              <span className="text-2xl text-orange-400">🧠</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">AI with Human Intelligence</h3>
            <p className="leading-relaxed text-slate-400">
              We fuse classical FFT analysis with AI pattern recognition (Isolation Forest, DBSCAN) to isolate specific mechanical faults that standard AI thresholds miss.
            </p>
          </div>

          {/* Card 3 - UPDATED: Open Enterprise Integration (Replaced Structural Health) */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-blue-500 transition-colors shadow-lg">
            <div className="w-14 h-14 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6 border border-blue-500/30">
              <span className="text-2xl text-blue-400">🌐</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Open Data Architecture</h3>
            <p className="leading-relaxed text-slate-400">
              Built for the open enterprise. Seamlessly ingest multi-format data (CSV, RD2) and stream live IoT/SCADA data via MQTT and OPC-UA protocols.
            </p>
          </div>
        </div>

        {/* 3. DIAGNOSTIC LOOP VISUALIZATION */}
        <div className="relative p-10 bg-slate-900 rounded-3xl border border-slate-800 shadow-[0_0_60px_rgba(59,130,246,0.15)] flex flex-col items-center">
          <div className="text-center mb-10 max-w-xl">
            <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">How JaaRi Sense Transforms Industrial Data</h3>
            <p className="text-slate-400 leading-relaxed">A high-fidelity visualization showing the software's exact aim: turning raw, noisy physical signals into a clear Reliability Scorecard.</p>
          </div>
          
          <div className="w-full relative min-h-[400px]">
            {/* Note: I kept the path as jaari-diagnostic-loop.jpg. If you haven't saved that specific image yet, temporarily change this to /images/industrial-dashboard.png so it doesn't break! */}
            <Image 
              src="/images/jaari-diagnostic-loop.jpg" 
              alt="JaaRi Sense: Transforming Raw Vibration into Actionable Diagnostics" 
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}