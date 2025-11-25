import React from 'react';
import { MapPin, TrendingDown, Eye, Lock, FileWarning } from 'lucide-react';

export const Legacy: React.FC = () => {
  return (
    <section id="legacy" className="py-32 bg-[#050505] relative border-t border-white/5 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green opacity-[0.03] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
       
        {/* Section Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-block mb-4">
               <span className="text-brand-green font-bold text-sm tracking-[0.2em] uppercase">Evidência Histórica</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            Por que somos ricos,<br/> 
            mas vivemos <span className="text-gray-500 italic">assim</span>?
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            A pobreza de Angola não é falta de recursos. É um projeto de manutenção de poder.
            Savimbi deixou o mapa desse projeto. 
          </p>
        </div>

        {/* SECRET DOCUMENT BLOCK - PERSUASION */}
        <div className="max-w-4xl mx-auto mb-16 bg-[#0F0F0F] border-l-4 border-brand-gold p-6 md:p-8 rounded-r-sm shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <FileWarning size={100} className="text-brand-gold"/>
            </div>
            <h3 className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4">O Segredo Revelado</h3>
            <p className="text-white font-serif text-xl md:text-2xl italic mb-4 relative z-10">
                "Eles dão festas para você esquecer a fome. Eles criam novelas para você não olhar para a política. A distração é a arma mais barata do regime."
            </p>
            <p className="text-gray-400 text-sm">
                Enquanto você se distrai, eles vendem o futuro dos seus filhos. Este dossiê é a única coisa que eles não querem que você leia em 2026.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         
          {/* Card 1: The Trap of Centralization */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-sm border border-white/10 bg-[#0a0a0a] p-8 min-h-[400px] flex flex-col justify-between hover:border-white/20 transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green opacity-10 blur-3xl rounded-full"></div>
            
            <div className="w-14 h-14 border border-white/10 bg-white/5 flex items-center justify-center rounded-sm mb-6">
              <MapPin className="text-white" size={24} />
            </div>

            <div className="relative z-10 max-w-lg">
              <h3 className="text-2xl font-bold text-white mb-4">A Ilusão de Luanda</h3>
              <p className="text-gray-400 text-base leading-relaxed mb-8 border-l border-brand-green pl-4">
                "Enquanto Luanda brilha com luz artificial, as províncias dormem no escuro. 
                Eles criaram um país onde só existe uma cidade, para que seja mais fácil controlar quem come e quem passa fome."
              </p>
              
              <div className="bg-white/5 p-4 rounded-sm border border-white/5">
                 <p className="text-xs text-brand-gold uppercase tracking-wider font-bold mb-1">Profecia Confirmada em 2025</p>
                 <p className="text-sm text-gray-300">O êxodo rural e o colapso da infraestrutura provincial.</p>
              </div>
            </div>
          </div>

          {/* Card 2: The Engineered Economy */}
          <div className="md:col-span-1 relative overflow-hidden rounded-sm border border-white/10 bg-[#0a0a0a] p-8 flex flex-col min-h-[400px] hover:border-white/20 transition-all duration-500">
            <div className="w-14 h-14 border border-brand-gold/30 bg-brand-gold/10 flex items-center justify-center rounded-sm mb-auto">
              <TrendingDown className="text-brand-gold" size={24} />
            </div>
           
            <div className="mt-8">
              <h3 className="text-xl font-bold text-white mb-3">O Ciclo da Dependência</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Eles não querem que você seja independente. A agricultura foi destruída para que você dependa da importação controlada por "eles".
              </p>
              
              <div className="w-full bg-black border border-white/10 p-4 rounded-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-brand-gold/5 animate-pulse"></div>
                  <div className="flex justify-between items-center mb-2">
                       <span className="text-xs text-gray-500 uppercase">Autonomia</span>
                       <Lock size={12} className="text-brand-gold" />
                  </div>
                  <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-gold w-[15%]"></div>
                  </div>
                  <p className="text-[10px] text-brand-gold mt-2 text-right">Acesso Bloqueado</p>
              </div>
            </div>
          </div>

          {/* Card 3: The Revelation */}
          <div className="md:col-span-3 relative overflow-hidden rounded-sm border border-brand-green/30 bg-[#080808] p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_0_30px_rgba(0,100,0,0.1)] group">
             {/* Gradient Overlay */}
             <div className="absolute inset-0 bg-gradient-to-r from-brand-green/5 to-transparent opacity-50"></div>
             
             <div className="flex-1 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                    <Eye className="text-brand-green" size={20} />
                    <span className="text-brand-green text-xs font-bold uppercase tracking-widest">A Chave da Compreensão</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">
                    Há coisas que só fazem sentido quando se lê o plano original.
                </h3>
                <p className="text-gray-400 max-w-2xl">
                    Este eBook não é sobre política partidária. É sobre entender as regras do jogo que estão a ser usadas contra si.
                    <span className="text-white block mt-2 font-medium">Você está pronto para ver o que está por trás da cortina?</span>
                </p>
             </div>
             
             <div className="relative">
                <div className="absolute inset-0 bg-brand-green blur-2xl opacity-20"></div>
                <button 
                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                    className="relative bg-white text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors"
                >
                    Revelar o Dossiê
                </button>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};