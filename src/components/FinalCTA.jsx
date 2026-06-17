import { MessageCircle } from './Icons'
import { wa, WA_MSG, YEARS_MARKET } from '../constants'
import s from './FinalCTA.module.css'

export default function FinalCTA() {
  return (
    <section className={s.section}>
      <div className={`container ${s.inner}`}>

        <span className="badge-gold">Dá pra melhorar? A gente descobre.</span>

        <h2 className={s.heading}>
          Vamos analisar a saúde<br />
          da sua empresa?
        </h2>

        <p className={s.sub}>
          Converse com nossa equipe e descubra oportunidades de organização,
          economia tributária e melhoria na gestão do seu negócio. Sem compromisso.
        </p>

        <a
          href={wa(WA_MSG.generic)}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn-primary ${s.cta}`}
        >
          <MessageCircle className="w-5 h-5" style={{ fill: '#000' }} />
          Falar com um Especialista
        </a>

        <div className={s.footnotes}>
          <span>✓ Atendimento Pessoa Física e Jurídica</span>
          <span>✓ Migração de contador sem burocracia</span>
          <span>✓ Soluções contábeis de qualidade</span>
        </div>

      </div>
    </section>
  )
}
