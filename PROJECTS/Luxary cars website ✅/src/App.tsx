import { BookingCTA } from './components/BookingCTA'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Grain } from './components/Grain'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Services } from './components/Services'
import { Showreel } from './components/Showreel'

function App() {
  return (
    <div className="bg-black text-white">
      <Grain />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Showreel />
        <Features />
        <BookingCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
