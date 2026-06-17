import { Icon } from './Icons'
import { wa, WA_MSG, PILLARS, SOCIAL_PROOF, YEARS_MARKET } from '../constants'
import s from './Differences.module.css'

// Mapa de cores para os ícones dos pilares
const ICON_COLORS = {
  gold:   { bg: 'rgba(31,56,86,1)',         color: 'var(--gold)',  border: 'transparent' },
  blue:   { bg: 'rgba(59,130,246,0.10)',    color: '#93c5fd',      border: 'rgba(59,130,246,0.2)' },
  green:  { bg: 'rgba(34,197,94,0.10)',     color: '#4ade80',      border: 'rgba(34,197,94,0.2)' },
  purple: { bg: 'rgba(168,85,247,0.10)',    color: '#c4b5fd',      border: 'rgba(168,85,247,0.2)' },
}

const TAG_COLORS = {
  gold:   'var(--gold)',
  blue:   '#93c5fd',
  green:  '#4ade80',
  purple: '#c4b5fd',
}

export default function Differences() {
  const ctaGeneric = wa(WA_MSG.generic)
  const ctaMeeting = wa(WA_MSG.meeting)

  return (
    <section id="differences" className={s.section}>
      <div className="container">

        {/* Cabeçalho */}
        <div className={`${s.header} sr`}>
          <span className="badge-gold">Excelência Contábil</span>
          <h2 className={s.heading}>Por que contar com a Salmos?</h2>
          <p className={s.sub}>
            Soluções completas com alta precisão técnica e compromisso
            para impulsionar e blindar a sua empresa.
          </p>
        </div>

        {/* Grade 2×2 de pilares */}
        <div className={s.grid}>
          {PILLARS.map((p, i) => {
            const ic = ICON_COLORS[p.color]
            const tc = TAG_COLORS[p.color]
            return (
              <div key={p.title} className={`${s.card} glass sr d${(i % 2) + 1}`}>
                <div>
                  {/* Ícone */}
                  <div
                    className={s.iconWrap}
                    style={{ background: ic.bg, color: ic.color, borderColor: ic.border }}
                  >
                    <Icon name={p.icon} cls="w-6 h-6" />
                  </div>
                  <h3 className={s.cardTitle}>{p.title}</h3>
                  <p className={s.cardDesc}>{p.description}</p>
                </div>
                {/* Tags de rodapé */}
                <div className={s.cardFoot}>
                  <span className={s.tagLeft} style={{ color: tc }}>{p.tagLeft}</span>
                  <span className={s.tagRight}>{p.tagRight}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTAs */}
        <div className={`${s.ctaRow} sr d2`}>
          {/* <a href={ctaGeneric} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Fale com um Especialista
          </a>*/}
          <a href={ctaMeeting} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Saiba Mais
          </a>
        </div>

        

      </div>
    </section>
  )
}
