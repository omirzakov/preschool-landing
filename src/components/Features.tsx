import {
  CalendarCheck,
  Wallet,
  MessageCircle,
  GraduationCap,
  BookOpenCheck,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'
import SectionHead from './SectionHead'

type Feature = {
  icon: LucideIcon
  title: string
  desc: string
  bg: string
  fg: string
}

const FEATURES: Feature[] = [
  {
    icon: CalendarCheck,
    title: 'Посещаемость и расписание',
    desc:
      'Отметка по группам и классам, расписание занятий, замены и уведомления родителям в один клик.',
    bg: 'bg-orange-50',
    fg: 'text-orange-600',
  },
  {
    icon: Wallet,
    title: 'Финансы и оплата',
    desc:
      'Квитанции, история платежей, задолженности и автоматические напоминания родителям.',
    bg: 'bg-[#E5F4EC]',
    fg: 'text-[#1f7a4a]',
  },
  {
    icon: MessageCircle,
    title: 'Связь с родителями',
    desc:
      'Чаты с воспитателями и администрацией, объявления, фото и видео из группы — без сторонних мессенджеров.',
    bg: 'bg-[#EAF1FB]',
    fg: 'text-[#2a5fb8]',
  },
  {
    icon: GraduationCap,
    title: 'Оценки и портфолио ребёнка',
    desc:
      'Дневник развития, отметки, достижения и индивидуальная траектория — всё в карточке ребёнка.',
    bg: 'bg-[#F4EAFB]',
    fg: 'text-[#7a3fb8]',
  },
  {
    icon: BookOpenCheck,
    title: 'Программа и занятия',
    desc:
      'Учебный план, материалы, кружки и секции, запись на дополнительные занятия прямо в приложении.',
    bg: 'bg-[#FBF1DA]',
    fg: 'text-[#a17319]',
  },
  {
    icon: ShieldCheck,
    title: 'Безопасность и доступы',
    desc:
      'Разграничение ролей, журналы действий, защищённое хранение персональных данных в РК.',
    bg: 'bg-[#FBE7E5]',
    fg: 'text-[#a83c30]',
  },
]

export default function Features() {
  return (
    <section className="py-[72px]" id="features">
      <div className="wrap">
        <SectionHead
          tag="Возможности платформы"
          title="Всё, что нужно учреждению — в одном месте"
          lead="От ежедневной отметки посещаемости до годовых финансовых отчётов. Модули включаются под потребности вашей школы."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="card-base rounded-r-lg p-7 transition-all hover:-translate-y-1 hover:shadow-warm-md"
              >
                <div
                  className={`w-[52px] h-[52px] rounded-2xl grid place-items-center mb-[18px] ${f.bg} ${f.fg}`}
                >
                  <Icon className="w-[26px] h-[26px]" />
                </div>
                <h3 className="text-[20px] text-ink-900 mb-[9px]">{f.title}</h3>
                <p className="text-[15px] text-ink-600 leading-[1.5]">
                  {f.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
