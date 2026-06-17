import { ArrowRight, Clock, Check } from './Icons'
import { wa, WA_MSG, HERO_PILLARS, HERO_CHECKS, HERO_CARD_CHECKS, YEARS_LABEL, YEARS_MARKET, FOUNDED_YEAR, YEARS_ONLY } from '../constants'
import s from './Hero.module.css'
import { BadgeDollarSign } from 'lucide-react'

export default function Hero() {
  const ctaGeneric = wa(WA_MSG.generic)
  const ctaMeeting = wa(WA_MSG.meeting)

  return (
    <section className={s.section}>
      <div className={`container ${s.inner}`}>

        {/* ── Coluna esquerda — copy ── */}
        <div className={s.left}>

          <h1 className={`${s.heading} sr d1`}>
            Sua empresa segura<br />
            <span className={s.headingAccent}>para crescer.</span>
          </h1>

          <p className={`${s.lead} sr d2`}>
            Ajudamos empresas a manter a saúde fiscal,
            tributária e financeira em dia, com uma contabilidade consultiva,
            próxima e comprometida com resultados reais.
          </p>

          {/* Checklist micro */}
          <div className={`${s.checks} sr d3`}>
            {HERO_CHECKS.map(c => (
              <div key={c.title} className={s.checkItem}>
                <span className="check-icon"><Check className="w-3 h-3" strokeWidth={3} /></span>
                <div>
                  <h4 className={s.checkTitle}>{c.title}</h4>
                  <p className={s.checkDesc}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className={`${s.ctaRow} sr d4`}>
            
            <a href={ctaMeeting} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Clock className="w-5 h-5" style={{ color: 'var(--gold)' }} />
              Agendar uma Conversa
            </a>
          </div>

          {/* Pilares qualitativos — substituem stats numéricos inventados */}
          <div className={`${s.stats} sr d5`}>
            {HERO_PILLARS.map((p, i) => (
              <div key={p.label} className={`${s.stat} ${i > 0 ? s.statBorder : ''}`}>
                <span className={`${s.statValue} ${i === 0 ? s.statGold : ''}`}>{p.label}</span>
                <span className={s.statLabel}>{p.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Coluna direita — card de credenciais ── */}
        <div className={`${s.right} sr d2`}>
          <div className={s.card}>

            {/* Linhas decorativas de canto */}
            <div className={s.cornerTR} aria-hidden />
            <div className={s.cornerBL} aria-hidden />

            {/* Cabeçalho do card */}
            <div className={s.cardHead}>
              <div className={s.cardIcon}>
  <BadgeDollarSign className="w-6 h-6" />
</div>
              <div>
                <span className="label-mono" style={{ fontSize: '9px' }}>Soluções contábeis</span>
                <h3 className={s.cardTitle}>SALMOS CONTABILIDADE</h3>
              </div>
            </div>

            {/* Badge de anos */}
           <div className={s.yearsBadge}>
  <div>
    <span className={s.yearsValue}>ESTRATÉGIA</span>
    <span className={s.yearsLabel}>Clareza para gerir e crescer.</span>
  </div>
</div>

            {/* Lista de compromissos */}
            <div className={s.cardChecks}>
              {HERO_CARD_CHECKS.map(c => (
                <div key={c.title} className={s.cardCheckItem}>
                  <span className={`check-icon ${c.gold ? 'gold' : ''}`}>
                    <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </span>
                  <div>
                    <h4 className={`${s.cardCheckTitle} ${c.gold ? s.cardCheckGold : ''}`}>{c.title}</h4>
                    <p className={s.cardCheckDesc}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA interno do card */}
            <a href={ctaMeeting} target="_blank" rel="noopener noreferrer" className={`btn-sm ${s.cardCta}`}>
              <ArrowRight className="w-4 h-4" />
              SAIBA MAIS
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
