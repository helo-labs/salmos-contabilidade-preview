import { useEffect } from 'react'

/**
 * Ativa a classe `.in` em todos os elementos `.sr` quando
 * eles entram na viewport, disparando a animação de scroll reveal
 * definida no index.css.
 */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.sr')
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') }),
      { threshold: 0.12 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}
