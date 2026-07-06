import { motion } from 'motion/react';
import { Award, Shield, CheckCircle, Users } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '+1.500', label: 'Aparelhos Instalados', icon: CheckCircle },
    { value: '100%', label: 'Garantia e Segurança', icon: Shield },
    { value: '+800', label: 'Clientes Atendidos', icon: Users },
    { value: 'CFT/CREA', label: 'Técnicos Registrados', icon: Award }
  ];

  return (
    <section id="sobre" className="relative py-24 bg-brand-blue-deep overflow-hidden">
      {/* Background glow elements */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-brand-cyan/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-brand-cyan/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="bg-brand-blue-dark/60 border border-white/5 hover:border-brand-cyan/20 p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:shadow-neon"
                >
                  <div className="bg-brand-cyan/10 p-3 rounded-xl w-fit mb-6">
                    <Icon className="text-brand-cyan" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                      {stat.value}
                    </h3>
                    <p className="font-sans text-xs text-gray-400 font-medium tracking-wider uppercase mt-1">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Storytelling / Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Header */}
            <div className="mb-6">
              <span className="font-mono text-xs font-semibold text-brand-cyan tracking-widest uppercase block mb-2">
                Nossa Essência
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white">
                Comprometidos com a sua qualidade de vida
              </h2>
            </div>

            {/* Paragraphs */}
            <div className="space-y-6 text-gray-300 font-sans leading-relaxed text-base sm:text-lg">
              <p>
                Estamos há <strong className="text-white font-semibold">mais de 15 anos no mercado</strong> atuando e construindo uma jornada de confiança e satisfação com todos os nossos clientes, nos empenhando cada dia mais em aprimorar nossas técnicas para gerar o maior bem estar possível para sua casa, empresa e família. Afinal de contas, não é apenas sobre "instalar ar condicionados" — com a <strong className="text-brand-cyan font-semibold">ENEAR</strong>, você se sente realmente no controle!
              </p>
              <p>
                A <strong className="text-white font-semibold">ENEAR SOLUÇÕES</strong> nasceu com uma missão clara: aliar engenharia de climatização de ponta com um atendimento humanizado, ágil e extremamente limpo. Especializados no clima de <strong className="text-brand-cyan font-medium">Niterói e Região</strong>, entendemos perfeitamente o impacto de um ar-condicionado eficiente no bem-estar de uma família e no faturamento de uma empresa.
              </p>
              <p>
                Trabalhamos com uma equipe de técnicos credenciados e registrados nos órgãos competentes (<strong className="text-white">CREA / CFT</strong>), permitindo a emissão de laudos de engenharia, projetos de infraestrutura sob medida e contratos oficiais de <strong className="text-brand-cyan font-medium">PMOC</strong> para marcas e empresas de todos os portes.
              </p>
            </div>

            {/* Certifications and Quick Badges */}
            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-white/5 pt-6">
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                Credenciados e Autorizados:
              </span>
              <div className="flex flex-wrap gap-2">
                {['Split Inverter', 'VRF / Multi-Split', 'Projetos PMOC', 'NBR 5410 Elétrica'].map((badge) => (
                  <span
                    key={badge}
                    className="text-xs font-sans font-medium bg-brand-blue-deep px-3.5 py-1.5 rounded-full text-gray-300 border border-white/10"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
