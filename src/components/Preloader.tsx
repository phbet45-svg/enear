import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Lock scroll on mount
    document.body.classList.add('preloader-active');

    // Fast loading progress bar from 0% to 100% over 5 seconds (5000ms)
    const duration = 5000;
    const intervalTime = 50; // Update every 50ms
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    // Fade out and trigger completion after 5 seconds
    const timeout = setTimeout(() => {
      setIsVisible(false);
      // Wait for fadeout animation to complete (approx 800ms)
      setTimeout(() => {
        document.body.classList.remove('preloader-active');
        onComplete();
      }, 800);
    }, duration);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
      document.body.classList.remove('preloader-active');
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-blue-dark select-none"
        >
          {/* Subtle air flow / particles background effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            {Array.from({ length: 15 }).map((_, i) => {
              const delay = i * 0.4;
              const duration = 5 + (i % 5) * 2;
              const left = `${5 + i * 6.5}%`;
              return (
                <div
                  key={i}
                  className="absolute bottom-[-50px] bg-brand-cyan/20 rounded-full blur-[1px] animate-pulse"
                  style={{
                    left,
                    width: `${8 + (i % 4) * 6}px`,
                    height: `${8 + (i % 4) * 6}px`,
                    animation: `float-up ${duration}s linear infinite`,
                    animationDelay: `${delay}s`,
                  }}
                />
              );
            })}
          </div>

          <style>{`
            @keyframes float-up {
              0% {
                transform: translateY(0) translateX(0) scale(1);
                opacity: 0;
              }
              10% {
                opacity: 0.6;
              }
              90% {
                opacity: 0.3;
              }
              100% {
                transform: translateY(-110vh) translateX(\${Math.sin(10) * 15}px) scale(0.8);
                opacity: 0;
              }
            }
          `}</style>

          <div className="flex flex-col items-center justify-center text-center px-4 max-w-lg z-10">
            {/* Pulsing glow under the logo */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative mb-8"
            >
              <Logo size="xl" animated={true} />
            </motion.div>

            {/* Slogan */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-gray-300 font-sans font-medium text-lg tracking-wide uppercase px-2 mb-2"
            >
              Transformando ar em bem estar
            </motion.p>

            {/* Impact statement */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="text-brand-cyan font-display font-medium text-sm tracking-[0.2em] uppercase mb-12"
            >
              Ar puro. Conforto total. Bem-estar garantido.
            </motion.p>

            {/* Tech loading loader */}
            <div className="w-64 flex flex-col items-center gap-2">
              <div className="w-full h-[3px] bg-brand-blue-deep/80 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-brand-cyan shadow-neon"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex items-center justify-between w-full text-brand-cyan/60 font-mono text-[10px] tracking-widest uppercase">
                <span>Iniciando Climatização</span>
                <span>{Math.round(progress)}%</span>
              </div>
            </div>
          </div>

          {/* Quick skip button for better UX if they don't want to wait */}
          <button
            onClick={() => {
              setIsVisible(false);
              setTimeout(() => {
                document.body.classList.remove('preloader-active');
                onComplete();
              }, 400);
            }}
            className="absolute bottom-8 right-8 font-mono text-xs text-white/30 hover:text-brand-cyan transition-colors py-1 px-3 border border-white/10 hover:border-brand-cyan/30 rounded-md backdrop-blur-sm"
          >
            Pular Introdução
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
