'use client'

import { cn } from '@/lib/utils'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline-teal' | 'outline-white'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  children: ReactNode
  icon?: ReactNode
  loading?: boolean
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--red)] text-white hover:bg-[var(--red-dark)] hover:shadow-[0_4px_16px_rgba(255,63,51,0.4)]',
  secondary:
    'bg-[var(--teal)] text-white hover:bg-[var(--teal-mid)]',
  ghost:
    'border border-white/50 text-white bg-transparent hover:bg-white/10',
  'outline-teal':
    'border border-[var(--teal)] text-[var(--teal)] bg-transparent hover:bg-[var(--teal)] hover:text-white',
  'outline-white':
    'border border-white/50 text-white bg-transparent hover:bg-white/10',
}

export default function Button({
  variant = 'primary',
  children,
  icon,
  loading,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 font-[family-name:var(--font-dm-sans)] text-base font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
        variantStyles[variant],
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <svg
            className="animate-spin h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          Enviando...
        </>
      ) : (
        <>
          {children}
          {icon}
        </>
      )}
    </button>
  )
}
