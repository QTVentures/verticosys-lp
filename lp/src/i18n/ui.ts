export const languages = {
  pt: 'Português',
  en: 'English',
} as const;

export const defaultLang = 'pt';

export type Lang = keyof typeof languages;

// Slugs das páginas por idioma
export const routes = {
  terms: { pt: '/termosdeuso', en: '/en/termsofuse' },
  privacy: { pt: '/politicadeprivacidade', en: '/en/privacypolicy' },
  home: { pt: '/', en: '/en/' },
} as const;

export const ui = {
  pt: {
    // ---------- meta ----------
    'meta.title': 'VerticoSys — Controle financeiro sem pontos cegos',
    'meta.description':
      'A VerticoSys centraliza processos, aprovações, cobranças e informações financeiras em um único ambiente. Controle operacional, rastreabilidade e clareza para decisões com confiança.',
    'meta.terms.title': 'Termos de Uso — VerticoSys',
    'meta.terms.description':
      'Termos de Uso da plataforma VerticoSys, operada por Anitec Tecnologia em Sistemas de Informações Ltda.',
    'meta.privacy.title': 'Política de Privacidade — VerticoSys',
    'meta.privacy.description':
      'Como a VerticoSys coleta, utiliza, compartilha e protege dados pessoais, nos termos da LGPD (Lei nº 13.709/2018).',

    // ---------- nav ----------
    'nav.platform': 'Plataforma',
    'nav.features': 'Recursos',
    'nav.governance': 'Governança',
    'nav.pricing': 'Planos',
    'nav.results': 'Resultados',
    'nav.terms': 'Termos',
    'nav.login': 'Entrar',
    'nav.cta': 'Agendar demonstração',
    'nav.home': 'VerticoSys — início',

    // ---------- hero ----------
    'hero.title1': 'Controle financeiro',
    'hero.title2': 'sem pontos cegos.',
    'hero.sub':
      'Visibilidade, governança e inteligência para operações que exigem precisão. A VerticoSys centraliza processos, aprovações, cobranças e indicadores em um único ambiente.',
    'hero.cta': 'Agendar demonstração',
    'hero.link': 'Conhecer a plataforma',

    // ---------- mockup ----------
    'mock.alt':
      'Interface da plataforma VerticoSys: painel financeiro com indicadores, fluxo de aprovações e fluxo de caixa',
    'mock.nav.overview': 'Visão geral',
    'mock.nav.approvals': 'Aprovações',
    'mock.nav.billing': 'Cobranças',
    'mock.nav.reconciliation': 'Conciliação',
    'mock.nav.reports': 'Relatórios',
    'mock.nav.audit': 'Auditoria',
    'mock.title': 'Visão geral · Julho 2026',
    'mock.badge': 'Atualizado agora',
    'mock.kpi1.label': 'Saldo consolidado',
    'mock.kpi1.delta': '+3,2% vs. jun',
    'mock.kpi2.label': 'A receber (30d)',
    'mock.kpi2.delta': '98,1% conciliado',
    'mock.kpi3.label': 'Aprovações pendentes',
    'mock.kpi3.delta': '4 críticas',
    'mock.kpi4.label': 'Inadimplência',
    'mock.kpi4.delta': '-0,4 p.p.',
    'mock.chart.title': 'Fluxo de caixa projetado',
    'mock.chart.meta': '90 dias',
    'mock.flow.title': 'Fluxo de aprovações',
    'mock.flow.meta': 'Hoje',
    'mock.row1': 'Pagamento fornecedor — R$ 84.200',
    'mock.row2': 'Contrato anual — R$ 312.000',
    'mock.row3': 'Reembolso diretoria — R$ 6.180',
    'mock.row4': 'Renovação SaaS — R$ 48.900',
    'mock.tag.approved': 'Aprovado',
    'mock.tag.review': 'Em análise',
    'mock.tag.waiting': 'Aguardando',

    // ---------- logos ----------
    'logos.label': 'Escolhida por equipes financeiras que operam com precisão',

    // ---------- statement ----------
    'statement.text':
      'Uma nova categoria de gestão financeira. Construída para empresas que operam em ambientes complexos, a VerticoSys define um novo padrão de controle, governança e visibilidade — transformando rotinas fragmentadas em fluxos estruturados, auditáveis e escaláveis.',

    // ---------- figs ----------
    'figs.1.label': 'Controle',
    'figs.1.title': 'Feita para controle',
    'figs.1.text':
      'Camadas de contas, aprovações e indicadores consolidadas em uma única visão operacional.',
    'figs.2.label': 'Governança',
    'figs.2.title': 'Automação com governança',
    'figs.2.text':
      'Fluxos conectados por regras e alçadas — cada etapa registrada, nada fora do processo.',
    'figs.3.label': 'Precisão',
    'figs.3.title': 'Desenhada para precisão',
    'figs.3.text':
      'Menos ruído, mais rastreabilidade: números confiáveis para decisões que não admitem erro.',

    // ---------- features ----------
    'feat.head.title1': 'Mova a operação',
    'feat.head.title2': 'financeira para frente.',
    'feat.head.text':
      'Centralize processos, aprovações, cobranças e indicadores. Menos consolidação manual, mais controle operacional — com rastreabilidade em cada etapa.',
    'feat.head.link': 'Explorar',

    'feat.1.label': 'Controle financeiro',
    'feat.1.title': 'Toda a operação em um único ambiente.',
    'feat.1.text':
      'Informações dispersas geram risco e ineficiência. A VerticoSys conecta dados, processos e indicadores para proporcionar visibilidade completa sobre a operação financeira — do saldo consolidado à última aprovação.',
    'feat.1.li1': 'Centralização de contas, cobranças e pagamentos',
    'feat.1.li2': 'Indicadores consolidados em tempo real',
    'feat.1.li3': 'Visão única por empresa, área ou centro de custo',
    'feat.1.card': 'Consolidação por unidade',
    'feat.1.unit1': 'Matriz São Paulo',
    'feat.1.unit2': 'Filial Campinas',
    'feat.1.unit3': 'Filial Curitiba',
    'feat.1.unit4': 'Operações digitais',

    'feat.2.label': 'Eficiência e automação',
    'feat.2.title': 'Menos etapas manuais. Mais fluxo.',
    'feat.2.text':
      'Rotinas fragmentadas viram fluxos estruturados, auditáveis e escaláveis. Aprovações, conciliações e cobranças seguem regras definidas pela sua governança — sem controles paralelos nem consolidação manual.',
    'feat.2.li1': 'Fluxos de aprovação com alçadas configuráveis',
    'feat.2.li2': 'Conciliação automática de recebimentos',
    'feat.2.li3': 'Régua de cobrança estruturada e rastreável',
    'feat.2.card': 'Fluxo de aprovação ·',
    'feat.2.step1': 'Solicitação criada',
    'feat.2.step1meta': 'Ana Ribeiro · Financeiro',
    'feat.2.step2': 'Validação orçamentária',
    'feat.2.step2meta': 'Automática · dentro da alçada',
    'feat.2.step3': 'Aprovação da controladoria',
    'feat.2.step3meta': 'Pendente · SLA 4h',
    'feat.2.step4': 'Liquidação programada',
    'feat.2.step4meta': 'Agendamento automático',

    'feat.3.label': 'Inteligência para decisão',
    'feat.3.title': 'Dados operacionais viram decisão estratégica.',
    'feat.3.text':
      'Transformamos dados dispersos em indicadores e informações que apoiam a tomada de decisão. Relatórios conectam números, processos e aprovações ao que realmente importa: crescer com risco controlado.',
    'feat.3.li1': 'Projeção de fluxo de caixa por cenário',
    'feat.3.li2': 'Indicadores de inadimplência e ciclo financeiro',
    'feat.3.li3': 'Relatórios prontos para diretoria e conselho',
    'feat.3.card': 'Indicadores do período',
    'feat.3.stat1': 'Conciliação automática',
    'feat.3.stat2': 'Ciclo médio de aprovação',
    'feat.3.stat3': 'Esforço operacional',
    'feat.3.stat4': 'Ações rastreáveis',

    // ---------- governance ----------
    'gov.label': 'Governança e compliance',
    'gov.title': 'Rastreabilidade completa, por padrão.',
    'gov.text':
      'Todas as ações realizadas na plataforma possuem rastreabilidade completa: histórico de alterações, aprovações e movimentações disponíveis para auditoria e conformidade operacional.',
    'gov.img.alt':
      'Edifícios corporativos vistos de baixo, transmitindo solidez e governança',
    'gov.p1.title': 'Trilha de auditoria',
    'gov.p1.text':
      'Cada movimentação registra autor, data e contexto — nada acontece fora do histórico.',
    'gov.p2.title': 'Alçadas e permissões',
    'gov.p2.text':
      'Papéis e limites de aprovação definidos pela sua estrutura de governança.',
    'gov.p3.title': 'Consistência de dados',
    'gov.p3.text':
      'Uma única fonte de verdade para números que sustentam decisões críticas.',

    // ---------- results ----------
    'res.label': 'Resultados',
    'res.title': 'Impacto real na operação financeira.',
    'res.m1': 'de tempo dedicado à consolidação manual de dados no fechamento mensal.',
    'res.m2': 'mais agilidade no ciclo de aprovações com alçadas automatizadas.',
    'res.m3': 'das movimentações com trilha de auditoria disponível para compliance.',
    'res.quote':
      '"A VerticoSys nos deu o que planilha nenhuma dava: uma única visão da operação, com rastreabilidade de ponta a ponta. O fechamento deixou de ser um evento e virou rotina."',
    'res.quote.name': 'Diretora Financeira',
    'res.quote.role': 'Grupo do setor de serviços B2B · 1.200 colaboradores',

    // ---------- cta ----------
    'cta.title1': 'Controle para quem decide.',
    'cta.title2': 'Visibilidade para quem lidera.',
    'cta.text':
      'Veja como a VerticoSys estrutura aprovações, cobranças e indicadores na realidade da sua operação — em uma demonstração guiada de 30 minutos.',
    'cta.placeholder': 'Seu e-mail corporativo',
    'cta.button': 'Agendar demonstração',
    'cta.note': 'Sem compromisso. Direto com nosso time de especialistas.',

    // ---------- pricing ----------
    'price.label': 'Planos',
    'price.title1': 'A plataforma certa,',
    'price.title2': 'no plano certo.',
    'price.sub':
      'A cobrança é por usuário. O faturamento anual da sua empresa não gera custo adicional — ele apenas define em qual plano você se enquadra no onboarding.',
    'price.toggle.monthly': 'Mensal',
    'price.toggle.yearly': 'Anual',
    'price.toggle.save': 'Economize até 20% no plano anual',
    'price.per': 'por usuário/mês',
    'price.billedMonthly': 'faturado mensalmente',
    'price.billedYearly': 'faturado anualmente',
    'price.off': 'de desconto',
    'price.minUsers': 'Mínimo de {n} usuários',
    'price.floor': 'Fatura mínima de {v}/mês',
    'price.custom.value': 'Proposta dedicada',
    'price.custom.sub': 'condições definidas em contrato',
    'price.custom.users': 'Conforme o escopo',
    'price.custom.invoice': 'Definida em proposta',
    'price.cta': 'Agendar demonstração',
    'price.cta.custom': 'Falar com vendas',
    'price.features.first': 'PRINCIPAIS RECURSOS:',
    'price.features.plus': 'TUDO DO {plan}, MAIS:',
    'price.features.custom': 'ATENDIMENTO SOB MEDIDA:',
    'price.note.title': 'Sobre os valores',
    'price.note.1':
      'O faturamento anual funciona apenas como critério de enquadramento no onboarding — a cobrança recorrente é 100% baseada no número de usuários ativos.',
    'price.note.2':
      'Tarifas de transação (PIX, boleto, câmbio, cartão e criptoativos) não estão incluídas na mensalidade e são cobradas à parte pelos parceiros de rails financeiros, com valores informados na plataforma antes de cada operação.',
    'price.note.3':
      'Valores em US$ são referência informativa para clientes internacionais; a cobrança é realizada em reais. Cotação de referência: R$ 5,10 (27/07/2026).',
    'price.note.4':
      '*Transações em criptoativos e expansões internacionais são liberadas gradualmente, conforme disponibilidade regulatória. Remessa internacional automatizada e folha internacional integram o roadmap e não estão disponíveis hoje.',
    'price.note.5':
      'Preços de referência sujeitos a validação comercial. Condições definitivas constam em proposta e contrato.',

    // ---------- footer ----------
    'footer.tagline':
      'Controle, visibilidade e organização para operações financeiras complexas.',
    'footer.col1': 'Plataforma',
    'footer.col1.a': 'Controle financeiro',
    'footer.col1.b': 'Automação',
    'footer.col1.c': 'Governança',
    'footer.col1.d': 'Resultados',
    'footer.col2': 'Empresa',
    'footer.col2.a': 'Sobre a VerticoSys',
    'footer.col2.b': 'Segurança',
    'footer.col2.c': 'Carreiras',
    'footer.col2.d': 'Contato',
    'footer.col3': 'Recursos',
    'footer.col3.a': 'Central de ajuda',
    'footer.col3.b': 'Documentação',
    'footer.col3.c': 'Política de privacidade',
    'footer.col3.d': 'Termos de uso',
    'footer.company.title': 'Dados da empresa',
    'footer.company.note': 'A VerticoSys é uma plataforma de',
    'footer.rights': 'Todos os direitos reservados.',
    'footer.made': 'Feito para equipes que exigem precisão.',

    // ---------- termos ----------
    'terms.eyebrow': 'Documento legal',
    'terms.title': 'Termos de Uso',
    'terms.updated': 'Última atualização: julho de 2026',
    'terms.notice':
      'Este documento é uma versão preliminar. O texto definitivo dos Termos de Uso será publicado nesta mesma página.',
    'terms.back': 'Voltar para a página inicial',
    'terms.s1.title': '1. Aceitação dos termos',
    'terms.s1.text':
      'Ao acessar ou utilizar a plataforma VerticoSys, o usuário declara ter lido, compreendido e aceito integralmente as condições descritas neste documento. O uso da plataforma está condicionado a essa aceitação.',
    'terms.s2.title': '2. Descrição do serviço',
    'terms.s2.text':
      'A VerticoSys é uma plataforma de gestão financeira corporativa que centraliza processos, aprovações, cobranças e indicadores, oferecendo controle, visibilidade e rastreabilidade sobre operações financeiras.',
    'terms.s3.title': '3. Cadastro e acesso',
    'terms.s3.text':
      'O acesso à plataforma depende de credenciais individuais fornecidas pela contratante. O usuário é responsável pela guarda e pelo uso adequado de suas credenciais, bem como por todas as ações realizadas com elas.',
    'terms.s4.title': '4. Obrigações do usuário',
    'terms.s4.text':
      'O usuário compromete-se a utilizar a plataforma em conformidade com a legislação aplicável e com as políticas internas de sua organização, abstendo-se de práticas que comprometam a segurança, a integridade dos dados ou a disponibilidade do serviço.',
    'terms.s5.title': '5. Dados e confidencialidade',
    'terms.s5.text':
      'O tratamento de dados observa a legislação brasileira de proteção de dados pessoais. Todas as ações realizadas na plataforma possuem registro de autoria, data e contexto, para fins de auditoria e conformidade operacional.',
    'terms.s6.title': '6. Propriedade intelectual',
    'terms.s6.text':
      'A plataforma, sua interface, código-fonte, marcas e demais elementos são de propriedade exclusiva de sua titular, sendo vedada qualquer reprodução, distribuição ou modificação sem autorização prévia e por escrito.',
    'terms.s7.title': '7. Disponibilidade e suporte',
    'terms.s7.text':
      'Os níveis de disponibilidade, janelas de manutenção e condições de suporte são definidos no contrato firmado com a contratante e podem variar conforme o plano contratado.',
    'terms.s8.title': '8. Limitação de responsabilidade',
    'terms.s8.text':
      'A plataforma é uma ferramenta de apoio à gestão financeira e não substitui a análise, a validação e a decisão dos responsáveis pela operação. As decisões tomadas a partir das informações apresentadas são de responsabilidade da contratante.',
    'terms.s9.title': '9. Alterações destes termos',
    'terms.s9.text':
      'Estes termos podem ser atualizados a qualquer momento. Alterações relevantes serão comunicadas pelos canais oficiais, e a versão vigente estará sempre disponível nesta página.',
    'terms.s10.title': '10. Contato',
    'terms.s10.text':
      'Dúvidas sobre estes Termos de Uso podem ser encaminhadas por meio dos dados de contato informados abaixo.',
  },

  en: {
    // ---------- meta ----------
    'meta.title': 'VerticoSys — Financial control with no blind spots',
    'meta.description':
      'VerticoSys centralizes processes, approvals, receivables and financial information in a single environment. Operational control, traceability and clarity for confident decisions.',
    'meta.terms.title': 'Terms of Use — VerticoSys',
    'meta.terms.description':
      'Terms of Use for the VerticoSys platform, operated by Anitec Tecnologia em Sistemas de Informações Ltda.',
    'meta.privacy.title': 'Privacy Policy — VerticoSys',
    'meta.privacy.description':
      'How VerticoSys collects, uses, shares and protects personal data under the Brazilian LGPD (Law No. 13,709/2018).',

    // ---------- nav ----------
    'nav.platform': 'Platform',
    'nav.features': 'Features',
    'nav.governance': 'Governance',
    'nav.pricing': 'Pricing',
    'nav.results': 'Results',
    'nav.terms': 'Terms',
    'nav.login': 'Log in',
    'nav.cta': 'Book a demo',
    'nav.home': 'VerticoSys — home',

    // ---------- hero ----------
    'hero.title1': 'Financial control',
    'hero.title2': 'with no blind spots.',
    'hero.sub':
      'Visibility, governance and intelligence for operations that demand precision. VerticoSys centralizes processes, approvals, receivables and metrics in a single environment.',
    'hero.cta': 'Book a demo',
    'hero.link': 'Explore the platform',

    // ---------- mockup ----------
    'mock.alt':
      'VerticoSys platform interface: financial dashboard with metrics, approval flow and cash flow',
    'mock.nav.overview': 'Overview',
    'mock.nav.approvals': 'Approvals',
    'mock.nav.billing': 'Receivables',
    'mock.nav.reconciliation': 'Reconciliation',
    'mock.nav.reports': 'Reports',
    'mock.nav.audit': 'Audit',
    'mock.title': 'Overview · July 2026',
    'mock.badge': 'Updated just now',
    'mock.kpi1.label': 'Consolidated balance',
    'mock.kpi1.delta': '+3.2% vs. Jun',
    'mock.kpi2.label': 'Receivables (30d)',
    'mock.kpi2.delta': '98.1% reconciled',
    'mock.kpi3.label': 'Pending approvals',
    'mock.kpi3.delta': '4 critical',
    'mock.kpi4.label': 'Delinquency',
    'mock.kpi4.delta': '-0.4 p.p.',
    'mock.chart.title': 'Projected cash flow',
    'mock.chart.meta': '90 days',
    'mock.flow.title': 'Approval flow',
    'mock.flow.meta': 'Today',
    'mock.row1': 'Supplier payment — $84,200',
    'mock.row2': 'Annual contract — $312,000',
    'mock.row3': 'Executive reimbursement — $6,180',
    'mock.row4': 'SaaS renewal — $48,900',
    'mock.tag.approved': 'Approved',
    'mock.tag.review': 'In review',
    'mock.tag.waiting': 'Waiting',

    // ---------- logos ----------
    'logos.label': 'Chosen by finance teams that operate with precision',

    // ---------- statement ----------
    'statement.text':
      'A new category of financial management. Built for companies operating in complex environments, VerticoSys sets a new standard for control, governance and visibility — turning fragmented routines into structured, auditable and scalable flows.',

    // ---------- figs ----------
    'figs.1.label': 'Control',
    'figs.1.title': 'Built for control',
    'figs.1.text':
      'Layers of accounts, approvals and metrics consolidated into a single operational view.',
    'figs.2.label': 'Governance',
    'figs.2.title': 'Automation with governance',
    'figs.2.text':
      'Flows connected by rules and approval limits — every step recorded, nothing outside the process.',
    'figs.3.label': 'Precision',
    'figs.3.title': 'Designed for precision',
    'figs.3.text':
      'Less noise, more traceability: reliable numbers for decisions that leave no room for error.',

    // ---------- features ----------
    'feat.head.title1': 'Move the financial',
    'feat.head.title2': 'operation forward.',
    'feat.head.text':
      'Centralize processes, approvals, receivables and metrics. Less manual consolidation, more operational control — with traceability at every step.',
    'feat.head.link': 'Explore',

    'feat.1.label': 'Financial control',
    'feat.1.title': 'The entire operation in a single environment.',
    'feat.1.text':
      'Scattered information creates risk and inefficiency. VerticoSys connects data, processes and metrics to deliver complete visibility over the financial operation — from the consolidated balance to the latest approval.',
    'feat.1.li1': 'Centralized accounts, receivables and payments',
    'feat.1.li2': 'Consolidated metrics in real time',
    'feat.1.li3': 'A single view by company, department or cost center',
    'feat.1.card': 'Consolidation by unit',
    'feat.1.unit1': 'São Paulo HQ',
    'feat.1.unit2': 'Campinas branch',
    'feat.1.unit3': 'Curitiba branch',
    'feat.1.unit4': 'Digital operations',

    'feat.2.label': 'Efficiency and automation',
    'feat.2.title': 'Fewer manual steps. More flow.',
    'feat.2.text':
      'Fragmented routines become structured, auditable and scalable flows. Approvals, reconciliations and collections follow rules defined by your governance — with no parallel controls or manual consolidation.',
    'feat.2.li1': 'Approval flows with configurable limits',
    'feat.2.li2': 'Automatic reconciliation of incoming payments',
    'feat.2.li3': 'Structured, traceable collection cadence',
    'feat.2.card': 'Approval flow ·',
    'feat.2.step1': 'Request created',
    'feat.2.step1meta': 'Ana Ribeiro · Finance',
    'feat.2.step2': 'Budget validation',
    'feat.2.step2meta': 'Automatic · within limit',
    'feat.2.step3': 'Controller approval',
    'feat.2.step3meta': 'Pending · 4h SLA',
    'feat.2.step4': 'Scheduled settlement',
    'feat.2.step4meta': 'Automatic scheduling',

    'feat.3.label': 'Intelligence for decisions',
    'feat.3.title': 'Operational data becomes strategic decisions.',
    'feat.3.text':
      'We turn scattered data into metrics and insights that support decision-making. Reports connect numbers, processes and approvals to what really matters: growing with controlled risk.',
    'feat.3.li1': 'Cash flow projection by scenario',
    'feat.3.li2': 'Delinquency and financial cycle metrics',
    'feat.3.li3': 'Reports ready for executives and the board',
    'feat.3.card': 'Metrics for the period',
    'feat.3.stat1': 'Automatic reconciliation',
    'feat.3.stat2': 'Average approval cycle',
    'feat.3.stat3': 'Operational effort',
    'feat.3.stat4': 'Traceable actions',

    // ---------- governance ----------
    'gov.label': 'Governance and compliance',
    'gov.title': 'Complete traceability, by default.',
    'gov.text':
      'Every action performed on the platform is fully traceable: change history, approvals and transactions available for audit and operational compliance.',
    'gov.img.alt':
      'Corporate buildings seen from below, conveying solidity and governance',
    'gov.p1.title': 'Audit trail',
    'gov.p1.text':
      'Every transaction records author, date and context — nothing happens outside the history.',
    'gov.p2.title': 'Limits and permissions',
    'gov.p2.text':
      'Roles and approval thresholds defined by your governance structure.',
    'gov.p3.title': 'Data consistency',
    'gov.p3.text': 'A single source of truth for the numbers behind critical decisions.',

    // ---------- results ----------
    'res.label': 'Results',
    'res.title': 'Real impact on the financial operation.',
    'res.m1': 'less time spent on manual data consolidation during monthly close.',
    'res.m2': 'faster approval cycles with automated approval limits.',
    'res.m3': 'of transactions with an audit trail available for compliance.',
    'res.quote':
      '"VerticoSys gave us what no spreadsheet could: a single view of the operation, with end-to-end traceability. Closing the month stopped being an event and became routine."',
    'res.quote.name': 'Chief Financial Officer',
    'res.quote.role': 'B2B services group · 1,200 employees',

    // ---------- cta ----------
    'cta.title1': 'Control for those who decide.',
    'cta.title2': 'Visibility for those who lead.',
    'cta.text':
      'See how VerticoSys structures approvals, receivables and metrics in the reality of your operation — in a guided 30-minute demo.',
    'cta.placeholder': 'Your work email',
    'cta.button': 'Book a demo',
    'cta.note': 'No commitment. Straight to our specialist team.',

    // ---------- pricing ----------
    'price.label': 'Pricing',
    'price.title1': 'The right platform,',
    'price.title2': 'on the right plan.',
    'price.sub':
      'Pricing is per user. Your company’s annual revenue adds no cost — it only defines which plan you qualify for during onboarding.',
    'price.toggle.monthly': 'Monthly',
    'price.toggle.yearly': 'Yearly',
    'price.toggle.save': 'Save up to 20% with yearly billing',
    'price.per': 'per user/month',
    'price.billedMonthly': 'billed monthly',
    'price.billedYearly': 'billed yearly',
    'price.off': 'off',
    'price.minUsers': 'Minimum of {n} users',
    'price.floor': 'Minimum invoice of {v}/month',
    'price.custom.value': 'Dedicated proposal',
    'price.custom.sub': 'terms defined by contract',
    'price.custom.users': 'Based on scope',
    'price.custom.invoice': 'Defined in the proposal',
    'price.cta': 'Book a demo',
    'price.cta.custom': 'Contact sales',
    'price.features.first': 'KEY FEATURES:',
    'price.features.plus': 'EVERYTHING IN {plan}, PLUS:',
    'price.features.custom': 'TAILORED ENGAGEMENT:',
    'price.note.title': 'About these figures',
    'price.note.1':
      'Annual revenue is only a qualification criterion during onboarding — recurring billing is based entirely on the number of active users.',
    'price.note.2':
      'Transaction fees (PIX, boleto, FX, cards and crypto assets) are not included in the subscription and are charged separately by the financial rails partners, with amounts shown in the platform before each operation.',
    'price.note.3':
      'USD amounts are informational references for international clients; billing is performed in Brazilian reais. Reference rate: R$5.10 (Jul 27, 2026).',
    'price.note.4':
      '*Crypto asset transactions and international expansion are released gradually, subject to regulatory availability. Automated international remittance and international payroll are on the roadmap and are not available today.',
    'price.note.5':
      'Reference prices subject to commercial validation. Final terms are set out in the proposal and agreement.',

    // ---------- footer ----------
    'footer.tagline':
      'Control, visibility and structure for complex financial operations.',
    'footer.col1': 'Platform',
    'footer.col1.a': 'Financial control',
    'footer.col1.b': 'Automation',
    'footer.col1.c': 'Governance',
    'footer.col1.d': 'Results',
    'footer.col2': 'Company',
    'footer.col2.a': 'About VerticoSys',
    'footer.col2.b': 'Security',
    'footer.col2.c': 'Careers',
    'footer.col2.d': 'Contact',
    'footer.col3': 'Resources',
    'footer.col3.a': 'Help center',
    'footer.col3.b': 'Documentation',
    'footer.col3.c': 'Privacy policy',
    'footer.col3.d': 'Terms of use',
    'footer.company.title': 'Company information',
    'footer.company.note': 'VerticoSys is a platform by',
    'footer.rights': 'All rights reserved.',
    'footer.made': 'Built for teams that demand precision.',

    // ---------- terms ----------
    'terms.eyebrow': 'Legal document',
    'terms.title': 'Terms of Use',
    'terms.updated': 'Last updated: July 2026',
    'terms.notice':
      'This document is a preliminary version. The final Terms of Use will be published on this same page.',
    'terms.back': 'Back to home',
    'terms.s1.title': '1. Acceptance of terms',
    'terms.s1.text':
      'By accessing or using the VerticoSys platform, the user declares having read, understood and fully accepted the conditions described in this document. Use of the platform is conditioned upon such acceptance.',
    'terms.s2.title': '2. Service description',
    'terms.s2.text':
      'VerticoSys is a corporate financial management platform that centralizes processes, approvals, receivables and metrics, providing control, visibility and traceability over financial operations.',
    'terms.s3.title': '3. Registration and access',
    'terms.s3.text':
      'Access to the platform depends on individual credentials provided by the contracting party. The user is responsible for safeguarding and properly using their credentials, as well as for all actions performed with them.',
    'terms.s4.title': '4. User obligations',
    'terms.s4.text':
      'The user agrees to use the platform in compliance with applicable law and with their organization’s internal policies, refraining from practices that compromise security, data integrity or service availability.',
    'terms.s5.title': '5. Data and confidentiality',
    'terms.s5.text':
      'Data processing complies with Brazilian personal data protection legislation. All actions performed on the platform record authorship, date and context for audit and operational compliance purposes.',
    'terms.s6.title': '6. Intellectual property',
    'terms.s6.text':
      'The platform, its interface, source code, trademarks and other elements are the exclusive property of their owner. Any reproduction, distribution or modification without prior written authorization is prohibited.',
    'terms.s7.title': '7. Availability and support',
    'terms.s7.text':
      'Availability levels, maintenance windows and support conditions are defined in the agreement signed with the contracting party and may vary according to the contracted plan.',
    'terms.s8.title': '8. Limitation of liability',
    'terms.s8.text':
      'The platform is a financial management support tool and does not replace the analysis, validation and judgment of those responsible for the operation. Decisions made based on the information presented are the responsibility of the contracting party.',
    'terms.s9.title': '9. Changes to these terms',
    'terms.s9.text':
      'These terms may be updated at any time. Material changes will be communicated through official channels, and the current version will always be available on this page.',
    'terms.s10.title': '10. Contact',
    'terms.s10.text':
      'Questions about these Terms of Use may be sent using the contact information provided below.',
  },
} as const;

export const company = {
  legalName: 'ANITEC TECNOLOGIA EM SISTEMAS DE INFORMAÇÕES LTDA',
  cnpj: '41.522.323/0001-22',
  address: 'Av. Brig. Faria Lima, 1811 — São Paulo, Brasil',
  phone: '(43) 9934-0064',
  phoneHref: '+5543993400064',
} as const;
