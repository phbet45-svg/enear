import { Service, Benefit, Testimonial, Project, FAQItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'instalacao',
    title: 'Instalação Profissional',
    description: 'Instalação de splits, cassetes, piso-teto e sistemas multi-split seguindo rigorosamente os padrões das marcas para manter sua garantia.',
    details: [
      'Cálculo de carga térmica detalhado (BTUs ideais)',
      'Instalação com tubo de cobre de alta qualidade (não usamos alumínio)',
      'Isolamento térmico blindado e fita protetora UV',
      'Infraestrutura embutida em alvenaria ou aparente em canaletas',
      'Testes de estanqueidade (pressurização com nitrogênio) e vácuo completo'
    ],
    icon: 'Wrench',
    category: 'climatizacao'
  },
  {
    id: 'higienizacao',
    title: 'Higienização & Limpeza Profunda',
    description: 'Limpeza química e bactericida com maquinário pressurizado que elimina 99.9% de fungos, ácaros, bactérias e odores desagradáveis.',
    details: [
      'Aplicação de bactericida biodegradável registrado na ANVISA',
      'Limpeza completa da serpentina, turbina, bandeja de dreno e filtros',
      'Proteção total do ambiente com bolsa coletora especial (sem sujeira)',
      'Melhoria imediata na qualidade do ar e eficiência de refrigeração',
      'Prevenção de rinites, asma e outras alergias respiratórias'
    ],
    icon: 'Wind',
    category: 'climatizacao'
  },
  {
    id: 'manutencao',
    title: 'Manutenção Corretiva & Preventiva',
    description: 'Diagnóstico rápido e conserto de falhas, vazamentos de água, reposição de gás refrigerante e troca de compressores.',
    details: [
      'Localização e eliminação de microvazamentos com nitrogênio',
      'Carga de gás de alta pureza (R410A / R32) pesada na balança',
      'Substituição de peças originais (capacitores, placas, sensores)',
      'Medição de corrente elétrica e pressões operacionais',
      'Correção de vazamentos de água e desobstrução de dreno'
    ],
    icon: 'Hammer',
    category: 'climatizacao'
  },
  {
    id: 'pmoc',
    title: 'Contrato de PMOC Autorizado',
    description: 'Plano de Manutenção, Operação e Controle obrigatório pela Lei 13.589/18 para empresas, clínicas e comércios com emissão de ART/TRT.',
    details: [
      'Adequação total às exigências da ANVISA e Vigilância Sanitária',
      'Emissão de laudo técnico assinado por engenheiro habilitado',
      'Livro de registro mensal com histórico de todas as manutenções',
      'Redução do consumo de energia e aumento da vida útil dos equipamentos',
      'Prevenção de multas pesadas e processos trabalhistas'
    ],
    icon: 'FileText',
    category: 'climatizacao'
  },
  {
    id: 'eletrica-ac',
    title: 'Infraestrutura Elétrica Dedicada',
    description: 'Montagem de circuitos elétricos exclusivos e independentes para ar-condicionado, prevenindo sobrecargas e riscos de incêndio.',
    details: [
      'Dimensionamento correto de cabos (bitola) e disjuntores específicos',
      'Instalação de tomadas robustas de 20A próximas ao evaporador/condensador',
      'Puxada de circuitos diretos do Quadro Geral de Distribuição (QGD)',
      'Infraestrutura com eletrodutos reforçados de PVC ou canaletas elegantes',
      'Garantia de segurança elétrica conforme a norma NBR 5410'
    ],
    icon: 'Zap',
    category: 'eletrica'
  },
  {
    id: 'eletrica-geral',
    title: 'Serviços Elétricos Gerais',
    description: 'Instalações, reformas, atualização de quadros de distribuição e manutenção de sistemas elétricos residenciais e comerciais.',
    details: [
      'Substituição e modernização de quadros de disjuntores antigos',
      'Distribuição equilibrada de fases e instalação de DPS e IDR (antichoque)',
      'Substituição de fiação antiga por cabos flexíveis anti-chama',
      'Instalação de luminárias, fitas LED, sensores de presença e interruptores',
      'Laudos elétricos de conformidade técnica e projetos'
    ],
    icon: 'Cpu',
    category: 'eletrica'
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: 'geografica',
    title: 'Presença Local Forte',
    description: 'Atendimento rápido e pontual em Niterói (Icaraí, Itaipu, Piratininga, Fonseca...), São Gonçalo e Maricá.',
    icon: 'MapPin'
  },
  {
    id: 'tecnicos',
    title: 'Técnicos Credenciados',
    description: 'Profissionais altamente qualificados com registro no CFT/CREA, garantindo projetos técnicos e PMOC válidos.',
    icon: 'ShieldCheck'
  },
  {
    id: 'limpeza',
    title: 'Sujeira Zero',
    description: 'Cuidamos do seu patrimônio. Usamos bolsas coletoras na higienização e limpamos todo o ambiente após qualquer serviço.',
    icon: 'Sparkles'
  },
  {
    id: 'transparencia',
    title: 'Orçamento Transparente',
    description: 'Diagnósticos técnicos honestos com explicação detalhada do problema. Sem custos fantasmas ou surpresas.',
    icon: 'Coins'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj1',
    title: 'Instalação de Multi-Split High Wall',
    category: 'Climatização Residencial',
    location: 'Icaraí, Niterói',
    image: '/src/assets/images/gallery_installation_1783357399367.jpg',
    description: 'Instalação completa de um sistema multi-split inverter em apartamento de alto padrão, mantendo a estética da varanda gourmet através de um layout de condensadora otimizado.'
  },
  {
    id: 'proj2',
    title: 'Higienização e Proteção com Spray Pressurizado',
    category: 'Manutenção & Higiene',
    location: 'Camboinhas, Niterói',
    image: '/src/assets/images/gallery_sanitization_1783357409881.jpg',
    description: 'Higienização profunda bactericida com bolsa coletora em 4 unidades split inverter, devolvendo ar 100% puro para residência familiar e reduzindo o consumo de energia em 15%.'
  },
  {
    id: 'proj3',
    title: 'Modernização de Quadro Elétrico Geral (QGD)',
    category: 'Instalação Elétrica',
    location: 'São Francisco, Niterói',
    image: '/src/assets/images/gallery_electrical_1783357423058.jpg',
    description: 'Reforma completa de quadro elétrico residencial antigo, adicionando disjuntores termomagnéticos individuais, DPS contra surtos de raios e IDR de proteção contra choques acidentais.'
  },
  {
    id: 'proj4',
    title: 'Climatização e Design Integrado',
    category: 'Projetos Especiais',
    location: 'Piratininga, Niterói',
    image: '/src/assets/images/enear_hero_bg_1783357383282.jpg',
    description: 'Integração de unidade split em sala integrada com automação residencial e elétrica dimensionada sob medida, garantindo conforto térmico e acústico com visual minimalista.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'w1',
    name: 'Roberto Vasconcellos',
    role: 'Morador de Icaraí, Niterói',
    avatar: 'RV',
    message: 'Fala pessoal da Enear! Passando pra agradecer a instalação dos dois aparelhos aqui em casa. Pessoal super profissional, usaram vácuo certinho na instalação e o acabamento ficou impecável. Limparam toda a poeira antes de ir embora. Indico de olhos fechados!',
    serviceType: 'Instalação Split Inverter',
    rating: 5,
    time: 'Ontem, 16:45'
  },
  {
    id: 'w2',
    name: 'Letícia Mendonça',
    role: 'Clínica Odonto, Jardim Icaraí',
    avatar: 'LM',
    message: 'Boa tarde! Queria parabenizar a equipe da Enear Soluções. Fizemos o contrato de PMOC para a nossa clínica de odontologia e a higienização dos splits. Tudo perfeitamente documentado para a Vigilância Sanitária e o ar agora está super limpo e sem aquele cheiro de guardado. Muito obrigada!',
    serviceType: 'Contrato PMOC + Higienização',
    rating: 5,
    time: 'Hoje, 10:15'
  },
  {
    id: 'w3',
    name: 'Carlos Henrique Torres',
    role: 'Síndico de Condomínio, Santa Rosa',
    avatar: 'CH',
    message: 'Parabéns pelo serviço no quadro de energia do condomínio e nos ares-condicionados da portaria e salão. O atendimento foi rápido, preço justo e o engenheiro nos enviou o laudo e a ART em tempo recorde. Empresa séria que cumpre o combinado.',
    serviceType: 'Reforma Elétrica + Climatização',
    rating: 5,
    time: 'Quinta-feira, 14:22'
  },
  {
    id: 'w4',
    name: 'Mariana Drummond',
    role: 'Dona do Café Bistrô, Piratininga',
    avatar: 'MD',
    message: 'Equipe top! Meu split de 24.000 BTUs parou de gelar bem no sábado à tarde com o café cheio. Liguei desesperada e me atenderam super rápido. Identificaram o capacitor queimado e um pequeno vazamento, resolveram tudo no mesmo dia. Salvou meu faturamento!',
    serviceType: 'Manutenção de Urgência',
    rating: 5,
    time: '2 dias atrás, 19:10'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq1',
    question: 'Qual é a região de atendimento da ENEAR Soluções?',
    answer: 'Atendemos prioritariamente toda a cidade de Niterói (incluindo Icaraí, Região Oceânica, Santa Rosa, Fonseca, Centro, etc.), além de São Gonçalo, Maricá e regiões vizinhas do Rio de Janeiro.'
  },
  {
    id: 'faq2',
    question: 'Com que frequência devo higienizar o ar-condicionado?',
    answer: 'Para residências, a recomendação técnica é realizar a higienização profunda bactericida de 6 em 6 meses ou no máximo anualmente (se usado pouco). Para comércios, escritórios, consultórios e locais de uso contínuo, a higienização deve ser mensal ou bimestral, de acordo com as normas da ANVISA e regulamentos do PMOC.'
  },
  {
    id: 'faq3',
    question: 'Por que preciso de um disjuntor e circuito elétrico exclusivo para o ar-condicionado?',
    answer: 'O ar-condicionado é um aparelho de alta potência e corrente elétrica constante. Ligá-lo em tomadas comuns ou compartilhar fiação com chuveiros, geladeiras ou micro-ondas provoca sobrecarga nos cabos, quedas frequentes de energia, danos à placa eletrônica do ar-condicionado e, em casos graves, derretimento de fios e incêndios. A norma NBR 5410 exige circuito exclusivo com disjuntor dimensionado para segurança.'
  },
  {
    id: 'faq4',
    question: 'O que é o PMOC e minha empresa é obrigatória a ter?',
    answer: 'O PMOC (Plano de Manutenção, Operação e Controle) é uma exigência legal (Lei Federal 13.589/2018) para todos os estabelecimentos públicos ou privados que possuem carga térmica de climatização superior a 60.000 BTUs (soma de todos os aparelhos no local). Clínicas médicas, farmácias, escolas e grandes escritórios frequentemente necessitam de PMOC para alvará e para evitar multas da Vigilância Sanitária que variam de R$ 2.000 a R$ 1.500.000.'
  },
  {
    id: 'faq5',
    question: 'Vocês dão garantia técnica nos serviços executados?',
    answer: 'Sim! Todos os nossos serviços de instalação, manutenção corretiva e infraestrutura elétrica possuem garantia contratual por escrito de 90 dias a até 1 ano (dependendo da categoria do serviço e peças substituídas). Além disso, mantemos as garantias de fábrica dos aparelhos novos instalados por nós.'
  }
];
