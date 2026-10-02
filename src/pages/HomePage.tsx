import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { About } from '@/components/About'
import { ContactCTA } from '@/components/ContactCTA'
import { FeaturedProjects } from '@/components/FeaturedProjects'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { TechStack } from '@/components/TechStack'

export function HomePage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    })
  }, [hash])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProjects />
        <TechStack />
        <About />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
