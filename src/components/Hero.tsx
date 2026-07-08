import { motion } from 'motion/react';
import { ArrowDown, Wrench, Shield, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-brand-blue-dark overflow-hidden pt-16"
    >
      {/* Premium background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/enear_hero_bg_1783357383282.jpg"
          alt="Climatização de alto padrão"
          className="w-full h-full object-cover object-center filter opacity-40 scale-105 animate-[pulse-slow_8s_ease-in-out_infinite]"
          referrerPolicy="no-referrer"
        />
        {/* Dynamic Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-dark/95 via-brand-blue-dark/80 to-brand-blue-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark via-transparent to-brand-blue-dark/70" />

        {/* Large, Semi-transparent Animated Brand Logo Background with Neon Glow and Floating Effect */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none select-none overflow-hidden">
          <motion.div
            animate={{
              y: [0, -25, 0],
              scale: [0.95, 1.05, 0.95],
              rotate: [0, 4, -4, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="w-[85%] max-w-[800px] aspect-[4/3] pointer-events-none opacity-20 filter drop-shadow-[0_0_50px_rgba(0,203,208,0.4)]"
          >
            <svg
              viewBox="0 0 400 300"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Símbolo / Ícone da Logo */}
              <g>
                <path
                  d="M 218 54 A 42 42 0 0 1 236 96"
                  stroke="#00cbd0"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <path
                  d="M 224 114 A 42 42 0 0 1 176 114"
                  stroke="#00cbd0"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <path
                  d="M 164 96 A 42 42 0 0 1 182 54"
                  stroke="#00cbd0"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <circle cx="200" cy="45" r="11" fill="#00cbd0" />
                <circle cx="239" cy="112" r="11" fill="#00cbd0" />
                <circle cx="161" cy="112" r="11" fill="#00cbd0" />
              </g>

              {/* Nome da Marca ENEAR */}
              <text
                x="200"
                y="172"
                fill="#ffffff"
                fontFamily="Space Grotesk, Inter, sans-serif"
                fontWeight="800"
                fontSize="54"
                letterSpacing="0.08em"
                textAnchor="middle"
              >
                ENEAR
              </text>

              {/* Subtitle: — SOLUÇÕES — */}
              <g>
                <line
                  x1="55"
                  y1="198"
                  x2="135"
                  y2="198"
                  stroke="#00cbd0"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <text
                  x="200"
                  y="205"
                  fill="#00cbd0"
                  fontFamily="Space Grotesk, Inter, sans-serif"
                  fontWeight="700"
                  fontSize="21"
                  letterSpacing="0.22em"
                  textAnchor="middle"
                >
                  SOLUÇÕES
                </text>
                <line
                  x1="265"
                  y1="198"
                  x2="345"
                  y2="198"
                  stroke="#00cbd0"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </g>

              {/* Slogan */}
              <text
                x="200"
                y="238"
                fontFamily="Space Grotesk, Inter, sans-serif"
                fontWeight="500"
                fontSize="14.5"
                letterSpacing="0.02em"
                textAnchor="middle"
              >
                <tspan fill="#e2e8f0">Transformando </tspan>
                <tspan fill="#00cbd0">ar em bem estar</tspan>
              </text>
            </svg>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1.03); }
          50% { transform: scale(1.07); }
        }
      `}</style>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center pt-10 pb-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-brand-cyan/10 border border-brand-cyan/25 px-4 py-1.5 rounded-full mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
          <span className="font-mono text-xs font-semibold text-brand-cyan uppercase tracking-widest">
            Niterói • São Gonçalo • Maricá
          </span>
        </motion.div>

        {/* Main Headings */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, type: 'spring' }}
          className="font-sans font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-4 sm:mb-6 leading-[1.2] sm:leading-[1.1] max-w-4xl"
        >
          Transformando ar em <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-cyan-light drop-shadow-[0_0_15px_rgba(0,229,192,0.25)] text-neon-glow italic font-black">
            Bem-Estar
          </span>
        </motion.h1>

        {/* Subheadings */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-sans font-medium text-xs sm:text-base md:text-xl text-gray-300 tracking-wide max-w-3xl mb-8 sm:mb-12"
        >
          Venda • Instalação • Manutenção • Higienização • Projetos Técnicos • PMOC
        </motion.p>

        {/* Interactive action buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center w-full max-w-md mb-8 sm:mb-16"
        >
          <a
            href="#contato"
            className="w-full sm:w-auto bg-brand-cyan hover:bg-brand-cyan-light text-brand-blue-deep font-bold text-base px-8 py-4 rounded-full shadow-neon hover:shadow-neon-strong transition-all duration-300 transform hover:-translate-y-1 text-center"
          >
            Solicitar Orçamento
          </a>
          <a
            href="#servicos"
            className="w-full sm:w-auto border border-brand-cyan/40 hover:border-brand-cyan text-brand-cyan font-bold text-base px-8 py-4 rounded-full bg-brand-blue-dark/40 hover:bg-brand-cyan/5 transition-all duration-300 transform hover:-translate-y-1 text-center"
          >
            Conhecer Serviços
          </a>
        </motion.div>

        {/* Small trust factor banners */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 text-left border-t border-white/10 pt-8 w-full max-w-4xl"
        >
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <CheckCircle className="text-brand-cyan flex-shrink-0" size={20} />
            <span className="text-sm font-sans font-semibold text-gray-300">PMOC Autorizado</span>
          </div>
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <Shield className="text-brand-cyan flex-shrink-0" size={20} />
            <span className="text-sm font-sans font-semibold text-gray-300">CFT / CREA Registro</span>
          </div>
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <Wrench className="text-brand-cyan flex-shrink-0" size={20} />
            <span className="text-sm font-sans font-semibold text-gray-300">Niterói e Região</span>
          </div>
        </motion.div>
      </div>

      {/* Animated scroll down indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <motion.a
          href="#sobre"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center text-gray-500 hover:text-brand-cyan transition-colors"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest mb-1.5 opacity-80">
            Descobrir mais
          </span>
          <ArrowDown size={16} />
        </motion.a>
      </div>
    </section>
  );
}
