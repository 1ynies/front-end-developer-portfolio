import { CursorGlow } from '@/components/CursorGlow'
import { Navbar } from '@/components/Navbar'
import { About } from '@/components/sections/About'
import { CTA } from '@/components/sections/CTA'
import { Footer } from '@/components/sections/Footer'
import { Hero } from '@/components/sections/Hero'
import { SelectedWork } from '@/components/sections/SelectedWork'
import { Services } from '@/components/sections/Services'
import { Technologies } from '@/components/sections/Technologies'
import { Testimonials } from '@/components/sections/Testimonials'

function App() {
  return (
    <div className="relative z-[1] overflow-x-hidden">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <About />
        <Services />
        <Technologies />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
