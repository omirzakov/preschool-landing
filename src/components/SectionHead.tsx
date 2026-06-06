type Props = { tag: string; title: string; lead: string }

export default function SectionHead({ tag, title, lead }: Props) {
  return (
    <div className="text-center max-w-[680px] mx-auto mb-12">
      <div className="text-orange-600 font-bold text-[14px] tracking-[0.04em] uppercase">
        {tag}
      </div>
      <h2 className="text-[32px] md:text-[42px] text-ink-900 my-3 tracking-[-0.02em]">
        {title}
      </h2>
      <p className="text-[18px] text-ink-600 leading-[1.55]">{lead}</p>
    </div>
  )
}
