import { Quote, Star } from 'lucide-react'
import SectionHead from './SectionHead'

type Item = {
  quote: string
  name: string
  role: string
  initials: string
  tint: string
  featured?: boolean
}

const ITEMS: Item[] = [
  {
    quote:
      'Раньше сбор оплат занимал неделю и кучу звонков. Теперь родители платят прямо в приложении, а я вижу все поступления и задолженности на одном экране.',
    name: 'Динара Қасымова',
    role: 'Директор сада «Балапан», Алматы',
    initials: 'ДҚ',
    tint: 'bg-orange-500 text-white',
    featured: true,
  },
  {
    quote:
      'Отмечаю всю группу за минуту и сразу отправляю родителям фото с занятий. Стало намного спокойнее — вопросов в чатах почти не осталось.',
    name: 'Гульнара Әбенова',
    role: 'Воспитатель, сад «Күнсәуле»',
    initials: 'ГӘ',
    tint: 'bg-[#E0EBFA] text-[#2a5fb8]',
  },
  {
    quote:
      'Вижу, когда сын пришёл в сад, что было на обед и чем он занимался днём. Больше не нужно писать в пять разных чатов.',
    name: 'Алия Сейтова',
    role: 'Мама воспитанника',
    initials: 'АС',
    tint: 'bg-[#E9F3E5] text-[#3a7a2e]',
  },
]

export default function Testimonials() {
  return (
    <section className="section bg-bg-warm">
      <div className="wrap">
        <SectionHead
          tag="Отзывы"
          title="Сады и школы уже работают спокойнее"
          lead="Что говорят директора, воспитатели и родители после перехода на Preschool."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {ITEMS.map((t, i) => (
            <figure
              key={t.name}
              className={`reveal flex flex-col rounded-r-lg p-8 ${
                t.featured
                  ? 'bg-ink-900 text-white shadow-warm-lg lg:row-span-1'
                  : 'card'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center justify-between">
                <Quote
                  className={`h-8 w-8 ${
                    t.featured ? 'text-orange-400' : 'text-orange-300'
                  }`}
                  fill="currentColor"
                />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="h-4 w-4 text-orange-400"
                      fill="currentColor"
                    />
                  ))}
                </div>
              </div>

              <blockquote
                className={`mt-5 flex-1 text-[17px] leading-[1.6] ${
                  t.featured ? 'text-white/90' : 'text-ink-700'
                }`}
              >
                «{t.quote}»
              </blockquote>

              <figcaption className="mt-7 flex items-center gap-3">
                <span
                  className={`grid h-11 w-11 flex-none place-items-center rounded-full font-display text-[16px] font-semibold ${t.tint}`}
                >
                  {t.initials}
                </span>
                <span className="leading-tight">
                  <span
                    className={`block text-[15px] font-semibold ${
                      t.featured ? 'text-white' : 'text-ink-900'
                    }`}
                  >
                    {t.name}
                  </span>
                  <span
                    className={`block text-[13px] ${
                      t.featured ? 'text-white/60' : 'text-ink-500'
                    }`}
                  >
                    {t.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
