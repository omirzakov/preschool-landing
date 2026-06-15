import { useState } from 'react'
import { Plus } from 'lucide-react'
import SectionHead from './SectionHead'

const FAQS = [
  {
    q: 'Сколько времени занимает запуск?',
    a: 'В среднем неделя. Мы импортируем ваши группы, детей и сотрудников из таблиц, настраиваем роли и проводим обучение команды. Родители скачивают приложение и сразу начинают пользоваться.',
  },
  {
    q: 'Нужно ли родителям платить за приложение?',
    a: 'Нет. Приложение для родителей бесплатное. Школа оплачивает тариф раз в год, а родители просто пользуются мобильным приложением.',
  },
  {
    q: 'Где хранятся персональные данные?',
    a: 'Все данные хранятся на серверах в Казахстане в соответствии с требованиями законодательства РК. Доступ разграничен по ролям, действия логируются.',
  },
  {
    q: 'Можно ли перейти на другой тариф позже?',
    a: 'Да, перейти на более высокий тариф можно в любой момент — доплачивается только разница. Лимит по ученикам и набор модулей меняются сразу.',
  },
  {
    q: 'Что входит в пробный период?',
    a: 'Полный доступ ко всем возможностям выбранного тарифа на 14 дней без привязки карты. Поможем настроить платформу и ответим на вопросы в процессе.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="section">
      <div className="wrap grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="reveal lg:sticky lg:top-28 lg:self-start">
          <SectionHead
            align="left"
            tag="Вопросы и ответы"
            title="Коротко о главном"
            lead="Не нашли ответ? Напишите нам — менеджер ответит в течение рабочего дня."
          />
          <a href="#contact" className="btn btn-lg btn-secondary mt-7">
            Задать свой вопрос
          </a>
        </div>

        <div className="reveal divide-y divide-line overflow-hidden rounded-r-lg border border-line bg-white">
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-bg-warm"
                  >
                    <span className="font-display text-[18px] font-semibold text-ink-900">
                      {f.q}
                    </span>
                    <span
                      className={`grid h-8 w-8 flex-none place-items-center rounded-full border border-line text-ink-600 transition-all duration-300 ${
                        isOpen ? 'rotate-45 border-orange-300 bg-orange-50 text-orange-600' : ''
                      }`}
                    >
                      <Plus className="h-[18px] w-[18px]" />
                    </span>
                  </button>
                </h3>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-[15.5px] leading-[1.65] text-ink-600">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
