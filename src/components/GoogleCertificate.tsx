import { motion } from 'motion/react';
import { Award, ShieldCheck, CheckCircle2, ArrowUpRight, ExternalLink } from 'lucide-react';
import Logo from './Logo';

export default function GoogleCertificate() {
  const credentialUrl = 'https://share.google/VIio42Hz20nyY1j1Y';

  return (
    <section id="certificado" className="relative py-24 bg-brand-blue-dark border-t border-white/5 overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-cyan/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold text-brand-cyan tracking-widest uppercase block mb-3">
            Credencial de Confiança
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-4">
            Comprometimento e Excelência Comprovados
          </h2>
          <p className="font-sans text-gray-400 text-base sm:text-lg">
            A ENEAR Soluções orgulha-se de possuir a homologação e o selo oficial de qualidade recomendado, validado através do ecossistema Google.
          </p>
        </div>

        {/* Certificate Card Container */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative bg-gradient-to-b from-[#0e1e38] to-[#050f21] border-2 border-amber-500/30 rounded-3xl p-6 sm:p-12 shadow-[0_0_50px_rgba(245,158,11,0.07)] overflow-hidden"
          >
            {/* Elegant Background Guilloché Grid Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <svg width="100%" height="100%">
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Corner Decorative Borders */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-amber-500/40 pointer-events-none rounded-tl-xl" />
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-amber-500/40 pointer-events-none rounded-tr-xl" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-amber-500/40 pointer-events-none rounded-bl-xl" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-amber-500/40 pointer-events-none rounded-br-xl" />

            {/* Certificate Header */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-white/5 pb-8 mb-8 relative">
              {/* Google Brand Badge */}
              <div className="flex items-center gap-3">
                {/* Custom Google Styled Vector Logo */}
                <div className="flex items-center gap-1 font-display text-2xl font-bold bg-white/5 px-4 py-2 rounded-xl border border-white/10 select-none">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                  <span className="text-gray-400 font-sans text-xs uppercase tracking-wider font-semibold ml-2 border-l border-white/20 pl-2">
                    Verified
                  </span>
                </div>
              </div>

              {/* Security Credential Number */}
              <div className="text-center sm:text-right font-mono text-[10px] text-gray-500 tracking-wider">
                <span className="block uppercase">ID DA CREDENCIAL:</span>
                <span className="text-amber-500 font-semibold uppercase">ENEAR-GVERIFIED-2026</span>
              </div>
            </div>

            {/* Certificate Body */}
            <div className="text-center relative flex flex-col items-center">
              
              {/* Gold Award Badge */}
              <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-full w-fit mb-6 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
                <Award className="text-amber-500" size={48} />
              </div>

              {/* Subtitle statement */}
              <span className="font-mono text-[11px] font-semibold text-amber-500 uppercase tracking-[0.25em] mb-3">
                CERTIFICADO DE RECOMENDAÇÃO TÉCNICA
              </span>

              {/* Heading */}
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight mb-4 max-w-xl">
                Prestador Especialista Recomendado
              </h3>

              {/* Awarded to */}
              <p className="font-sans text-gray-400 text-sm max-w-2xl leading-relaxed mb-8">
                Este selo comprova que a empresa <strong className="text-white">ENEAR SOLUÇÕES</strong> foi certificada e atende aos mais rigorosos padrões de conformidade técnica, qualidade operacional e satisfação do cliente no segmento de instalação e higienização de sistemas de climatização.
              </p>

              {/* Visual Logo Centerpiece */}
              <div className="bg-brand-blue-deep border border-white/5 px-8 py-5 rounded-2xl mb-8 flex items-center justify-center shadow-lg">
                <Logo size="md" animated={false} />
              </div>

              {/* Trust badges footer */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full border-t border-white/5 pt-8 mb-8 text-left">
                <div className="flex items-center gap-3 bg-white/[0.02] p-4 rounded-xl border border-white/5">
                  <ShieldCheck className="text-amber-500 flex-shrink-0" size={20} />
                  <div className="font-sans">
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Segurança</h4>
                    <p className="text-[11px] text-gray-400 mt-0.5">Empresa homologada</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/[0.02] p-4 rounded-xl border border-white/5">
                  <CheckCircle2 className="text-amber-500 flex-shrink-0" size={20} />
                  <div className="font-sans">
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Qualidade</h4>
                    <p className="text-[11px] text-gray-400 mt-0.5">Avaliação máxima de clientes</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/[0.02] p-4 rounded-xl border border-white/5">
                  <Award className="text-amber-500 flex-shrink-0" size={20} />
                  <div className="font-sans">
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Garantia</h4>
                    <p className="text-[11px] text-gray-400 mt-0.5">Serviço garantido</p>
                  </div>
                </div>
              </div>

              {/* Clickable Verification Link Button */}
              <div className="w-full">
                <a
                  href={credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  referrerPolicy="no-referrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-brand-blue-deep font-bold text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.35)] w-full sm:w-auto text-center justify-center"
                >
                  <ExternalLink size={18} />
                  <span>Verificar Credencial Oficial Google</span>
                  <ArrowUpRight size={16} />
                </a>
                <span className="block text-[10px] font-mono text-gray-500 tracking-wider mt-3">
                  A validação digital garante a autenticidade e conformidade regulamentar desta credencial.
                </span>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
