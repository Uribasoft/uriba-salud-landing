'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  eyebrow: string
  eyebrowColor?: 'teal' | 'red'
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeader({
  eyebrow,
  eyebrowColor = 'teal',
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  const eyebrowColorClass =
    eyebrowColor === 'teal' ? 'text-[var(--teal)]' : 'text-[var(--red)]'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={centered ? 'text-center' : ''}
    >
      <span
        className={`font-[family-name:var(--font-dm-mono)] text-sm uppercase tracking-[0.15em] font-medium ${eyebrowColorClass}`}
      >
        {eyebrow}
      </span>
      <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(28px,4vw,42px)] font-bold text-[var(--teal)] mt-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="font-[family-name:var(--font-dm-sans)] text-base md:text-lg text-[var(--gray-600)] mt-5 max-w-2xl leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
