'use client'

import { motion } from 'framer-motion'
import { Stethoscope, Map, BarChart3 } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const pillars = [
  {
    num: '01',
    icon: Stethoscope,
    iconColor: 'text-[var(--teal)]',
    title: 'Clínico',
    description:
      'Score NEWS2 automático, evoluciones digitales, historial completo y alertas de deterioro en tiempo real.',
    hoverBorder: 'hover:border-[var(--teal)]',
  },
  {
    num: '02',
    icon: Map,
    iconColor: 'text-[var(--red)]',
    title: 'Operativo',
    description:
      'Visitas con geofencing, firma digital, ciclo de vida completo y programación automática por frecuencia.',
    hoverBorder: 'hover:border-[var(--red)]',
  },
  {
    num: '03',
    icon: BarChart3,
    iconColor: 'text-[var(--green)]',
    title: 'Administrativo',
    description:
      'Facturación mensual automática, pedidos de insumos con trazabilidad y reportes listos para obra social.',
    hoverBorder: 'hover:border-[var(--green)]',
  },
]

const stats = [
  { value: '15+', label: 'módulos funcionales' },
  { value: '100%', label: 'trazabilidad' },
  { value: '24/7', label: 'disponibilidad' },
  { value: '< 4hs', label: 'provisionamiento de insumos' },
]

export default function Solucion() {
  return (
    <section id="solucion" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="LA SOLUCIÓN"
          eyebrowColor="teal"
          title="UribaSalud: una plataforma, todos los procesos"
          subtitle="Diseñada desde cero para la realidad de la internación domiciliaria argentina. No es un ERP genérico adaptado."
        />

        {/* 3 Pillars */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-14">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative bg-[var(--off-white)] rounded-2xl p-8 border border-transparent transition-all duration-300 ${pillar.hoverBorder} hover:shadow-[0_4px_24px_rgba(7,91,94,0.08)]`}
              >
                <span className="absolute top-4 right-4 font-[family-name:var(--font-playfair)] text-6xl font-bold text-[var(--gray-100)] select-none leading-none">
                  {pillar.num}
                </span>
                <Icon size={32} className={`${pillar.iconColor} mb-5`} />
                <h3 className="font-[family-name:var(--font-dm-sans)] text-xl font-semibold text-[var(--gray-900)] mb-3">
                  {pillar.title}
                </h3>
                <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[var(--gray-600)] leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 bg-white rounded-2xl shadow-[0_2px_16px_rgba(0,0,0,0.04)] px-8"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${
                i < stats.length - 1
                  ? 'md:border-r md:border-[var(--gray-100)]'
                  : ''
              }`}
            >
              <span className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--teal)]">
                {stat.value}
              </span>
              <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[var(--gray-600)] mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
