import {
  Sparkles,
  ArrowRight,
  Play,
  CheckCircle2,
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
} from 'lucide-react'

const SCHEDULE = [
  { icon: Soup, time: '08:30', label: 'Завтрак', tone: 'done' },
  { icon: Sun, time: '10:00', label: 'Прогулка', tone: 'done' },
  { icon: BookOpen, time: '11:15', label: 'Развивающее занятие', tone: 'now' },
  { icon: Moon, time: '13:00', label: 'Тихий час', tone: 'next' },
]

const STATS = [
  { n: '120+', l: 'подключённых садов и школ' },
  { n: '18 000', l: 'детей на платформе' },
  { n: '5', l: 'ролей в одной системе' },
  { n: '99,9%', l: 'аптайм сервиса' },
]

export default function Hero() {
  return (
    <header className="pt-[70px] pb-10 relative overflow-hidden">
      <div className="wrap grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
        <div>
          <span className="eyebrow mb-[22px]">
            <Sparkles className="w-[15px] h-[15px]" />
            Всё о садике — в одном приложении
          </span>
          <h1 className="text-[42px] lg:text-[58px] leading-[1.03] text-ink-900 font-extrabold tracking-[-0.02em]">
            Один <span className="text-orange-500">Preschool</span> света для вашего
            детского сада
          </h1>
          <p className="text-[19px] leading-[1.55] text-ink-600 mt-[22px] mb-[30px] max-w-[520px]">
            Посещаемость, расписание, оценки, финансы и связь с родителями —
            единая платформа для школ и дошкольных учреждений. Веб-админка и
            мобильное приложение.
          </p>
          <div className="flex flex-wrap gap-[14px] items-center">
            <a href="#contact" className="btn-l btn-l-lg btn-primary">
              Подключить школу <ArrowRight className="w-[18px] h-[18px]" />
            </a>
            <a href="#demo" className="btn-l btn-l-lg btn-ghost">
              <Play className="w-[18px] h-[18px]" /> Смотреть демо
            </a>
          </div>
          <div className="mt-[18px] text-[14px] text-ink-500 flex items-center gap-2">
            <CheckCircle2 className="w-[17px] h-[17px] text-ok" />
            14 дней бесплатно · без привязки карты
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute inset-[-10%_-6%_-2%_-6%] bg-[radial-gradient(60%_60%_at_60%_35%,#FFE7D4,transparent_70%)] z-0" />
          <div className="w-[300px] bg-[#1c130c] rounded-[42px] p-[10px] shadow-warm-lg relative z-10">
            <div className="bg-bg rounded-[33px] overflow-hidden aspect-[9/19] flex flex-col text-ink-700">
              {/* Status bar */}
              <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[11px] font-semibold text-ink-800">
                <span>9:41</span>
                <div className="flex items-center gap-1">
                  <Signal className="w-[14px] h-[14px]" />
                  <Wifi className="w-[14px] h-[14px]" />
                  <BatteryFull className="w-[16px] h-[16px]" />
                </div>
              </div>

              {/* App header */}
              <div className="px-5 pt-2 pb-3 flex items-center justify-between">
                <div>
                  <div className="text-[12px] text-ink-500">Здравствуйте,</div>
                  <div className="text-[16px] font-extrabold text-ink-900 leading-tight">
                    Айгуль 👋
                  </div>
                </div>
                <div className="relative">
                  <button className="w-9 h-9 rounded-full bg-line-2 grid place-items-center">
                    <Bell className="w-[18px] h-[18px] text-ink-700" />
                  </button>
                  <span className="absolute top-0 right-0 w-[9px] h-[9px] rounded-full bg-orange-500 ring-2 ring-bg" />
                </div>
              </div>

              {/* Child status card */}
              <div className="mx-4 rounded-r-md bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 shadow-pop">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-white/25 grid place-items-center text-[18px] font-bold">
                    С
                  </div>
                  <div className="leading-tight">
                    <div className="font-bold text-[15px]">София</div>
                    <div className="text-[12px] text-white/80">
                      Группа «Солнышко»
                    </div>
                  </div>
                  <span className="ml-auto inline-flex items-center gap-1 bg-white/20 rounded-full px-2.5 py-1 text-[11px] font-semibold">
                    <span className="w-[6px] h-[6px] rounded-full bg-white" />
                    В саду
                  </span>
                </div>
                <div className="mt-3 pt-3 border-t border-white/20 flex items-center justify-between text-[12px]">
                  <span className="text-white/80">Отметка о приходе</span>
                  <span className="font-semibold">08:14</span>
                </div>
              </div>

              {/* Today's schedule */}
              <div className="px-4 mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[13px] font-bold text-ink-900">
                    Сегодня
                  </span>
                  <span className="text-[11px] text-orange-600 font-semibold">
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
                        className={`w-8 h-8 rounded-full grid place-items-center ${
                          s.tone === 'now'
                            ? 'bg-orange-500 text-white'
                            : s.tone === 'done'
                            ? 'bg-ok-bg text-ok'
                            : 'bg-line-2 text-ink-500'
                        }`}
                      >
                        <s.icon className="w-[16px] h-[16px]" />
                      </div>
                      <div className="leading-tight">
                        <div className="text-[12.5px] font-semibold text-ink-800">
                          {s.label}
                        </div>
                        <div className="text-[11px] text-ink-500">{s.time}</div>
                      </div>
                      {s.tone === 'done' && (
                        <CheckCircle2 className="ml-auto w-[16px] h-[16px] text-ok" />
                      )}
                      {s.tone === 'now' && (
                        <span className="ml-auto text-[10px] font-bold text-orange-600 uppercase tracking-wide">
                          Сейчас
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Photo / moment card */}
              <div className="px-4 mt-3">
                <div className="flex items-center gap-2 rounded-r-sm bg-line-2 px-3 py-2.5">
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 grid place-items-center">
                    <Camera className="w-[16px] h-[16px]" />
                  </div>
                  <div className="text-[12px] text-ink-700 leading-tight">
                    Воспитатель добавил{' '}
                    <span className="font-semibold text-ink-900">3 новых фото</span>
                  </div>
                </div>
              </div>

              {/* Bottom nav */}
              <div className="mt-auto border-t border-line bg-white/80 backdrop-blur px-6 py-3 flex items-center justify-between text-ink-400">
                <Home className="w-[20px] h-[20px] text-orange-500" />
                <CalendarDays className="w-[20px] h-[20px]" />
                <MessageCircle className="w-[20px] h-[20px]" />
                <User className="w-[20px] h-[20px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[18px] mt-14 p-[26px_30px] card-base rounded-r-lg shadow-warm-md">
          {STATS.map((s) => (
            <div key={s.l}>
              <div className="font-display font-extrabold text-[34px] text-orange-500 leading-none">
                {s.n}
              </div>
              <div className="text-[14px] text-ink-600 mt-[6px] font-medium">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
