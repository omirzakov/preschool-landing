import { Sun } from 'lucide-react'

type Props = { variant?: 'light' | 'dark' }

export default function Brand({ variant = 'dark' }: Props) {
  return (
    <div
      className={`flex items-center gap-[11px] font-display font-extrabold text-[21px] tracking-[-0.01em] ${
        variant === 'light' ? 'text-white' : 'text-ink-900'
      }`}
    >
      <span className="w-[38px] h-[38px] rounded-[13px] bg-gradient-to-br from-orange-500 to-orange-400 grid place-items-center text-white shadow-pop">
        <Sun className="w-[22px] h-[22px]" />
      </span>
      Preschool
    </div>
  )
}
