type Props = { variant?: 'light' | 'dark'; className?: string }

export default function Brand({ variant = 'dark', className = '' }: Props) {
  return (
    <a
      href="#top"
      className={`group inline-flex items-center gap-2.5 font-display text-[21px] font-semibold tracking-[-0.02em] no-underline ${
        variant === 'light' ? 'text-white' : 'text-ink-900'
      } ${className}`}
    >
      <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-r-sm bg-gradient-to-br from-orange-400 to-orange-600 shadow-pop">
        {/* sunrise mark */}
        <svg
          viewBox="0 0 40 40"
          className="h-full w-full"
          aria-hidden="true"
        >
          <circle cx="20" cy="22" r="7.5" fill="#FFF6ED" />
          <g
            stroke="#FFF6ED"
            strokeWidth="2.4"
            strokeLinecap="round"
            className="origin-center transition-transform duration-700 group-hover:rotate-45"
          >
            <line x1="20" y1="6" x2="20" y2="10.5" />
            <line x1="31" y1="11" x2="28" y2="14" />
            <line x1="9" y1="11" x2="12" y2="14" />
          </g>
        </svg>
      </span>
      Preschool
    </a>
  )
}
