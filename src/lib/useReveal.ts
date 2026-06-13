import { useEffect } from 'react'

/**
 * Adds the `is-in` class to every `.reveal` element as it scrolls into view.
 * Respects prefers-reduced-motion by revealing everything immediately.
 * Call once, high in the tree (e.g. App).
 */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
