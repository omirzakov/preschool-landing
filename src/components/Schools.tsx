import { MapPin, Phone } from 'lucide-react'
import SectionHead from './SectionHead'

type School = {
  initials: string
  name: string
  city: string
  kids: string
  staff: string
  contact: string
  color: string
}

const SCHOOLS: School[] = [
  {
    initials: 'СБ',
    name: 'Сад «Балапан»',
    city: 'Алматы',
    kids: '240',
    staff: '32',
    contact: '+7 (701) 555-12-34',
    color: 'bg-orange-500 text-white',
  },
  {
    initials: 'АЖ',
    name: 'Школа «Ай-Жулдыз»',
    city: 'Астана',
    kids: '680',
    staff: '85',
    contact: '+7 (702) 333-44-55',
    color: 'bg-[#9ec5e8] text-[#1e466e]',
  },
  {
    initials: 'КЫ',
    name: 'Сад «Күнсәуле»',
    city: 'Шымкент',
    kids: '180',
    staff: '24',
    contact: '+7 (705) 222-11-66',
    color: 'bg-[#f4a6a0] text-[#7a2a22]',
  },
  {
    initials: 'ER',
    name: 'EduRise International',
    city: 'Алматы',
    kids: '420',
    staff: '54',
    contact: '+7 (727) 100-20-30',
    color: 'bg-[#9adcc0] text-[#16513c]',
  },
  {
    initials: 'ЖҰ',
    name: 'Школа «Жұлдыз»',
    city: 'Караганда',
    kids: '510',
    staff: '62',
    contact: '+7 (721) 234-56-78',
    color: 'bg-[#c8a8e8] text-[#4e2685]',
  },
  {
    initials: 'СМ',
    name: 'Smart Kids Academy',
    city: 'Атырау',
    kids: '160',
    staff: '20',
    contact: '+7 (712) 654-32-10',
    color: 'bg-[#f7d27a] text-[#7a5510]',
  },
]

export default function Schools() {
  return (
    <section className="py-[72px] bg-bg-warm" id="schools">
      <div className="wrap">
        <SectionHead
          tag="Нам доверяют"
          title="Школы и сады, которые уже с нами"
          lead="Более 120 учреждений ведут посещаемость, финансы и связь с родителями в «Лучике»."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SCHOOLS.map((s) => (
            <div
              key={s.name}
              className="card-base rounded-r-lg p-[22px] flex flex-col gap-[14px]"
            >
              <div className="flex items-center gap-[14px]">
                <div
                  className={`w-[52px] h-[52px] rounded-2xl grid place-items-center font-display font-bold text-[20px] flex-none ${s.color}`}
                >
                  {s.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[17px] text-ink-900">{s.name}</h4>
                  <div className="text-[13px] text-ink-500 mt-0.5 flex items-center gap-1.5">
                    <MapPin className="w-[14px] h-[14px]" />
                    {s.city}
                  </div>
                </div>
              </div>
              <div className="flex gap-[18px] pt-[14px] border-t border-line-2">
                <div>
                  <div className="font-display font-bold text-[18px] text-ink-900">
                    {s.kids}
                  </div>
                  <div className="text-[12px] text-ink-500">детей</div>
                </div>
                <div>
                  <div className="font-display font-bold text-[18px] text-ink-900">
                    {s.staff}
                  </div>
                  <div className="text-[12px] text-ink-500">сотрудников</div>
                </div>
              </div>
              <div className="text-[13.5px] text-ink-600 flex items-center gap-[7px]">
                <Phone className="w-[14px] h-[14px] text-orange-500" />
                {s.contact}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
