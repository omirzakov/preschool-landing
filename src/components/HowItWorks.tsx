import { PhoneCall, Database, Rocket, HeartHandshake } from 'lucide-react'
import SectionHead from './SectionHead'

const STEPS = [
  {
    icon: PhoneCall,
    step: '01',
    title: 'Заявка и демо',
    desc: 'Оставляете заявку — менеджер проводит демонстрацию и подбирает тариф под ваше учреждение.',
  },
  {
    icon: Database,
    step: '02',
    title: 'Импорт данных',
    desc: 'Переносим группы, детей и сотрудников из таблиц. Настраиваем роли и доступы под вашу структуру.',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Запуск за неделю',
    desc: 'Обучаем команду, родители скачивают приложение. Сад работает в системе уже через несколько дней.',
  },
  {
    icon: HeartHandshake,
    step: '04',
    title: 'Поддержка рядом',
    desc: 'Персональный менеджер и поддержка на связи: помогаем на каждом этапе после запуска.',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="grain relative overflow-hidden bg-espresso text-white"
    >
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-90 [background:radial-gradient(50%_50%_at_85%_0%,rgba(249,115,22,0.28),transparent_70%),radial-gradient(40%_40%_at_5%_100%,rgba(255,143,64,0.18),transparent_70%)]" />

      <div className="wrap section relative z-10">
        <SectionHead
          tone="dark"
          tag="Как это работает"
          title="От заявки до запуска — одна неделя"
          lead="Берём всю настройку на себя. Вам остаётся только пользоваться готовой системой."
        />

        <div className="relative mt-16 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* connecting line on desktop */}
          <div className="pointer-events-none absolute left-0 right-0 top-[26px] hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />

          {STEPS.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={s.step}
                className="reveal relative"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="relative z-10 grid h-[52px] w-[52px] place-items-center rounded-r-sm bg-orange-500 text-white shadow-pop">
                  <Icon className="h-[24px] w-[24px]" />
                </div>
                <div className="mt-6 font-display text-[15px] font-semibold text-orange-300">
                  {s.step}
                </div>
                <h3 className="mt-1.5 text-[21px] text-white">{s.title}</h3>
                <p className="mt-2.5 text-[15px] leading-[1.6] text-white/65">
                  {s.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
