import Brand from './Brand'

const COLUMNS = [
  {
    title: 'Платформа',
    links: [
      { href: '#features', label: 'Возможности' },
      { href: '#roles', label: 'Роли' },
      { href: '#pricing', label: 'Тарифы' },
      { href: '#demo', label: 'Демо приложения' },
    ],
  },
  {
    title: 'Школам',
    links: [
      { href: '#contact', label: 'Подключить школу' },
      { href: '#pricing', label: 'Сравнить тарифы' },
      { href: '#schools', label: 'Наши клиенты' },
      { href: '#contact', label: 'Поддержка' },
    ],
  },
  {
    title: 'Контакты',
    links: [
      { href: 'tel:+77001234567', label: '+7 (700) 123-45-67' },
      { href: '#', label: 'Алматы, ул. Абая 150' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-white/70 pt-14 pb-[30px]">
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-8">
          <div>
            <div className="mb-4">
              <Brand variant="light" />
            </div>
            <p className="text-[14.5px] leading-[1.6] max-w-[280px]">
              Платформа управления детскими садами и школами. Веб-админка и
              мобильное приложение для всех ролей.
            </p>
          </div>
          {COLUMNS.map((c) => (
            <div key={c.title}>
              <h5 className="text-white font-display text-[15px] mb-[14px]">
                {c.title}
              </h5>
              {c.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="block text-white/65 no-underline text-[14.5px] mb-2.5 hover:text-orange-300 transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 mt-10 pt-[22px] text-[13.5px] flex flex-col md:flex-row justify-between gap-2">
          <span>© 2026 Preschool. Все права защищены.</span>
          <span>Политика конфиденциальности · Условия</span>
        </div>
      </div>
    </footer>
  )
}
