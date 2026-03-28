'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import Button from '@/components/ui/Button'

const navLinks = [
  { label: 'El problema', href: '#problema' },
  { label: 'La solución', href: '#solucion' },
  { label: 'Características', href: '#caracteristicas' },
  { label: 'Planes', href: '#planes' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleNav = useCallback(
    (href: string) => {
      setMobileOpen(false)
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: 'smooth' })
    },
    []
  )

  const linkColor = scrolled
    ? 'text-[var(--gray-600)] hover:text-[var(--teal)]'
    : 'text-white/90 hover:text-white'

  const activeLinkColor = scrolled
    ? 'text-[var(--teal)] font-semibold'
    : 'text-white font-semibold'

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-[0_1px_12px_rgba(7,91,94,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="flex items-center gap-2"
        >
          <Image
            src="/uriba-salud-logo.png"
            alt="UribaSalud Logo"
            width={36}
            height={36}
            className="h-9 w-auto"
          />
          <span className="text-xl font-bold font-[family-name:var(--font-dm-sans)]">
            <span className="text-[var(--red)]">Uriba</span>
            <span className={scrolled ? 'text-[var(--teal)]' : 'text-white'}>
              Salud
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                handleNav(link.href)
              }}
              className={`text-sm font-medium transition-colors duration-200 font-[family-name:var(--font-dm-sans)] ${
                activeSection === link.href.replace('#', '')
                  ? activeLinkColor
                  : linkColor
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button
            variant="primary"
            className="text-sm px-5 py-2.5"
            onClick={() => handleNav('#contacto')}
          >
            Solicitar demo
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X size={24} className={scrolled ? 'text-[var(--gray-900)]' : 'text-white'} />
          ) : (
            <Menu size={24} className={scrolled ? 'text-[var(--gray-900)]' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[var(--gray-100)] shadow-lg">
          <div className="flex flex-col px-6 md:px-10 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNav(link.href)
                }}
                className={`py-3 text-sm font-medium font-[family-name:var(--font-dm-sans)] transition-colors ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-[var(--teal)] font-semibold'
                    : 'text-[var(--gray-600)]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="primary"
              className="mt-3 w-full text-sm"
              onClick={() => handleNav('#contacto')}
            >
              Solicitar demo
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
