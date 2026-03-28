import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import Problema from '@/components/sections/Problema'
import Solucion from '@/components/sections/Solucion'
import Caracteristicas from '@/components/sections/Caracteristicas'
import Planes from '@/components/sections/Planes'
import Nosotros from '@/components/sections/Nosotros'
import Contacto from '@/components/sections/Contacto'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problema />
        <Solucion />
        <Caracteristicas />
        <Planes />
        <Nosotros />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
