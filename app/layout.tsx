import type { Metadata } from 'next'
import { DM_Sans, DM_Mono, Playfair_Display } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  weight: ['700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  icons: {
    icon: '/uriba-salud-logo.ico',
  },
  title: 'UribaSalud — Plataforma de Internación Domiciliaria',
  description:
    'Sistema integral para la gestión clínica, operativa y administrativa de programas de Hospitalización a Domicilio. Score NEWS2, visitas con geofencing, facturación automática y multi-tenant.',
  openGraph: {
    title: 'UribaSalud — Plataforma de Internación Domiciliaria',
    description:
      'Sistema integral para la gestión clínica, operativa y administrativa de programas de Hospitalización a Domicilio.',
    type: 'website',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      className={`${dmSans.variable} ${dmMono.variable} ${playfair.variable}`}
    >
      <body className={dmSans.className}>{children}</body>
    </html>
  )
}
