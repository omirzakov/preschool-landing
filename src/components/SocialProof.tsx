import { TrendingUp, Users, Layers, Activity } from 'lucide-react'

const LOGOS = [
  'Балапан',
  'Ай-Жұлдыз',
  'Күнсәуле',
  'EduRise',
  'Жұлдыз',
  'Smart Kids',
  'Алтын Бесік',
  'Bilim Hub',
]

const STATS = [
  { icon: Layers, n: '120+', l: 'садов и школ на платформе' },
  { icon: Users, n: '18 000', l: 'детей подключено' },
  { icon: TrendingUp, n: '5', l: 'ролей в одной системе' },
  { icon: Activity, n: '99,9%', l: 'аптайм сервиса' },
]

export default function SocialProof() {
  return (
    <section className="border-y border-line bg-bg-warm py-14">
      <div className="wrap">
        <p className="reveal text-center text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-500">
          Нам доверяют детские сады и школы по всему Казахстану
        </p>

        {/* Logo marquee */}
        <div className="mask-fade-x reveal mt-8 overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-12">
            {[...LOGOS, ...LOGOS].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="select-none whitespace-nowrap font-display text-[24px] font-semibold text-ink-400/80 transition-colors hover:text-ink-700"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="reveal mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-r-lg border border-line bg-line lg:grid-cols-4">
          {STATS.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.l}
                className="flex flex-col gap-2 bg-bg-warm p-6 md:p-8"
              >
                <span className="grid h-10 w-10 place-items-center rounded-r-xs bg-orange-50 text-orange-600">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="mt-1 font-display text-[38px] font-semibold leading-none text-ink-900">
                  {s.n}
                </div>
                <div className="text-[14px] font-medium text-ink-600">{s.l}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
