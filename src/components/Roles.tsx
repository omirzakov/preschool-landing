import {
  Users,
  Briefcase,
  ClipboardList,
  Calculator,
  Baby,
  LayoutGrid,
  type LucideIcon,
} from 'lucide-react'
import SectionHead from './SectionHead'

type Role = {
  icon: LucideIcon
  title: string
  desc: string
  bg: string
  fg: string
}

const ROLES: Role[] = [
  {
    icon: Baby,
    title: 'Родитель',
    desc: 'Мобильное приложение: посещаемость, оплата, чаты, новости',
    bg: 'bg-orange-100',
    fg: 'text-orange-700',
  },
  {
    icon: Users,
    title: 'Воспитатель',
    desc: 'Отметка детей, дневник развития, общение с родителями',
    bg: 'bg-[#E0EBFA]',
    fg: 'text-[#2a5fb8]',
  },
  {
    icon: ClipboardList,
    title: 'Учитель',
    desc: 'Расписание, оценки, домашние задания, портфолио учеников',
    bg: 'bg-[#E9F3E5]',
    fg: 'text-[#3a7a2e]',
  },
  {
    icon: Briefcase,
    title: 'Директор',
    desc: 'Отчёты, аналитика по группам, кадры, документы учреждения',
    bg: 'bg-[#F0E5FA]',
    fg: 'text-[#6a3fb8]',
  },
  {
    icon: Calculator,
    title: 'Бухгалтер',
    desc: 'Тарифы, квитанции, задолженности, выгрузка для 1С и БЦК',
    bg: 'bg-[#FBE9D4]',
    fg: 'text-[#a07019]',
  },
]

export default function Roles() {
  return (
    <section className="py-[72px] bg-bg-warm" id="roles">
      <div className="wrap">
        <SectionHead
          tag="Пять ролей"
          title="Одна платформа — у каждого свой кабинет"
          lead="Каждый видит только то, что нужно ему. Родителям — мобильное приложение, сотрудникам — веб и приложение."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {ROLES.map((r) => {
            const Icon = r.icon
            return (
              <div
                key={r.title}
                className="card-base rounded-r-lg p-6 text-center"
              >
                <div
                  className={`w-[56px] h-[56px] rounded-full grid place-items-center mx-auto mb-[14px] ${r.bg} ${r.fg}`}
                >
                  <Icon className="w-[26px] h-[26px]" />
                </div>
                <h4 className="text-[17px] text-ink-900 mb-[7px]">{r.title}</h4>
                <p className="text-[13px] text-ink-500 leading-[1.45]">
                  {r.desc}
                </p>
              </div>
            )
          })}
        </div>
        <div className="text-center mt-9">
          <a href="#demo" className="btn-l btn-l-lg btn-primary">
            Открыть демо всех ролей <LayoutGrid className="w-[18px] h-[18px]" />
          </a>
        </div>
      </div>
    </section>
  )
}
