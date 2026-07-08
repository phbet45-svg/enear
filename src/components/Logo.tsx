import { motion } from 'motion/react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

export default function Logo({ size = 'md', animated = true }: LogoProps) {
  // Height mappings for the SVG logo to look perfectly balanced across layouts
  const heightClass = {
    sm: 'h-16 sm:h-18 md:h-20',
    md: 'h-24 sm:h-28 md:h-32',
    lg: 'h-40 sm:h-44 md:h-48',
    xl: 'h-60 sm:h-68 md:h-76',
  }[size];

  // Subtle floating/breathing animation
  const animationProps = animated
    ? {
        animate: { y: [0, -4, 0] },
        transition: {
          repeat: Infinity,
          duration: 4,
          ease: 'easeInOut',
        },
      }
    : {};

  return (
    <motion.div
      className="flex items-center justify-center select-none cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 350, damping: 15 }}
      {...animationProps}
    >
      <div className={`${heightClass} aspect-[4/3] w-auto`}>
        <svg
          viewBox="0 0 400 300"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Defs for gradients or dropshadow filters if needed */}
          <defs>
            <filter id="logo-shadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* Símbolo / Ícone da Logo: Três nós em círculo com arcos conectores (cor azul turquesa) */}
          <g filter="url(#logo-shadow)">
            {/* Arcos de conexão */}
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

            {/* Círculos dos nós */}
            <circle cx="200" cy="45" r="11" fill="#00cbd0" />
            <circle cx="239" cy="112" r="11" fill="#00cbd0" />
            <circle cx="161" cy="112" r="11" fill="#00cbd0" />
          </g>

          {/* Nome da Marca ENEAR em Branco Puro com excelente peso */}
          <text
            x="200"
            y="172"
            fill="#ffffff"
            fontFamily="Space Grotesk, Inter, sans-serif"
            fontWeight="800"
            fontSize="54"
            letterSpacing="0.08em"
            textAnchor="middle"
            filter="url(#logo-shadow)"
          >
            ENEAR
          </text>

          {/* Subtitle: — SOLUÇÕES — */}
          <g filter="url(#logo-shadow)">
            {/* Linha da esquerda */}
            <line
              x1="55"
              y1="198"
              x2="135"
              y2="198"
              stroke="#00cbd0"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Texto Central */}
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

            {/* Linha da direita */}
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

          {/* Slogan: Transformando ar em bem estar */}
          <text
            x="200"
            y="238"
            fontFamily="Space Grotesk, Inter, sans-serif"
            fontWeight="500"
            fontSize="14.5"
            letterSpacing="0.02em"
            textAnchor="middle"
            filter="url(#logo-shadow)"
          >
            <tspan fill="#e2e8f0">Transformando </tspan>
            <tspan fill="#00cbd0">ar em bem estar</tspan>
          </text>
        </svg>
      </div>
    </motion.div>
  );
}

