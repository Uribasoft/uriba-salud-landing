'use client'

import { motion } from 'framer-motion'
import { Award, Stethoscope, RefreshCw } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const values = [
  {
    icon: Award,
    iconColor: 'text-[var(--teal)]',
    title: 'Estándares internacionales',
    description:
      'Seguimos los frameworks de HaHUG, NHS y SEHAD-SECA para garantizar que cada proceso esté alineado con las mejores prácticas globales.',
  },
  {
    icon: Stethoscope,
    iconColor: 'text-[var(--red)]',
    title: 'Validación clínica continua',
    description:
      'Cada módulo es revisado por médicos en ejercicio antes de ser implementado. El sistema refleja cómo trabaja un equipo de Internación Domiciliaria real.',
  },
  {
    icon: RefreshCw,
    iconColor: 'text-[var(--green)]',
    title: 'Mejora continua',
    description:
      'Actualizamos la plataforma en ciclos cortos incorporando feedback directo de coordinadores, profesionales y auditores en campo.',
  },
]

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="QUIÉNES SOMOS"
          eyebrowColor="teal"
          title="Tecnología y medicina, trabajando juntas"
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mt-14">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-[family-name:var(--font-dm-sans)] text-[var(--gray-600)] leading-relaxed mb-4">
              UribaSalud es el resultado de una colaboración entre{' '}
              <strong className="text-[var(--gray-900)]">Uribasoft</strong> (
              <a
                href="https://uribasoft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--teal)] underline hover:font-semibold transition-all"
              >
                uribasoft.com
              </a>
              ) — una empresa de desarrollo de software especializada en
              soluciones de calidad internacional — y un equipo de médicos con
              amplia trayectoria en internación domiciliaria en Argentina.
            </p>
            <p className="font-[family-name:var(--font-dm-sans)] text-[var(--gray-600)] leading-relaxed mb-10">
              Esta alianza garantiza que cada decisión de producto esté
              respaldada tanto por rigor técnico como por experiencia clínica
              real. No diseñamos el sistema desde afuera del sector: lo
              diseñamos desde adentro.
            </p>

            {/* Values */}
            <div className="space-y-6">
              {values.map((val, i) => {
                const Icon = val.icon
                return (
                  <motion.div
                    key={val.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <Icon size={24} className={`${val.iconColor} mt-1 shrink-0`} />
                    <div>
                      <h4 className="font-[family-name:var(--font-dm-sans)] font-semibold text-[var(--gray-900)] mb-1">
                        {val.title}
                      </h4>
                      <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[var(--gray-600)] leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[var(--gray-600)] mt-8">
              Conocé más sobre nuestro equipo de desarrollo en{' '}
              <a
                href="https://uribasoft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--teal)] underline hover:font-semibold transition-all"
              >
                uribasoft.com &rarr;
              </a>
            </p>
          </motion.div>

          {/* Right — partner cards */}
          <div className="flex flex-col gap-6">
            {/* Uribasoft card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border border-[var(--gray-100)] rounded-xl p-8"
            >
              <h3 className="font-[family-name:var(--font-dm-sans)] text-xl font-bold text-[var(--gray-900)] mb-1">
                Uribasoft
              </h3>
              <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[var(--gray-400)] mb-4">
                Empresa de desarrollo
              </p>
              <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[var(--gray-600)] leading-relaxed mb-5">
                Arquitectura robusta, estándares internacionales y entrega
                acelerada con IA supervisada.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Spring Boot', 'Next.js', 'AWS'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-[var(--gray-50)] text-[var(--gray-600)] rounded-md font-[family-name:var(--font-dm-mono)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Medical team card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[var(--teal-light)] rounded-xl p-8"
            >
              <Stethoscope size={32} className="text-[var(--teal)] mb-4" />
              <h3 className="font-[family-name:var(--font-dm-sans)] text-xl font-bold text-[var(--gray-900)] mb-1">
                Equipo Médico Especializado
              </h3>
              <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[var(--gray-600)] leading-relaxed mb-5">
                Médicos con experiencia en internación domiciliaria que
                participan activamente en el diseño y validación de cada módulo
                de la plataforma.
              </p>
              <span className="inline-block px-3 py-1 text-xs font-medium bg-[var(--teal)] text-white rounded-full font-[family-name:var(--font-dm-mono)]">
                Internación Domiciliaria — Argentina
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
