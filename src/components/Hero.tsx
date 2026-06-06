import { Sparkles, ArrowRight, Play, CheckCircle2, Smartphone } from 'lucide-react'

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
            <div className="bg-bg rounded-[33px] overflow-hidden aspect-[9/19] grid place-items-center text-ink-400">
              <div className="text-center px-6">
                <Smartphone className="w-12 h-12 mx-auto text-orange-500 mb-3" />
                <div className="text-ink-700 font-semibold">
                  Мобильное приложение
                </div>
                <div className="text-ink-500 text-[13px] mt-2">
                  для родителей и сотрудников
                </div>
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
