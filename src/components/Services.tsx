import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data';
import { Service } from '../types';
import * as LucideIcons from 'lucide-react';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<'todos' | 'climatizacao' | 'eletrica'>('todos');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  // Helper to render Lucide Icons dynamically from their string names
  const renderIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="text-brand-cyan" size={24} />;
    }
    return <LucideIcons.Settings className="text-brand-cyan" size={24} />;
  };

  const filteredServices = SERVICES.filter(
    (service) => activeCategory === 'todos' || service.category === activeCategory
  );

  const toggleExpand = (id: string) => {
    if (expandedService === id) {
      setExpandedService(null);
    } else {
      setExpandedService(id);
    }
  };

  return (
    <section id="servicos" className="relative py-24 bg-brand-blue-dark border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-cyan/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold text-brand-cyan tracking-widest uppercase block mb-3">
            O Que Fazemos de Melhor
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-4">
            Soluções completas com rigor técnico e engenharia
          </h2>
          <p className="font-sans text-gray-400 text-base sm:text-lg">
            Da venda e instalação à higienização de ar-condicionado e projetos elétricos, garantimos o mais alto nível de execução e conformidade técnica.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex justify-center mb-16 px-2">
          <div className="bg-brand-blue-deep/60 border border-white/10 p-1.5 rounded-3xl sm:rounded-full flex flex-col sm:flex-row gap-1 w-full max-w-md sm:max-w-max mx-auto">
            {[
              { id: 'todos', label: 'Todos os Serviços' },
              { id: 'climatizacao', label: 'Climatização & AC' },
              { id: 'eletrica', label: 'Infraestrutura Elétrica' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveCategory(tab.id as any);
                  setExpandedService(null); // Reset expanded states on tab change
                }}
                className={`font-sans font-semibold text-xs sm:text-sm px-3 sm:px-6 py-2 sm:py-2.5 rounded-2xl sm:rounded-full transition-all duration-300 ${
                  activeCategory === tab.id
                    ? 'bg-brand-cyan text-brand-blue-deep shadow-neon font-bold'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, i) => {
              const isExpanded = expandedService === service.id;
              return (
                <motion.div
                  layout
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="bg-brand-blue-deep/50 border border-white/5 hover:border-brand-cyan/20 rounded-2xl p-6 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-neon h-full relative overflow-hidden group"
                >
                  {/* Card category indicator */}
                  <span className="absolute top-4 right-4 font-mono text-[9px] tracking-widest uppercase text-gray-500 group-hover:text-brand-cyan/70 transition-colors">
                    {service.category === 'climatizacao' ? 'Climatização' : 'Elétrica'}
                  </span>

                  <div>
                    {/* Icon container */}
                    <div className="bg-brand-cyan/10 p-3 rounded-xl w-fit mb-6 transition-all duration-300 group-hover:bg-brand-cyan/20">
                      {renderIcon(service.icon)}
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-brand-cyan transition-colors">
                      {service.title}
                    </h3>

                    {/* Short Description */}
                    <p className="font-sans text-gray-300 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Expandable Technical Specification list */}
                  <div className="mt-auto pt-4 border-t border-white/5">
                    <button
                      onClick={() => toggleExpand(service.id)}
                      className="flex items-center justify-between w-full text-left group/btn"
                    >
                      <span className="font-mono text-[10px] tracking-wider uppercase text-brand-cyan group-hover/btn:text-white transition-colors font-semibold">
                        {isExpanded ? 'Ocultar Especificações' : 'Especificações Técnicas'}
                      </span>
                      <LucideIcons.ChevronDown
                        className={`text-brand-cyan transition-transform duration-300 ${
                          isExpanded ? 'rotate-180 text-white' : ''
                        }`}
                        size={16}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-4 space-y-2 text-xs font-sans text-gray-400">
                            {service.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <LucideIcons.Check className="text-brand-cyan flex-shrink-0 mt-0.5" size={12} />
                                <span className="leading-relaxed">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
