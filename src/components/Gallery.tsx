import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { MapPin, X, Eye, ShieldCheck, Grid } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState<string>('Tudo');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Parse categories for filter tabs
  const categories = ['Tudo', 'Climatização Residencial', 'Manutenção & Higiene', 'Instalação Elétrica', 'Projetos Especiais'];

  const filteredProjects = PROJECTS.filter(
    (p) => filter === 'Tudo' || p.category === filter
  );

  return (
    <section id="projetos" className="relative py-24 bg-brand-blue-dark border-t border-white/5 overflow-hidden">
      {/* Background visual gradient */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-cyan/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold text-brand-cyan tracking-widest uppercase block mb-3">
            Portfólio de Sucesso
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-4">
            Nossos projetos executados na região
          </h2>
          <p className="font-sans text-gray-400 text-base sm:text-lg">
            Explore os bastidores e os resultados de nossas instalações, higienizações e soluções elétricas em Niterói e arredores.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-sans font-medium text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-full border transition-all duration-300 ${
                filter === cat
                  ? 'bg-brand-cyan border-brand-cyan text-brand-blue-deep font-semibold shadow-neon'
                  : 'bg-transparent border-white/10 text-gray-400 hover:text-white hover:border-brand-cyan/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, i) => (
              <motion.div
                layout
                key={p.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(p)}
                className="group relative bg-brand-blue-deep/40 rounded-3xl overflow-hidden border border-white/5 cursor-pointer hover:border-brand-cyan/30 hover:shadow-neon transition-all duration-500 flex flex-col h-full"
              >
                {/* Image Wrap */}
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Glassmorphism Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-blue-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="bg-brand-cyan/15 border border-brand-cyan/30 p-4 rounded-full text-brand-cyan transform scale-90 group-hover:scale-100 transition-transform duration-400">
                      <Eye size={24} className="filter drop-shadow-[0_0_8px_rgba(0,229,192,0.5)]" />
                    </div>
                  </div>

                  {/* Category Label Overlay */}
                  <span className="absolute bottom-4 left-4 font-mono text-[9px] tracking-widest uppercase bg-brand-blue-dark/80 backdrop-blur-sm text-brand-cyan border border-brand-cyan/20 px-2.5 py-1 rounded-md">
                    {p.category}
                  </span>
                </div>

                {/* Info Area */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Location Badge */}
                    <div className="flex items-center gap-1.5 text-gray-500 font-mono text-[10px] uppercase tracking-wider mb-2">
                      <MapPin size={12} className="text-brand-cyan/80" />
                      <span>{p.location}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-brand-cyan transition-colors line-clamp-1">
                      {p.title}
                    </h3>
                  </div>

                  {/* Bottom trigger hint */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                    <span className="font-sans text-xs text-gray-400 line-clamp-2 leading-relaxed">
                      {p.description}
                    </span>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Case-Study Lightbox Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              {/* Backdrop */}
              <div
                className="absolute inset-0 bg-brand-blue-deep/95 backdrop-blur-md"
                onClick={() => setSelectedProject(null)}
              />

              {/* Panel Content */}
              <motion.div
                initial={{ scale: 0.9, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="relative bg-brand-blue-dark border border-brand-cyan/20 w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row"
              >
                {/* Left Side: Large Image */}
                <div className="md:w-1/2 aspect-square md:aspect-auto overflow-hidden relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-brand-blue-dark/50" />
                </div>

                {/* Right Side: Details Text */}
                <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    {/* Close Trigger Button */}
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 bg-brand-blue-deep hover:bg-white/10 text-gray-400 hover:text-white p-1.5 rounded-full transition-colors border border-white/5"
                    >
                      <X size={18} />
                    </button>

                    {/* Category */}
                    <span className="font-mono text-[9px] tracking-widest uppercase text-brand-cyan bg-brand-cyan/10 px-2.5 py-1 rounded-md border border-brand-cyan/15 inline-block mb-4">
                      {selectedProject.category}
                    </span>

                    {/* Title */}
                    <h4 className="font-display font-extrabold text-xl sm:text-2xl text-white mb-2 leading-tight">
                      {selectedProject.title}
                    </h4>

                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-gray-400 font-mono text-[10px] uppercase tracking-wider mb-6">
                      <MapPin size={12} className="text-brand-cyan" />
                      <span>{selectedProject.location}</span>
                    </div>

                    {/* Long details */}
                    <p className="font-sans text-gray-300 text-sm leading-relaxed mb-6">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Guaranteed technical satisfaction badge */}
                  <div className="flex items-center gap-3 bg-brand-cyan/5 border border-brand-cyan/10 p-3 rounded-xl">
                    <ShieldCheck className="text-brand-cyan flex-shrink-0" size={18} />
                    <div className="font-sans">
                      <h5 className="text-xs font-semibold text-white uppercase tracking-wider">Acabamento Validado</h5>
                      <p className="text-[10px] text-gray-400">Instalação dentro das normas técnicas</p>
                    </div>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
