import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, CheckCircle, Send, X, ShieldAlert, Clock } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    cidade: 'Niterói',
    imovel: 'Residencial',
    servico: 'Instalação',
    mensagem: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.whatsapp) return;

    setIsSubmitting(true);

    // Simulate server response and validation delay
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
      setFormData({
        nome: '',
        whatsapp: '',
        cidade: 'Niterói',
        imovel: 'Residencial',
        servico: 'Instalação',
        mensagem: ''
      });
    }, 1200);
  };

  return (
    <section id="contato" className="relative py-24 bg-brand-blue-deep border-t border-white/5 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-cyan/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold text-brand-cyan tracking-widest uppercase block mb-3">
            Orçamento Imediato
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-4">
            Transforme seu ambiente hoje mesmo
          </h2>
          <p className="font-sans text-gray-400 text-base sm:text-lg">
            Preencha o formulário rápido abaixo para receber uma estimativa ou agendar a visita de um técnico qualificado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact info card */}
            <div className="bg-brand-blue-dark/50 border border-white/5 p-8 rounded-3xl">
              <h3 className="font-display font-bold text-xl text-white mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                
                {/* Phone/WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="bg-brand-cyan/10 p-3 rounded-xl text-brand-cyan flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div className="font-sans">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">WhatsApp & Telefone</h4>
                    <p className="text-sm font-semibold text-white mt-1">
                      <a href="https://wa.me/5521998970642" target="_blank" rel="noreferrer" className="hover:text-brand-cyan transition-colors">
                        (21) 99897-0642
                      </a>
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">Atendimento das 08h às 19h</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-brand-cyan/10 p-3 rounded-xl text-brand-cyan flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="font-sans">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">E-mail Corporativo</h4>
                    <p className="text-sm font-semibold text-white mt-1">
                      <a href="mailto:contato@enearsolucoes.com.br" className="hover:text-brand-cyan transition-colors">
                        contato@enearsolucoes.com.br
                      </a>
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">Retorno comercial em até 2 horas</p>
                  </div>
                </div>

                {/* Coverage Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-brand-cyan/10 p-3 rounded-xl text-brand-cyan flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div className="font-sans">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Área de Cobertura</h4>
                    <p className="text-sm font-semibold text-white mt-1">
                      Niterói, São Gonçalo e Maricá
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">Rio de Janeiro - RJ</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick response stats card */}
            <div className="bg-[#0b1c2b] border border-[#10334a]/40 p-6 rounded-2xl flex items-center gap-4 shadow-sm select-none">
              <div className="bg-brand-cyan/10 p-3 rounded-xl text-brand-cyan animate-pulse flex-shrink-0">
                <Clock size={20} />
              </div>
              <div className="font-sans">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Fast-Response Ativo</h4>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  Técnicos respondem as solicitações de orçamento via WhatsApp em menos de <strong className="text-brand-cyan">1 hora</strong> comercial.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Form */}
          <div className="lg:col-span-7 bg-brand-blue-dark/30 border border-white/5 p-6 sm:p-10 rounded-3xl hover:border-brand-cyan/10 transition-colors">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-6">
              Solicite seu orçamento grátis
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Nome */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="nome" className="font-mono text-[10px] uppercase text-gray-400 tracking-wider font-semibold">
                  Seu Nome Completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Ex: Carlos Eduardo de Oliveira"
                  className="bg-brand-blue-deep/60 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/40 focus:ring-1 focus:ring-brand-cyan/20 transition-all font-sans"
                />
              </div>

              {/* Grid 2-cols: WhatsApp & Cidade */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* WhatsApp */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="whatsapp" className="font-mono text-[10px] uppercase text-gray-400 tracking-wider font-semibold">
                    Seu WhatsApp / Telefone *
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="Ex: (21) 99897-0642"
                    className="bg-brand-blue-deep/60 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/40 focus:ring-1 focus:ring-brand-cyan/20 transition-all font-sans"
                  />
                </div>

                {/* Cidade */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cidade" className="font-mono text-[10px] uppercase text-gray-400 tracking-wider font-semibold">
                    Sua Cidade / Região
                  </label>
                  <select
                    id="cidade"
                    name="cidade"
                    value={formData.cidade}
                    onChange={handleChange}
                    className="bg-brand-blue-deep/60 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-brand-cyan/40 transition-all font-sans"
                  >
                    <option value="Niterói">Niterói (Icaraí, Região Oceânica, Centro...)</option>
                    <option value="São Gonçalo">São Gonçalo</option>
                    <option value="Maricá">Maricá</option>
                    <option value="Rio de Janeiro">Rio de Janeiro (Outras regiões)</option>
                  </select>
                </div>

              </div>

              {/* Grid 2-cols: Tipo Imovel & Serviço */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Tipo de Imóvel */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="imovel" className="font-mono text-[10px] uppercase text-gray-400 tracking-wider font-semibold">
                    Tipo de Imóvel
                  </label>
                  <select
                    id="imovel"
                    name="imovel"
                    value={formData.imovel}
                    onChange={handleChange}
                    className="bg-brand-blue-deep/60 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-brand-cyan/40 transition-all font-sans"
                  >
                    <option value="Residencial">Residencial (Apartamento / Casa)</option>
                    <option value="Comercial">Comercial (Escritório / Loja / Sala)</option>
                    <option value="Condomínio">Condomínio (Síndico / Áreas comuns)</option>
                    <option value="Industrial">Industrial / Corporativo Grande</option>
                  </select>
                </div>

                {/* Serviço Desejado */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="servico" className="font-mono text-[10px] uppercase text-gray-400 tracking-wider font-semibold">
                    Serviço Pretendido
                  </label>
                  <select
                    id="servico"
                    name="servico"
                    value={formData.servico}
                    onChange={handleChange}
                    className="bg-brand-blue-deep/60 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-brand-cyan/40 transition-all font-sans"
                  >
                    <option value="Instalação">Instalação de Ar-Condicionado</option>
                    <option value="Higienização">Higienização / Limpeza Técnica</option>
                    <option value="Manutenção">Manutenção Preventiva / Corretiva</option>
                    <option value="PMOC">Contrato PMOC Completo</option>
                    <option value="Elétrica">Infraestrutura Elétrica Dedicada</option>
                    <option value="Geral">Elétrica Geral Residencial/Comercial</option>
                  </select>
                </div>

              </div>

              {/* Mensagem */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="mensagem" className="font-mono text-[10px] uppercase text-gray-400 tracking-wider font-semibold">
                  Conte um pouco sobre o que precisa
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Ex: Preciso instalar um split inverter de 12.000 BTUs no meu quarto em Icaraí e puxar o disjuntor exclusivo."
                  className="bg-brand-blue-deep/60 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/40 focus:ring-1 focus:ring-brand-cyan/20 transition-all font-sans resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-cyan hover:bg-brand-cyan-light text-brand-blue-deep font-bold text-base py-4 rounded-xl shadow-neon hover:shadow-neon-strong transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-brand-blue-deep border-t-transparent rounded-full animate-spin" />
                    <span>Enviando dados técnicos...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Solicitar Orçamento Grátis</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>

      {/* Modern Neon Success Lightbox Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-brand-blue-deep/95 backdrop-blur-md"
              onClick={() => setShowSuccessModal(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative bg-brand-blue-dark border-2 border-brand-cyan/25 w-full max-w-md rounded-3xl p-8 shadow-neon-strong z-10 text-center flex flex-col items-center max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white p-1.5 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              {/* Pulsing neon check icon */}
              <div className="bg-brand-cyan/15 border border-brand-cyan/35 p-4 rounded-full text-brand-cyan mb-6 shadow-neon animate-bounce">
                <CheckCircle size={36} />
              </div>

              {/* Title */}
              <h3 className="font-display font-extrabold text-2xl text-white tracking-tight mb-2">
                Solicitação Recebida!
              </h3>

              {/* Subheading text */}
              <p className="font-sans text-gray-300 text-sm leading-relaxed mb-6">
                Muito obrigado! Nossos engenheiros e técnicos já receberam sua solicitação de climatização/elétrica.
              </p>

              {/* Info block */}
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 w-full text-left font-sans text-xs space-y-2 mb-6">
                <div className="flex items-center gap-2 text-brand-cyan">
                  <CheckCircle size={14} />
                  <span className="font-semibold">Fast-Response Canal WhatsApp Ativo</span>
                </div>
                <p className="text-gray-400">
                  Entraremos em contato no telefone fornecido em menos de <strong className="text-white">1 hora</strong> para detalhar o escopo técnico.
                </p>
              </div>

              {/* Close trigger button */}
              <button
                onClick={() => setShowSuccessModal(false)}
                className="bg-brand-cyan text-brand-blue-deep font-bold text-sm py-3 px-8 rounded-full shadow-neon w-full transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                Ok, entendi!
              </button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
