import { useState, useEffect } from 'react'
import { MessageCircle, Facebook, Instagram, Linkedin } from './Icons'
import { wa, WA_MSG, SOCIAL } from '../constants'
import logo from '../assets/salmos.png'
import s from './Navbar.module.css'

const LINKS = [
  { label: 'Serviços',       href: '#services'    },
  { label: 'Por que a Salmos?', href: '#differences' },
  { label: 'Sobre Nós',      href: '#about-us'    },
]

// Rola até a seção sem gravar o #hash na URL — assim um F5 ou um link
// compartilhado sempre volta pro topo da página (Hero), em vez de pular
// direto pra seção onde a pessoa estava.
function scrollToSection(e, href) {
  e.preventDefault()
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const [solid, setSolid] = useState(false)
  const [open,  setOpen]  = useState(false)

  // Adiciona fundo sólido ao fazer scroll
  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const ctaLink = wa(WA_MSG.generic)

  return (
    <header className={`${s.header} ${solid ? s.solid : ''}`}>
      <div className={`container ${s.inner}`}>

        {/* ── Logo ── */}
        <a href="#" className={s.logo} aria-label="Salmos Contabilidade — início">
          <img src={logo} alt="Salmos Contabilidade" style={{ height: '36px', width: 'auto', borderRadius: '8px' }} />
          <div>
            <div className={s.logoName}>SALMOS</div>
            <span className={s.logoSub}>CONTABILIDADE</span>
          </div>
        </a>

        {/* ── Nav desktop ── */}
        <nav className={s.nav} aria-label="Navegação principal">
          {LINKS.map(l => (
            <a key={l.href} href={l.href} className={s.link} onClick={(e) => scrollToSection(e, l.href)}>
              {l.label}
              <span className={s.underline} aria-hidden />
            </a>
          ))}
        </nav>

        {/* ── Actions desktop ── */}
        <div className={s.actions}>
          {/* Redes sociais */}
          <div className={s.socials}>
            <a href={SOCIAL.facebook}  target="_blank" rel="noopener noreferrer" className={s.social} title="Facebook"><Facebook className="w-3.5 h-3.5" /></a>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className={s.social} title="Instagram"><Instagram className="w-3.5 h-3.5" /></a>
            <a href={SOCIAL.linkedin}  target="_blank" rel="noopener noreferrer" className={s.social} title="LinkedIn"><Linkedin className="w-3.5 h-3.5" /></a>
          </div>
          {/* CTA */}
          <a href={ctaLink} target="_blank" rel="noopener noreferrer" className={s.cta}>
            <MessageCircle className="w-4 h-4" style={{ fill: '#000' }} />
            Fale com um Especialista
          </a>
        </div>

        {/* ── Toggle mobile ── */}
        <button
          className={s.ham}
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          <span className={s.burgerWrap}>
            <span className={`${s.bar} ${s.bar1} ${open ? s.bar1Open : ''}`} />
            <span className={`${s.bar} ${s.bar2} ${open ? s.bar2Open : ''}`} />
            <span className={`${s.bar} ${s.bar3} ${open ? s.bar3Open : ''}`} />
          </span>
        </button>
      </div>

      {/* ── Drawer mobile ── */}
      <div className={`${s.drawer} ${open ? s.drawerOpen : ''}`} aria-hidden={!open}>
        {LINKS.map(l => (
          <a key={l.href} href={l.href} className={s.dlink} onClick={(e) => { scrollToSection(e, l.href); setOpen(false) }}>
            {l.label}
          </a>
        ))}
        <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className={s.dCta}
          onClick={() => setOpen(false)}
        >
          <MessageCircle className="w-5 h-5" style={{ fill: '#000' }} />
          Fale com um Especialista
        </a>
        <div className={s.dSocials}>
          <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className={s.social} title="Facebook"><Facebook className="w-4 h-4" /></a>
          <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className={s.social} title="Instagram"><Instagram className="w-4 h-4" /></a>
          <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className={s.social} title="LinkedIn"><Linkedin className="w-4 h-4" /></a>
        </div>
      </div>
    </header>
  )
}
