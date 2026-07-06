import { motion } from 'motion/react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

export default function Logo({ size = 'md', animated = true }: LogoProps) {
  // Height mappings for the image logo to look perfectly balanced across layouts
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
      whileHover={{ scale: 1.04 }}
      transition={{ type: 'spring', stiffness: 350, damping: 15 }}
      {...animationProps}
    >
      <div className="relative flex items-center justify-center">
        {/* Soft cyan halo behind the logo to make it pop over dark backgrounds */}
        <div className="absolute w-[80%] h-[80%] bg-brand-cyan/10 rounded-full filter blur-[25px] mix-blend-screen pointer-events-none animate-pulse" />
        
        {/* Official logo with transparent background and immersive neon drop shadow */}
        <img
          src="https://i.postimg.cc/X7CMXVxv/Chat-GPT-Image-6-de-jul-de-2026-14-33-31.png"
          alt="ENEAR Soluções"
          referrerPolicy="no-referrer"
          className={`${heightClass} w-auto object-contain drop-shadow-[0_0_15px_rgba(0,229,192,0.45)] hover:drop-shadow-[0_0_25px_rgba(0,229,192,0.75)] filter brightness-105 contrast-105 transition-all duration-500`}
        />
      </div>
    </motion.div>
  );
}

