'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

interface ToastProps {
  message: string
  visible: boolean
  onClose: () => void
}

export default function Toast({ message, visible, onClose }: ToastProps) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onClose, 2500)
      return () => clearTimeout(timer)
    }
  }, [visible, onClose])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          className="fixed bottom-6 right-6 z-[200] flex items-center gap-2 rounded-lg bg-[var(--teal)] px-5 py-3 text-white shadow-lg font-[family-name:var(--font-dm-sans)] text-sm"
        >
          <CheckCircle size={18} />
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
