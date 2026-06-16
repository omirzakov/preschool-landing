import logo from '../assets/logo.png'

type Props = { variant?: 'light' | 'dark'; className?: string }

export default function Brand({ variant = 'dark', className = '' }: Props) {
  return (
    <a
      href="#top"
      aria-label="Preschool education"
      className={`group inline-flex items-center no-underline ${className}`}
    >
      <img
        src={logo}
        alt="Preschool education"
        className={`h-11 w-auto transition-transform duration-300 group-hover:scale-105 ${
          variant === 'light' ? 'drop-shadow-md' : ''
        }`}
      />
    </a>
  )
}
