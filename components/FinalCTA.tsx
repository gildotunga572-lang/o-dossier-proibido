import React, { useState } from 'react';
import { Button } from './Button';
import { Copy, Check, Lock, Smartphone, Globe, ShieldCheck, Mail, HelpCircle, Clock } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<'ao' | 'int'>('ao');
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  // LINKS OFICIAIS ATUALIZADOS
  const REDTPAY_LINK = "https://url.hk/i/pt/xdy3k";
  const SUPPORT_LINK = "https://wa.me/244951279380?text=Ol%C3%A1%2C%20estou%20com%20dificuldade%20no%20pagamento%20Redtpay.";

  return (
    <section id="final-cta" className="py-24 bg-[#050505] border-t border-white/5 relative overflow-hidden">
        
        {/* Background Grid Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
            
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-green/30 bg-brand-green/10 mb-6">
                    <ShieldCheck size={14} className="text-brand-green" />
                    <span className="text-xs font-bold text-brand-green uppercase tracking-wider">Checkout Seguro SSL 256-bit</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Acesso Imediato</h2>
                <p className="text-gray-400">Escolha o seu método preferido. Sem taxas ocultas.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* LEFT COLUMN: METHOD SELECTION */}
                <div className="lg:col-span-4 space-y-4">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-2">1. Selecione a Região</p>
                    
                    <button 
                        onClick={() => setSelectedMethod('ao')}
                        className={`w-full p-5 text-left border rounded-sm transition-all duration-300 relative overflow-hidden group ${selectedMethod === 'ao' ? 'bg-[#111] border-brand-green shadow-[0_0_20px_rgba(0,100,0,0.1)]' : 'bg-[#0a0a0a] border-white/10 hover:border-white/30'}`}
                    >
                        <div className="flex items-center justify-between mb-2">
                             <div className="bg-black/50 p-2 rounded-sm"><Smartphone size={20} className={selectedMethod === 'ao' ? 'text-brand-green' : 'text-gray-600'} /></div>
                             {selectedMethod === 'ao' && <div className="w-2 h-2 rounded-full bg-brand-green shadow-[0_0_10px_rgba(0,128,0,0.8)]"></div>}
                        </div>
                        <h3 className={`font-bold text-lg ${selectedMethod === 'ao' ? 'text-white' : 'text-gray-400'}`}>Angola</h3>
                        <p className="text-xs text-gray-500">Multicaixa / Express</p>
                    </button>

                    <button 
                        onClick={() => setSelectedMethod('int')}
                        className={`w-full p-5 text-left border rounded-sm transition-all duration-300 relative overflow-hidden group ${selectedMethod === 'int' ? 'bg-[#111] border-brand-gold shadow-[0_0_20px_rgba(255,215,0,0.1)]' : 'bg-[#0a0a0a] border-white/10 hover:border-white/30'}`}
                    >
                         <div className="flex items-center justify-between mb-2">
                             <div className="bg-black/50 p-2 rounded-sm"><Globe size={20} className={selectedMethod === 'int' ? 'text-brand-gold' : 'text-gray-600'} /></div>
                             {selectedMethod === 'int' && <div className="w-2 h-2 rounded-full bg-brand-gold shadow-[0_0_10px_rgba(255,215,0,0.5)]"></div>}
                        </div>
                        <h3 className={`font-bold text-lg ${selectedMethod === 'int' ? 'text-white' : 'text-gray-400'}`}>Internacional</h3>
                        <p className="text-xs text-gray-500">Redtpay (Visa/Mastercard/Cripto)</p>
                    </button>

                    <div className="mt-8 pt-8 border-t border-white/5">
                        <h4 className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-4">Dúvidas no Pagamento?</h4>
                        <a href={SUPPORT_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-[#0a0a0a] border border-white/5 hover:border-white/20 rounded-sm transition-colors group">
                            <Mail size={18} className="text-gray-500 group-hover:text-white" />
                            <div>
                                <p className="text-xs text-gray-500">Suporte WhatsApp</p>
                                <p className="text-xs text-white font-mono mt-1">Clique para falar</p>
                            </div>
                        </a>
                    </div>
                </div>

                {/* RIGHT COLUMN: PAYMENT TERMINAL */}
                <div className="lg:col-span-8">
                    <div className="bg-[#080808] border border-white/10 rounded-sm p-8 md:p-10 h-full flex flex-col relative shadow-2xl">
                        
                        {/* Terminal Header */}
                        <div className="flex justify-between items-start border-b border-white/5 pb-6 mb-8">
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">2. Dados da Transação</p>
                                <h3 className="text-xl text-white font-serif italic">
                                    {selectedMethod === 'ao' ? 'Pagamento por Referência' : 'Transferência Redtpay'}
                                </h3>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1 flex items-center justify-end gap-1">
                                    <Clock size={10} className="text-red-500 animate-pulse"/> Preço Congelado
                                </p>
                                <p className={`text-2xl font-mono font-bold ${selectedMethod === 'ao' ? 'text-brand-green' : 'text-brand-gold'}`}>
                                    {selectedMethod === 'ao' ? '2.000 Kz' : '3.00 USD'}
                                </p>
                            </div>
                        </div>

                        {/* ANGOLA DETAILS (MCX) */}
                        {selectedMethod === 'ao' && (
                            <div className="flex-1 animate-fade-in flex flex-col">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    <div className="group">
                                        <label className="text-[10px] text-gray-500 uppercase tracking-wider mb-3 block font-bold flex items-center gap-2">
                                            Entidade <Lock size={10} className="text-brand-green"/>
                                        </label>
                                        <div className="flex items-center justify-between bg-black border border-white/10 rounded-sm h-16 px-5 group-hover:border-brand-green/50 transition-colors">
                                            <span className="text-white font-mono text-xl md:text-2xl tracking-widest">10116</span>
                                            <button onClick={() => copyToClipboard('10116', 'ent')} className="text-gray-500 hover:text-white p-2 hover:bg-white/5 rounded">
                                                {copied === 'ent' ? <Check size={20} className="text-brand-green"/> : <Copy size={20} />}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="group">
                                        <label className="text-[10px] text-gray-500 uppercase tracking-wider mb-3 block font-bold flex items-center gap-2">
                                            Referência <Lock size={10} className="text-brand-green"/>
                                        </label>
                                        <div className="flex items-center justify-between bg-black border border-white/10 rounded-sm h-16 px-5 group-hover:border-brand-green/50 transition-colors">
                                            <span className="text-white font-mono text-xl md:text-2xl tracking-widest">951 279 380</span>
                                            <button onClick={() => copyToClipboard('951279380', 'ref')} className="text-gray-500 hover:text-white p-2 hover:bg-white/5 rounded">
                                                {copied === 'ref' ? <Check size={20} className="text-brand-green"/> : <Copy size={20} />}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* MULTICAIXA INSTRUCTIONS */}
                                <div className="bg-white/5 border border-white/10 p-5 rounded-sm mb-8">
                                    <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <Smartphone size={14} className="text-brand-green" />
                                        Instruções Multicaixa Express
                                    </h4>
                                    <ol className="text-sm text-gray-400 space-y-2 list-decimal pl-4">
                                        <li>Abra o App <strong>Multicaixa Express</strong>.</li>
                                        <li>Selecione <strong>Pagamentos</strong> e depois <strong>Pagamentos por Referência</strong>.</li>
                                        <li>Insira a Entidade: <strong>10116</strong>.</li>
                                        <li>Insira a Referência: <strong>951 279 380</strong>.</li>
                                        <li>Confirme o valor (2.000 Kz) e finalize.</li>
                                    </ol>
                                </div>

                                <div className="mt-auto">
                                    <Button
                                        fullWidth
                                        className="h-16 bg-[#25D366] hover:bg-[#1ebc57] text-black font-bold border-none text-base uppercase tracking-wider shadow-[0_5px_20px_rgba(37,211,102,0.2)]"
                                        onClick={() => window.open('https://wa.me/244951279380?text=Ol%C3%A1%2C%20j%C3%A1%20fiz%20o%20pagamento%20do%20eBook%20Savimbi.', '_blank')}
                                    >
                                        Enviar Comprovativo (WhatsApp)
                                    </Button>
                                    <p className="text-center text-[10px] text-gray-600 mt-3">Envio automático após confirmação.</p>
                                </div>
                            </div>
                        )}

                        {/* INTERNATIONAL DETAILS (REDTPAY) */}
                        {selectedMethod === 'int' && (
                            <div className="flex-1 animate-fade-in flex flex-col">
                                <div className="bg-black border border-brand-gold/20 rounded-sm p-6 mb-6 text-center relative overflow-hidden group">
                                     <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold"></div>
                                     <label className="text-[10px] text-gray-500 uppercase tracking-widest mb-4 block font-bold">Redtpay ID (Para Transferência)</label>
                                     <div className="flex items-center justify-center gap-4">
                                        <span className="text-3xl md:text-4xl font-mono text-white tracking-widest font-bold group-hover:text-brand-gold transition-colors">1805261294</span>
                                        <button onClick={() => copyToClipboard('1805261294', 'redt')} className="bg-white/5 hover:bg-white/10 p-3 rounded-full text-white transition-colors border border-white/5">
                                            {copied === 'redt' ? <Check size={20} className="text-brand-gold"/> : <Copy size={20} />}
                                        </button>
                                     </div>
                                </div>

                                {/* REDTPAY INSTRUCTIONS */}
                                <div className="bg-white/5 border border-white/10 p-5 rounded-sm mb-8">
                                    <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <Globe size={14} className="text-brand-gold" />
                                        Como Pagar via Redtpay
                                    </h4>
                                    <ol className="text-sm text-gray-400 space-y-2 list-decimal pl-4">
                                        <li>
                                            <a href={REDTPAY_LINK} target="_blank" rel="noopener noreferrer" className="text-brand-gold underline hover:text-white font-bold">Clique aqui para criar sua conta Redtpay</a> (Link Seguro).
                                        </li>
                                        <li>Vá na opção <strong>"Transfer" (Pagar via ID)</strong>.</li>
                                        <li>Insira o ID: <strong>1805261294</strong>.</li>
                                        <li>Valor: <strong>3.00 USD</strong>.</li>
                                        <li>Confirme e tire um print do sucesso.</li>
                                    </ol>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-auto">
                                    <Button
                                        variant="outline"
                                        fullWidth
                                        onClick={() => window.open(REDTPAY_LINK, '_blank')}
                                        className="h-14 border-white/10 text-brand-gold hover:bg-white/5 hover:text-white uppercase text-xs"
                                    >
                                        Criar Conta / Acessar
                                    </Button>
                                    
                                    <Button
                                        fullWidth
                                        className="h-14 bg-brand-gold hover:bg-yellow-500 text-black font-bold border-none uppercase text-xs shadow-[0_5px_20px_rgba(255,215,0,0.2)]"
                                        onClick={() => window.open('https://wa.me/244951279380?text=Ol%C3%A1%2C%20fiz%20o%20pagamento%20via%20Redtpay%20(ID%201805261294).', '_blank')}
                                    >
                                        Enviar Comprovativo
                                    </Button>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>

        </div>
    </section>
  );
};