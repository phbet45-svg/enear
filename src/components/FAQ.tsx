import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data';
import { ChevronDown, HelpCircle, ArrowUpRight } from 'lucide-react';

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    if (openFAQ === id) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(id);
    }
  };

  return (
    <section id="faq" className="relative py-24 bg-brand-blue-dark border-t border-white/5 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-cyan/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs font-semibold text-brand-cyan tracking-widest uppercase block mb-3">
            Tire Suas Dúvidas
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-white mb-4">
            Perguntas Frequentes
          </h2>
          <p className="font-sans text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Esclarecemos as principais dúvidas técnicas de síndicos, comércios e residências sobre climatização e elétrica.
          </p>
        </div>

        {/* Accordion FAQ Grid */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openFAQ === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-brand-blue-deep/40 border border-white/5 hover:border-brand-cyan/25 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="flex items-center justify-between w-full p-6 text-left transition-colors cursor-pointer group"
                >
                  <div className="flex items-start gap-3.5 pr-4">
                    <HelpCircle className="text-brand-cyan/60 group-hover:text-brand-cyan flex-shrink-0 mt-0.5 transition-colors" size={20} />
                    <span className="font-sans font-bold text-sm sm:text-base text-gray-200 group-hover:text-white transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`text-brand-cyan flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-white' : ''
                    }`}
                    size={18}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-white/[0.03] text-gray-400 text-xs sm:text-sm leading-relaxed font-sans font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="font-sans text-xs text-gray-500">
            Ainda tem alguma dúvida técnica ou quer falar de um projeto maior?{' '}
            <a href="#contato" className="text-brand-cyan hover:underline inline-flex items-center gap-0.5 font-semibold">
              <span>Fale Conosco</span>
              <ArrowUpRight size={12} />
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
