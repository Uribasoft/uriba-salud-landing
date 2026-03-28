'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield, Clock, Users, HeartPulse, ChevronDown } from 'lucide-react'
import Button from '@/components/ui/Button'

function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="relative"
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
        className="bg-[#0F2E2E] rounded-2xl p-3 shadow-[0_32px_64px_rgba(0,0,0,0.25)]"
      >
        {/* Browser dots */}
        <div className="flex items-center gap-1.5 mb-3 px-1">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
          <span className="ml-3 text-[10px] text-white/30 font-[family-name:var(--font-dm-mono)]">
            app.uribasalud.com
          </span>
        </div>
        {/* Dashboard content */}
        <div className="bg-[#0A2424] rounded-xl p-4 space-y-3">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-[var(--teal)] rounded-lg p-3">
              <p className="text-[10px] text-white/60 font-[family-name:var(--font-dm-mono)]">Pacientes activos</p>
              <p className="text-xl font-bold text-white font-[family-name:var(--font-playfair)]">47</p>
            </div>
            <div className="bg-[var(--teal)] rounded-lg p-3">
              <p className="text-[10px] text-white/60 font-[family-name:var(--font-dm-mono)]">Visitas hoy</p>
              <p className="text-xl font-bold text-white font-[family-name:var(--font-playfair)]">12</p>
            </div>
            <div className="bg-[var(--teal)] rounded-lg p-3">
              <p className="text-[10px] text-white/60 font-[family-name:var(--font-dm-mono)]">NEWS2 alertas</p>
              <p className="text-xl font-bold text-[var(--green)] font-[family-name:var(--font-playfair)]">2</p>
            </div>
          </div>
          {/* Patient list */}
          <div className="space-y-2">
            {[
              { name: 'García, María L.', dx: 'EPOC', news: 1, status: 'Bajo' },
              { name: 'Rodríguez, Juan C.', dx: 'ICC', news: 3, status: 'Bajo' },
              { name: 'Fernández, Ana R.', dx: 'Fx. cadera', news: 5, status: 'Medio' },
            ].map((p) => (
              <div
                key={p.name}
                className="flex items-center justify-between bg-[#0F2E2E] rounded-lg px-3 py-2"
              >
                <div>
                  <p className="text-xs text-white/90 font-medium font-[family-name:var(--font-dm-sans)]">
                    {p.name}
                  </p>
                  <p className="text-[10px] text-white/50 font-[family-name:var(--font-dm-mono)]">
                    {p.dx}
                  </p>
                </div>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-medium font-[family-name:var(--font-dm-mono)] ${
                    p.status === 'Bajo'
                      ? 'bg-[var(--green)]/20 text-[var(--green)]'
                      : 'bg-[var(--red)]/20 text-[var(--red)]'
                  }`}
                >
                  NEWS2: {p.status} ({p.news})
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #075B5E 0%, #0B8A8E 50%, #0A7070 100%)',
      }}
    >
      {/* Subtle SVG pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3Ccircle cx='37' cy='37' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Blob decoration */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-[0.03]">
        <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FFFFFF"
            d="M441.5,303Q407,406,303,441.5Q199,477,130,388.5Q61,300,130,211.5Q199,123,303,158.5Q407,194,441.5,303Z"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-32 pb-24 w-full">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/30 bg-white/15 mb-8"
            >
              <HeartPulse size={14} className="text-white" />
              <span className="text-white text-xs font-medium font-[family-name:var(--font-dm-mono)]">
                Internación Domiciliaria
              </span>
            </motion.div>

            <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(36px,5vw,60px)] font-bold text-white leading-[1.15] mb-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="block"
              >
                La plataforma que su
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="block"
              >
                programa de{' '}
                <span className="text-[var(--green)]">Internación Domiciliaria</span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="block"
              >
                necesitaba.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white/85 text-lg max-w-[480px] leading-relaxed mb-8 font-[family-name:var(--font-dm-sans)]"
            >
              Gestión clínica, operativa y administrativa unificada. Visitas con
              trazabilidad completa, scoring NEWS2 automático y facturación al
              instante.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button
                variant="primary"
                icon={<ArrowRight size={18} />}
                onClick={() =>
                  document
                    .getElementById('contacto')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Solicitar prueba gratuita
              </Button>
              <Button
                variant="ghost"
                onClick={() =>
                  document
                    .getElementById('caracteristicas')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Ver características
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/70 text-sm font-[family-name:var(--font-dm-sans)]"
            >
              <span className="inline-flex items-center gap-1.5">
                <Shield size={14} /> Sin permanencia
              </span>
              <span className="text-white/30">&middot;</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={14} /> 30 días gratis
              </span>
              <span className="text-white/30">&middot;</span>
              <span className="inline-flex items-center gap-1.5">
                <Users size={14} /> Hasta 3 usuarios
              </span>
            </motion.div>
          </div>

          {/* Right column — Dashboard mockup */}
          <div className="hidden lg:block">
            <DashboardMockup />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/50 text-xs font-[family-name:var(--font-dm-sans)]">
          Conocé más
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-white/50" />
        </motion.div>
      </div>
    </section>
  )
}
