import { Check, ArrowRight, Sparkles } from 'lucide-react'
import SectionHead from './SectionHead'

type Plan = {
  name: string
  desc: string
  price: string
  unit: string
  features: string[]
  cta: string
  popular?: boolean
}

const PLANS: Plan[] = [
  {
    name: 'Старт',
    desc: 'Для небольших садов и частных школ до 100 детей',
    price: '290 000 ₸',
    unit: '/ год',
    features: [
      'До 100 учеников',
      'Посещаемость и расписание',
      'Чаты с родителями',
      'Базовые отчёты',
    ],
    cta: 'Попробовать',
  },
  {
    name: 'Стандарт',
    desc: 'Оптимально для садов и школ от 100 до 400 детей',
    price: '690 000 ₸',
    unit: '/ год',
    features: [
      'До 400 учеников',
      'Всё из тарифа «Старт»',
      'Финансы и квитанции',
      'Дневник развития ребёнка',
      'Интеграция с банком БЦК',
    ],
    cta: 'Подключить',
    popular: true,
  },
  {
    name: 'Премиум',
    desc: 'Для крупных учреждений и сетей школ',
    price: 'Договор',
    unit: '',
    features: [
      'Без ограничений по ученикам',
      'Всё из тарифа «Стандарт»',
      'Брендирование приложения',
      'Персональный менеджер',
      'SLA 99,9% и приоритет',
      'Кастомные интеграции',
    ],
    cta: 'Связаться',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section bg-bg-warm">
      <div className="wrap">
        <SectionHead
          tag="Тарифы для школ"
          title="Оплата раз в год — родители платят школе сами"
          lead="Школа выбирает тариф при подключении. Переход на более высокий — в любой момент. Пробный период 14 дней на любом тарифе."
        />

        <div className="mt-14 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {PLANS.map((p, i) => (
            <div
              key={p.name}
              className={`reveal relative flex flex-col rounded-r-lg p-8 ${
                p.popular
                  ? 'bg-ink-900 text-white shadow-warm-lg md:-translate-y-3'
                  : 'card'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {p.popular && (
                <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-orange-500 px-4 py-1.5 text-[12.5px] font-bold text-white shadow-pop">
                  <Sparkles className="h-3.5 w-3.5" /> Популярный
                </span>
              )}

              <div className="font-display text-[24px] font-semibold">
                {p.name}
              </div>
              <p
                className={`mt-1.5 min-h-[42px] text-[14px] ${
                  p.popular ? 'text-white/65' : 'text-ink-500'
                }`}
              >
                {p.desc}
              </p>

              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-display text-[40px] font-semibold leading-none">
                  {p.price}
                </span>
                {p.unit && (
                  <span
                    className={`text-[15px] font-medium ${
                      p.popular ? 'text-white/60' : 'text-ink-500'
                    }`}
                  >
                    {p.unit}
                  </span>
                )}
              </div>

              <ul className="my-7 flex flex-1 flex-col gap-3.5">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-3 text-[14.5px] ${
                      p.popular ? 'text-white/85' : 'text-ink-700'
                    }`}
                  >
                    <span
                      className={`mt-0.5 grid h-[18px] w-[18px] flex-none place-items-center rounded-full ${
                        p.popular ? 'bg-orange-500/90' : 'bg-ok-bg'
                      }`}
                    >
                      <Check
                        className={`h-3 w-3 ${
                          p.popular ? 'text-white' : 'text-ok'
                        }`}
                        strokeWidth={3}
                      />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`btn w-full ${
                  p.popular ? 'btn-on-dark' : 'btn-ghost'
                }`}
              >
                {p.cta} <ArrowRight className="h-[17px] w-[17px]" />
              </a>
            </div>
          ))}
        </div>

        <p className="reveal mt-8 text-center text-[14.5px] text-ink-500">
          Сверхлимитные ученики — по отдельной договорённости · Интеграция оплаты
          через банк БЦК — по запросу
        </p>
      </div>
    </section>
  )
}
