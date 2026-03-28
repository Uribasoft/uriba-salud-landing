'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Button from './Button'

interface PlanCardProps {
  name: string
  price: string
  period: string
  subtitle: string
  limit?: string
  features: string[]
  ctaText: string
  badge?: string
  highlighted?: boolean
  index: number
}

export default function PlanCard({
  name,
  price,
  period,
  subtitle,
  limit,
  features,
  ctaText,
  badge,
  highlighted = false,
  index,
}: PlanCardProps) {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative rounded-2xl p-8 md:p-10 flex flex-col transition-all duration-300 ${
        highlighted
          ? 'bg-[var(--teal)] text-white shadow-[0_16px_48px_rgba(7,91,94,0.3)] md:scale-[1.03] z-10'
          : 'bg-white border border-[var(--gray-100)] shadow-[0_2px_12px_rgba(0,0,0,0.04)]'
      }`}
    >
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--green)] text-[var(--teal)] text-xs font-bold px-4 py-1 rounded-full font-[family-name:var(--font-dm-sans)]">
          {badge}
        </span>
      )}
      <h3
        className={`font-[family-name:var(--font-dm-sans)] text-lg font-semibold mb-1 ${
          highlighted ? 'text-white' : 'text-[var(--gray-900)]'
        }`}
      >
        {name}
      </h3>
      <p
        className={`text-sm mb-6 ${
          highlighted ? 'text-white/70' : 'text-[var(--gray-600)]'
        }`}
      >
        {subtitle}
      </p>
      <div className="mb-6">
        <span className="font-[family-name:var(--font-playfair)] text-4xl font-bold">
          {price}
        </span>
        <span
          className={`text-sm ml-2 ${
            highlighted ? 'text-white/70' : 'text-[var(--gray-400)]'
          }`}
        >
          {period}
        </span>
      </div>
      {limit && (
        <p
          className={`text-sm font-medium mb-4 ${
            highlighted ? 'text-white/80' : 'text-[var(--gray-600)]'
          }`}
        >
          {limit}
        </p>
      )}
      <ul className="flex-1 space-y-3 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm">
            <Check
              size={18}
              className={`mt-0.5 shrink-0 ${
                highlighted ? 'text-white/60' : 'text-[var(--green)]'
              }`}
            />
            <span
              className={
                highlighted ? 'text-white/90' : 'text-[var(--gray-600)]'
              }
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <Button
        variant={highlighted ? 'primary' : 'outline-teal'}
        onClick={scrollToContact}
        className="w-full"
      >
        {ctaText}
      </Button>
    </motion.div>
  )
}
