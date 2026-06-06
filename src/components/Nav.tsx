import Brand from './Brand'

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-bg/80 backdrop-blur-[14px] border-b border-line">
      <div className="wrap flex items-center gap-7 h-[74px]">
        <Brand />
        <div className="hidden md:flex gap-[26px] ml-[14px]">
          {[
            ['#features', 'Возможности'],
            ['#roles', 'Роли'],
            ['#pricing', 'Тарифы'],
            ['#schools', 'Школы'],
            ['#contact', 'Контакты'],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-ink-700 no-underline font-semibold text-[15px] hover:text-orange-600 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-[14px]">
          <a
            href="#demo"
            className="hidden sm:inline text-ink-700 no-underline font-semibold text-[15px]"
          >
            Демо приложения
          </a>
          <a href="#contact" className="btn-l btn-primary">
            Подключить школу
          </a>
        </div>
      </div>
    </nav>
  )
}
