import React from 'react';
import { Button } from './Button';
import { Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#050505] pt-28 pb-12">
     
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        
        {/* TOP BADGE */}
        <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 border border-brand-green/30 rounded-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></div>
                <span className="text-[10px] font-bold text-brand-green tracking-[0.2em] uppercase">
                    O Documento Que Tentaram Apagar
                </span>
            </div>
        </div>

        {/* HEADLINE */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight max-w-5xl mx-auto">
            ELES DISSERAM QUE<br />
            <span className="bg-brand-gold text-black px-4 inline-block transform -skew-x-6">ERA MENTIRA...</span><br/>
            <span className="text-white block mt-2">HOJE É A TUA REALIDADE.</span>
        </h1>

        {/* SUBTITLE */}
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Estamos no final de 2025 e o cenário é exatamente o que Jonas Savimbi previu.<br/>
            <span className="text-white font-bold block mt-2">
                A fome, o controle e o silêncio não são acidentes. <span className="text-brand-gold">São um projeto bem executado.</span>
            </span>
        </p>
        
        <p className="text-brand-gold font-bold text-xs uppercase tracking-widest mb-8 animate-pulse">
            DESCUBRA O PLANO ORIGINAL ANTES QUE 2026 COMECE.
        </p>

        {/* CENTERED BOOK COVER */}
        <div className="flex justify-center perspective-1000 mb-12">
            <div className="book-3d relative w-[300px] h-[460px] md:w-[340px] md:h-[500px] bg-[#006400] rounded-r-md cursor-pointer group shadow-2xl" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                
                {/* Spine */}
                <div className="absolute top-0 left-0 w-[20px] h-full bg-[#003300] rounded-l-sm shadow-inner z-20 border-r border-white/10"></div>
                
                {/* Cover Face */}
                <div className="absolute inset-0 ml-[20px] bg-[#006400] border-t-2 border-b-2 border-r-2 border-[#004d00] rounded-r-md flex flex-col items-center justify-between p-8 overflow-hidden shadow-inner">
                    
                    {/* Texture Overlay */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/leather.png')] opacity-30 mix-blend-overlay pointer-events-none"></div>

                    {/* Top */}
                    <div className="w-full text-center border-b border-brand-gold/30 pb-4 relative z-10">
                        <p className="text-[10px] text-brand-gold uppercase tracking-[0.3em] drop-shadow-md">Arquivo Confidencial</p>
                        <div className="flex justify-center gap-1 mt-2">
                            <Star size={10} className="text-brand-gold fill-brand-gold" />
                            <Star size={10} className="text-brand-gold fill-brand-gold" />
                            <Star size={10} className="text-brand-gold fill-brand-gold" />
                        </div>
                    </div>

                    {/* Title */}
                    <div className="text-center relative z-10">
                        <h2 className="text-6xl font-black text-white tracking-tighter mb-0 drop-shadow-xl" style={{ textShadow: '3px 3px 0px #000' }}>SAVIMBI</h2>
                        <div className="w-full h-1 bg-brand-gold my-3 shadow-[0_0_10px_rgba(255,215,0,0.5)]"></div>
                        <h3 className="text-2xl font-bold text-brand-gold uppercase tracking-widest drop-shadow-md">As 22<br/>Profecias</h3>
                    </div>

                    {/* Center Art */}
                    <div className="relative w-28 h-28 border-2 border-brand-gold/50 rounded-full flex items-center justify-center p-2 z-10">
                            <div className="w-full h-full bg-brand-gold/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-brand-gold/20">
                                <Star size={48} className="text-brand-gold fill-brand-gold animate-pulse-slow drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]" />
                            </div>
                    </div>

                    {/* Bottom */}
                    <div className="w-full text-center border-t border-brand-gold/30 pt-4 relative z-10">
                            <p className="text-white font-bold text-xs uppercase tracking-widest mb-1">A Agenda 2026</p>
                            <div className="inline-block px-3 py-1 bg-red-900 rounded text-[9px] text-white font-bold uppercase shadow-lg border border-red-700">
                                Censurado pelo Regime
                            </div>
                    </div>

                    {/* Gloss Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none z-20"></div>
                </div>
            </div>
        </div>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                <Button 
                variant="green" 
                className="h-16 px-10 text-lg shadow-[0_0_30px_rgba(0,100,0,0.4)] hover:scale-105 transform transition-transform"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
                QUERO LER A VERDADE
            </Button>
            <Button 
                variant="outline" 
                className="h-16 px-10 text-base border-white/20 hover:border-white"
                onClick={() => document.getElementById('legacy')?.scrollIntoView({ behavior: 'smooth' })}
            >
                VER AS EVIDÊNCIAS
            </Button>
        </div>
        
        <p className="text-[10px] text-brand-gold mt-6 uppercase tracking-widest flex items-center justify-center gap-2 animate-pulse">
            <span className="w-2 h-2 bg-brand-gold rounded-full"></span> Disponível para Download Imediato
        </p>

      </div>
    </section>
  );
};