import Image from 'next/image'

const navLinks = [
  { label: 'El problema', href: '#problema' },
  { label: 'La solución', href: '#solucion' },
  { label: 'Características', href: '#caracteristicas' },
  { label: 'Planes', href: '#planes' },
  { label: 'Quiénes somos', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-[var(--teal)] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Col 1 — Logo + tagline */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/uriba-salud-logo.png"
                alt="UribaSalud"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold font-[family-name:var(--font-dm-sans)]">
                <span className="text-[var(--red)]">Uriba</span>
                <span className="text-white">Salud</span>
              </span>
            </div>
            <p className="font-[family-name:var(--font-dm-sans)] italic text-white/70 text-sm">
              El estándar del cuidado en casa
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <h4 className="font-[family-name:var(--font-dm-sans)] font-semibold text-sm mb-4 text-white/50 uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors font-[family-name:var(--font-dm-sans)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-dm-sans)] font-semibold text-sm mb-4 text-white/50 uppercase tracking-wider">
              Contacto
            </h4>
            <ul className="space-y-2 text-sm text-white/70 font-[family-name:var(--font-dm-sans)]">
              <li>
                <a
                  href="mailto:gcancellieri@uribasoft.com"
                  className="hover:text-white transition-colors"
                >
                  gcancellieri@uribasoft.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:fjournade@uribasoft.com"
                  className="hover:text-white transition-colors"
                >
                  fjournade@uribasoft.com
                </a>
              </li>
              <li>
                <a
                  href="https://uribasoft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  uribasoft.com &rarr;
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-xs text-white/50 font-[family-name:var(--font-dm-sans)]">
            &copy; 2026 UribaSalud &middot; Uribasoft &middot; Todos los
            derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
