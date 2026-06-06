import { Check, X } from 'lucide-react'
import SectionHead from './SectionHead'

type Plan = {
  name: string
  desc: string
  price: string
  unit: string
  features: { text: string; included: boolean }[]
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
      { text: 'До 100 учеников', included: true },
      { text: 'Посещаемость и расписание', included: true },
      { text: 'Чаты с родителями', included: true },
      { text: 'Базовые отчёты', included: true },
      { text: 'Финансовый модуль', included: false },
      { text: 'Интеграция с банком БЦК', included: false },
    ],
    cta: 'Попробовать',
  },
  {
    name: 'Стандарт',
    desc: 'Оптимально для садов и школ от 100 до 400 детей',
    price: '690 000 ₸',
    unit: '/ год',
    features: [
      { text: 'До 400 учеников', included: true },
      { text: 'Всё из тарифа «Старт»', included: true },
      { text: 'Финансы и квитанции', included: true },
      { text: 'Дневник развития ребёнка', included: true },
      { text: 'Интеграция с БЦК', included: true },
      { text: 'Брендирование приложения', included: false },
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
      { text: 'Без ограничений по ученикам', included: true },
      { text: 'Всё из тарифа «Стандарт»', included: true },
      { text: 'Брендирование приложения', included: true },
      { text: 'Персональный менеджер', included: true },
      { text: 'SLA 99.9% и приоритетная поддержка', included: true },
      { text: 'Кастомные интеграции', included: true },
    ],
    cta: 'Связаться',
  },
]

export default function Pricing() {
  return (
    <section className="py-[72px]" id="pricing">
      <div className="wrap">
        <SectionHead
          tag="Тарифы для школ"
          title="Оплата раз в год — родители платят школе сами"
          lead="Школа выбирает тариф при подключении. Переход на более высокий — в любой момент. Пробный период 14 дней на любом тарифе."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px] items-stretch">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-r-xl p-[32px_28px] flex flex-col bg-white ${
                p.popular
                  ? 'border-[1.5px] border-orange-400 shadow-warm-md'
                  : 'border-[1.5px] border-line shadow-warm-sm'
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white font-bold text-[12.5px] px-4 py-1.5 rounded-full shadow-pop">
                  Популярный
                </span>
              )}
              <div className="font-display font-bold text-[24px] text-ink-900">
                {p.name}
              </div>
              <div className="text-[14px] text-ink-500 mt-1.5 mb-[18px] min-h-[40px]">
                {p.desc}
              </div>
              <div className="font-display font-extrabold text-[40px] text-ink-900 leading-none">
                {p.price}
                {p.unit && (
                  <span className="font-ui text-[16px] font-semibold text-ink-500 ml-2">
                    {p.unit}
                  </span>
                )}
              </div>
              <ul className="list-none p-0 my-6 flex flex-col gap-[13px] flex-1">
                {p.features.map((f) => (
                  <li
                    key={f.text}
                    className={`flex items-start gap-2.5 text-[14.5px] ${
                      f.included ? 'text-ink-700' : 'text-ink-400'
                    }`}
                  >
                    {f.included ? (
                      <Check className="w-[18px] h-[18px] text-ok flex-none mt-0.5" />
                    ) : (
                      <X className="w-[18px] h-[18px] text-ink-300 flex-none mt-0.5" />
                    )}
                    <span>{f.text}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`btn-l w-full ${
                  p.popular ? 'btn-primary' : 'btn-ghost'
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-ink-500 text-[14.5px] mt-7">
          Сверхлимитные ученики — по отдельной договорённости · Интеграция оплаты
          через банк БЦК — по запросу
        </p>
      </div>
    </section>
  )
}
