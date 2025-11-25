import React from 'react';
import { Button } from './Button';
import { Star, ShieldAlert } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#050505] pt-24 pb-12">
     
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
            
            {/* LEFT COLUMN: TEXT (As requested in screenshot) */}
            <div className="flex-1 text-center lg:text-left animate-fade-in">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 border border-brand-green/30 rounded-sm mb-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></div>
                    <span className="text-[10px] font-bold text-brand-green tracking-[0.2em] uppercase">
                        Alerta Para 2026
                    </span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
                    ELES DISSERAM QUE<br />
                    <span className="text-gray-500">ERA MENTIRA...</span><br/>
                    <span className="text-brand-gold">HOJE É A TUA REALIDADE.</span>
                </h1>

                <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 border-l-4 border-brand-green pl-6">
                    2025 provou que ele estava certo. Agora, 2026 aproxima-se e o cenário é exatamente o previsto.<br/>
                    <span className="text-white font-bold block mt-2">
                        A fome, o controle e o silêncio não são acidentes. São um projeto bem executado.
                    </span>
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                     <Button 
                        variant="green" 
                        className="h-14 px-8 text-base shadow-[0_0_20px_rgba(0,100,0,0.4)]"
                        onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        LIBERAR O DOSSIÊ
                    </Button>
                    <Button 
                        variant="outline" 
                        className="h-14 px-8 text-base"
                        onClick={() => document.getElementById('legacy')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        VER AS EVIDÊNCIAS
                    </Button>
                </div>
                
                <p className="text-[10px] text-gray-600 mt-6 uppercase tracking-widest flex items-center justify-center lg:justify-start gap-2">
                    <span className="w-2 h-2 bg-brand-gold rounded-full"></span> Disponível para Download Imediato
                </p>
            </div>

            {/* RIGHT COLUMN: CSS BOOK COVER (NO BLACK SCREEN) */}
            <div className="flex-1 flex justify-center lg:justify-end relative perspective-1000 mt-12 lg:mt-0">
                
                {/* The Book 3D Object (Pure CSS - No Images) */}
                <div className="book-3d relative w-[300px] h-[460px] md:w-[340px] md:h-[500px] bg-[#082808] rounded-r-md cursor-pointer group shadow-2xl" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                    
                    {/* Spine Effect */}
                    <div className="absolute top-0 left-0 w-[20px] h-full bg-[#001a00] rounded-l-sm shadow-inner z-20 border-r border-white/10"></div>
                    
                    {/* Cover Texture */}
                    <div className="absolute inset-0 ml-[20px] bg-brand-green border-t-2 border-b-2 border-r-2 border-[#1a4d1a] rounded-r-md flex flex-col items-center justify-between p-8 overflow-hidden">
                        
                        {/* Top Decoration */}
                        <div className="w-full text-center border-b border-brand-gold/30 pb-4">
                            <p className="text-[10px] text-brand-gold uppercase tracking-[0.3em]">Arquivo Confidencial</p>
                            <div className="flex justify-center gap-1 mt-2">
                                <Star size={10} className="text-brand-gold fill-brand-gold" />
                                <Star size={10} className="text-brand-gold fill-brand-gold" />
                                <Star size={10} className="text-brand-gold fill-brand-gold" />
                            </div>
                        </div>

                        {/* Title */}
                        <div className="text-center">
                            <h2 className="text-5xl font-black text-white tracking-tighter mb-0" style={{ textShadow: '2px 2px 0px #000' }}>SAVIMBI</h2>
                            <div className="w-full h-1 bg-brand-gold my-2"></div>
                            <h3 className="text-2xl font-bold text-brand-gold uppercase tracking-widest">As 22<br/>Profecias</h3>
                        </div>

                        {/* Center Art */}
                        <div className="relative w-24 h-24 border-2 border-brand-gold rounded-full flex items-center justify-center p-1">
                             <div className="w-full h-full bg-brand-gold/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                                 <Star size={40} className="text-brand-gold fill-brand-gold animate-pulse-slow" />
                             </div>
                        </div>

                        {/* Bottom Text */}
                        <div className="w-full text-center border-t border-brand-gold/30 pt-4">
                             <p className="text-white font-bold text-xs uppercase tracking-widest mb-1">A Agenda 2026</p>
                             <div className="inline-block px-2 py-0.5 bg-red-900/80 rounded text-[8px] text-white font-bold uppercase">
                                 Censurado
                             </div>
                        </div>

                        {/* Gloss Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
                    </div>
                </div>
                
                {/* Shadow */}
                <div className="absolute bottom-[-40px] right-[20px] w-[280px] h-[40px] bg-black/60 blur-xl rounded-full transform rotate-3"></div>

            </div>
        </div>
      </div>
    </section>
  );
};