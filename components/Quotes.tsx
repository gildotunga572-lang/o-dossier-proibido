import React from 'react';

export const Quotes: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-wine opacity-5"></div>
      
      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        <div className="mb-12">
            <span className="text-6xl text-brand-gold font-serif opacity-30">"</span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight mb-8">
          Quem esquece o passado,<br/>
          está condenado a repeti-lo.
        </h2>
        
        <p className="text-lg text-gray-400 font-light italic">
          — Jonas M. Savimbi
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/5 pt-12">
            <div>
                <p className="text-brand-gold font-bold text-3xl mb-2">1975</p>
                <p className="text-gray-500 text-xs uppercase tracking-widest">O Início do Erro</p>
            </div>
            <div>
                <p className="text-brand-gold font-bold text-3xl mb-2">1992</p>
                <p className="text-gray-500 text-xs uppercase tracking-widest">A Traição Eleitoral</p>
            </div>
            <div>
                <p className="text-brand-gold font-bold text-3xl mb-2">2002</p>
                <p className="text-gray-500 text-xs uppercase tracking-widest">O Silêncio Forçado</p>
            </div>
        </div>
      </div>
    </section>
  );
};