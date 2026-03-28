'use client'

import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  index: number
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white rounded-xl border border-[var(--gray-100)] p-6 hover:border-[rgba(7,91,94,0.3)] hover:shadow-[0_4px_24px_rgba(7,91,94,0.08)] transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-[var(--teal-light)] flex items-center justify-center mb-4">
        <Icon size={22} className="text-[var(--teal)]" />
      </div>
      <h3 className="font-[family-name:var(--font-dm-sans)] text-base font-semibold text-[var(--gray-900)] mb-2">
        {title}
      </h3>
      <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[var(--gray-600)] leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}
