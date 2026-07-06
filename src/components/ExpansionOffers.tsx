import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sun, 
  Cpu, 
  Smartphone, 
  Lightbulb, 
  Zap, 
  Snowflake, 
  Flame, 
  Sparkles, 
  MessageSquare, 
  ShoppingCart, 
  ArrowRight,
  TrendingDown,
  Percent,
  CheckCircle2,
  ShieldCheck,
  Award
} from 'lucide-react';

interface ACOffer {
  id: string;
  brand: string;
  title: string;
  btus: '09.000' | '12.000' | '18.000';
  type: 'Frio' | 'Quente e Frio';
  voltage: string;
  features: string[];
  pricePix: string;
  priceCard: string;
  priceInstallments: string;
}

const AC_OFFERS: ACOffer[] = [
  // 9.000 BTUs
  {
    id: 'ac-9-hisense',
    brand: 'Hisense',
    title: 'Split Hi Wall Inverter R-32 (Sem Wi-Fi)',
    btus: '09.000',
    type: 'Frio',
    voltage: '220V Monofásico',
    features: ['Gás Ecológico R-32', 'Super Silencioso', 'Inverter Econômico'],
    pricePix: '1.459,17',
    priceCard: '1.569,00',
    priceInstallments: '10x de R$ 156,90'
  },
  {
    id: 'ac-9-elgin',
    brand: 'Elgin',
    title: 'Split Hi Wall Inverter R-32 - Eco III',
    btus: '09.000',
    type: 'Frio',
    voltage: '220V Monofásico - WiFi Incluso',
    features: ['Controle por Smartphone', 'Classificação A Procel', 'Filtro Ionizador'],
    pricePix: '1.589,37',
    priceCard: '1.709,00',
    priceInstallments: '10x de R$ 170,90'
  },
  {
    id: 'ac-9-agratto',
    brand: 'Agratto',
    title: 'Split Hi Wall Inverter R-32 - Zen',
    btus: '09.000',
    type: 'Quente e Frio',
    voltage: '220V Monofásico',
    features: ['Ciclo Reverso (Quente/Frio)', 'Painel Backlight Invisível', 'Serpentina de Cobre'],
    pricePix: '1.793,97',
    priceCard: '1.929,00',
    priceInstallments: '10x de R$ 192,90'
  },
  {
    id: 'ac-9-gree',
    brand: 'Gree',
    title: 'Split Hi Wall Inverter R-32 - G-classic',
    btus: '09.000',
    type: 'Quente e Frio',
    voltage: '220V Monofásico',
    features: ['Tecnologia de Proteção Gree', 'Ciclo Reverso', 'Auto-Limpeza Integrada'],
    pricePix: '1.877,67',
    priceCard: '2.019,00',
    priceInstallments: '10x de R$ 201,90'
  },
  // 12.000 BTUs
  {
    id: 'ac-12-hisense',
    brand: 'Hisense',
    title: 'Split Hi Wall Inverter R-32 (Sem Wi-Fi)',
    btus: '12.000',
    type: 'Frio',
    voltage: '220V Monofásico',
    features: ['Gás Ecológico R-32', 'Resfriamento Turbo Rápido', 'Aletas Blue Fin anticorrosão'],
    pricePix: '1.710,27',
    priceCard: '1.839,00',
    priceInstallments: '10x de R$ 183,90'
  },
  {
    id: 'ac-12-agratto-frio',
    brand: 'Agratto',
    title: 'Split Hi Wall Inverter R-32 - Zen',
    btus: '12.000',
    type: 'Frio',
    voltage: '220V Monofásico',
    features: ['Econômico e Silencioso', 'Serpentina em Cobre Rígido', 'Design Clean minimalista'],
    pricePix: '1.803,97',
    priceCard: '1.939,00',
    priceInstallments: '10x de R$ 193,90'
  },
  {
    id: 'ac-12-agratto-qf',
    brand: 'Agratto',
    title: 'Split Hi Wall Inverter R-32 - Zen',
    btus: '12.000',
    type: 'Quente e Frio',
    voltage: '220V Monofásico',
    features: ['Ciclo Reverso completo', 'Duplo direcionamento de ar', 'Baixo consumo energético'],
    pricePix: '1.942,77',
    priceCard: '2.089,00',
    priceInstallments: '10x de R$ 208,90'
  },
  {
    id: 'ac-12-tcl',
    brand: 'TCL',
    title: 'Split Hi Wall Inverter R-32 - Breezin 2',
    btus: '12.000',
    type: 'Quente e Frio',
    voltage: '220V Monofásico',
    features: ['Tecnologia Sem Vento Direto', 'Ciclo Quente e Frio', 'Filtro de Íons de Prata'],
    pricePix: '2.045,07',
    priceCard: '2.199,00',
    priceInstallments: '10x de R$ 219,90'
  },
  // 18.000 BTUs
  {
    id: 'ac-18-lg',
    brand: 'LG',
    title: 'Split Hi Wall Dual Inverter R-32 - Compact + IA',
    btus: '18.000',
    type: 'Frio',
    voltage: '220V Monofásico',
    features: ['Compressor Dual Inverter (Até 70% economia)', 'Inteligência Artificial de Clima', 'Super Durabilidade GoldFin'],
    pricePix: '2.789,07',
    priceCard: '2.999,00',
    priceInstallments: '10x de R$ 299,90'
  },
  {
    id: 'ac-18-tcl',
    brand: 'TCL',
    title: 'Split Hi Wall Inverter R-32 - T Pro 2.0',
    btus: '18.000',
    type: 'Frio',
    voltage: '220V Monofásico',
    features: ['Resfriamento Ultra-Rápido', 'Modo Eco Avançado', 'Filtros Triplos de Saúde'],
    pricePix: '2.854,17',
    priceCard: '3.069,00',
    priceInstallments: '10x de R$ 306,90'
  },
  {
    id: 'ac-18-hisense',
    brand: 'Hisense',
    title: 'Split Hi Wall Inverter R-32',
    btus: '18.000',
    type: 'Quente e Frio',
    voltage: '220V Monofásico',
    features: ['Ciclo Quente e Frio potente', 'Vazão de ar otimizada para grandes salas', 'Modo Sleep Inteligente'],
    pricePix: '2.993,67',
    priceCard: '3.219,00',
    priceInstallments: '10x de R$ 321,90'
  },
  {
    id: 'ac-18-electrolux',
    brand: 'Electrolux',
    title: 'Split Hi Wall Inverter R-32 - Color Adapt Wi-Fi',
    btus: '18.000',
    type: 'Quente e Frio',
    voltage: '220V Monofásico - WiFi',
    features: ['Frente personalizável Color Adapt', 'Ciclo Reverso (Quente/Frio)', 'Filtro de tripla filtragem ultra'],
    pricePix: '3.095,97',
    priceCard: '3.329,00',
    priceInstallments: '10x de R$ 332,90'
  }
];

export default function ExpansionOffers() {
  const [selectedBTUs, setSelectedBTUs] = useState<'09.000' | '12.000' | '18.000'>('09.000');
  const [selectedType, setSelectedType] = useState<'Tudo' | 'Frio' | 'Quente e Frio'>('Tudo');

  const filteredOffers = AC_OFFERS.filter(offer => {
    const matchBTU = offer.btus === selectedBTUs;
    const matchType = selectedType === 'Tudo' || offer.type === selectedType;
    return matchBTU && matchType;
  });

  const handleBuy = (offer: ACOffer) => {
    const text = `Olá Enear! Vi no site o catálogo de aparelhos e gostaria de solicitar um orçamento de instalação para o modelo:\n\n*${offer.brand} - ${offer.title} (${offer.btus} BTUs - ${offer.type})*\nValor à vista no PIX: R$ ${offer.pricePix}\n\nPor favor, gostaria de agendar uma vistoria ou fechar o pedido.`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/5521998970642?text=${encodedText}`, '_blank');
  };

  return (
    <section id="expansao" className="relative py-24 bg-[#0A1428] overflow-hidden">
      {/* Background glow effects matching Sleek Interface theme */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#00E5C0]/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* BIG ANNOUNCEMENT BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-[#0D2040] to-[#070F1E] border border-white/10 rounded-3xl p-8 md:p-12 mb-20 shadow-2xl overflow-hidden"
        >
          {/* Subtle geometric line patterns */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,229,192,0.1),transparent_50%)]" />
          <div className="absolute -top-10 -right-10 w-40 h-40 border border-white/5 rounded-full" />
          <div className="absolute -top-20 -right-20 w-60 h-60 border border-white/5 rounded-full" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#00E5C0]/10 text-[#00E5C0] border border-[#00E5C0]/20 mb-6">
                <Sparkles size={12} className="animate-pulse" /> A ESPERA ACABOU!
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl leading-tight text-white mb-6 uppercase tracking-tight">
                Anunciamos a <span className="text-[#00E5C0] italic">Expansão de Serviços</span> da Enear Soluções
              </h2>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-3xl">
                É com muito prazer que anunciamos a expansão da nossa carteira de serviços oferecidos! Tudo isso é para melhor atender a você, proporcionando que sua fonte de conforto e eficiência seja cada vez mais <strong className="text-white">sustentável</strong>, <strong className="text-white">tecnológica</strong> e, principalmente, <strong className="text-[#00E5C0]">ECONÔMICA</strong>.
              </p>
            </div>
            
            <div className="w-full lg:w-auto flex-shrink-0 grid grid-cols-2 lg:flex lg:flex-col gap-4">
              <div className="bg-[#122A42]/80 border border-white/5 px-6 py-5 rounded-2xl flex flex-col items-center justify-center text-center backdrop-blur-md">
                <span className="text-3xl font-extrabold text-[#00E5C0] block">+Verde</span>
                <span className="text-xs text-white/50 uppercase tracking-widest mt-1">Sustentabilidade</span>
              </div>
              <div className="bg-[#122A42]/80 border border-white/5 px-6 py-5 rounded-2xl flex flex-col items-center justify-center text-center backdrop-blur-md">
                <span className="text-3xl font-extrabold text-[#00E5C0] block">-Contas</span>
                <span className="text-xs text-white/50 uppercase tracking-widest mt-1">Super Economia</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* NEW SERVICES SPOTLIGHT (TWO CARDS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* PLACAS SOLARES */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="group relative bg-[#070F1E] border border-white/10 rounded-3xl p-8 hover:border-[#00E5C0]/40 transition-all duration-500 shadow-xl overflow-hidden flex flex-col justify-between"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-[#00E5C0] transform origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-500" />
            
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-[#00E5C0]/10 border border-[#00E5C0]/30 flex items-center justify-center text-[#00E5C0] mb-8 group-hover:scale-110 transition-transform duration-300">
                <Sun size={28} className="animate-spin-slow" />
              </div>
              <h3 className="font-display font-extrabold text-2xl text-white mb-4 uppercase tracking-tight">
                Placas Solares <span className="text-emerald-400 block text-sm font-medium tracking-wide normal-case mt-1">Transformando a Luz do Sol em Economia 🌱</span>
              </h3>
              <p className="text-white/70 leading-relaxed text-sm mb-6">
                Nossas placas solares não apenas reduzem drasticamente suas contas de luz, mas também ajudam a criar um mundo mais verde e sustentável. Oferecemos planejamento, engenharia elétrica qualificada e instalação profissional para sua residência ou empresa.
              </p>
              <ul className="space-y-3 mb-8">
                {['Redução de até 95% na conta de luz', 'Engenharia e homologação completa na concessionária', 'Valorização imediata do seu imóvel', 'Equipamentos de altíssima eficiência e durabilidade'].map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs text-white/80">
                    <CheckCircle2 size={14} className="text-[#00E5C0] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={() => {
                const text = "Olá Enear! Gostaria de mais informações sobre o serviço de Placas Solares para economizar na minha conta de luz.";
                window.open(`https://wa.me/5521998970642?text=${encodeURIComponent(text)}`, '_blank');
              }}
              className="w-full py-3 rounded-xl border border-white/10 text-white font-bold text-xs uppercase tracking-widest bg-white/5 hover:bg-[#00E5C0] hover:text-[#0A1428] hover:border-transparent transition-all duration-300 flex items-center justify-center gap-2"
            >
              Fazer Orçamento de Energia Solar <ArrowRight size={14} />
            </button>
          </motion.div>

          {/* AUTOMACAO RESIDENCIAL */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="group relative bg-[#070F1E] border border-white/10 rounded-3xl p-8 hover:border-[#00E5C0]/40 transition-all duration-500 shadow-xl overflow-hidden flex flex-col justify-between"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-[#00E5C0] transform origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-500" />
            
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/10 to-[#00E5C0]/10 border border-[#00E5C0]/30 flex items-center justify-center text-[#00E5C0] mb-8 group-hover:scale-110 transition-transform duration-300">
                <Cpu size={28} />
              </div>
              <h3 className="font-display font-extrabold text-2xl text-white mb-4 uppercase tracking-tight">
                Automação Residencial <span className="text-blue-400 block text-sm font-medium tracking-wide normal-case mt-1">A Magia da Casa Inteligente 💡</span>
              </h3>
              <p className="text-white/70 leading-relaxed text-sm mb-6">
                Imagine controlar luzes, temperatura do ar-condicionado, eletrodomésticos e segurança com um simples toque no seu smartphone ou por comando de voz com Alexa e Google Assistente. O futuro da sua casa começa agora com nossos projetos de automação!
              </p>
              <ul className="space-y-3 mb-8">
                {['Controle inteligente de iluminação e cenários', 'Integração de ar-condicionado com controle de temperatura', 'Fechaduras biométricas e segurança residencial inteligente', 'Comando de voz e automação personalizada pelo celular'].map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs text-white/80">
                    <CheckCircle2 size={14} className="text-[#00E5C0] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={() => {
                const text = "Olá Enear! Estou interessado no serviço de Automação Residencial / Casa Inteligente. Como posso começar?";
                window.open(`https://wa.me/5521998970642?text=${encodeURIComponent(text)}`, '_blank');
              }}
              className="w-full py-3 rounded-xl border border-white/10 text-white font-bold text-xs uppercase tracking-widest bg-white/5 hover:bg-[#00E5C0] hover:text-[#0A1428] hover:border-transparent transition-all duration-300 flex items-center justify-center gap-2"
            >
              Fazer Orçamento de Casa Inteligente <ArrowRight size={14} />
            </button>
          </motion.div>
        </div>

        {/* HIGH-FIDELITY AIR CONDITIONER OFFERS SECTION */}
        <div className="relative mt-24 border-t border-white/10 pt-20">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#00E5C0]/10 text-[#00E5C0] border border-[#00E5C0]/20 mb-4">
              <Percent size={10} /> OFERTAS DE EQUIPAMENTOS
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
              Catálogo de <span className="text-[#00E5C0] italic">Ar-Condicionado</span>
            </h2>
            <p className="text-white/60 text-sm sm:text-base mt-2 max-w-xl mx-auto">
              Os melhores aparelhos inverter do mercado com preços incríveis de fornecedor e garantia exclusiva da Enear Soluções.
            </p>
          </div>

          {/* TAB SYSTEM FOR BTUS */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
            {/* BTU Selector */}
            <div className="bg-[#070F1E] border border-white/10 p-1.5 rounded-full flex gap-1">
              {(['09.000', '12.000', '18.000'] as const).map((btu) => (
                <button
                  key={btu}
                  onClick={() => setSelectedBTUs(btu)}
                  className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    selectedBTUs === btu 
                      ? 'bg-[#00E5C0] text-[#0A1428]' 
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {btu} BTUs
                </button>
              ))}
            </div>

            {/* Type Filter */}
            <div className="bg-[#070F1E]/60 border border-white/5 p-1 rounded-full flex gap-1">
              {(['Tudo', 'Frio', 'Quente e Frio'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                    selectedType === type 
                      ? 'bg-white/15 text-white' 
                      : 'text-white/40 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* GRID OF DEALS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredOffers.map((offer, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  key={offer.id}
                  className="bg-[#070F1E] border border-white/10 rounded-2xl p-5 hover:border-[#00E5C0]/30 hover:shadow-[0_0_20px_rgba(0,229,192,0.1)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Badge Capacity + Cycle */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-[#122A42] border border-[#00E5C0]/20 text-[#00E5C0] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md flex items-center gap-1">
                      <Snowflake size={10} className="text-[#00E5C0]" /> {offer.btus} BTUs
                    </span>
                    <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md ${
                      offer.type === 'Quente e Frio' 
                        ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' 
                        : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                    } flex items-center gap-0.5`}>
                      {offer.type === 'Quente e Frio' ? <Flame size={8} /> : null} {offer.type}
                    </span>
                  </div>

                  <div>
                    {/* Brand Name */}
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Inverter</span>
                      <span className="font-display font-black text-lg text-[#00E5C0] uppercase tracking-tighter">{offer.brand}</span>
                    </div>

                    {/* Offer Title */}
                    <h4 className="font-sans font-semibold text-xs text-white/90 leading-normal min-h-[36px] mb-3 group-hover:text-[#00E5C0] transition-colors">
                      {offer.title}
                    </h4>

                    {/* Features checklist */}
                    <div className="space-y-1.5 border-t border-white/5 pt-3 mb-4 select-none">
                      {offer.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-[10px] text-white/60">
                          <CheckCircle2 size={10} className="text-emerald-400 flex-shrink-0" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing block stylized perfectly to match flyer */}
                  <div className="bg-[#122A42]/50 border border-white/5 p-3.5 rounded-xl mb-4 text-center">
                    <span className="text-[9px] text-white/50 block uppercase tracking-widest mb-1 font-mono">À Vista no Pix</span>
                    <div className="flex items-baseline justify-center gap-1 mb-1">
                      <span className="text-xs text-[#00E5C0] font-bold">R$</span>
                      <span className="text-2xl font-display font-black text-[#00E5C0] tracking-tight leading-none">{offer.pricePix}</span>
                    </div>
                    <div className="border-t border-white/5 pt-1.5 mt-1.5 text-[10px] text-white/50">
                      ou <span className="text-white font-medium">R$ {offer.priceCard}</span>
                      <span className="block text-[8px] text-white/40 uppercase tracking-widest mt-0.5">em até {offer.priceInstallments}</span>
                    </div>
                  </div>

                  {/* Buy/Quote Action Button */}
                  <button
                    onClick={() => handleBuy(offer)}
                    className="w-full py-2.5 rounded-xl bg-[#00E5C0]/10 border border-[#00E5C0]/30 hover:bg-[#00E5C0] hover:text-[#0A1428] hover:border-transparent text-white font-bold text-[10px] uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-1.5"
                  >
                    <ShoppingCart size={11} /> Comprar + Instalar
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Note & Warranties */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 bg-[#070F1E]/50 border border-white/5 p-6 rounded-2xl text-center md:text-left select-none">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#00E5C0]/15 flex items-center justify-center text-[#00E5C0] flex-shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Instalação Oficial com Garantia Preservada</p>
                <p className="text-[10px] text-white/50">Fazendo a compra e instalação com a Enear, você mantém a garantia de fábrica do aparelho.</p>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1.5 bg-[#122A42] text-[9px] font-bold uppercase tracking-widest text-white/80 rounded-md border border-white/5 flex items-center gap-1">
                <Award size={10} className="text-[#00E5C0]" /> Revendedor Autorizado
              </span>
              <span className="px-3 py-1.5 bg-[#122A42] text-[9px] font-bold uppercase tracking-widest text-white/80 rounded-md border border-white/5 flex items-center gap-1">
                <Zap size={10} className="text-[#00E5C0]" /> Tecnologia Inverter
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
