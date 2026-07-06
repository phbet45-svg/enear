import { motion } from 'motion/react';
import { BENEFITS } from '../data';
import * as LucideIcons from 'lucide-react';

export default function WhyChooseUs() {
  const renderIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="text-brand-cyan" size={28} />;
    }
    return <LucideIcons.CheckCircle className="text-brand-cyan" size={28} />;
  };

  return (
    <section id="diferenciais" className="relative py-24 bg-brand-blue-deep border-t border-white/5 overflow-hidden">
      {/* Background neon dots */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left column: High-end title and bullet highlight */}
          <div className="lg:col-span-5">
            <span className="font-mono text-xs font-semibold text-brand-cyan tracking-widest uppercase block mb-3">
              Nossos Valores
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-6">
              Por que a ENEAR Soluções é a escolha certa?
            </h2>
            <p className="font-sans text-gray-300 text-base sm:text-lg mb-8 leading-relaxed">
              Não fazemos apenas conexões de tubulações ou instalações elétricas; projetamos conforto térmico e segurança elétrica definitiva para o seu espaço.
            </p>
            
            {/* Value card list */}
            <div className="space-y-4">
              {[
                'Compromisso com prazos rigorosos',
                'Ferramentas de vácuo digitais calibradas',
                'Isolamento emborrachado blindado contra umidade',
                'Acabamento premium de alto padrão estético'
              ].map((value) => (
                <div key={value} className="flex items-center gap-3">
                  <div className="bg-brand-cyan/10 p-1.5 rounded-full">
                    <LucideIcons.Check className="text-brand-cyan" size={14} />
                  </div>
                  <span className="font-sans font-medium text-sm text-gray-200">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: 4-card grid mapping benefits data */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {BENEFITS.map((benefit, i) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-brand-blue-dark/50 border border-white/5 hover:border-brand-cyan/25 p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:shadow-neon group h-full"
              >
                <div>
                  <div className="bg-brand-cyan/10 p-4 rounded-xl w-fit mb-6 transition-all duration-300 group-hover:bg-brand-cyan/20">
                    {renderIcon(benefit.icon)}
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-3 group-hover:text-brand-cyan transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="font-sans text-gray-400 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
