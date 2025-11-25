import React from 'react';
import { Button } from './Button';
import { ChevronRight, ShieldAlert, Fingerprint } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#050505] pt-32 pb-20">
     
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
       
        {/* BADGE */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border-l-2 border-brand-green mb-8 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></div>
            <span className="text-[10px] md:text-xs font-bold text-gray-300 tracking-[0.2em] uppercase">
                O Documento Que Tentaram Apagar
            </span>
        </div>

        {/* HEADLINE */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight max-w-5xl">
            ELES DISSERAM QUE<br />
            <span className="relative inline-block mt-2 mb-2">
                <span className="relative z-10 text-black px-4 bg-brand-gold font-black shadow-[0_0_30px_rgba(255,215,0,0.3)]">ERA MENTIRA...</span>
            </span>
            <br />
            <span className="text-white block mt-2">HOJE É A TUA REALIDADE.</span>
        </h1>

        {/* SUBTITLE */}
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            Estamos no final de 2025 e o cenário é exatamente o que Jonas Savimbi previu.<br/>
            A fome, o controle e o silêncio não são acidentes. <strong className="text-white">São um projeto bem executado.</strong>
            <br/>
            <span className="text-brand-gold font-bold text-sm uppercase tracking-widest mt-4 block">
                DESCUBRA O PLANO ORIGINAL ANTES QUE 2026 COMECE.
            </span>
        </p>

        {/* PRO BOOK COVER ART - LEATHER TEXTURE STYLE */}
        <div className="w-full max-w-[300px] md:max-w-[340px] h-[450px] md:h-[500px] perspective-1000 relative mb-12 group cursor-pointer" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
            
            {/* The 3D Container */}
            <div className="book w-full h-full absolute transform-style-3d transition-transform duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                
                {/* FRONT COVER - LEATHER TEXTURE */}
                <div className="absolute inset-0 bg-[#062e06] rounded-r-lg flex flex-col overflow-hidden border-r-2 border-white/10"
                     style={{
                         backgroundImage: `
                            linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 10%, rgba(0,0,0,0) 90%, rgba(0,0,0,0.4) 100%),
                            url("https://www.transparenttextures.com/patterns/black-leather.png")
                         `
                     }}
                >
                    
                    {/* Golden Border Inset */}
                    <div className="absolute inset-4 border-2 border-brand-gold/30 rounded-sm pointer-events-none"></div>
                    <div className="absolute inset-5 border border-brand-gold/20 rounded-sm pointer-events-none"></div>

                    {/* Spine Groove (Left) */}
                    <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/60 to-transparent z-20"></div>

                    {/* CONTENT */}
                    <div className="flex-1 p-8 flex flex-col relative z-10 items-center text-center">
                        
                        {/* Top: Classification */}
                        <div className="w-full border-b border-brand-gold/20 pb-4 mb-8 flex justify-center">
                            <span className="text-[10px] font-mono text-brand-gold/70 tracking-[0.3em] uppercase border border-brand-gold/30 px-2 py-1 rounded">
                                Arquivo Confidencial 1975-2026
                            </span>
                        </div>

                        {/* Title: Gold Foil Effect */}
                        <h2 className="text-5xl md:text-6xl font-serif font-black tracking-tighter mb-2"
                            style={{
                                background: 'linear-gradient(to bottom, #cfc09f 22%, #634f2c 24%, #cfc09f 26%, #cfc09f 27%, #ffecb3 40%, #3a2c0f 78%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                filter: 'drop-shadow(0px 2px 0px rgba(0,0,0,0.5))'
                            }}
                        >
                            SAVIMBI
                        </h2>
                        
                        <p className="text-white font-sans font-bold tracking-[0.2em] text-sm md:text-base mb-8 uppercase">
                            As 22 Profecias
                        </p>

                        {/* Center Emblem */}
                        <div className="w-32 h-32 rounded-full border-2 border-brand-gold/40 flex items-center justify-center relative mb-auto bg-black/20 backdrop-blur-sm">
                             <div className="absolute inset-1 border border-brand-gold/20 rounded-full"></div>
                             <Fingerprint size={64} className="text-brand-gold/80" />
                        </div>

                        {/* Bottom: Stamp */}
                        <div className="mt-8 transform -rotate-2 border-2 border-red-800/50 px-4 py-2 rounded opacity-80 mix-blend-overlay">
                            <p className="text-red-500 font-black text-xs uppercase tracking-widest flex items-center gap-2">
                                <ShieldAlert size={12} />
                                Cópia Autorizada
                            </p>
                        </div>
                    </div>
                </div>

                {/* SPINE */}
                <div className="book-spine" style={{ 
                    background: 'linear-gradient(to right, #031a03, #083808, #031a03)',
                    boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)'
                }}></div>
                
                {/* BACK COVER */}
                <div className="absolute inset-0 bg-[#062e06] transform translate-z-[-20px] rounded-l-lg" style={{
                     backgroundImage: `url("https://www.transparenttextures.com/patterns/black-leather.png")`
                }}></div>
                
                {/* PAGES EFFECT (Right side) */}
                <div className="absolute right-0 top-2 bottom-2 w-[18px] bg-[#e3e3e3] transform rotateY(90deg) translateZ(-10px) origin-right"
                     style={{
                         background: 'repeating-linear-gradient(to right, #e3e3e3 0px, #f0f0f0 1px, #e3e3e3 2px)',
                         boxShadow: 'inset 5px 0 10px rgba(0,0,0,0.2)'
                     }}
                ></div>
            </div>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center max-w-2xl">
            <Button 
                variant="pill" 
                className="w-full sm:w-auto shadow-[0_0_40px_rgba(0,100,0,0.3)] animate-pulse-slow"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
                QUERO LER A VERDADE
                <ChevronRight size={20} className="ml-2" />
            </Button>
            
            <Button 
                variant="outline" 
                className="w-full sm:w-auto h-[68px] text-base px-10 border-white/20 hover:bg-white/5 rounded-full uppercase tracking-widest font-bold"
                onClick={() => document.getElementById('legacy')?.scrollIntoView({ behavior: 'smooth' })}
            >
                VER AS EVIDÊNCIAS
            </Button>
        </div>

        <div className="mt-8 flex items-center gap-2 text-[10px] text-brand-gold uppercase tracking-widest font-bold">
            <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></div>
            Disponível para Download Imediato
        </div>

      </div>
    </section>
  );
};