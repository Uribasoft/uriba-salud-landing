'use client'

import { useState, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import {
  Send,
  CheckCircle,
  AlertCircle,
  Mail,
  Clock,
  Copy,
} from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import Toast from '@/components/ui/Toast'
import CustomCaptcha from '@/components/ui/CustomCaptcha'

const contactSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Ingresá un email válido'),
  telefono: z.string().min(8, 'El teléfono debe tener al menos 8 dígitos'),
  organizacion: z.string().min(2, 'Ingresá el nombre de tu organización'),
  rol: z.string().min(1, 'Seleccioná tu rol'),
  plan: z.string().min(1, 'Seleccioná un plan de interés'),
  usuarios: z.string().optional(),
  mensaje: z.string().min(20, 'El mensaje debe tener al menos 20 caracteres'),
})

type ContactFormData = z.infer<typeof contactSchema>

const roles = [
  'Director Médico',
  'Coordinador de Internación Domiciliaria',
  'Gerente / Administrador',
  'Auditor',
  'Otro',
]

const planes = [
  'Prueba gratuita (30 días · hasta 3 usuarios)',
  'Plan Estándar ($10 USD/usuario/mes)',
  'Plan Enterprise (a medida)',
  'Solo quiero más información',
]

export default function Contacto() {
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')
  const [toastVisible, setToastVisible] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [captchaVerified, setCaptchaVerified] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onTouched',
  })

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Error')
      setSubmitStatus('success')
      reset()
    } catch {
      setSubmitStatus('error')
    }
  }

  const copyEmail = useCallback((email: string) => {
    navigator.clipboard.writeText(email)
    setToastMessage('Copiado')
    setToastVisible(true)
  }, [])

  const inputClass =
    'w-full bg-white border border-[var(--gray-200)] rounded-lg px-4 py-3 text-sm text-[var(--gray-900)] font-[family-name:var(--font-dm-sans)] placeholder:text-[var(--gray-400)] transition-all duration-200 focus:border-[var(--teal)] focus:ring-[3px] focus:ring-[rgba(7,91,94,0.1)] focus:outline-none'

  const errorInputClass = 'border-[var(--red)]'

  const labelClass =
    'block text-sm font-medium text-[var(--gray-600)] mb-1.5 font-[family-name:var(--font-dm-sans)]'

  return (
    <section id="contacto" className="py-20 bg-[var(--off-white)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="CONTACTO"
          eyebrowColor="teal"
          title="Hablemos sobre su programa de Internación Domiciliaria"
          subtitle="Completá el formulario y nos ponemos en contacto en menos de 24 horas para evaluar su caso."
        />

        <div className="grid lg:grid-cols-[360px_1fr] gap-10 lg:gap-16 mt-14">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Plan pills */}
            <div className="space-y-3">
              <div className="px-4 py-2.5 rounded-lg bg-[rgba(159,200,126,0.15)] text-sm font-medium text-[var(--gray-900)] font-[family-name:var(--font-dm-sans)]">
                30 días gratis &middot; 3 usuarios
              </div>
              <div className="px-4 py-2.5 rounded-lg bg-[var(--teal-light)] text-sm font-medium text-[var(--gray-900)] font-[family-name:var(--font-dm-sans)]">
                Plan Estándar &middot; $10 USD/usuario/mes
              </div>
              <div className="px-4 py-2.5 rounded-lg bg-[var(--gray-50)] text-sm font-medium text-[var(--gray-900)] font-[family-name:var(--font-dm-sans)]">
                Enterprise &middot; A medida
              </div>
            </div>

            {/* Direct contact */}
            <div className="space-y-2">
              <button
                onClick={() => copyEmail('gcancellieri@uribasoft.com')}
                className="flex items-center gap-2 text-sm text-[var(--gray-600)] hover:text-[var(--teal)] transition-colors font-[family-name:var(--font-dm-sans)] group cursor-pointer"
              >
                <Mail size={16} />
                gcancellieri@uribasoft.com
                <Copy
                  size={14}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </button>
              <button
                onClick={() => copyEmail('fjournade@uribasoft.com')}
                className="flex items-center gap-2 text-sm text-[var(--gray-600)] hover:text-[var(--teal)] transition-colors font-[family-name:var(--font-dm-sans)] group cursor-pointer"
              >
                <Mail size={16} />
                fjournade@uribasoft.com
                <Copy
                  size={14}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </button>
            </div>

            {/* Response time */}
            <div className="inline-flex items-center gap-2 bg-[rgba(159,200,126,0.15)] px-4 py-2 rounded-lg">
              <Clock size={16} className="text-[var(--green)]" />
              <span className="text-sm text-[var(--gray-600)] font-[family-name:var(--font-dm-mono)]">
                Respondemos en menos de 24 horas
              </span>
            </div>

            {/* Closing phrase */}
            <p className="font-[family-name:var(--font-playfair)] italic text-[var(--teal)] text-lg">
              &ldquo;Cada implementación comienza con una conversación.&rdquo;
            </p>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border border-[var(--gray-100)] rounded-2xl p-8 md:p-10 shadow-[0_4px_32px_rgba(7,91,94,0.08)]"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Nombre */}
              <div>
                <label htmlFor="nombre" className={labelClass}>
                  Nombre completo *
                </label>
                <input
                  id="nombre"
                  type="text"
                  {...register('nombre')}
                  className={`${inputClass} ${errors.nombre ? errorInputClass : ''}`}
                  placeholder="Ej: Dr. Juan Pérez"
                />
                {errors.nombre && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-xs text-[var(--red)] flex items-center gap-1"
                  >
                    <AlertCircle size={12} /> {errors.nombre.message}
                  </motion.p>
                )}
              </div>

              {/* Email + Teléfono */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email institucional *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    className={`${inputClass} ${errors.email ? errorInputClass : ''}`}
                    placeholder="email@organizacion.com"
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-xs text-[var(--red)] flex items-center gap-1"
                    >
                      <AlertCircle size={12} /> {errors.email.message}
                    </motion.p>
                  )}
                </div>
                <div>
                  <label htmlFor="telefono" className={labelClass}>
                    Teléfono *
                  </label>
                  <input
                    id="telefono"
                    type="tel"
                    {...register('telefono')}
                    className={`${inputClass} ${errors.telefono ? errorInputClass : ''}`}
                    placeholder="+54 11 1234-5678"
                  />
                  {errors.telefono && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-xs text-[var(--red)] flex items-center gap-1"
                    >
                      <AlertCircle size={12} /> {errors.telefono.message}
                    </motion.p>
                  )}
                </div>
              </div>

              {/* Organización */}
              <div>
                <label htmlFor="organizacion" className={labelClass}>
                  Organización / Empresa *
                </label>
                <input
                  id="organizacion"
                  type="text"
                  {...register('organizacion')}
                  className={`${inputClass} ${errors.organizacion ? errorInputClass : ''}`}
                  placeholder="Nombre de la organización"
                />
                {errors.organizacion && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-xs text-[var(--red)] flex items-center gap-1"
                  >
                    <AlertCircle size={12} /> {errors.organizacion.message}
                  </motion.p>
                )}
              </div>

              {/* Rol + Plan */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="rol" className={labelClass}>
                    Rol en la organización *
                  </label>
                  <select
                    id="rol"
                    {...register('rol')}
                    className={`${inputClass} ${errors.rol ? errorInputClass : ''}`}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Seleccioná tu rol
                    </option>
                    {roles.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                  {errors.rol && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-xs text-[var(--red)] flex items-center gap-1"
                    >
                      <AlertCircle size={12} /> {errors.rol.message}
                    </motion.p>
                  )}
                </div>
                <div>
                  <label htmlFor="plan" className={labelClass}>
                    Plan de interés *
                  </label>
                  <select
                    id="plan"
                    {...register('plan')}
                    className={`${inputClass} ${errors.plan ? errorInputClass : ''}`}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Seleccioná un plan
                    </option>
                    {planes.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                  {errors.plan && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-xs text-[var(--red)] flex items-center gap-1"
                    >
                      <AlertCircle size={12} /> {errors.plan.message}
                    </motion.p>
                  )}
                </div>
              </div>

              {/* Usuarios */}
              <div>
                <label htmlFor="usuarios" className={labelClass}>
                  Cantidad estimada de usuarios{' '}
                  <span className="text-[var(--gray-400)]">(opcional)</span>
                </label>
                <input
                  id="usuarios"
                  type="number"
                  {...register('usuarios')}
                  className={inputClass}
                  placeholder="Ej: 15"
                  min="1"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="mensaje" className={labelClass}>
                  Mensaje / Consulta *
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  {...register('mensaje')}
                  className={`${inputClass} resize-y ${errors.mensaje ? errorInputClass : ''}`}
                  placeholder="Describa brevemente sus necesidades: tipo de prestaciones, cantidad de profesionales, desafíos actuales..."
                />
                {errors.mensaje && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-xs text-[var(--red)] flex items-center gap-1"
                  >
                    <AlertCircle size={12} /> {errors.mensaje.message}
                  </motion.p>
                )}
              </div>

              {/* Captcha */}
              <CustomCaptcha onVerified={() => setCaptchaVerified(true)} />

              {/* Submit */}
              {submitStatus === 'success' ? (
                <div className="flex items-center justify-center gap-2 bg-[var(--teal)] text-white rounded-lg py-3.5 font-[family-name:var(--font-dm-sans)] font-semibold">
                  <CheckCircle size={18} />
                  Mensaje enviado. Nos contactamos pronto.
                </div>
              ) : submitStatus === 'error' ? (
                <>
                  <div className="flex items-center justify-center gap-2 bg-[#DC2626] text-white rounded-lg py-3.5 font-[family-name:var(--font-dm-sans)] font-semibold">
                    <AlertCircle size={18} />
                    Error al enviar. Intentá de nuevo.
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full mt-2"
                    icon={<Send size={16} />}
                    onClick={() => setSubmitStatus('idle')}
                  >
                    Reintentar
                  </Button>
                </>
              ) : (
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  icon={<Send size={16} />}
                  loading={submitStatus === 'loading'}
                  disabled={(!isValid || !captchaVerified) && submitStatus !== 'loading'}
                >
                  Solicitar contacto
                </Button>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      <Toast
        message={toastMessage}
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </section>
  )
}
