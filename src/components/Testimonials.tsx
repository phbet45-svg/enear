import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { MessageSquare, Star, CheckCheck, Phone, Video, MoreVertical, ShieldCheck } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-24 bg-brand-blue-deep border-t border-white/5 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-emerald-500/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-brand-cyan/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold text-emerald-400 tracking-widest uppercase block mb-3">
            O que dizem de nós
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-4">
            Clientes Satisfeitos via WhatsApp
          </h2>
          <p className="font-sans text-gray-400 text-base sm:text-lg">
            Veja conversas reais com nossos clientes residenciais, síndicos e comércios de Niterói e região após a conclusão de nossos serviços.
          </p>
        </div>

        {/* WhatsApp Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`bg-[#0b141a] border border-[#202c33] rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ${
                i % 2 === 0 ? '-rotate-1 hover:rotate-0' : 'rotate-1 hover:rotate-0'
              }`}
            >
              {/* WhatsApp Contact Header (Simulating Chat Header) */}
              <div className="bg-[#1f2c34] px-5 py-4 flex items-center justify-between border-b border-[#111b21] select-none">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-10 h-10 bg-brand-cyan/20 border border-brand-cyan/30 text-brand-cyan rounded-full flex items-center justify-center font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-sans font-bold text-sm text-[#e9edef] leading-tight">
                        {t.name}
                      </h4>
                      <ShieldCheck className="text-[#00E5C0]" size={14} />
                    </div>
                    <span className="font-sans text-[11px] text-[#8696a0] block leading-none mt-0.5">
                      {t.role}
                    </span>
                  </div>
                </div>

                {/* Simulated Icons */}
                <div className="flex items-center gap-4 text-[#aebac1]">
                  <Phone size={16} className="cursor-pointer hover:text-white transition-colors" />
                  <Video size={18} className="cursor-pointer hover:text-white transition-colors" />
                  <MoreVertical size={16} className="cursor-pointer hover:text-white transition-colors" />
                </div>
              </div>

              {/* Chat Bubble Area with WhatsApp Wallpaper pattern */}
              <div
                className="px-6 py-6 flex-grow flex flex-col justify-end relative min-h-[180px]"
                style={{
                  backgroundImage: `radial-gradient(#202c33 1px, transparent 1px)`,
                  backgroundSize: '20px 20px',
                  backgroundColor: '#0b141a'
                }}
              >
                {/* Simulated service description badge */}
                <div className="self-center bg-[#182229] border border-[#222e35] text-[#8696a0] font-mono text-[9px] tracking-wider uppercase px-2.5 py-1 rounded-md mb-6 shadow-sm">
                  Serviço prestado: {t.serviceType}
                </div>

                {/* Speech Bubble */}
                <div className="self-start bg-[#122A42] border border-white/5 text-[#e9edef] rounded-tr-xl rounded-br-xl rounded-bl-xl p-4 max-w-[90%] shadow-md relative group">
                  {/* Speech bubble arrow decoration */}
                  <div className="absolute top-0 left-[-8px] w-0 h-0 border-t-[8px] border-t-[#122A42] border-l-[8px] border-l-transparent" />

                  {/* Rating Stars inside message */}
                  <div className="flex items-center gap-0.5 mb-2.5">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} className="fill-amber-400 text-amber-400" size={12} />
                    ))}
                  </div>

                  {/* Message body */}
                  <p className="font-sans text-sm leading-relaxed whitespace-pre-wrap pr-1">
                    {t.message}
                  </p>

                  {/* Time and Blue double checkmarks */}
                  <div className="flex items-center justify-end gap-1.5 mt-2 text-[10px] text-[#8696a0]/80 font-mono text-right">
                    <span>{t.time}</span>
                    <CheckCheck className="text-[#00E5C0] flex-shrink-0" size={14} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* WhatsApp prompt bottom banner */}
        <div className="mt-16 text-center max-w-lg mx-auto">
          <p className="font-sans text-sm text-gray-400 mb-4">
            Quer ver mais depoimentos ou tirar suas dúvidas diretamente conosco?
          </p>
          <a
            href="https://wa.me/5521998970642?text=Ol%C3%A1%21+Gostaria+de+solicitar+um+or%C3%A7amento+com+a+Enear+Solu%C3%A7%C3%B5es."
            target="_blank"
            rel="noreferrer"
            referrerPolicy="no-referrer"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-sans font-bold text-sm tracking-wide transition-colors"
          >
            <MessageSquare size={16} />
            <span>Chame no WhatsApp Oficial da Enear</span>
          </a>
        </div>

      </div>
    </section>
  );
}
