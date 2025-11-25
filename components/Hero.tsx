import React from 'react';
import { Button } from './Button';
import { ChevronRight, ShieldAlert, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#050505] pt-32 pb-20">
     
      {/* Background Ambience - Green Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
       
        {/* BADGE */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-brand-gold/30 rounded-full mb-8 backdrop-blur-sm animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></div>
            <span className="text-[10px] md:text-xs font-bold text-brand-gold tracking-[0.2em] uppercase">
                Documento Oficial • Novembro 2025
            </span>
        </div>

        {/* HEADLINE */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight max-w-5xl">
            ELES DISSERAM QUE<br />
            <span className="relative inline-block mt-2 mb-2">
                <span className="relative z-10 text-black px-6 py-1 bg-brand-gold font-black shadow-[0_0_50px_rgba(255,215,0,0.4)] transform -skew-x-6 inline-block">ERA MENTIRA...</span>
            </span>
            <br />
            <span className="text-white block mt-4">HOJE É A TUA REALIDADE.</span>
        </h1>

        {/* SUBTITLE */}
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12">
            Estamos no final de 2025 e o cenário é exatamente o que Jonas Savimbi previu.<br className="hidden md:block"/>
            A fome, o controle e o silêncio não são acidentes. <strong className="text-white border-b border-brand-gold/50 pb-0.5">São um projeto bem executado.</strong>
            <br/>
            <span className="text-brand-gold font-bold text-sm uppercase tracking-widest mt-6 block animate-pulse">
                DESCUBRA O PLANO ORIGINAL ANTES QUE 2026 COMECE.
            </span>
        </p>

        {/* CSS-ONLY BOOK COVER (NO EXTERNAL IMAGES) */}
        <div className="w-[280px] md:w-[320px] h-[440px] md:h-[480px] perspective-1000 relative mb-12 group cursor-pointer" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
            
            {/* The 3D Container */}
            <div className="book w-full h-full absolute transform-style-3d transition-transform duration-500 shadow-[0_30px_60px_rgba(0,0,0,0.9)] hover:-translate-y-4 hover:rotate-y-[-10deg]">
                
                {/* FRONT COVER - PURE CSS UNITA GREEN */}
                <div className="absolute inset-0 bg-[#004d00] rounded-r-md flex flex-col overflow-hidden border-r-4 border-[#003300] shadow-inner">
                    
                    {/* Gradient Overlay for Depth */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/40 pointer-events-none"></div>
                    
                    {/* Golden Border Inset */}
                    <div className="absolute inset-3 border-2 border-brand-gold rounded-sm pointer-events-none opacity-80"></div>

                    {/* Spine Groove (Left) */}
                    <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/50 to-transparent z-20"></div>

                    {/* COVER CONTENT */}
                    <div className="flex-1 p-6 flex flex-col relative z-10 items-center text-center justify-between py-10">
                        
                        {/* Top */}
                        <div className="text-brand-gold/80 text-[10px] font-mono uppercase tracking-[0.4em] border-b border-brand-gold/30 pb-2">
                            Confidencial
                        </div>

                        {/* Title Section */}
                        <div className="flex flex-col items-center">
                            <h2 className="text-5xl font-black text-brand-gold tracking-tighter mb-0 drop-shadow-md" style={{ fontFamily: 'Impact, sans-serif' }}>
                                SAVIMBI
                            </h2>
                            <div className="w-full h-1 bg-brand-red my-2"></div>
                            <p className="text-white font-bold tracking-[0.3em] text-xs uppercase">
                                As 22 Profecias
                            </p>
                        </div>

                        {/* Center Star Emblem */}
                        <div className="relative">
                             <div className="w-24 h-24 rounded-full border-2 border-brand-gold/50 flex items-center justify-center bg-[#003300]">
                                 <Star size={48} fill="#FFD700" className="text-brand-gold" />
                             </div>
                             <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 bg-red-700 text-white text-[10px] font-bold py-1 px-2 uppercase tracking-wider text-center shadow-lg">
                                 Agenda 2026
                             </div>
                        </div>

                        {/* Bottom */}
                        <div className="mt-4 opacity-90">
                            <p className="text-brand-gold/60 text-[8px] uppercase tracking-widest mb-1">
                                Cópia Autorizada Nº 10116
                            </p>
                            <div className="w-full h-8 bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                                <span className="text-[9px] text-brand-gold font-mono">CLASSIFIED DOCUMENT</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SPINE */}
                <div className="book-spine" style={{ backgroundColor: '#003300' }}></div>
                
                {/* PAGES (Right side thickness) */}
                <div className="absolute right-0 top-1 bottom-1 w-[12px] bg-[#ddd] transform rotateY(90deg) translateZ(-6px) origin-right"></div>
            </div>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center max-w-2xl">
            <Button 
                variant="pill" 
                className="w-full sm:w-auto shadow-[0_0_50px_rgba(255,215,0,0.2)] animate-pulse-slow scale-105"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
                QUERO LER A VERDADE
                <ChevronRight size={20} className="ml-2" />
            </Button>
            
            <Button 
                variant="outline" 
                className="w-full sm:w-auto h-[68px] text-base px-10 border-white/10 hover:bg-white/5 rounded-full uppercase tracking-widest font-bold text-gray-400"
                onClick={() => document.getElementById('legacy')?.scrollIntoView({ behavior: 'smooth' })}
            >
                VER AS EVIDÊNCIAS
            </Button>
        </div>

        <div className="mt-10 flex items-center gap-3 text-[10px] text-brand-gold uppercase tracking-widest font-bold bg-black/50 px-4 py-2 rounded-full border border-white/5">
            <ShieldAlert size={12} />
            <span>Disponível para Download Imediato</span>
        </div>

      </div>
    </section>
  );
};