import { GrainOverlay } from '@/components/layout/GrainOverlay'
import { Navbar } from '@/components/layout/Navbar'
import { ChefFeature } from '@/components/sections/ChefFeature'
import { Footer } from '@/components/sections/Footer'
import { Hero } from '@/components/sections/Hero'
import { MenuSection } from '@/components/sections/MenuSection'
import { Philosophy } from '@/components/sections/Philosophy'
import { PrivateDining } from '@/components/sections/PrivateDining'
import { Reservations } from '@/components/sections/Reservations'
import { Testimonials } from '@/components/sections/Testimonials'

function App() {
  return (
    <>
      <GrainOverlay />
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <MenuSection />
        <ChefFeature />
        <PrivateDining />
        <Testimonials />
        <Reservations />
      </main>
      <Footer />
    </>
  )
}

export default App
