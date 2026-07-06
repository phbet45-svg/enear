import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, PhoneCall } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Novidades & Ofertas', href: '#expansao' },
    { name: 'Por que Nós', href: '#diferenciais' },
    { name: 'Selo Google', href: '#certificado' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-blue-dark/90 backdrop-blur-md border-b border-brand-cyan/10 py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#inicio" className="focus:outline-none">
              <Logo size="sm" animated={true} />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-sans font-medium text-sm text-gray-300 hover:text-brand-cyan transition-colors relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-cyan transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Desktop Action Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:21998970642" // Official contact number
                className="flex items-center gap-2 text-xs font-mono text-gray-300 hover:text-brand-cyan transition-colors"
              >
                <PhoneCall size={14} className="text-brand-cyan" />
                <span>Niterói & Região</span>
              </a>
              <a
                href="#contato"
                className="bg-brand-cyan hover:bg-brand-cyan-light text-brand-blue-deep font-bold text-sm px-5 py-2.5 rounded-full shadow-neon hover:shadow-neon-strong transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Solicitar Orçamento
              </a>
            </div>

            {/* Mobile Hamburguer Menu Button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-brand-cyan transition-colors p-1"
                aria-label="Abrir Menu"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-brand-blue-deep/95 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 w-80 h-full bg-brand-blue-dark border-l border-brand-cyan/10 p-6 flex flex-col justify-between shadow-2xl"
            >
              <div className="flex flex-col gap-8 mt-16">
                <div className="flex items-center justify-between border-b border-brand-cyan/10 pb-4">
                  <Logo size="sm" animated={false} />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-300 hover:text-brand-cyan p-1"
                  >
                    <X size={24} />
                  </button>
                </div>

                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="font-sans font-semibold text-lg text-gray-300 hover:text-brand-cyan transition-colors py-2 border-b border-white/5"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="flex flex-col gap-4 border-t border-brand-cyan/10 pt-6">
                <a
                  href="tel:21998970642"
                  className="flex items-center justify-center gap-2 text-sm font-mono text-gray-300 hover:text-brand-cyan transition-colors py-2"
                >
                  <PhoneCall size={16} className="text-brand-cyan" />
                  <span>Niterói e Região</span>
                </a>
                <a
                  href="#contato"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-brand-cyan text-brand-blue-deep text-center font-bold text-base py-3 rounded-full shadow-neon transition-all duration-300 block"
                >
                  Orçamento Grátis
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
