import { MessageCircle, ArrowRight } from './Icons'
import { Icon } from './Icons'
import { wa, WA_MSG, SERVICES } from '../constants'
import s from './Services.module.css'

export default function Services() {
  return (
    <section id="services" className={s.section}>
      <div className="container">

        <div className={`${s.header} sr`}>
          <span className="badge-gold">Como Ajudamos o Seu Negócio</span>
          <h2 className={s.heading}>Serviços de Contabilidade Inteligente</h2>
          <p className={s.sub}>
            Soluções completas para regularização, planejamento tributário e
            gestão financeira, para empresas de todos os portes.
          </p>
        </div>

        <div className={s.grid}>
          {SERVICES.map((sv, i) => (
            <div key={sv.id} className={`${s.card} glass sr d${(i % 3) + 1}`}>

              <div className={s.cardTop}>
                <div className={s.iconWrap}>
                  <Icon name={sv.icon} cls="w-6 h-6" />
                </div>
                <span className={s.badge}>{sv.badge}</span>
              </div>

              <h3 className={s.cardTitle}>{sv.title}</h3>
              <p className={s.cardDesc}>{sv.description}</p>

              <a
                href={wa(WA_MSG.service(sv.title))}
                target="_blank"
                rel="noopener noreferrer"
                className={s.saibaMais}
              >
                Saiba Mais <ArrowRight className={s.saibaMaisIcon} />
              </a>
            </div>
          ))}
        </div>

        <div className={`${s.ctaWrap} sr d2`}>
          <a
            href={wa(WA_MSG.generic)}
            target="_blank"
            rel="noopener noreferrer"
            className={s.ctaBtn}
          >
            Falar com um Especialista
            <MessageCircle className={s.ctaIcon} />
          </a>
        </div>

      </div>
    </section>
  )
}