import { CTA } from '@/components/CTA'
import { Credits } from '@/components/Credits'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Marquee } from '@/components/Marquee'
import { Navbar } from '@/components/Navbar'
import { SelectedWork } from '@/components/SelectedWork'
import { Services } from '@/components/Services'
import { Studio } from '@/components/Studio'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <SelectedWork />
        <Services />
        <Credits />
        <Studio />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
