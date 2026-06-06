import { Phone, Mail, MapPin, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="py-[72px]" id="contact">
      <div className="wrap">
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-[40px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 p-8 md:p-14 items-center">
            <div>
              <h2 className="text-[32px] md:text-[40px] text-white tracking-[-0.02em]">
                Подключите школу к Preschool
              </h2>
              <p className="text-[18px] text-white/90 leading-[1.5] my-5">
                Оставьте заявку — менеджер свяжется с вами, поможет с импортом
                данных и настроит платформу под ваше учреждение.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { Icon: Phone, text: '+7 (700) 123-45-67' },
                  { Icon: MapPin, text: 'Алматы, ул. Абая 150, офис 4' },
                ].map(({ Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-[13px] text-[16px] font-medium"
                  >
                    <span className="w-[42px] h-[42px] rounded-[13px] bg-white/[0.16] grid place-items-center">
                      <Icon className="w-5 h-5" />
                    </span>
                    {text}
                  </div>
                ))}
              </div>
            </div>

            <form
              onSubmit={onSubmit}
              className="bg-white rounded-r-xl p-8 shadow-warm-lg"
            >
              <h3 className="text-[23px] text-ink-900 mb-1.5 font-display font-bold">
                Оставить заявку
              </h3>
              <div className="text-[14.5px] text-ink-500 mb-[22px]">
                Заполните форму — ответим в течение рабочего дня.
              </div>
              {sent ? (
                <div className="text-ok font-semibold py-10 text-center">
                  Спасибо! Мы свяжемся с вами в ближайшее время.
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
                    <Field label="Имя" placeholder="Ваше имя" type="text" />
                    <Field
                      label="Телефон"
                      placeholder="+7 (___) ___-__-__"
                      type="tel"
                    />
                  </div>
                  <Field
                    label="E-mail"
                    placeholder="you@school.kz"
                    type="email"
                  />
                  <div className="mb-4">
                    <label className="block text-[13px] font-semibold text-ink-700 mb-[7px]">
                      Сообщение
                    </label>
                    <textarea
                      className="w-full border-[1.5px] border-line rounded-r-sm px-[15px] py-[13px] font-ui text-[15px] text-ink-900 bg-bg outline-none focus:border-orange-400 focus:bg-white resize-none min-h-[92px]"
                      placeholder="Название учреждения, количество детей, что хотите автоматизировать"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-l btn-primary w-full"
                  >
                    Отправить заявку <Send className="w-[18px] h-[18px]" />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

type FieldProps = {
  label: string
  placeholder: string
  type: string
}

function Field({ label, placeholder, type }: FieldProps) {
  return (
    <div className="mb-4">
      <label className="block text-[13px] font-semibold text-ink-700 mb-[7px]">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border-[1.5px] border-line rounded-r-sm px-[15px] py-[13px] font-ui text-[15px] text-ink-900 bg-bg outline-none focus:border-orange-400 focus:bg-white"
      />
    </div>
  )
}
