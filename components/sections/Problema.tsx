'use client'

import { motion } from 'framer-motion'
import { ClipboardX, NavigationOff, TrendingDown, Calculator } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import PainCard from '@/components/ui/PainCard'

const painPoints = [
  {
    number: '01',
    icon: ClipboardX,
    title: 'Sin sistema centralizado',
    description:
      'Pacientes en planillas, visitas en WhatsApp, evoluciones en papel. Cada auditoría consume días enteros del equipo.',
  },
  {
    number: '02',
    icon: NavigationOff,
    title: 'Visitas sin trazabilidad',
    description:
      'No hay forma de verificar presencia en domicilio. Las firmas en papel se pierden o llegan tarde para facturar.',
  },
  {
    number: '03',
    icon: TrendingDown,
    title: 'Deterioro detectado tarde',
    description:
      'Sin un score de riesgo automático, el deterioro del paciente se advierte cuando ya es una urgencia.',
  },
  {
    number: '04',
    icon: Calculator,
    title: 'Facturación manual y tardía',
    description:
      'Consolidar prestaciones al cierre del mes toma días y genera errores que retrasan el cobro semanas.',
  },
]

export default function Problema() {
  return (
    <section id="problema" className="py-20 bg-[var(--off-white)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="EL PROBLEMA"
          eyebrowColor="red"
          title="La realidad de gestionar una Internación Domiciliaria hoy en Argentina"
          subtitle="Sin las herramientas correctas, cada proceso clínico y operativo demanda horas que deberían dedicarse a los pacientes."
        />

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mt-14">
          {painPoints.map((point, i) => (
            <PainCard key={point.title} {...point} index={i} />
          ))}
        </div>

        {/* Closing quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 bg-[var(--red-light)] border-l-[3px] border-[var(--red)] rounded-r-xl px-8 py-6 max-w-3xl mx-auto"
        >
          <p className="font-[family-name:var(--font-dm-sans)] text-[var(--gray-900)] text-base italic leading-relaxed">
            &ldquo;Estos no son problemas de personas. Son problemas de
            sistemas. Y los sistemas se pueden cambiar.&rdquo;
          </p>
          <cite className="block mt-3 text-sm text-[var(--gray-600)] not-italic font-[family-name:var(--font-dm-sans)]">
            — Equipo UribaSalud
          </cite>
        </motion.blockquote>
      </div>
    </section>
  )
}
