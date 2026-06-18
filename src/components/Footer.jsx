import { MapPin, Phone, Clock, Facebook, Instagram, Linkedin, Mail } from './Icons'
import { wa, WA_MSG, CONTACT, SOCIAL } from '../constants'
import logo from '../assets/salmos.png'
import s from './Footer.module.css'

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.85.5 3.62 1.45 5.18L2 22l5.06-1.53a9.85 9.85 0 0 0 4.98 1.36h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2zm0 18.06h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3 .91.9-2.93-.2-.3a8.18 8.18 0 0 1-1.27-4.4c0-4.53 3.69-8.21 8.22-8.21 2.2 0 4.26.86 5.82 2.41a8.17 8.17 0 0 1 2.4 5.81c0 4.53-3.7 8.22-8.22 8.22zm4.5-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.18-.54.06-.25-.12-1.04-.38-1.99-1.22-.74-.65-1.23-1.46-1.38-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.04 0 1.2.88 2.37 1 2.53.12.17 1.74 2.65 4.21 3.72.59.25 1.05.4 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.1-.23-.16-.48-.28z"/>
    </svg>
  )
}

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

   {/* ── Coluna 2: unidades e contato ── */}
<div className={s.info}>
  <h4 className={s.colHead}>Unidades & Contato</h4>

  <div className={s.infoList}>
    <span className={s.infoItem}>
      <MapPin className={s.infoIcon} />
      <div>
        <strong>Matriz</strong><br />
        {CONTACT.address}
      </div>
    </span>

    <span className={s.infoItem}>
      <MapPin className={s.infoIcon} />
      <div>
        <strong>Filial Osasco</strong><br />
        Rua Nelson Rodrigues, 347 - Jardim Helena Maria - Osasco/SP
      </div>
    </span>

    <a
      href={`tel:${CONTACT.phone.replace(/\D/g, '')}`}
      className={s.infoItem}
    >
      <Phone className={s.infoIcon} />
      {CONTACT.phone}
    </a>

    <a
     href="https://wa.me/5511911612386"
      target="_blank"
      rel="noopener noreferrer"
      className={s.infoItem}
    >
      <WhatsAppIcon className={s.infoIcon} />
      +55 (11) 91161-2386
    </a>

    <a
      href="mailto:contato@salmoscontabilidade.com.br"
      className={s.infoItem}
    >
      <Mail className={s.infoIcon} />
      contato@salmoscontabilidade.com.br
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
