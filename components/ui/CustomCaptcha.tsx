'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { ShieldCheck } from 'lucide-react'

interface CustomCaptchaProps {
  onVerified: () => void
}

const HOLD_DURATION = 2000

export default function CustomCaptcha({ onVerified }: CustomCaptchaProps) {
  const [progress, setProgress] = useState(0)
  const [verified, setVerified] = useState(false)
  const [holding, setHolding] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const startTimeRef = useRef<number>(0)

  const clearHoldInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  const startHold = useCallback(() => {
    if (verified) return
    setHolding(true)
    startTimeRef.current = Date.now() - (progress / 100) * HOLD_DURATION

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current
      const pct = Math.min((elapsed / HOLD_DURATION) * 100, 100)
      setProgress(pct)

      if (pct >= 100) {
        clearHoldInterval()
        setVerified(true)
        setHolding(false)
        onVerified()
      }
    }, 16)
  }, [verified, progress, onVerified, clearHoldInterval])

  const stopHold = useCallback(() => {
    if (verified) return
    clearHoldInterval()
    setHolding(false)
    setProgress(0)
  }, [verified, clearHoldInterval])

  useEffect(() => {
    return clearHoldInterval
  }, [clearHoldInterval])

  return (
    <div className="select-none">
      <p className="text-sm font-medium text-[var(--gray-600)] mb-2 font-[family-name:var(--font-dm-sans)]">
        Verificación *
      </p>
      <div
        onMouseDown={startHold}
        onMouseUp={stopHold}
        onMouseLeave={stopHold}
        onTouchStart={startHold}
        onTouchEnd={stopHold}
        className={`relative overflow-hidden rounded-lg border transition-all duration-200 cursor-pointer ${
          verified
            ? 'border-[var(--teal)] bg-[var(--teal-light)]'
            : holding
              ? 'border-[var(--gray-400)] bg-[var(--gray-50)]'
              : 'border-[var(--gray-200)] bg-[var(--gray-50)] hover:border-[var(--gray-400)]'
        }`}
      >
        {/* Progress bar */}
        {!verified && (
          <div
            className="absolute inset-y-0 left-0 transition-[width] duration-75 ease-linear rounded-lg"
            style={{
              width: `${progress}%`,
              background: `linear-gradient(90deg, #FF3F33 0%, #075B5E 100%)`,
              opacity: 0.15,
            }}
          />
        )}

        <div className="relative flex items-center justify-center gap-2 py-3.5 px-4">
          {verified ? (
            <>
              <ShieldCheck size={18} className="text-[var(--teal)]" />
              <span className="text-sm font-semibold text-[var(--teal)] font-[family-name:var(--font-dm-sans)]">
                Humano verificado
              </span>
            </>
          ) : (
            <>
              <div
                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                  holding
                    ? 'border-[var(--teal)] bg-[var(--teal-light)]'
                    : 'border-[var(--gray-400)] bg-white'
                }`}
              >
                {holding && (
                  <div className="w-2.5 h-2.5 rounded-sm bg-[var(--teal)] animate-pulse" />
                )}
              </div>
              <span className="text-sm text-[var(--gray-600)] font-[family-name:var(--font-dm-sans)]">
                Mantener presionado para verificar
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
