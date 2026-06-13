import { Clock, Eye, MessagesSquare, LineChart, ArrowRight } from 'lucide-react'

const BENEFITS = [
  {
    icon: Clock,
    metric: '−6 часов',
    unit: 'в неделю',
    title: 'Меньше рутины у команды',
    desc: 'Отметки, квитанции и отчёты — автоматически. Воспитатели возвращают время детям, а не таблицам.',
  },
  {
    icon: Eye,
    metric: '100%',
    unit: 'прозрачность',
    title: 'Спокойствие родителей',
    desc: 'Приход, меню, занятия, фото и оплаты — всё видно в приложении в реальном времени.',
  },
  {
    icon: MessagesSquare,
    metric: '1 канал',
    unit: 'вместо 5 чатов',
    title: 'Вся связь в одном месте',
    desc: 'Объявления и сообщения внутри платформы. Никаких потерянных переписок в сторонних мессенджерах.',
  },
  {
    icon: LineChart,
    metric: 'Real-time',
    unit: 'аналитика',
    title: 'Контроль для директора',
    desc: 'Посещаемость, финансы и нагрузка по группам — на одном дашборде, без ручных сводок.',
  },
]

export default function Benefits() {
  return (
    <section className="section">
      <div className="wrap grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Left: pitch */}
        <div className="reveal lg:sticky lg:top-28">
          <span className="eyebrow">Результат</span>
          <h2 className="text-h2 mt-5 text-ink-900">
            Не просто софт — спокойствие для всего сада
          </h2>
          <p className="mt-5 text-[18px] leading-[1.6] text-ink-600">
            Preschool убирает бумажную работу и хаотичные чаты. Команда успевает
            больше, родители доверяют, а руководитель видит полную картину.
          </p>
          <a href="#contact" className="btn btn-lg btn-primary mt-8">
            Посчитать выгоду для школы{' '}
            <ArrowRight className="h-[18px] w-[18px]" />
          </a>
        </div>

        {/* Right: benefit rows */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon
            return (
              <div
                key={b.title}
                className="card card-hover reveal p-6"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-r-xs bg-orange-50 text-orange-600">
                    <Icon className="h-[22px] w-[22px]" />
                  </span>
                </div>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="font-display text-[30px] font-semibold leading-none text-ink-900">
                    {b.metric}
                  </span>
                  <span className="text-[13px] font-medium text-ink-500">
                    {b.unit}
                  </span>
                </div>
                <h3 className="mt-3 text-[18px] text-ink-900">{b.title}</h3>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-ink-600">
                  {b.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
