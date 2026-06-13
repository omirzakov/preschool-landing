import {
  Sparkles,
  ArrowRight,
  Play,
  ShieldCheck,
  Bell,
  Wifi,
  Signal,
  BatteryFull,
  Soup,
  Sun,
  BookOpen,
  Moon,
  Camera,
  Home,
  CalendarDays,
  MessageCircle,
  User,
  CheckCircle2,
} from 'lucide-react'

const SCHEDULE = [
  { icon: Soup, time: '08:30', label: 'Завтрак', tone: 'done' },
  { icon: Sun, time: '10:00', label: 'Прогулка', tone: 'done' },
  { icon: BookOpen, time: '11:15', label: 'Развивающее занятие', tone: 'now' },
  { icon: Moon, time: '13:00', label: 'Тихий час', tone: 'next' },
] as const

export default function Hero() {
  return (
    <section
      id="top"
      className="grain relative overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-24"
    >
      {/* Atmosphere */}
      <div className="mesh-warm pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute -left-24 top-40 -z-10 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl" />

      <div className="wrap grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.04fr_0.96fr]">
        {/* Copy */}
        <div className="reveal">
          <span className="eyebrow">
            <Sparkles className="h-[14px] w-[14px]" />
            Сады и школы Казахстана
          </span>

          <h1 className="text-display mt-6 text-ink-900">
            Один садик.
            <br />
            Одно приложение.
            <br />
            <span className="relative whitespace-nowrap text-orange-500">
              Ноль хаоса.
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8C60 3 130 2 297 6"
                  stroke="#FFB377"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-8 max-w-[540px] text-[19px] leading-[1.6] text-ink-600">
            Посещаемость, расписание, финансы, оценки и связь с родителями —
            единая платформа для детских садов и школ. Веб-админка для команды и
            мобильное приложение для родителей.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <a href="#contact" className="btn btn-lg btn-primary">
              Подключить школу <ArrowRight className="h-[18px] w-[18px]" />
            </a>
            <a href="#demo" className="btn btn-lg btn-ghost">
              <Play className="h-[17px] w-[17px] fill-current" /> Смотреть демо
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-[14px] font-medium text-ink-500">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-[17px] w-[17px] text-ok" />
              14 дней бесплатно
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-[17px] w-[17px] text-ok" />
              Данные хранятся в РК
            </span>
          </div>
        </div>

        {/* Device */}
        <div className="relative flex justify-center reveal" style={{ transitionDelay: '120ms' }}>
          <div className="pointer-events-none absolute inset-[-12%] -z-10 rounded-full bg-[radial-gradient(60%_60%_at_60%_40%,rgba(255,179,119,0.5),transparent_70%)]" />

          {/* Phone */}
          <div className="animate-float relative z-10 w-[296px] rounded-[44px] bg-ink-900 p-2.5 shadow-warm-lg">
            <div className="flex aspect-[9/19] flex-col overflow-hidden rounded-[36px] bg-bg text-ink-700">
              {/* Status bar */}
              <div className="flex items-center justify-between px-6 pt-3.5 pb-1 text-[11px] font-semibold text-ink-800">
                <span>9:41</span>
                <div className="flex items-center gap-1">
                  <Signal className="h-[13px] w-[13px]" />
                  <Wifi className="h-[13px] w-[13px]" />
                  <BatteryFull className="h-[15px] w-[15px]" />
                </div>
              </div>

              {/* App header */}
              <div className="flex items-center justify-between px-5 pt-2 pb-3">
                <div>
                  <div className="text-[12px] text-ink-500">Здравствуйте,</div>
                  <div className="text-[16px] font-bold leading-tight text-ink-900">
                    Айгуль 👋
                  </div>
                </div>
                <div className="relative">
                  <button className="grid h-9 w-9 place-items-center rounded-full bg-line-2">
                    <Bell className="h-[18px] w-[18px] text-ink-700" />
                  </button>
                  <span className="absolute right-0 top-0 h-[9px] w-[9px] rounded-full bg-orange-500 ring-2 ring-bg" />
                </div>
              </div>

              {/* Child status card */}
              <div className="mx-4 rounded-r-md bg-gradient-to-br from-orange-400 to-orange-600 p-4 text-white shadow-pop">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-white/25 text-[18px] font-bold">
                    С
                  </div>
                  <div className="leading-tight">
                    <div className="text-[15px] font-bold">София</div>
                    <div className="text-[12px] text-white/80">
                      Группа «Солнышко»
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-white/20 pt-3 text-[12px]">
                  <span className="text-white/80">Отметка о приходе</span>
                  <span className="font-semibold">08:14</span>
                </div>
              </div>

              {/* Today */}
              <div className="mt-4 px-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[13px] font-bold text-ink-900">
                    Сегодня
                  </span>
                  <span className="text-[11px] font-semibold text-orange-600">
                    Всё расписание
                  </span>
                </div>
                <div className="space-y-2">
                  {SCHEDULE.map((s) => (
                    <div
                      key={s.label}
                      className={`flex items-center gap-3 rounded-r-sm border px-3 py-2 ${
                        s.tone === 'now'
                          ? 'border-orange-200 bg-orange-50'
                          : 'border-line bg-white'
                      }`}
                    >
                      <div
                        className={`grid h-8 w-8 place-items-center rounded-full ${
                          s.tone === 'now'
                            ? 'bg-orange-500 text-white'
                            : s.tone === 'done'
                              ? 'bg-ok-bg text-ok'
                              : 'bg-line-2 text-ink-500'
                        }`}
                      >
                        <s.icon className="h-[16px] w-[16px]" />
                      </div>
                      <div className="leading-tight">
                        <div className="text-[12.5px] font-semibold text-ink-800">
                          {s.label}
                        </div>
                        <div className="text-[11px] text-ink-500">{s.time}</div>
                      </div>
                      {s.tone === 'done' && (
                        <CheckCircle2 className="ml-auto h-[16px] w-[16px] text-ok" />
                      )}
                      {s.tone === 'now' && (
                        <span className="ml-auto text-[10px] font-bold uppercase tracking-wide text-orange-600">
                          Сейчас
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Photo moment */}
              <div className="mt-3 px-4">
                <div className="flex items-center gap-2 rounded-r-sm bg-line-2 px-3 py-2.5">
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-orange-100 text-orange-600">
                    <Camera className="h-[16px] w-[16px]" />
                  </div>
                  <div className="text-[12px] leading-tight text-ink-700">
                    Воспитатель добавил{' '}
                    <span className="font-semibold text-ink-900">
                      3 новых фото
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom nav */}
              <div className="mt-auto flex items-center justify-between border-t border-line bg-white/80 px-7 py-2.5 text-ink-400 backdrop-blur">
                <Home className="h-[20px] w-[20px] text-orange-500" />
                <CalendarDays className="h-[20px] w-[20px]" />
                <MessageCircle className="h-[20px] w-[20px]" />
                <User className="h-[20px] w-[20px]" />
              </div>
            </div>
          </div>

          {/* Floating notification card */}
          <div
            className="absolute -left-4 top-16 z-20 hidden w-[208px] rounded-r-md border border-line bg-white/90 p-3.5 shadow-warm-lg backdrop-blur-xl sm:block animate-float"
            style={{ animationDelay: '1.2s' }}
          >
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-ok-bg text-ok">
                <CheckCircle2 className="h-[18px] w-[18px]" />
              </span>
              <div className="leading-tight">
                <div className="text-[12.5px] font-bold text-ink-900">
                  Оплата прошла
                </div>
                <div className="text-[11px] text-ink-500">Сентябрь · 45 000 ₸</div>
              </div>
            </div>
          </div>

          {/* Floating attendance pill */}
          <div
            className="absolute -right-2 bottom-24 z-20 hidden rounded-full border border-line bg-white/90 px-4 py-2.5 shadow-warm-lg backdrop-blur-xl sm:flex sm:items-center sm:gap-2 animate-float"
            style={{ animationDelay: '0.5s' }}
          >
            <span className="h-2.5 w-2.5 animate-pulse-ring rounded-full bg-orange-500" />
            <span className="text-[12.5px] font-semibold text-ink-800">
              28 из 30 в группе
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
