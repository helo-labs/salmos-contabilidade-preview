import { MessageCircle, Clock } from './Icons'
import { wa, WA_MSG, YEARS_LABEL, YEARS_MARKET, FOUNDED_YEAR } from '../constants'
import s from './About.module.css'

export default function About() {
  const ctaGeneric = wa(WA_MSG.generic)
  const ctaMeeting = wa(WA_MSG.meeting)

  return (
    <section id="about-us" className={s.section}>
      <div className={`container ${s.inner}`}>

        {/* ── Painel esquerdo — identidade de legado ── */}
        <div className={`${s.left} sr`}>
          <div className={s.legacyCard}>
            <div className={s.cornerAccent} aria-hidden />

            <span className="label-mono" style={{ fontSize: '9px' }}>Trajetória Sólida</span>
            <h3 className={s.legacyTitle}>CONTABILIDADE<br />DESDE {FOUNDED_YEAR}</h3>

            <div className={s.yearsBlock}>
              <span className={s.yearsValue}>{YEARS_LABEL}</span>
              <span className={s.yearsLabel}>De atuação no Mercado</span>
            </div>

            <p className={s.legacyDesc}>
              Atendemos empresas de diferentes portes e segmentos — do MEI ao
              empresário com múltiplos CNPJs — sempre com o mesmo compromisso:
              clareza, organização e segurança em cada entrega.
            </p>

            <div className={s.miniBadges}>
              <div className={s.miniBadge}>
                <span className={s.miniBadgeValue}>{FOUNDED_YEAR}</span>
                <span className={s.miniBadgeLabel}>Fundação</span>
              </div>
              <div className={`${s.miniBadge} ${s.miniBadgeGold}`}>
                <span className={s.miniBadgeValueGold}>PF & PJ</span>
                <span className={s.miniBadgeLabelGold}>Atendimento</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Painel direito — texto narrativo ── */}
        <div className={`${s.right} sr d1`}>
          <span className="badge-gold">Sobre Nós</span>
          <h2 className={s.heading}>Uma contabilidade que acompanha o seu negócio de verdade.</h2>

          <div className={s.body}>
            <p>
              A Salmos Contabilidade nasceu com um propósito claro: ser mais do que
              um escritório que entrega guias e declarações. Desde {FOUNDED_YEAR}, construímos
              nossa reputação sendo parceiros ativos dos empresários que atendemos,
              presentes nas dúvidas do dia a dia, nas decisões importantes e nos
              momentos em que o negócio precisa de orientação de verdade.
            </p>
            <p>
              Nossa atuação vai além da obrigação fiscal. Trabalhamos com planejamento
              tributário, análise financeira, abertura e estruturação de empresas,
              gestão de folha e consultoria de gestão, tudo integrado, com a mesma
              equipe que conhece a realidade do seu negócio.
            </p>
            <p className={s.highlight}>
              Aqui, você não é um número de CNPJ. É um cliente com história,
              desafios e objetivos — e é assim que a gente trabalha.
            </p>
          </div>

          <div className={s.ctaRow}>
            
            <a href={ctaMeeting} target="_blank" rel="noopener noreferrer" className={s.ctaSecondary}>
              <Clock className="w-4 h-4" style={{ color: 'var(--gold)' }} />
              Agendar uma Conversa
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
