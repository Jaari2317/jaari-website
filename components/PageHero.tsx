import Image from "next/image";

interface PageHeroProps {
  title: string;
  backgroundImage?: string;
  className?: string; // New prop to handle custom height/padding
}

export default function PageHero({ title, backgroundImage, className = "" }: PageHeroProps) {
  return (
    <div className={`relative flex flex-col items-center justify-center pt-24 pb-16 px-4 bg-slate-950 text-white w-full overflow-hidden border-b border-slate-800 ${className}`}>
      
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image 
            src={backgroundImage} 
            alt={`${title} Background`} 
            fill
            className="object-cover opacity-50" 
            priority
          />
          <div className="absolute inset-0 bg-slate-950/50"></div>
        </div>
      )}

      <div className="relative z-10 flex flex-col items-center">
        <span className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-2 bg-slate-950/60 px-4 py-1 rounded-full shadow-md border border-slate-800">
          Industrial Intelligence Platform
        </span>
        
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-center tracking-tight leading-tight drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
          {title}
        </h1>
        
        <div className="w-20 h-1 bg-orange-500 mb-8 rounded-full shadow-[0_0_10px_rgba(234,88,12,0.8)]"></div>
      </div>
    </div>
  );
}