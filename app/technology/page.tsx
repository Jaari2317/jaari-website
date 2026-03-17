import PageHero from "@/components/PageHero";
import Image from "next/image";

export default function TechnologyPage() {
  return (
    <div className="flex flex-col items-center bg-slate-950 min-h-screen text-slate-300">
      
      <PageHero 
        title="Advanced Technology Stack" 
        backgroundImage="/images/time-waveform.png" 
      />
      
      <div className="p-10 max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12 mt-10 pb-20">
        
        {/* UPDATED: High-Contrast Image Container */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="p-3 bg-slate-700 rounded-3xl shadow-[0_0_50px_rgba(234,88,12,0.3)] border-2 border-orange-500/50">
            <Image 
              src="/images/sensor-on-machine.png" 
              alt="Ruggedized Sensor Mounted on Industrial Pump" 
              width={800}
              height={600}
              /* UPDATED: Added brightness and contrast filters directly to the image */
              className="rounded-2xl border border-slate-400 brightness-125 contrast-125"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-3xl font-bold text-white mb-6">Condition Monitoring Hardware & AI</h2>
          <p className="text-lg leading-relaxed text-slate-300 mb-6">
            JaaRi deploys industrial-grade wireless vibration sensors and continuous monitoring edge devices designed to survive the harshest environments. 
          </p>
          <p className="text-lg leading-relaxed text-slate-300">
            This high-fidelity data feeds our specialized AI models for supervised and unsupervised learning, tracking degradation, detecting anomalies, and predicting Remaining Useful Life (RUL) with unprecendented accuracy.
          </p>
        </div>
      </div>
    </div>
  );
}