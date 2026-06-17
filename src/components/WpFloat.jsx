import { MessageCircle } from 'lucide-react'
import { wa, WA_MSG } from '../constants'

/**
 * Botão flutuante do WhatsApp.
 * Fica fixo no canto inferior direito com anel pulsante.
 * Em desktop mostra tooltip ao hover.
 */
export default function WpFloat() {
  return (
    <a
      href={wa(WA_MSG.generic)}
      target="_blank"
      rel="noopener noreferrer"
      className="wp-float"
      title="Falar com a Salmos no WhatsApp"
      aria-label="Falar no WhatsApp"
    >
      <span className="tooltip">Fale Conosco no WhatsApp</span>
      <MessageCircle style={{ width: 28, height: 28, fill: '#000', color: '#000', position: 'relative', zIndex: 1 }} />
    </a>
  )
}
