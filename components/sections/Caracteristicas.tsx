'use client'

import { motion } from 'framer-motion'
import {
  MapPin,
  Activity,
  Users,
  FileText,
  Calendar,
  Package,
  DollarSign,
  Shield,
} from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import FeatureCard from '@/components/ui/FeatureCard'

const features = [
  {
    icon: MapPin,
    title: 'Geofencing y firma digital',
    description:
      'Validación de presencia en domicilio por GPS y firma digital del profesional. Imposible cerrar una visita sin completarla.',
  },
  {
    icon: Activity,
    title: 'Score NEWS2 automático',
    description:
      'Cálculo del National Early Warning Score 2 en cada evolución. Detección temprana de deterioro antes de que sea urgencia.',
  },
  {
    icon: Users,
    title: 'Multi-tenant y roles',
    description:
      'ADMIN, COORDINADOR y AUDITOR. Cada organización con datos completamente aislados. Un sistema para múltiples prestadores.',
  },
  {
    icon: FileText,
    title: 'Historia clínica integrada',
    description:
      'Medicamentos, evoluciones, signos vitales e historial completo de cada paciente en un solo lugar y siempre actualizado.',
  },
  {
    icon: Calendar,
    title: 'Programación de visitas',
    description:
      'Frecuencia semanal o mensual, generación en lote y asignación automática de profesionales por zona.',
  },
  {
    icon: Package,
    title: 'Gestión de insumos',
    description:
      'Pedidos con flujo formal: pendiente → aprobado → entregado. Trazabilidad completa de cada solicitud.',
  },
  {
    icon: DollarSign,
    title: 'Facturación automática',
    description:
      'Consolidación de prestaciones al cierre del período. Reportes por paciente listos para obra social o financiador.',
  },
  {
    icon: Shield,
    title: 'Auditoría inmutable',
    description:
      'Registro de cada acción del sistema: quién, qué y cuándo. Cumplimiento normativo y trazabilidad completa.',
  },
]

function FloatingPills() {
  return (
    <div className="relative hidden lg:flex flex-col justify-center items-center">
      {/* Mock patient detail */}
      <div className="bg-[#0F2E2E] rounded-2xl p-6 w-full max-w-sm shadow-[0_16px_48px_rgba(0,0,0,0.2)]">
        <div className="space-y-4">
          <div>
            <p className="text-white/50 text-[10px] font-[family-name:var(--font-dm-mono)] uppercase tracking-wider">
              Paciente
            </p>
            <p className="text-white text-lg font-semibold font-[family-name:var(--font-dm-sans)]">
              Martínez, Carlos E.
            </p>
            <p className="text-white/60 text-xs font-[family-name:var(--font-dm-mono)]">
              EPOC — Ingreso 12/02/2026
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#0A2424] rounded-lg p-3">
              <p className="text-white/50 text-[10px] font-[family-name:var(--font-dm-mono)]">Última visita</p>
              <p className="text-white text-sm font-medium font-[family-name:var(--font-dm-sans)]">Hoy 09:30</p>
            </div>
            <div className="bg-[#0A2424] rounded-lg p-3">
              <p className="text-white/50 text-[10px] font-[family-name:var(--font-dm-mono)]">Próxima</p>
              <p className="text-white text-sm font-medium font-[family-name:var(--font-dm-sans)]">Mañana 10:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating pills */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="absolute -right-4 top-6 px-3 py-1.5 rounded-full bg-[var(--green)] text-[var(--teal)] text-xs font-semibold font-[family-name:var(--font-dm-mono)] shadow-lg"
      >
        NEWS2: Bajo (2)
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="absolute -left-4 top-24 px-3 py-1.5 rounded-full bg-[var(--teal-light)] text-[var(--teal)] text-xs font-semibold font-[family-name:var(--font-dm-mono)] shadow-lg"
      >
        Visita firmada ✓
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute -right-2 bottom-4 px-3 py-1.5 rounded-full bg-[var(--red-light)] text-[var(--red)] text-xs font-semibold font-[family-name:var(--font-dm-mono)] shadow-lg"
      >
        Próxima visita: mañana
      </motion.div>
    </div>
  )
}

export default function Caracteristicas() {
  return (
    <section id="caracteristicas" className="py-20 bg-[var(--off-white)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="CARACTERÍSTICAS"
          eyebrowColor="teal"
          title="Todo lo que su equipo necesita, en un solo lugar"
        />

        <div className="mt-14 grid lg:grid-cols-[1fr_360px] gap-10 lg:gap-14 items-start">
          {/* Feature grid */}
          <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
            {features.map((feature, i) => (
              <FeatureCard key={feature.title} {...feature} index={i} />
            ))}
          </div>

          {/* Visual — floating pills */}
          <FloatingPills />
        </div>
      </div>
    </section>
  )
}
