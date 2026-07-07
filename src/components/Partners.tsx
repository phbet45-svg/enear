import { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Building2, Activity, Coffee, Landmark, GraduationCap } from 'lucide-react';

interface Partner {
  id: string;
  name: string;
  type: string;
  logoUrl: string;
  serviceProvided: string;
  icon: any;
  color: string;
}

export default function Partners() {
  const partners: Partner[] = [
    {
      id: 'vo-alzira',
      name: 'Fábrica de Bolos Vó Alzira',
      type: 'Indústria & Alimentação',
      logoUrl: 'https://voalzirabrasilia.com.br/wp-content/uploads/2025/06/Logo-FBVA.png',
      serviceProvided: 'Climatização comercial de alta potência, exaustão técnica e manutenção corretiva periódica.',
      icon: Coffee,
      color: 'from-amber-500/10 to-orange-500/10'
    },
    {
      id: 'estetic-doctor',
      name: 'Estetic Doctor',
      type: 'Clínica de Estética & Médica',
      logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUw0Ac6UbATNvMgS0CbmKCv2zwmGfdNC22vlQf7gEArPPkNY2dupLwwsc&s=10',
      serviceProvided: 'Instalação de Splits Inverter de alta eficiência e elaboração de contrato PMOC para a Vigilância Sanitária.',
      icon: Activity,
      color: 'from-emerald-500/10 to-teal-500/10'
    },
    {
      id: 'loterias-caixa',
      name: 'Loterias Caixa',
      type: 'Serviços Financeiros & Varejo',
      logoUrl: 'https://images.seeklogo.com/logo-png/8/2/loterias-da-caixa-logo-png_seeklogo-85707.png',
      serviceProvided: 'Reforma de infraestrutura elétrica dedicada, instalação de circuitos e higienização profunda bactericida.',
      icon: Landmark,
      color: 'from-blue-500/10 to-indigo-500/10'
    },
    {
      id: 'sonnemann',
      name: 'Centro Educacional Sonnemann',
      type: 'Instituição de Ensino',
      logoUrl: 'https://sonnemanncentroeducacional.com/wp-content/uploads/2024/08/dsYadAfdZxfzaAsset-2-1024x297.png',
      serviceProvided: 'Climatização completa de salas de aula e auditorias, projeto de renovação de ar e laudos de engenharia.',
      icon: GraduationCap,
      color: 'from-red-500/10 to-rose-500/10'
    },
    {
      id: 'zee-dog',
      name: 'Zee.Dog',
      type: 'Pet Care & Logística',
      logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfAn7Qd38nXS4fgGyIAa-5CmSzSbo2e05u1zU9YuYwng&s=10',
      serviceProvided: 'Instalação de condensadoras em varandas técnicas, manutenção preventiva e infraestrutura frigorígena robusta.',
      icon: Building2,
      color: 'from-gray-500/10 to-slate-500/10'
    },
    {
      id: 'laboratorio-bittar',
      name: 'Laboratório Bittar',
      type: 'Medicina Diagnóstica',
      logoUrl: 'https://www.labittar.com.br/wp-content/uploads/2025/11/Laboratorio-Bittar.png',
      serviceProvided: 'Projetos especiais de climatização para salas de exames e conservadores de vacina, garantindo controle térmico rígido.',
      icon: ShieldCheck,
      color: 'from-cyan-500/10 to-sky-500/10'
    }
  ];

  return (
    <section id="parceiros" className="relative py-24 bg-brand-blue-dark border-t border-white/5 overflow-hidden">
      {/* Background ambient glow effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold text-brand-cyan tracking-widest uppercase block mb-3">
            Grandes Marcas
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-4">
            Clientes e Parceiros de Confiança
          </h2>
          <p className="font-sans text-gray-400 text-base sm:text-lg">
            Atendemos grandes marcas, comércios, clínicas e escolas na região de Niterói, garantindo excelência técnica e conformidade legal em cada projeto.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {partners.map((partner, i) => {
            const Icon = partner.icon;
            return (
              <PartnerCard key={partner.id} partner={partner} index={i} icon={Icon} />
            );
          })}
        </div>

      </div>
    </section>
  );
}

// Separate component for each partner card to handle state modularly and performantly
function PartnerCard({ partner, index, icon: Icon }: { partner: Partner; index: number; icon: any; key?: string }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`bg-brand-blue-deep/40 border border-white/5 hover:border-brand-cyan/20 rounded-3xl p-6 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-neon h-full relative overflow-hidden group`}
    >
      {/* Dynamic colorful subtle gradient on card corner */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${partner.color} opacity-20 filter blur-xl pointer-events-none group-hover:opacity-40 transition-opacity duration-500`} />

      <div>
        {/* Logo display area - perfectly sized and aligned with solid white background for maximum contrast */}
        <div className="bg-white border border-white/10 rounded-2xl p-4 w-full h-24 flex items-center justify-center mb-6 overflow-hidden relative group-hover:border-brand-cyan/20 transition-all duration-300">
          {!imgError ? (
            <img
              src={partner.logoUrl}
              alt={partner.name}
              referrerPolicy="no-referrer"
              className="max-h-full max-w-[85%] object-contain filter brightness-100 group-hover:scale-105 transition-transform duration-300"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex items-center gap-3 text-white font-display font-bold text-center text-sm px-2">
              <Icon className="text-brand-cyan flex-shrink-0" size={20} />
              <span>{partner.name}</span>
            </div>
          )}
        </div>

        {/* Client Classification Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-[9px] tracking-widest uppercase bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/15 px-2.5 py-1 rounded-md">
            {partner.type}
          </span>
        </div>

        {/* Partner Name */}
        <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-brand-cyan transition-colors">
          {partner.name}
        </h3>

        {/* Technical Description of Work Performed */}
        <p className="font-sans text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
          {partner.serviceProvided}
        </p>
      </div>

      {/* Trust validation indicator at the bottom */}
      <div className="mt-auto pt-4 border-t border-white/5 flex items-center gap-2 text-brand-cyan/80">
        <ShieldCheck size={14} className="text-brand-cyan" />
        <span className="font-mono text-[9px] tracking-wider uppercase font-semibold">
          Parceria e Conformidade ENEAR
        </span>
      </div>
    </motion.div>
  );
}
