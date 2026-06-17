import { useReveal } from './useReveal'
import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import Services    from './components/Services'
import Differences from './components/Differences'
import About       from './components/About'
import FinalCTA    from './components/FinalCTA'
import Footer      from './components/Footer'
import WpFloat     from './components/WpFloat'

export default function App() {
  // Ativa animações de scroll reveal em toda a página
  useReveal()

  return (
    <div style={{ minHeight: '100vh', overflowX: 'hidden', position: 'relative' }}>

      {/*
        ── GLOWS DECORATIVOS DE FUNDO ───────────────────────────────
        Blobs posicionados absolutamente para criar profundidade visual.
        pointer-events: none garante que não bloqueiam interações.
        ─────────────────────────────────────────────────────────── */}
      <div className="glow-blue"  style={{ position:'absolute', top:'8%',   left:'-8%',   width:600, height:600, borderRadius:'50%', pointerEvents:'none', zIndex:0 }} aria-hidden />
      <div className="glow-gold"  style={{ position:'absolute', top:'32%',  right:'-8%',  width:500, height:500, borderRadius:'50%', pointerEvents:'none', zIndex:0 }} aria-hidden />
      <div className="glow-blue"  style={{ position:'absolute', bottom:'22%',left:'-5%',  width:600, height:600, borderRadius:'50%', pointerEvents:'none', zIndex:0 }} aria-hidden />
      <div className="glow-gold"  style={{ position:'absolute', bottom:'4%', right:'-5%', width:500, height:500, borderRadius:'50%', pointerEvents:'none', zIndex:0 }} aria-hidden />

      {/* ── SEÇÕES ── */}
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Differences />
        <About />
        <FinalCTA />
      </main>
      <Footer />

      {/* Botão flutuante WhatsApp */}
      <WpFloat />
    </div>
  )
}
