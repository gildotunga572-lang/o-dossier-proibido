import React, { useState, useEffect } from 'react';
import { Check, Download, Shield, Zap, Headphones, BadgeCheck, Users, Clock, AlertTriangle } from 'lucide-react';
import { Button } from './Button';

export const Pricing: React.FC = () => {
  // Timer Logic: 15 minutes (900 seconds)
  const [timeLeft, setTimeLeft] = useState(900);
  const [price, setPrice] = useState('2.000');
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    // Check local storage to persist timer if user refreshes (optional optimization)
    // For now, simple session timer for immediate impact
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsExpired(true);
          setPrice('3.500'); // PRICE INCREASES
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section id="pricing" className="py-24 bg-brand-surface border-t border-white/5 relative">
      <div className="container mx-auto px-4 text-center">
        
        <div className="mb-12">
            <span className="text-brand-gold font-bold text-xs uppercase tracking-widest mb-2 block">Acesso Restrito 2026</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tight">O Dossiê Completo</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Prepare-se para o que vem aí. Este não é apenas um livro, é o seu escudo intelectual contra a manipulação.</p>
        </div>

        <div className="max-w-lg mx-auto bg-brand-dark border border-brand-green/30 rounded-sm p-8 relative overflow-visible group hover:border-brand-green transition-all duration-500 shadow-2xl mb-16 mt-8">
            
            {/* SOCIAL PROOF BADGE (FLOATING) */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-gold text-black font-black px-6 py-2 rounded-full text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(255,215,0,0.4)] flex items-center gap-2 whitespace-nowrap z-20 animate-pulse-slow">
                <Users size={14} /> + de 147 Pessoas já compraram
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-brand-green opacity-5 group-hover:opacity-10 transition-opacity rounded-sm"></div>
            
            <div className="absolute top-0 right-0 bg-brand-green text-white text-[10px] font-bold px-4 py-2 uppercase tracking-widest flex items-center gap-1 rounded-bl-sm">
                <Shield size={10} /> Verificado
            </div>
            
            {/* TIMER & PRICE */}
            <div className="mt-8 mb-2">
                {!isExpired ? (
                    <div className="flex items-center justify-center gap-2 text-red-500 font-mono font-bold text-sm mb-2 animate-pulse">
                        <Clock size={14} />
                        <span>OFERTA EXPIRA EM: {formatTime(timeLeft)}</span>
                    </div>
                ) : (
                    <div className="flex items-center justify-center gap-2 text-gray-500 font-mono font-bold text-sm mb-2">
                        <AlertTriangle size={14} />
                        <span>PROMOÇÃO ENCERRADA</span>
                    </div>
                )}
                
                <div className="flex items-baseline justify-center gap-2">
                    <span className="text-gray-600 line-through text-lg font-mono">5.000</span>
                    <span className={`text-6xl font-black tracking-tighter transition-colors duration-300 ${isExpired ? 'text-red-500' : 'text-white'}`}>
                        {price}
                    </span>
                    <span className="text-xl text-brand-gold font-bold">Kz</span>
                </div>
                {isExpired && <p className="text-red-500 text-xs font-bold mt-1">O preço subiu.</p>}
            </div>
            
            <p className="text-gray-500 text-xs mb-8">Preço único. Acesso vitalício.</p>

            <div className="bg-white/5 rounded-sm p-6 text-left mb-8 border border-white/5">
                <p className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-white/10 pb-2">O Que Você Recebe:</p>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3">
                        <div className="bg-brand-green/20 p-1 rounded-full mt-0.5"><Check className="text-brand-green" size={12} /></div>
                        <div>
                            <span className="font-bold text-white">Ebook "As 22 Profecias" (PDF)</span>
                            <p className="text-xs text-gray-500 mt-1">Análise detalhada e histórica.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="bg-brand-green/20 p-1 rounded-full mt-0.5"><Check className="text-brand-green" size={12} /></div>
                        <div>
                            <span className="font-bold text-white">BÓNUS: Áudio-Livro Narrado</span>
                            <p className="text-xs text-gray-500 mt-1">Para ouvir no trânsito ou no trabalho <Headphones size={10} className="inline ml-1 text-brand-gold"/>.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="bg-brand-green/20 p-1 rounded-full mt-0.5"><Check className="text-brand-green" size={12} /></div>
                        <div>
                            <span className="font-bold text-white">BÓNUS: O Guia "Sobreviver a 2026"</span>
                            <p className="text-xs text-gray-500 mt-1">Dicas práticas de proteção mental e econômica.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="bg-brand-green/20 p-1 rounded-full mt-0.5"><Check className="text-brand-green" size={12} /></div>
                        <div>
                            <span className="font-bold text-white">Grupo Exclusivo (WhatsApp)</span>
                            <p className="text-xs text-gray-500 mt-1">Networking com mentes despertas.</p>
                        </div>
                    </li>
                </ul>
            </div>

            <Button 
                variant="green" 
                fullWidth 
                className="h-16 text-lg shadow-xl shadow-brand-green/10 mb-4 btn-shine"
                onClick={() => document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <Download size={20} className="mr-2" />
                BAIXAR PACOTE COMPLETO
            </Button>
            
            <div className="flex items-center justify-center gap-2 text-[10px] text-gray-600 uppercase tracking-widest">
                <Zap size={12} className="text-brand-gold"/> Entrega Automática Imediata
            </div>
        </div>

        {/* GUARANTEE SECTION */}
        <div className="max-w-3xl mx-auto bg-brand-dark/50 border border-brand-gold/30 p-8 rounded-sm relative">
             <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                 <div className="shrink-0">
                     <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center border border-brand-gold/50">
                         <BadgeCheck size={40} className="text-brand-gold" />
                     </div>
                 </div>
                 <div>
                     <h3 className="text-white font-serif text-2xl mb-2">Garantia Incondicional de 7 Dias</h3>
                     <p className="text-gray-400 text-sm leading-relaxed">
                         Se você comprar o livro digital e não gostar por qualquer motivo, basta clicar no link seguro de garantia que será enviado <strong>NO SEU GMAIL</strong> após você fazer o pagamento e pedir o seu dinheiro de volta em até 7 dias.
                     </p>
                 </div>
             </div>
        </div>

      </div>
    </section>
  );
};