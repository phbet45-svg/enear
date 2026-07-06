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
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 350, damping: 15 }}
      {...animationProps}
    >
      <div className="relative flex items-center justify-center">
        {/* Official logo with transparent background - clean, solid, professional representation */}
        <img
          src="https://i.postimg.cc/X7CMXVxv/Chat-GPT-Image-6-de-jul-de-2026-14-33-31.png"
          alt="ENEAR Soluções"
          referrerPolicy="no-referrer"
          className={`${heightClass} w-auto object-contain transition-all duration-300 filter brightness-100 contrast-100`}
        />
      </div>
    </motion.div>
  );
}

