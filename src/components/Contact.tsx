import {
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  ArrowRight,
  Loader2,
  AlertCircle,
} from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { sendFeedback } from '../lib/api'

type Status = 'idle' | 'loading' | 'success' | 'error'

const EMPTY = { name: '', phone: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({})

  const update =
    (key: keyof typeof EMPTY) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [key]: e.target.value }))
      setFieldErrors((fe) => (fe[key] ? { ...fe, [key]: [] } : fe))
    }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status === 'loading') return
    setStatus('loading')
    setError('')
    setFieldErrors({})

    const res = await sendFeedback({
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim() || undefined,
      message: form.message.trim(),
    })

    if (res.ok) {
      setStatus('success')
      setForm(EMPTY)
      return
    }

    setStatus('error')
    if (res.fieldErrors) setFieldErrors(res.fieldErrors)
    if (res.status === 429) {
      setError('Слишком много заявок. Пожалуйста, попробуйте через несколько минут.')
    } else if (res.status === 0) {
      setError('Не удалось отправить заявку. Проверьте соединение и попробуйте снова.')
    } else if (res.detail) {
      setError(res.detail)
    } else if (!res.fieldErrors) {
      setError('Что-то пошло не так. Попробуйте ещё раз или позвоните нам.')
    }
  }

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <div className="grain relative overflow-hidden rounded-r-2xl bg-espresso text-white">
          <div className="pointer-events-none absolute inset-0 [background:radial-gradient(50%_60%_at_85%_10%,rgba(249,115,22,0.35),transparent_70%),radial-gradient(45%_50%_at_0%_100%,rgba(255,143,64,0.22),transparent_70%)]" />

          <div className="relative z-10 grid grid-cols-1 items-center gap-12 p-8 md:p-14 lg:grid-cols-[1fr_1.05fr]">
            {/* Pitch */}
            <div className="reveal">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-[12.5px] font-bold uppercase tracking-[0.08em] text-orange-300">
                Готовы начать
              </span>
              <h2 className="text-h2 mt-6 text-white">
                Подключите школу к Preschool
              </h2>
              <p className="mt-5 max-w-[440px] text-[18px] leading-[1.6] text-white/70">
                Оставьте заявку — менеджер свяжется с вами, поможет с импортом
                данных и настроит платформу под ваше учреждение.
              </p>

              <ul className="mt-7 flex flex-col gap-3">
                {[
                  '14 дней бесплатно, без привязки карты',
                  'Импорт данных и обучение команды — бесплатно',
                  'Персональный менеджер на запуске',
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-[15px] text-white/85">
                    <CheckCircle2 className="h-5 w-5 flex-none text-orange-400" />
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-7 sm:flex-row sm:gap-8">
                <a
                  href="tel:+77001234567"
                  className="inline-flex items-center gap-2.5 text-[15px] font-medium text-white no-underline"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-r-xs bg-white/10">
                    <Phone className="h-[18px] w-[18px]" />
                  </span>
                  +7 (700) 123-45-67
                </a>
                <span className="inline-flex items-center gap-2.5 text-[15px] text-white/80">
                  <span className="grid h-10 w-10 place-items-center rounded-r-xs bg-white/10">
                    <MapPin className="h-[18px] w-[18px]" />
                  </span>
                  Алматы, ул. Абая 150
                </span>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={onSubmit}
              noValidate
              className="reveal rounded-r-lg bg-white p-7 text-ink-900 shadow-warm-lg md:p-8"
              style={{ transitionDelay: '120ms' }}
            >
              <h3 className="font-display text-[23px] font-semibold text-ink-900">
                Оставить заявку
              </h3>
              <p className="mt-1.5 text-[14.5px] text-ink-500">
                Заполните форму — ответим в течение рабочего дня.
              </p>

              {status === 'success' ? (
                <div className="flex flex-col items-center gap-3 py-14 text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-ok-bg text-ok">
                    <CheckCircle2 className="h-8 w-8" />
                  </span>
                  <p className="font-display text-[20px] font-semibold text-ink-900">
                    Спасибо за заявку!
                  </p>
                  <p className="text-[14.5px] text-ink-500">
                    Мы свяжемся с вами в ближайшее время.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-2 text-[14px] font-semibold text-orange-600 hover:text-orange-700"
                  >
                    Отправить ещё одну
                  </button>
                </div>
              ) : (
                <div className="mt-6 flex flex-col gap-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field
                      id="name"
                      label="Имя"
                      placeholder="Ваше имя"
                      type="text"
                      value={form.name}
                      onChange={update('name')}
                      required
                      maxLength={255}
                      errors={fieldErrors.name}
                    />
                    <Field
                      id="phone"
                      label="Телефон"
                      placeholder="+7 (___) ___-__-__"
                      type="tel"
                      value={form.phone}
                      onChange={update('phone')}
                      required
                      maxLength={20}
                      errors={fieldErrors.phone}
                    />
                  </div>
                  <Field
                    id="email"
                    label="E-mail"
                    placeholder="you@school.kz"
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    maxLength={254}
                    errors={fieldErrors.email}
                  />
                  <div>
                    <label htmlFor="message" className="field-label">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      value={form.message}
                      onChange={update('message')}
                      required
                      className="field min-h-[96px] resize-none"
                      placeholder="Название учреждения, количество детей, что хотите автоматизировать"
                    />
                    <FieldError errors={fieldErrors.message} />
                  </div>

                  {status === 'error' && error && (
                    <div className="flex items-start gap-2.5 rounded-r-sm border border-[#f3c7c0] bg-[#fcebe8] px-4 py-3 text-[14px] text-[#a83c30]">
                      <AlertCircle className="mt-0.5 h-[18px] w-[18px] flex-none" />
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn btn-lg btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-[18px] w-[18px] animate-spin" />
                        Отправляем…
                      </>
                    ) : (
                      <>
                        Отправить заявку <Send className="h-[18px] w-[18px]" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-[12.5px] text-ink-400">
                    Нажимая «Отправить», вы соглашаетесь с обработкой
                    персональных данных
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* secondary CTA line */}
        <p className="reveal mt-8 text-center text-[15px] text-ink-500">
          Хотите сначала посмотреть систему?{' '}
          <a
            href="#demo"
            className="inline-flex items-center gap-1 font-semibold text-orange-600 no-underline hover:text-orange-700"
          >
            Открыть живое демо <ArrowRight className="h-[15px] w-[15px]" />
          </a>
        </p>
      </div>
    </section>
  )
}

type FieldProps = {
  id: string
  label: string
  placeholder: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  maxLength?: number
  errors?: string[]
}

function Field({
  id,
  label,
  placeholder,
  type,
  value,
  onChange,
  required,
  maxLength,
  errors,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
        {required && <span className="text-orange-500"> *</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        maxLength={maxLength}
        placeholder={placeholder}
        aria-invalid={errors && errors.length > 0}
        className={`field ${errors?.length ? 'border-[#d9786c] focus:border-[#d9786c]' : ''}`}
      />
      <FieldError errors={errors} />
    </div>
  )
}

function FieldError({ errors }: { errors?: string[] }) {
  if (!errors?.length) return null
  return <p className="mt-1.5 text-[12.5px] text-[#a83c30]">{errors[0]}</p>
}
