import { useEffect, useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import Brand from './Brand'

const LINKS: [string, string][] = [
  ['#features', 'Возможности'],
  ['#how', 'Как это работает'],
  ['#roles', 'Роли'],
  ['#pricing', 'Тарифы'],
  ['#faq', 'Вопросы'],
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? 'border-b border-line/80 bg-bg/80 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="wrap flex h-[72px] items-center gap-7">
          <Brand />

          <div className="ml-2 hidden items-center gap-7 lg:flex">
            {LINKS.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-[15px] font-medium text-ink-700 no-underline transition-colors hover:text-orange-600"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-3">
            <a
              href="#demo"
              className="hidden text-[15px] font-medium text-ink-700 no-underline transition-colors hover:text-orange-600 sm:inline"
            >
              Войти
            </a>
            <a href="#contact" className="btn btn-primary hidden sm:inline-flex">
              Подключить школу
            </a>
            <button
              type="button"
              aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-r-xs border border-line bg-white/70 text-ink-800 backdrop-blur lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile sheet */}
      <div
        className={`fixed inset-0 top-[72px] z-40 origin-top bg-bg/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="wrap flex flex-col gap-1 pt-6">
          {LINKS.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="border-b border-line/70 py-4 text-[19px] font-medium text-ink-800 no-underline"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn btn-primary btn-lg mt-6 w-full"
          >
            Подключить школу <ArrowRight className="h-[18px] w-[18px]" />
          </a>
          <a
            href="#demo"
            onClick={() => setOpen(false)}
            className="btn btn-ghost btn-lg mt-3 w-full"
          >
            Войти в кабинет
          </a>
        </div>
      </div>
    </header>
  )
}
