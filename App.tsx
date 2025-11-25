import React from 'react';
import { Hero } from './components/Hero';
import { Legacy } from './components/Legacy';
import { Quotes } from './components/Quotes';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { BookOpen, Video, Mail, ShieldCheck, Lock, ThumbsUp, Shield } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-gray-100 font-sans">
     
      {/* Header Glass */}
      <header className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-green flex items-center justify-center rounded-sm shadow-[0_0_15px_rgba(0,100,0,0.5)]">
                 <BookOpen size={16} className="text-white" />
            </div>
            <div className="text-white font-bold text-lg tracking-tight">
              SAVIMBI<span className="text-brand-gold">.2026</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-1 text-[10px] text-gray-500 uppercase tracking-widest">
                <ShieldCheck size={12} className="text-brand-green" />
                <span>Site Seguro</span>
            </div>
            <button
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="hidden md:block text-xs font-bold text-black bg-brand-gold px-5 py-2 rounded-sm hover:bg-yellow-400 transition-colors uppercase tracking-wider"
            >
                Liberar Acesso
            </button>
          </div>
        </div>
      </header>
     
      <main>
        <Hero />
        <Legacy />
        <Quotes />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>

      <footer className="py-12 border-t border-white/5 bg-[#020202] text-center">
        <div className="container mx-auto px-4">
            
            {/* TRUST BADGES */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12 opacity-70">
                <div className="flex flex-col items-center gap-2">
                    <Lock size={24} className="text-brand-green" />
                    <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Compra Segura</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <ThumbsUp size={24} className="text-brand-gold" />
                    <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Satisfação Garantida</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Shield size={24} className="text-white" />
                    <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Privacidade Protegida</span>
                </div>
            </div>

            <div className="flex justify-center gap-6 mb-8">
                <a href="https://www.tiktok.com/@corteessencial2" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors flex items-center gap-2">
                    <Video size={20} />
                    <span className="text-xs">TikTok Oficial</span>
                </a>
                <a href="mailto:suportecorteessencial@gmail.com?subject=Suporte%20Savimbi%20Ebook" className="text-gray-500 hover:text-white transition-colors flex items-center gap-2">
                    <Mail size={20} />
                    <span className="text-xs">suportecorteessencial@gmail.com</span>
                </a>
            </div>
            <p className="text-gray-600 text-sm">
              &copy; 2026 Savimbi - A Profecia.<br/>
              <span className="text-xs text-gray-700 mt-2 block">Site Protegido com Criptografia SSL.</span>
            </p>
        </div>
      </footer>
    </div>
  );
}