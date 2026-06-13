import {
  Users,
  Briefcase,
  ClipboardList,
  Calculator,
  Baby,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'
import SectionHead from './SectionHead'

type Role = {
  icon: LucideIcon
  title: string
  desc: string
  tint: string
}

const ROLES: Role[] = [
  {
    icon: Baby,
    title: 'Родитель',
    desc: 'Мобильное приложение: посещаемость, оплата, чаты, новости',
    tint: 'bg-orange-100 text-orange-700',
  },
  {
    icon: Users,
    title: 'Воспитатель',
    desc: 'Отметка детей, дневник развития, общение с родителями',
    tint: 'bg-[#E0EBFA] text-[#2a5fb8]',
  },
  {
    icon: ClipboardList,
    title: 'Учитель',
    desc: 'Расписание, оценки, домашние задания, портфолио учеников',
    tint: 'bg-[#E9F3E5] text-[#3a7a2e]',
  },
  {
    icon: Briefcase,
    title: 'Директор',
    desc: 'Отчёты, аналитика по группам, кадры, документы учреждения',
    tint: 'bg-[#F0E5FA] text-[#6a3fb8]',
  },
  {
    icon: Calculator,
    title: 'Бухгалтер',
    desc: 'Тарифы, квитанции, задолженности, выгрузка для 1С и БЦК',
    tint: 'bg-[#FBE9D4] text-[#a07019]',
  },
]

export default function Roles() {
  return (
    <section id="roles" className="section bg-bg-warm">
      <div className="wrap">
        <SectionHead
          tag="Пять ролей"
          title="Одна платформа — у каждого свой кабинет"
          lead="Каждый видит только то, что нужно ему. Родителям — мобильное приложение, сотрудникам — веб и приложение."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {ROLES.map((r, i) => {
            const Icon = r.icon
            return (
              <div
                key={r.title}
                className="card card-hover reveal flex flex-col items-center p-6 text-center"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div
                  className={`grid h-[56px] w-[56px] place-items-center rounded-full ${r.tint}`}
                >
                  <Icon className="h-[26px] w-[26px]" />
                </div>
                <h3 className="mt-4 text-[17px] text-ink-900">{r.title}</h3>
                <p className="mt-1.5 text-[13px] leading-[1.5] text-ink-500">
                  {r.desc}
                </p>
              </div>
            )
          })}
        </div>

        <div className="reveal mt-10 text-center">
          <a href="#demo" className="btn btn-lg btn-secondary">
            Открыть демо всех ролей <ArrowRight className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>
    </section>
  )
}
