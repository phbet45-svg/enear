export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: string; // Lucide icon name
  category: 'climatizacao' | 'eletrica';
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

export interface Testimonial {
  id: string;
  name: string;
  role: string; // e.g. "Morador de Icaraí", "Síndico", "Dona de Comércio em Piratininga"
  avatar: string; // initial or short code
  message: string;
  serviceType: string; // e.g. "Higienização Split", "Projeto PMOC", "Instalação Completa"
  rating: number;
  time: string; // e.g. "Hoje, 14:32"
}

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
