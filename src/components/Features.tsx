import {
  CalendarCheck,
  Wallet,
  MessageCircle,
  GraduationCap,
  BookOpenCheck,
  ShieldCheck,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react'
import SectionHead from './SectionHead'

type Feature = {
  icon: LucideIcon
  title: string
  desc: string
  tint: string
}

const FEATURES: Feature[] = [
  {
    icon: CalendarCheck,
    title: 'Посещаемость и расписание',
    desc: 'Отметка по группам и классам, расписание занятий, замены и уведомления родителям в один клик.',
    tint: 'bg-orange-50 text-orange-600',
  },
  {
    icon: Wallet,
    title: 'Финансы и оплата',
    desc: 'Квитанции, история платежей, задолженности и автоматические напоминания родителям.',
    tint: 'bg-[#E6F4EC] text-[#1f7a4a]',
  },
  {
    icon: MessageCircle,
    title: 'Связь с родителями',
    desc: 'Чаты с воспитателями и администрацией, объявления, фото и видео из группы — без сторонних мессенджеров.',
    tint: 'bg-[#EAF1FB] text-[#2a5fb8]',
  },
  {
    icon: GraduationCap,
    title: 'Оценки и портфолио',
    desc: 'Дневник развития, отметки, достижения и индивидуальная траектория — всё в карточке ребёнка.',
    tint: 'bg-[#F4EAFB] text-[#7a3fb8]',
  },
  {
    icon: BookOpenCheck,
    title: 'Программа и занятия',
    desc: 'Учебный план, материалы, кружки и секции, запись на дополнительные занятия прямо в приложении.',
    tint: 'bg-[#FBF1DA] text-[#a17319]',
  },
  {
    icon: ShieldCheck,
    title: 'Безопасность и доступы',
    desc: 'Разграничение ролей, журналы действий, защищённое хранение персональных данных в РК.',
    tint: 'bg-[#FBE7E5] text-[#a83c30]',
  },
]

export default function Features() {
  return (
    <section id="features" className="section">
      <div className="wrap">
        <SectionHead
          tag="Возможности платформы"
          title="Всё, что нужно учреждению — в одном месте"
          lead="От ежедневной отметки посещаемости до годовых финансовых отчётов. Модули включаются под потребности вашей школы."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => {
            const Icon = f.icon
            return (
              <article
                key={f.title}
                className="card card-hover reveal group relative overflow-hidden p-7"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div
                  className={`grid h-[52px] w-[52px] place-items-center rounded-r-sm ${f.tint}`}
                >
                  <Icon className="h-[26px] w-[26px]" />
                </div>
                <h3 className="mt-5 text-[21px] text-ink-900">{f.title}</h3>
                <p className="mt-2.5 text-[15px] leading-[1.6] text-ink-600">
                  {f.desc}
                </p>
                <ArrowUpRight className="absolute right-6 top-7 h-5 w-5 -translate-y-1 text-ink-300 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:text-orange-500 group-hover:opacity-100" />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
