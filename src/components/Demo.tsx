import { useState } from 'react'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'

const SCREENS = [
  {
    title: 'Всё важное — на главном экране',
    text: 'Следите за событиями дня, занятиями и новостями ребёнка.',
    image: '/demo/home.png',
  },
  {
    title: 'Расписание на каждый день',
    text: 'Завтрак, занятия, прогулки и другие события всегда под рукой.',
    image: '/demo/schedule.png',
  },
  {
    title: 'Счета и оплата без лишних звонков',
    text: 'Проверяйте начисления и статус оплаты прямо в приложении.',
    image: '/demo/invoices.png',
  },
]

export default function Demo() {
  const [active, setActive] = useState(0)
  const screen = SCREENS[active]

  const select = (index: number) => setActive(index)
  const previous = () => setActive((active + SCREENS.length - 1) % SCREENS.length)
  const next = () => setActive((active + 1) % SCREENS.length)

  return (
    <section id="demo" className="section bg-orange-50/60">
      <div className="wrap">
        <div className="mx-auto max-w-2xl text-center reveal">
          <span className="eyebrow">
            <Play className="h-[14px] w-[14px] fill-current" />
            Демо приложения
          </span>
          <h2 className="text-heading mt-5 text-ink-900">
            Посмотрите, как выглядит Balam
          </h2>
          <p className="mt-4 text-[17px] leading-[1.65] text-ink-600">
            Несколько экранов мобильного приложения для родителей.
          </p>
        </div>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="reveal order-2 lg:order-1">
            <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-orange-600">
              Экран {active + 1} из {SCREENS.length}
            </p>
            <h3 className="mt-3 font-display text-[30px] font-semibold leading-tight text-ink-900 md:text-[38px]">
              {screen.title}
            </h3>
            <p className="mt-4 max-w-md text-[17px] leading-[1.65] text-ink-600">
              {screen.text}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {SCREENS.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => select(index)}
                  className={`rounded-full px-4 py-2 text-[14px] font-semibold transition-colors ${
                    active === index
                      ? 'bg-orange-500 text-white shadow-pop'
                      : 'border border-line bg-white text-ink-600 hover:border-orange-300 hover:text-orange-600'
                  }`}
                >
                  {['Главная', 'Расписание', 'Счета'][index]}
                </button>
              ))}
            </div>
          </div>

          <div className="reveal order-1 flex justify-center lg:order-2" style={{ transitionDelay: '120ms' }}>
            <div className="relative rounded-[38px] bg-ink-900 p-2.5 shadow-warm-lg">
              <img
                src={screen.image}
                alt={screen.title}
                className="h-[510px] w-auto rounded-[30px] object-cover object-top sm:h-[590px]"
              />
              <button
                type="button"
                onClick={previous}
                aria-label="Предыдущий экран"
                className="absolute left-0 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-line bg-white text-ink-800 shadow-warm-sm transition-transform hover:scale-105"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Следующий экран"
                className="absolute right-0 top-1/2 grid h-11 w-11 translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-line bg-white text-ink-800 shadow-warm-sm transition-transform hover:scale-105"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
