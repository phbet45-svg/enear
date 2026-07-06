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
    title: 'Instalação de Split High Wall Inverter',
    category: 'Instalação',
    location: 'Icaraí, Niterói',
    image: 'https://i.postimg.cc/Hs1hBFQC/737799692-1536348364829972-2703095286009055160-n.jpg',
    description: 'Instalação de unidade evaporadora Split Inverter em sala residencial, garantindo perfeito nivelamento, acabamento impecável na fiação e infraestrutura frigorígena embutida.'
  },
  {
    id: 'proj2',
    title: 'Higienização Completa com Bolsa Coletora',
    category: 'Limpeza/higienização',
    location: 'Santa Rosa, Niterói',
    image: 'https://i.postimg.cc/yYCbv2FV/737799692-1985488362083412-5056193316881565625-n.jpg',
    description: 'Serviço de limpeza profunda bactericida na evaporadora utilizando bolsa coletora especial para conter resíduos e água, higienizando turbina e serpentina sem sujar as paredes.'
  },
  {
    id: 'proj3',
    title: 'Infraestrutura Frigorígena Embutida',
    category: 'Instalação',
    location: 'Camboinhas, Niterói',
    image: 'https://i.postimg.cc/wTYG0nhz/738395957-871633656010291-2524931759976582720-n.jpg',
    description: 'Preparação de infraestrutura frigorígena em tubulações de cobre embutidas na parede para futura instalação de aparelhos Split, ideal para imóveis em fase de reforma.'
  },
  {
    id: 'proj4',
    title: 'Higienização Preventiva de Evaporadora',
    category: 'Limpeza/higienização',
    location: 'Piratininga, Niterói',
    image: 'https://i.postimg.cc/QxZy0vpj/738503798-1639050677187809-4639478796039949351-n.jpg',
    description: 'Limpeza química profunda com produtos biodegradáveis homologados pela ANVISA, eliminando fungos, bactérias e odores desagradáveis da serpentina de alumínio.'
  },
  {
    id: 'proj5',
    title: 'Instalação de Condensadora em Suporte Reforçado',
    category: 'Instalação',
    location: 'São Francisco, Niterói',
    image: 'https://i.postimg.cc/9FHnJsGV/738667771-1335712755277384-7604226814968046821-n.jpg',
    description: 'Fixação técnica de unidade condensadora em área externa utilizando suportes robustos e coxins de borracha anti-vibração para reduzir ruídos estruturais.'
  },
  {
    id: 'proj6',
    title: 'Higienização de Filtros e Painel Frontal',
    category: 'Limpeza/higienização',
    location: 'Charitas, Niterói',
    image: 'https://i.postimg.cc/KvhHJCnG/738712368-4596224970591841-4343096919722007249-n.jpg',
    description: 'Remoção sistemática e desinfecção de filtros de ar laváveis e painel frontal protetor, restabelecendo o fluxo máximo de vazão e a eficiência energética do equipamento.'
  },
  {
    id: 'proj7',
    title: 'Limpeza Detalhada de Carenagem',
    category: 'Limpeza',
    location: 'Fonseca, Niterói',
    image: 'https://i.postimg.cc/dtRSXn9g/739126547-968282779500384-4126368344716511570-n.jpg',
    description: 'Limpeza estética e higienização física da carenagem de plástico ABS, removendo acúmulo de poeira e marcas de uso para restaurar o aspecto de novo do aparelho.'
  },
  {
    id: 'proj8',
    title: 'Instalação e Conexão de Linha Frigorífica',
    category: 'Instalação',
    location: 'Icaraí, Niterói',
    image: 'https://i.postimg.cc/ncKw5T16/739243113-2202112170627737-7583144652750484873-n.jpg',
    description: 'Conexão precisa de tubulação flangeada de cobre com isolamento térmico individual e cabo de comando interligando as unidades interna e externa.'
  },
  {
    id: 'proj9',
    title: 'Higienização Completa de Turbina',
    category: 'Limpeza/higienização',
    location: 'Itaipu, Niterói',
    image: 'https://i.postimg.cc/8Pdn3wb2/739276518-1722034335667916-3954910342730836427-n.jpg',
    description: 'Desinfecção profunda e remoção de crostas de sujeira acumuladas nas aletas da turbina tangencial, restabelecendo a ventilação silenciosa e saudável.'
  },
  {
    id: 'proj10',
    title: 'Instalação de Split Hi-Wall em Dormitório',
    category: 'Instalação',
    location: 'São Domingos, Niterói',
    image: 'https://i.postimg.cc/02GH3Zfq/739419967-1746349956408611-3457060351928582779-n.jpg',
    description: 'Montagem minuciosa de evaporadora em quarto residencial, posicionada de forma a proporcionar climatização uniforme sem incidência direta de vento sobre a cama.'
  },
  {
    id: 'proj11',
    title: 'Limpeza de Condensadora Externa',
    category: 'Limpeza',
    location: 'Pendotiba, Niterói',
    image: 'https://i.postimg.cc/tCdmfD5b/739508664-1618847772941289-4146273353798474008-n.jpg',
    description: 'Lavagem pressurizada externa de unidade condensadora para remoção de poeira, folhas e detritos acumulados na serpentina externa, garantindo a troca de calor ideal.'
  },
  {
    id: 'proj12',
    title: 'Instalação de Multi-Split em Reforma Comercial',
    category: 'Instalação',
    location: 'Centro, Niterói',
    image: 'https://i.postimg.cc/c475jTmZ/739943409-1676599290262734-8291453575939016410-n.jpg',
    description: 'Passagem coordenada de tubulações frigoríficas e cabos elétricos blindados em teto rebaixado para sistemas multi-split em escritório corporativo.'
  },
  {
    id: 'proj13',
    title: 'Desinfecção Química de Evaporadora',
    category: 'Limpeza/higienização',
    location: 'Santa Rosa, Niterói',
    image: 'https://i.postimg.cc/PrbFcK4T/739943438-27788750097415121-5096832624510360410-n.jpg',
    description: 'Aplicação localizada de bactericida de largo espectro em dreno e serpentina, prevenindo proliferação de fungos e eliminando riscos à saúde respiratória.'
  },
  {
    id: 'proj14',
    title: 'Instalação e Vácuo com Bomba de Vácuo',
    category: 'Instalação',
    location: 'Icaraí, Niterói',
    image: 'https://i.postimg.cc/L6k07vTm/739982973-1051774160758924-2147165984776610642-n.jpg',
    description: 'Procedimento técnico indispensável de desidratação e vácuo do circuito frigorígeno com bomba de duplo estágio e vacuômetro digital, assegurando a longevidade do compressor.'
  },
  {
    id: 'proj15',
    title: 'Higienização Termo-Química Completa',
    category: 'Limpeza/higienização',
    location: 'Camboinhas, Niterói',
    image: 'https://i.postimg.cc/VL9HT4Rf/739982973-1914375682582689-994716704521145341-n.jpg',
    description: 'Limpeza profunda e aplicação de película protetora anti-corrosão na serpentina da evaporadora para aumentar a resistência à maresia local.'
  },
  {
    id: 'proj16',
    title: 'Instalação de Cassete de 4 Vias',
    category: 'Instalação',
    location: 'São Francisco, Niterói',
    image: 'https://i.postimg.cc/VL9HT4Rs/740059589-2140171526712616-3363421000965485645-n.jpg',
    description: 'Instalação técnica de modelo Cassete em teto de gesso, distribuindo o fluxo de ar em 360 graus de maneira uniforme e discreta para amplas salas comerciais.'
  },
  {
    id: 'proj17',
    title: 'Desobstrução e Limpeza do Sistema de Drenagem',
    category: 'Limpeza',
    location: 'Itaipu, Niterói',
    image: 'https://i.postimg.cc/DyQYD5gy/740105678-1250015807086528-1414028853487977799-n.jpg',
    description: 'Limpeza preventiva de mangueiras de dreno e bandejas coletoras, evitando gotejamentos e vazamentos de água internos indesejados nas salas.'
  },
  {
    id: 'proj18',
    title: 'Instalação e Comissionamento Elétrico',
    category: 'Instalação',
    location: 'Fonseca, Niterói',
    image: 'https://i.postimg.cc/yYhr5nPN/740259385-1564973235031461-9204531582251014369-n.jpg',
    description: 'Interligação elétrica segura de comandos e conexões em bornes de evaporadoras seguindo os manuais dos fabricantes e normas da NBR 5410.'
  },
  {
    id: 'proj19',
    title: 'Higienização de Bandeja de Condensado',
    category: 'Limpeza/higienização',
    location: 'Charitas, Niterói',
    image: 'https://i.postimg.cc/7Y1QcXV6/740846023-26705571485783352-7174206464044890922-n.jpg',
    description: 'Desinfecção física e lavagem de bandeja coletora interna, local de frequente acúmulo de biofilme e bactérias nocivas à saúde.'
  },
  {
    id: 'proj20',
    title: 'Instalação e Teste de Pressão de Gás R410A',
    category: 'Instalação',
    location: 'Piratininga, Niterói',
    image: 'https://i.postimg.cc/zXwPMpjv/741019503-2408487726294995-1186388234693884013-n.jpg',
    description: 'Teste minucioso de estanqueidade e regulagem fina da carga de fluido refrigerante utilizando manifold digital, operando dentro das pressões ideais de fábrica.'
  },
  {
    id: 'proj21',
    title: 'Higienização Preventiva de Ar de Janela',
    category: 'Limpeza/higienização',
    location: 'São Domingos, Niterói',
    image: 'https://i.postimg.cc/ZKPDgjc0/741275182-1001505886188049-8111892645164125814-n.jpg',
    description: 'Higienização física e química completa de aparelho de ar-condicionado convencional de gaveta (janela) para remoção integral de fungos e ácaros.'
  },
  {
    id: 'proj22',
    title: 'Instalação Completa de Unidade Externa',
    category: 'Instalação',
    location: 'Camboinhas, Niterói',
    image: 'https://i.postimg.cc/MK0r4tDn/741481019-942406821907077-7848522705418505638-n.jpg',
    description: 'Instalação final de condensadora vertical em varanda técnica, obedecendo espaçamentos necessários recomendados pelo fabricante para perfeita exaustão do ar quente.'
  },
  {
    id: 'proj23',
    title: 'Higienização de Ar Condicionado High Wall',
    category: 'Limpeza/higienização',
    location: 'Icaraí, Niterói',
    image: 'https://i.postimg.cc/tgg6yCGS/a.jpg',
    description: 'Higienização interna preventiva contra micro-organismos nocivos, garantindo a qualidade do ar em conformidade com as recomendações de saúde.'
  },
  {
    id: 'proj24',
    title: 'Instalação de Unidade Inverter de Alta Eficiência',
    category: 'Instalação',
    location: 'São Francisco, Niterói',
    image: 'https://i.postimg.cc/DzzGFy3N/b.jpg',
    description: 'Montagem e conexão de evaporadora Split Inverter de alto desempenho energético, com teste de estanqueidade integrado.'
  },
  {
    id: 'proj25',
    title: 'Limpeza de Filtros e Turbina Tangencial',
    category: 'Limpeza',
    location: 'Santa Rosa, Niterói',
    image: 'https://i.postimg.cc/DzzGFy3Y/c.jpg',
    description: 'Remoção de sujidade incrustada na turbina e filtros de ar de evaporadora residencial, devolvendo excelente fluxo de vento.'
  },
  {
    id: 'proj26',
    title: 'Instalação Técnica de Condensadora de Cobre',
    category: 'Instalação',
    location: 'Piratininga, Niterói',
    image: 'https://i.postimg.cc/CKK8YLpX/d.jpg',
    description: 'Posicionamento e conexões de tubulação de cobre isolada em condensadora externa de ar-condicionado, com perfeito acabamento.'
  },
  {
    id: 'proj27',
    title: 'Manutenção e Higienização Química Antibacteriana',
    category: 'Limpeza/higienização',
    location: 'Camboinhas, Niterói',
    image: 'https://i.postimg.cc/wBBNHTYG/e.jpg',
    description: 'Desinfecção química profunda das serpentinas com eliminadores bactericidas biodegradáveis que garantem o ar livre de fungos e mofo.'
  },
  {
    id: 'proj28',
    title: 'Limpeza e Conservação da Unidade Externa',
    category: 'Limpeza',
    location: 'Fonseca, Niterói',
    image: 'https://i.postimg.cc/W44ZjbPv/f.jpg',
    description: 'Remoção física de poeira e oxidação nas aletas trocadoras de calor do bloco de condensação, melhorando a capacidade térmica.'
  },
  {
    id: 'proj29',
    title: 'Instalação de Sistema Multi-Split Modular',
    category: 'Instalação',
    location: 'Jardim Icaraí, Niterói',
    image: 'https://i.postimg.cc/KYYTFvyb/g.jpg',
    description: 'Passagem técnica e conexões de linha frigorígena para climatização multi-ambiente com controle independente de temperatura.'
  },
  {
    id: 'proj30',
    title: 'Higienização Profunda da Caixa de Ar e Dreno',
    category: 'Limpeza/higienização',
    location: 'Charitas, Niterói',
    image: 'https://i.postimg.cc/KYYTFvyX/h.jpg',
    description: 'Lavagem interna total com aplicação de bactericida e desobstrução da linha de drenagem de condensado, eliminando transbordamentos.'
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
