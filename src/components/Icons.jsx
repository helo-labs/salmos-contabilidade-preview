/**
 * Mapa de ícones Lucide usados na landing.
 * Centralizado aqui para evitar imports espalhados nos componentes.
 */
import {
  TrendingDown, TrendingUp, FilePlus,
  Briefcase, Shield, CheckCircle2,
  MessageCircle, ArrowRight, Check, Clock,
  Menu, X, MapPin, Phone, Mail,
  Facebook, Instagram, Linkedin, Star,
  BookOpen, Users, FileText,
} from 'lucide-react'

const MAP = {
  TrendingDown, TrendingUp, FilePlus,
  Briefcase, Shield, CheckCircle2,
  BookOpen, Users, FileText,
  MessageCircle, ArrowRight, Check, Clock,
  Menu, X, MapPin, Phone, Mail,
  Facebook, Instagram, Linkedin, Star,
}

/**
 * Renderiza um ícone Lucide pelo nome string.
 */
export function Icon({ name, cls = 'w-5 h-5' }) {
  const Comp = MAP[name]
  if (!Comp) return null
  return <Comp className={cls} />
}

export {
  MessageCircle, ArrowRight, Check, Clock,
  Menu, X, MapPin, Phone, Mail,
  Facebook, Instagram, Linkedin, Star,
  TrendingDown, TrendingUp, Shield, CheckCircle2,
}
