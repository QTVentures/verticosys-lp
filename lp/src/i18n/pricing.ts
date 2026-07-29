// Dados de precificação — baseados em "VerticoSys_Precificacao_Esboco.docx" (jul/2026).
// Cobrança exclusivamente por usuário. O faturamento anual NÃO gera cobrança:
// serve apenas como critério de enquadramento no plano durante o onboarding.

export type Plan = {
  id: string;
  name: { pt: string; en: string };
  letter: string;
  popular?: boolean;
  custom?: boolean;
  /** faixa de faturamento anual (enquadramento) */
  revenue: { pt: string; en: string };
  minUsers?: number;
  /** por usuário/mês */
  monthly?: { brl: number; usd: number };
  /** por usuário/mês no plano anual */
  yearly?: { brl: number; usd: number; off: number };
  /** piso de fatura mensal */
  floor?: { brl: number; usd: number };
  features: { pt: string[]; en: string[] };
};

export const plans: Plan[] = [
  {
    id: 'starter',
    letter: 'A',
    name: { pt: 'Starter', en: 'Starter' },
    revenue: { pt: 'R$ 1M – R$ 10M de faturamento anual', en: '$1M – $10M in annual revenue' },
    minUsers: 5,
    monthly: { brl: 249, usd: 49 },
    yearly: { brl: 212, usd: 42, off: 15 },
    floor: { brl: 1245, usd: 244 },
    features: {
      pt: [
        'Até 3 workspaces por entidade',
        'Contas bancárias nacionais integradas',
        'Conciliação financeira automática',
        'Fluxos de aprovação com alçadas',
        'Pagamentos via PIX e boleto',
        'Trilha de auditoria completa',
        'Perfis de permissão por usuário',
        'Suporte por e-mail',
      ],
      en: [
        'Up to 3 workspaces per entity',
        'Integrated domestic bank accounts',
        'Automatic financial reconciliation',
        'Approval flows with limits',
        'PIX and boleto payments',
        'Complete audit trail',
        'Per-user permission profiles',
        'Email support',
      ],
    },
  },
  {
    id: 'growth',
    letter: 'B',
    popular: true,
    name: { pt: 'Growth', en: 'Growth' },
    revenue: { pt: 'R$ 10M – R$ 40M de faturamento anual', en: '$10M – $40M in annual revenue' },
    minUsers: 8,
    monthly: { brl: 349, usd: 68 },
    yearly: { brl: 297, usd: 58, off: 15 },
    floor: { brl: 2792, usd: 547 },
    features: {
      pt: [
        'Workspaces ilimitados',
        'Contas nacionais e internacionais',
        'Conciliação multi-moeda',
        'Transferências entre contas e entidades',
        'Folha de pagamento doméstica (mass payments)',
        'Indicadores consolidadas do grupo',
        'Relatórios para diretoria e conselho',
        'Suporte prioritário',
      ],
      en: [
        'Unlimited workspaces',
        'Domestic and international accounts',
        'Multi-currency reconciliation',
        'Transfers between accounts and entities',
        'Domestic payroll (mass payments)',
        'Consolidated group metrics',
        'Reports for executives and the board',
        'Priority support',
      ],
    },
  },
  {
    id: 'enterprise',
    letter: 'C',
    name: { pt: 'Enterprise', en: 'Enterprise' },
    revenue: { pt: 'R$ 40M – R$ 100M de faturamento anual', en: '$40M – $100M in annual revenue' },
    minUsers: 12,
    monthly: { brl: 499, usd: 98 },
    yearly: { brl: 399, usd: 78, off: 20 },
    floor: { brl: 5988, usd: 1174 },
    features: {
      pt: [
        'Governança multi-entidade avançada',
        'Transações em criptoativos',
        'Alçadas e políticas por entidade',
        'Log de auditoria estendido',
        'Integrações e API dedicada',
        'Onboarding assistido',
        'Gerente de conta dedicado',
        'SLA definido em contrato',
      ],
      en: [
        'Advanced multi-entity governance',
        'Crypto asset transactions',
        'Approval limits and policies per entity',
        'Extended audit log',
        'Integrations and dedicated API',
        'Assisted onboarding',
        'Dedicated account manager',
        'SLA defined by contract',
      ],
    },
  },
  {
    id: 'custom',
    letter: 'D',
    custom: true,
    name: { pt: 'Sob medida', en: 'Custom' },
    revenue: { pt: 'Acima de R$ 100M ou estruturas específicas', en: 'Above $100M or specific structures' },
    features: {
      pt: [
        'Modelo comercial desenhado caso a caso',
        'Estruturas com múltiplos grupos econômicos',
        'Requisitos regulatórios específicos',
        'Integrações sob demanda',
        'Condições de SLA negociadas',
      ],
      en: [
        'Commercial model designed case by case',
        'Structures with multiple economic groups',
        'Specific regulatory requirements',
        'On-demand integrations',
        'Negotiated SLA terms',
      ],
    },
  },
];
