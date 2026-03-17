import PageHero from "@/components/PageHero";
import Image from "next/image";

export default function PlatformPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-950 min-h-screen text-slate-300 font-sans pb-24">
      
      {/* 1. HERO SECTION */}
      <PageHero 
        title="JaaRi Sense Platform" 
        backgroundImage="/images/industrial-dashboard.png" 
      />
      
      {/* 2. THE CORE ADVANTAGE SECTION */}
      <div className="w-full max-w-7xl mx-auto px-6 py-20 text-center border-b border-slate-800/50">
        <h2 className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">The Competitive Edge</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Where Physics Meets AI</h3>
        <p className="text-xl max-w-4xl mx-auto leading-relaxed text-slate-400">
          Pure AI platforms guess at anomalies. Traditional platforms rely entirely on human manual analysis. 
          <span className="text-white font-semibold"> JaaRi Sense does both. </span> 
          We are the only industrial-grade Condition Monitoring platform that fuses classical vibration physics with advanced machine learning algorithms to deliver absolute diagnostic certainty.
        </p>
      </div>

      {/* 3. DIAGNOSTICS DEEP-DIVE (Image + Text) */}
      <div className="p-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 mt-10">
        
        {/* Glowing Image Container */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <div className="p-3 bg-slate-800/50 rounded-3xl shadow-[0_0_50px_rgba(59,130,246,0.2)] border border-blue-500/30">
            <Image 
              src="/images/fft-analysis.png" 
              alt="JaaRi Sense FFT Spectrum Analysis" 
              width={800}
              height={600}
              className="rounded-2xl border border-slate-600 brightness-110 contrast-125"
            />
          </div>
        </div>

        {/* Technical Capabilities Text */}
        <div className="w-full lg:w-1/2 text-left">
          <h2 className="text-3xl font-bold text-white mb-8">8 Layers of Analytics. 15+ Fault Types Detected.</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-900/40 flex items-center justify-center border border-blue-500/30 shrink-0 text-blue-400">📊</div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1">Classical Vibration Physics</h4>
                <p className="text-slate-400 leading-relaxed">Full Time-Waveform, high-resolution FFT Spectrums, Demodulation/Envelope Analysis, and Order Tracking for variable speed assets.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-900/40 flex items-center justify-center border border-orange-500/30 shrink-0 text-orange-400">⚙️</div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1">Automated Fault Isolation</h4>
                <p className="text-slate-400 leading-relaxed">Integrated bearing frequency libraries and energy contribution calculations instantly pinpoint specific mechanical degradation before failure occurs.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-900/40 flex items-center justify-center border border-blue-500/30 shrink-0 text-blue-400">🧠</div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1">Advanced AI Pattern Engine</h4>
                <p className="text-slate-400 leading-relaxed">Utilizing Isolation Forest baselining, DBSCAN pattern clustering, and LSTM trend prediction to automate alarm generation and estimate Remaining Useful Life (RUL).</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. ENTERPRISE INTEGRATION GRID */}
      <div className="w-full max-w-7xl mx-auto px-6 mt-20 pt-16 border-t border-slate-800/50">
        <h3 className="text-3xl font-bold text-center text-white mb-12">Built for the Open Enterprise</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl text-center hover:border-slate-600 transition">
            <span className="text-orange-500 font-mono text-sm mb-2 block">01 / Import</span>
            <h4 className="text-lg font-bold text-white">Multi-Format Data</h4>
            <p className="text-slate-500 mt-2 text-sm">Seamless ingestion of CSV, RD2, and legacy sensor data.</p>
          </div>
          
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl text-center hover:border-slate-600 transition">
            <span className="text-orange-500 font-mono text-sm mb-2 block">02 / Protocol</span>
            <h4 className="text-lg font-bold text-white">IoT & SCADA</h4>
            <p className="text-slate-500 mt-2 text-sm">MQTT live streaming and OPC-UA connectivity.</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl text-center hover:border-slate-600 transition">
            <span className="text-orange-500 font-mono text-sm mb-2 block">03 / Connect</span>
            <h4 className="text-lg font-bold text-white">REST & CMMS API</h4>
            <p className="text-slate-500 mt-2 text-sm">Push actionable work orders directly to your maintenance software.</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl text-center hover:border-slate-600 transition">
            <span className="text-orange-500 font-mono text-sm mb-2 block">04 / Scale</span>
            <h4 className="text-lg font-bold text-white">Multi-Plant RBAC</h4>
            <p className="text-slate-500 mt-2 text-sm">Role-based access control from Plant Manager down to Viewer.</p>
          </div>
        </div>
      </div>

    </div>
  );
}