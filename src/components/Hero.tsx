import { motion } from 'motion/react'
import { FloatingCodeBlock } from '@/components/FloatingCodeBlock'
import { Button } from '@/components/ui/button'

const techPills = ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Vite']

export function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="flex min-h-screen items-center px-6 pb-16 pt-28 md:px-16 md:pt-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <motion.p
            className="mb-6 font-mono text-[11px] font-medium uppercase tracking-wide text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            DISPONIBLE POUR MISSIONS · 2026
          </motion.p>

          <motion.h1
            className="font-display text-[clamp(2.75rem,6.5vw,5.5rem)] font-extrabold leading-[0.92] text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            Des apps que les gens utilisent vraiment.
            <span className="cursor-blink">|</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-md text-base font-light text-muted"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            Développeuse front-end spécialisée en React, TypeScript et interfaces
            accessibles. Rapide, soignée, prête à passer à l&apos;échelle.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
          >
            <Button type="button" onClick={() => scrollTo('#projets')}>
              Voir les projets →
            </Button>
            <Button variant="ghost" type="button" asChild>
              <a href="#" onClick={(e) => e.preventDefault()}>
                Télécharger le CV
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
          >
            {techPills.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-surface px-2.5 py-1 font-mono text-[10px] text-primary"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mx-auto w-[85%] lg:mx-0 lg:w-full lg:max-w-md lg:justify-self-end"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FloatingCodeBlock />
        </motion.div>
      </div>
    </section>
  )
}
