import Logo from './Logo';
import { Instagram, Send, MessageSquare, ArrowUp, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050c18] border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Visual background element */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-cyan/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/5">
          
          {/* Logo and Brand tagline */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <Logo size="sm" animated={true} />
            <p className="font-sans text-gray-400 text-sm mt-6 leading-relaxed max-w-sm">
              Especialistas em engenharia de climatização e sistemas elétricos residenciais, comerciais e condomínios. Garantimos o mais alto nível de ar puro, conforto e conformidade técnica em Niterói e região.
            </p>
            
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-8">
              <a
                href="https://www.instagram.com/enearsolucoes/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram ENEAR Soluções"
                className="bg-white/5 border border-white/10 p-3 rounded-full text-gray-300 hover:text-brand-cyan hover:border-brand-cyan/40 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/5521998970642"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp ENEAR Soluções"
                className="bg-white/5 border border-white/10 p-3 rounded-full text-gray-300 hover:text-brand-cyan hover:border-brand-cyan/40 transition-all duration-300 transform hover:-translate-y-1"
              >
                <MessageSquare size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-6">
              Navegação Rápida
            </h3>
            <ul className="space-y-3.5 text-sm font-sans font-medium text-gray-400">
              {[
                { name: 'Início', href: '#inicio' },
                { name: 'Sobre Nós', href: '#sobre' },
                { name: 'Serviços Técnicos', href: '#servicos' },
                { name: 'Por que a ENEAR', href: '#diferenciais' },
                { name: 'Selo Oficial Google', href: '#certificado' },
                { name: 'Depoimentos Reais', href: '#depoimentos' },
                { name: 'Projetos Recentes', href: '#projetos' },
                { name: 'Tirar Dúvidas (FAQ)', href: '#faq' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-brand-cyan transition-colors flex items-center gap-1.5 group">
                    <ArrowRight size={10} className="text-brand-cyan/50 group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Coverage */}
          <div className="lg:col-span-4">
            <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-6">
              Área de Atendimento
            </h3>
            <p className="font-sans text-gray-400 text-sm leading-relaxed mb-4">
              Atendemos de forma expressa toda a região metropolitana de Niterói, São Gonçalo e Maricá.
            </p>
            
            {/* Badges of cities */}
            <div className="flex flex-wrap gap-2 mb-6">
              {['Icaraí', 'Santa Rosa', 'Região Oceânica', 'Itaipu', 'São Francisco', 'Piratininga', 'Fonseca', 'Maricá'].map((city) => (
                <span
                  key={city}
                  className="bg-white/[0.03] border border-white/5 text-xs text-gray-300 px-2.5 py-1 rounded-md"
                >
                  {city}
                </span>
              ))}
            </div>

            {/* Certifications and credentials tag */}
            <div className="flex items-center gap-2 border-t border-white/5 pt-4">
              <ShieldCheck className="text-brand-cyan flex-shrink-0" size={16} />
              <span className="font-sans text-xs font-semibold text-gray-300 uppercase tracking-wider">
                CFT / CREA Registro Autorizado
              </span>
            </div>
          </div>

        </div>

        {/* Lower footer: Copyright and Go to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 text-xs text-gray-500 font-mono">
          <div className="text-center sm:text-left">
            <p>© {currentYear} ENEAR SOLUÇÕES. Todos os direitos reservados.</p>
            <p className="mt-1 text-gray-600">CNPJ: XX.XXX.XXX/0001-XX | Niterói, Rio de Janeiro</p>
          </div>

          {/* Voltar ao topo button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-brand-cyan transition-colors bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-full border border-white/5 hover:border-brand-cyan/20 cursor-pointer text-gray-400"
            aria-label="Voltar ao Topo"
          >
            <span>Voltar ao topo</span>
            <ArrowUp size={14} className="animate-bounce" />
          </button>
        </div>

      </div>
    </footer>
  );
}
