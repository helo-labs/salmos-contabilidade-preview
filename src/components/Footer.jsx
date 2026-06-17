import { MapPin, Phone, Clock, Facebook, Instagram, Linkedin, Mail } from './Icons'
import { wa, WA_MSG, CONTACT, SOCIAL } from '../constants'
import logo from '../assets/salmos.png'
import s from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={`container ${s.grid}`}>

        {/* ── Coluna 1: brand ── */}
        <div className={s.brand}>
          <a href="#" className={s.logo} aria-label="Topo da página">
           <img src={logo} alt="Salmos Contabilidade" style={{ height: '36px', width: 'auto', borderRadius: '8px' }} />
            <div>
              <div className={s.logoName}>SALMOS</div>
              <span className={s.logoSub}>CONTABILIDADE</span>
            </div>
          </a>
          <p className={s.brandDesc}>
            Contabilidade consultiva para empresas que querem crescer com
            segurança fiscal, organização e clareza em cada etapa da gestão.
          </p>
        </div>

        {/* ── Coluna 2: endereço e horário ── */}
        <div className={s.info}>
          <h4 className={s.colHead}>Contato & Localização</h4>
          <div className={s.infoList}>
            <span className={s.infoItem}>
              <MapPin className={s.infoIcon} />
              {CONTACT.address}
            </span>
            <a href={`tel:${CONTACT.phone.replace(/\D/g, '')}`} className={s.infoItem}>
              <Phone className={s.infoIcon} />
              {CONTACT.phone}
            </a>
            <a href={`mailto:${CONTACT.email}`} className={s.infoItem}>
              <Mail className={s.infoIcon} />
              {CONTACT.email}
            </a>
          </div>
        </div>

        {/* ── Coluna 3: redes sociais + CNPJ ── */}
        <div className={s.socials}>
          <h4 className={s.colHead}>Redes Sociais</h4>
          <div className={s.socialRow}>
            <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className={s.social} title="Facebook"><Facebook className="w-4 h-4" /></a>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className={s.social} title="Instagram"><Instagram className="w-4 h-4" /></a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className={s.social} title="LinkedIn"><Linkedin className="w-4 h-4" /></a>
          </div>
          <div className={s.legal}>
            SALMOS CONSULTORIA CONTÁBIL LTDA<br />
            CNPJ: {CONTACT.cnpj}<br />

          </div>
        </div>

      </div>

      {/* ── Barra inferior ── */}
      <div className={s.bar}>
        <div className="container">
          <div className={s.barInner}>
            <span>© {new Date().getFullYear()} Salmos Contabilidade. Todos os direitos reservados.</span>




          </div>
        </div>
      </div>
    </footer>
  )
}
