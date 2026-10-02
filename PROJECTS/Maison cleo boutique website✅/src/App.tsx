import { About } from './components/About'
import { Bestsellers } from './components/Bestsellers'
import { BrandsRow } from './components/BrandsRow'
import { CategoryBlocks } from './components/CategoryBlocks'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Instagram } from './components/Instagram'
import { Lookbook } from './components/Lookbook'
import { Navbar } from './components/Navbar'
import { NewArrivals } from './components/NewArrivals'
import { Newsletter } from './components/Newsletter'
import { Reviews } from './components/Reviews'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <NewArrivals />
        <CategoryBlocks />
        <BrandsRow />
        <Lookbook />
        <Bestsellers />
        <About />
        <Reviews />
        <Newsletter />
        <Instagram />
      </main>
      <Footer />
    </div>
  )
}
