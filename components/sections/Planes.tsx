'use client'

import { motion } from 'framer-motion'
import { Info } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import PlanCard from '@/components/ui/PlanCard'

const plans = [
  {
    name: 'Prueba Gratuita',
    price: '$0',
    period: '30 días',
    subtitle: 'Para conocer la plataforma',
    limit: 'Hasta 3 usuarios',
    features: [
      'Acceso completo a todos los módulos',
      'Soporte de onboarding incluido',
      'Configuración inicial sin costo',
      'Sin tarjeta de crédito requerida',
    ],
    ctaText: 'Solicitar prueba',
    highlighted: false,
  },
  {
    name: 'Plan Estándar',
    price: '$10 USD',
    period: 'por usuario / mes',
    subtitle: 'Para equipos en producción',
    badge: 'MÁS ELEGIDO',
    features: [
      'Sin límite de usuarios — vos definís cuántos necesitás',
      'Multi-tenant incluido',
      'Soporte prioritario',
      'Actualizaciones continuas',
      'Backups automáticos',
      'SLA de disponibilidad 99.9%',
    ],
    ctaText: 'Solicitar este plan',
    highlighted: true,
  },
  {
    name: 'Plan Enterprise',
    price: 'A medida',
    period: 'para grandes organizaciones',
    subtitle: 'Para redes de prestadores',
    features: [
      'Todo lo del Plan Estándar',
      'Integración con sistemas existentes',
      'SLA personalizado',
      'Account manager dedicado',
      'Reportes custom',
    ],
    ctaText: 'Consultar',
    highlighted: false,
  },
]

export default function Planes() {
  return (
    <section id="planes" className="py-20 bg-[var(--red-light)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="PLANES"
          eyebrowColor="red"
          title="Empezá hoy, sin compromiso"
          subtitle="Todos los planes requieren contacto previo. Nuestro equipo evalúa su caso y configura UribaSalud para su organización."
        />

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-start gap-3 bg-white border-l-[3px] border-[var(--teal)] rounded-r-lg px-4 py-3 max-w-2xl mx-auto mt-8"
        >
          <Info size={18} className="text-[var(--teal)] mt-0.5 shrink-0" />
          <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[var(--gray-600)]">
            No activamos planes automáticamente. Cada implementación es
            acompañada por nuestro equipo desde el primer día.
          </p>
        </motion.div>

        {/* Plan cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-14 items-center">
          {plans.map((plan, i) => (
            <PlanCard key={plan.name} {...plan} index={i} />
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-sm text-[var(--gray-400)] mt-10 font-[family-name:var(--font-dm-sans)]">
          Todos los precios en USD. Los planes se activan luego de una llamada
          de onboarding con nuestro equipo. Facturación mensual.
        </p>
      </div>
    </section>
  )
}
