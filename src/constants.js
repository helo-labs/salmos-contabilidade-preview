/**
 * ─── CONFIGURAÇÃO CENTRAL ───────────────────────────────────────────────────
 * Edite aqui para atualizar número do WhatsApp, endereço, redes sociais
 * e todos os textos de conteúdo da landing page.
 * ────────────────────────────────────────────────────────────────────────────
 */
import { yearsActive, YEARS_LABEL, YEARS_MARKET, FOUNDED_YEAR, YEARS_ONLY } from './yearsActive'
export { yearsActive, YEARS_LABEL, YEARS_MARKET, FOUNDED_YEAR, YEARS_ONLY }

// ── WhatsApp ────────────────────────────────────────────────────────────────
export const WA_NUMBER = '5511911612386'

export const wa = (msg) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`

export const WA_MSG = {
  generic: 'Olá! Gostaria de conversar com um especialista da Salmos Contabilidade!',
  meeting: 'Olá! Gostaria de agendar uma conversa com a equipe da Salmos Contabilidade.',
  service: (title) => `Olá! Gostaria de saber mais sobre o serviço de "${title}" da Salmos Contabilidade.`,
}

// ── Informações de contato ───────────────────────────────────────────────────
export const CONTACT = {
  address: 'Rua Afonso Sardinha, 407 - Lapa, São Paulo — SP',
  phone:   '+55 (11) 3832-9872',
  email:   ' Marcio.bueno@salmoscontabilidade.com.br',
  hours:   'Segunda a Sexta — 09h às 18h',
  cnpj:    '10.606.116/0001-22',
 
}

// ── Redes sociais ────────────────────────────────────────────────────────────
export const SOCIAL = {
  facebook:  'https://www.facebook.com/people/Salmos-Contabilidade/61561900026036/',
  instagram: 'https://www.instagram.com/salmos_contabilidade',
  linkedin:  'https://www.linkedin.com/in/salmoscontabilidade/',
}

// ── Hero — diferenciais qualitativos (substituem) ────────────
export const HERO_PILLARS = [
  { label: `Desde ${FOUNDED_YEAR}`, desc: `Construindo relações de confiança` },
  { label: 'Consultivo',            desc: 'Suporte além da obrigação fiscal' },
  { label: 'Contínuo',              desc: 'Acompanhamento durante todo o ano' },
]

// ── Checklist principal do hero (coluna esquerda) ────────────────────────────
export const HERO_CHECKS = [
  {
    title: `${YEARS_MARKET} de atuação`,
    desc:  'Experiência consolidada atendendo empresas de diferentes portes e segmentos.',
  },
  {
    title: 'Contabilidade consultiva',
    desc:  'Não entregamos apenas números, entregamos clareza para você tomar decisões melhores.',
  },
  {
    title: 'Suporte contínuo',
    desc:  'Presença ativa ao longo do ano inteiro, não apenas no período do IR.',
  },
]

// ── Card de credenciais do hero (coluna direita) ─────────────────────────────
export const HERO_CARD_CHECKS = [
  {
    title: 'Menos Impostos',
    desc: 'Planejamento tributário para reduzir a carga fiscal dentro da legislação.',
  },
  {
    title: 'Menos Riscos',
    desc: 'Conformidade fiscal, contábil e trabalhista para evitar problemas futuros.',
  },
  {
    title: 'Mais Controle',
    desc: 'Informações claras para decisões mais seguras e estratégicas.',
    
  },
]

// ── Serviços ──────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    id:    'tributaria',
    badge: 'Pague Menos, Legalmente',
    icon:  'TrendingDown',
    title: 'Planejamento Tributário',
    description:
      'Análise do enquadramento da sua empresa para identificar o regime tributário mais vantajoso e reduzir a carga fiscal de forma legal.',
    points: [
      'Comparativo entre Simples Nacional, Lucro Presumido e Lucro Real',
      'Identificação de créditos fiscais e impostos pagos a maior',
      'Prevenção de multas e inconformidades com o fisco',
      'Revisão periódica conforme crescimento da empresa',
    ],
  },
  {
    id:    'contabilidade',
    badge: 'Base do Negócio',
    icon:  'BookOpen',
    title: 'Contabilidade Empresarial',
    description:
      'Escrituração completa, demonstrativos financeiros e obrigações acessórias entregues com precisão e dentro dos prazos.',
    points: [
      'Escrituração contábil e fiscal completa',
      'Elaboração de balancetes, balanço patrimonial e DRE',
      'Entrega de obrigações acessórias (SPED, ECF, ECD)',
      'Relatórios de desempenho financeiro em linguagem clara',
    ],
  },
  {
    id:    'abertura',
    badge: 'Começa do Jeito Certo',
    icon:  'FilePlus',
    title: 'Abertura e Alteração de Empresas',
    description:
      'Abertura, alteração e regularização de CNPJs com orientação sobre CNAE, regime tributário e estrutura jurídica desde o início.',
    points: [
      'Estudo de viabilidade de nome, CNAE e endereço municipal',
      'Contrato Social personalizado e registro na Junta Comercial',
      'Inscrição Estadual e Municipal para emissão de Nota Fiscal',
      'Adequação às novas exigências de codificação IBGE/IBPT',
    ],
  },
  {
    id:    'folha',
    badge: 'Sem Complicação',
    icon:  'Users',
    title: 'Folha de Pagamento e RH',
    description:
      'Gestão da folha de pagamento, encargos trabalhistas e conformidade com a CLT para que você foque no seu negócio.',
    points: [
      'Processamento mensal de folha e holerites',
      'Apuração e recolhimento de FGTS, INSS e IRRF',
      'Rescisões, férias e 13º calculados corretamente',
      'Suporte em admissões, desligamentos e obrigações do eSocial',
    ],
  },
  {
    id:    'ir',
    badge: 'Pessoa Física e Jurídica',
    icon:  'FileText',
    title: 'Declaração de Imposto de Renda',
    description:
      'Preparação e envio da declaração de IR para pessoas físicas e jurídicas, maximizando deduções e evitando erros que geram malha fina.',
    points: [
      'Declaração de IRPF — profissionais liberais, autônomos e assalariados',
      'Declaração de IRPJ e obrigações acessórias para empresas',
      'Revisão de rendimentos, deduções e bens declarados',
      'Retificação de declarações de anos anteriores',
    ],
  },
  {
    id:    'consultoria',
    badge: 'Visão Estratégica',
    icon:  'Briefcase',
    title: 'Consultoria de Gestão e Finanças',
    description:
      'Análise financeira, fluxo de caixa, indicadores de desempenho e orientação estratégica para empresas que querem crescer com segurança.',
    points: [
      'Diagnóstico financeiro e análise de indicadores do negócio',
      'Gestão e projeção de fluxo de caixa',
      'Orientação para tomada de decisão com base em dados reais',
      'Suporte em reorganização societária e distribuição de lucros',
    ],
  },
]

// ── Diferenciais (seção "Por que a Salmos?") ─────────────────────────────────
export const PILLARS = [
  {
    icon:        'TrendingDown',
    color:       'gold',
    title:       'Redução de Impostos',
    description:
      'Identificamos oportunidades legais para reduzir sua carga tributária e liberar mais capital para o crescimento do negócio.',
    tagLeft:  'Planejamento Seguro',
    tagRight: 'Elisão Fiscal',
  },
  {
    icon:        'Shield',
    color:       'blue',
    title:       'Segurança Jurídica e Trabalhista',
    description:
      'Mantemos sua empresa em total conformidade com as obrigações fiscais e trabalhistas, protegendo contra riscos e multas.',
    tagLeft:  'Compliance',
    tagRight: 'Sem Penalidades',
  },
  {
    icon:        'TrendingUp',
    color:       'green',
    title:       'Melhoria da Lucratividade',
    description:
      'Analisamos suas finanças, otimizamos despesas e identificamos onde seu negócio pode ganhar mais margem.',
    tagLeft:  'Eficiência Operacional',
    tagRight: 'Mais Resultado',
  },
  {
    icon:        'CheckCircle2',
    color:       'purple',
    title:       'Organização e Documentação',
    description:
      'Cuidamos das burocracias fiscais, documentações e auditorias para manter tudo correto com os órgãos reguladores.',
    tagLeft:  'Auditoria',
    tagRight: 'Organização Total',
  },
]

// ── Diferenciais qualitativos (substituem métricas inventadas) ───────────────
export const SOCIAL_PROOF = [
  { label: 'Fundação',              value: FOUNDED_YEAR,   gold: true  },
  { label: 'Anos de Mercado',       value: YEARS_LABEL,    gold: false },
  { label: 'Atendimento',           value: 'PF e PJ',      gold: false },
 
]
