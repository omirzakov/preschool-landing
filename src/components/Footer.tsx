import { ArrowRight } from 'lucide-react'
import Brand from './Brand'

const COLUMNS = [
  {
    title: 'Платформа',
    links: [
      { href: '#features', label: 'Возможности' },
      { href: '#how', label: 'Как это работает' },
      { href: '#roles', label: 'Роли' },
      { href: '#pricing', label: 'Тарифы' },
    ],
  },
  {
    title: 'Школам',
    links: [
      { href: '#contact', label: 'Подключить школу' },
      { href: '#pricing', label: 'Сравнить тарифы' },
      { href: '#schools', label: 'Наши клиенты' },
      { href: '#faq', label: 'Вопросы и ответы' },
    ],
  },
  {
    title: 'Контакты',
    links: [
      { href: 'tel:+77001234567', label: '+7 (700) 123-45-67' },
      { href: 'mailto:hello@preschool.kz', label: 'hello@preschool.kz' },
      { href: '#', label: 'Алматы, ул. Абая 150' },
    ],
  },
]

// Юридические страницы для App Store / Google Play — статический public/legal.html
const LEGAL = [
  { href: '/legal.html#privacy', label: 'Политика конфиденциальности' },
  { href: '/legal.html#terms', label: 'Условия использования' },
  { href: '/legal.html#support', label: 'Поддержка' },
  { href: '/legal.html#delete', label: 'Удаление аккаунта' },
]

export default function Footer() {
  return (
    <footer className="bg-espresso pt-16 pb-8 text-white/70">
      <div className="wrap">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="col-span-2 lg:col-span-1">
            <Brand variant="light" className="rounded-full" />
            <p className="mt-4 max-w-[300px] text-[14.5px] leading-[1.65] text-white/60">
              Платформа управления детскими садами и школами. Веб-админка и
              мобильное приложение для всех ролей.
            </p>
            <a
              href="#contact"
              className="btn btn-primary mt-6 inline-flex"
            >
              Подключить школу <ArrowRight className="h-[17px] w-[17px]" />
            </a>
          </div>

          {COLUMNS.map((c) => (
            <div key={c.title}>
              <h5 className="font-display text-[15px] font-semibold text-white">
                {c.title}
              </h5>
              <div className="mt-4 flex flex-col gap-3">
                {c.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="text-[14.5px] text-white/60 no-underline transition-colors hover:text-orange-300"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-7 text-[13.5px] text-white/50 md:flex-row md:items-center">
          <span>© 2026 Preschool. Все права защищены.</span>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="no-underline text-white/50 transition-colors hover:text-white/80"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
