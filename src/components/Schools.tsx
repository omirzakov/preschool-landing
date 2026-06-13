import { useEffect, useState } from 'react'
import { MapPin } from 'lucide-react'
import SectionHead from './SectionHead'
import { getSchools, type School } from '../lib/api'

const PALETTE = [
  'bg-orange-500 text-white',
  'bg-[#9ec5e8] text-[#1e466e]',
  'bg-[#f4a6a0] text-[#7a2a22]',
  'bg-[#9adcc0] text-[#16513c]',
  'bg-[#c8a8e8] text-[#4e2685]',
  'bg-[#f7d27a] text-[#7a5510]',
]

// Shown only if the API is unreachable, so the section never looks broken.
const FALLBACK: School[] = [
  { id: -1, name: 'Сад «Балапан»', logo: null, address: 'Алматы', phone: null, children_count: 240, staff_count: 32 },
  { id: -2, name: 'Школа «Ай-Жұлдыз»', logo: null, address: 'Астана', phone: null, children_count: 680, staff_count: 85 },
  { id: -3, name: 'Сад «Күнсәуле»', logo: null, address: 'Шымкент', phone: null, children_count: 180, staff_count: 24 },
  { id: -4, name: 'EduRise International', logo: null, address: 'Алматы', phone: null, children_count: 420, staff_count: 54 },
  { id: -5, name: 'Школа «Жұлдыз»', logo: null, address: 'Караганда', phone: null, children_count: 510, staff_count: 62 },
  { id: -6, name: 'Smart Kids Academy', logo: null, address: 'Атырау', phone: null, children_count: 160, staff_count: 20 },
]

function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase()
  return name.trim().slice(0, 2).toUpperCase()
}

export default function Schools() {
  const [schools, setSchools] = useState<School[] | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const ctrl = new AbortController()
    getSchools(ctrl.signal)
      .then((data) => {
        const cleaned = data.filter((s) => s.name?.trim())
        setSchools(cleaned.length ? cleaned : FALLBACK)
      })
      .catch((e) => {
        if (e?.name === 'AbortError') return
        setFailed(true)
        setSchools(FALLBACK)
      })
    return () => ctrl.abort()
  }, [])

  const loading = schools === null

  return (
    <section id="schools" className="section">
      <div className="wrap">
        <SectionHead
          tag="Нам доверяют"
          title="Школы и сады, которые уже с нами"
          lead="Более 120 учреждений ведут посещаемость, финансы и связь с родителями в Preschool."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="card flex items-center gap-4 p-5"
                  aria-hidden="true"
                >
                  <div className="h-[54px] w-[54px] flex-none animate-pulse rounded-r-sm bg-line-2" />
                  <div className="min-w-0 flex-1 space-y-2">
                    <div className="h-4 w-2/3 animate-pulse rounded bg-line-2" />
                    <div className="h-3 w-1/3 animate-pulse rounded bg-line-2" />
                  </div>
                </div>
              ))
            : schools!.map((s, i) => (
                <div
                  key={s.id}
                  className="card card-hover reveal is-in flex items-center gap-4 p-5"
                  style={{ transitionDelay: `${(i % 3) * 60}ms` }}
                >
                  {s.logo ? (
                    <img
                      src={s.logo}
                      alt={s.name}
                      loading="lazy"
                      className="h-[54px] w-[54px] flex-none rounded-r-sm object-cover"
                    />
                  ) : (
                    <div
                      className={`grid h-[54px] w-[54px] flex-none place-items-center rounded-r-sm font-display text-[20px] font-semibold ${
                        PALETTE[i % PALETTE.length]
                      }`}
                    >
                      {initials(s.name)}
                    </div>
                  )}

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-[16.5px] text-ink-900">
                      {s.name}
                    </h3>
                    {s.address && (
                      <div className="mt-0.5 flex items-center gap-1.5 text-[13px] text-ink-500">
                        <MapPin className="h-[14px] w-[14px] flex-none" />
                        <span className="truncate">{s.address}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-none gap-4 border-l border-line-2 pl-4 text-center">
                    <div>
                      <div className="font-display text-[18px] font-semibold text-ink-900">
                        {s.children_count}
                      </div>
                      <div className="text-[11px] text-ink-500">детей</div>
                    </div>
                    <div>
                      <div className="font-display text-[18px] font-semibold text-ink-900">
                        {s.staff_count}
                      </div>
                      <div className="text-[11px] text-ink-500">сотр.</div>
                    </div>
                  </div>
                </div>
              ))}
        </div>

        {failed && (
          <p className="mt-6 text-center text-[13px] text-ink-400">
            Показаны примеры учреждений — актуальный список временно недоступен.
          </p>
        )}
      </div>
    </section>
  )
}
