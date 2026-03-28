'use client'

import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

interface PainCardProps {
  number: string
  icon: LucideIcon
  title: string
  description: string
  index: number
}

export default function PainCard({
  number,
  icon: Icon,
  title,
  description,
  index,
}: PainCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative bg-white rounded-xl border border-[var(--gray-100)] p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
    >
      <span className="absolute top-4 left-4 font-[family-name:var(--font-playfair)] text-7xl font-bold text-[rgba(255,63,51,0.08)] leading-none select-none">
        {number}
      </span>
      <div className="relative z-10">
        <Icon size={24} className="text-[var(--red)] mb-4" />
        <h3 className="font-[family-name:var(--font-dm-sans)] text-lg font-semibold text-[var(--gray-900)] mb-2">
          {title}
        </h3>
        <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[var(--gray-600)] leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
