import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Terei suporte para tirar dúvidas?",
    answer: "Sim, absolutamente. Você terá acesso direto ao nosso suporte oficial via WhatsApp e E-mail para resolver qualquer questão sobre o download, o acesso ou o conteúdo."
  },
  {
    question: "Consigo acessar o conteúdo pelo celular?",
    answer: "Sim. O eBook e os bónus são formatos universais (PDF e MP3). Funcionam perfeitamente em qualquer telemóvel (Android ou iPhone), tablet ou computador."
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Aceitamos pagamentos via Multicaixa Express (para residentes em Angola) e Redtpay/Cartão/Criptomoedas (para residentes no exterior)."
  },
  {
    question: "É seguro comprar online neste site?",
    answer: "100% seguro. O site possui certificado SSL de segurança (o cadeado ao lado do endereço) e utilizamos gateways de pagamento oficiais e criptografados. Seus dados estão protegidos."
  },
  {
    question: "Como recebo o material?",
    answer: "O envio é imediato e automático. Após a confirmação do pagamento, você recebe o link de acesso no seu e-mail e WhatsApp cadastrado."
  },
  {
    question: "O eBook é contra o governo?",
    answer: "Este é um documento de análise histórica e profética baseada nas palavras do Dr. Savimbi. O foco é a educação, a verdade histórica e o despertar da consciência nacional."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-brand-dark border-t border-white/5">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="flex items-center justify-center gap-3 mb-12">
          <HelpCircle className="text-brand-green" size={24} />
          <h2 className="font-serif text-3xl text-white">Dúvidas Frequentes</h2>
        </div>

        <div className="space-y-3">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`border transition-all duration-300 rounded-sm overflow-hidden ${openIndex === index ? 'border-brand-gold/30 bg-white/5' : 'border-white/5 bg-transparent'}`}
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-medium text-sm md:text-base ${openIndex === index ? 'text-brand-gold' : 'text-gray-300'}`}>
                  {item.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp size={16} className="text-brand-gold" />
                ) : (
                  <ChevronDown size={16} className="text-gray-600" />
                )}
              </button>
             
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-5 pt-0 text-sm text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};