type Props = {
  tag: string
  title: string
  lead?: string
  align?: 'center' | 'left'
  tone?: 'light' | 'dark'
  className?: string
}

export default function SectionHead({
  tag,
  title,
  lead,
  align = 'center',
  tone = 'light',
  className = '',
}: Props) {
  const dark = tone === 'dark'
  return (
    <div
      className={`reveal max-w-[680px] ${
        align === 'center' ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      <div
        className={`text-[13px] font-bold uppercase tracking-[0.12em] ${
          dark ? 'text-orange-300' : 'text-orange-600'
        }`}
      >
        {tag}
      </div>
      <h2
        className={`text-h2 mt-3 ${dark ? 'text-white' : 'text-ink-900'}`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-4 text-[18px] leading-[1.6] ${
            dark ? 'text-white/70' : 'text-ink-600'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {lead}
        </p>
      )}
    </div>
  )
}
