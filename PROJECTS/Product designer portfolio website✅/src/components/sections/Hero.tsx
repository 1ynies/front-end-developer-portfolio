import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { publicAsset } from '@/lib/utils'

const heroLines = ['Product designer crafting', 'clean & modern designs.']

const heroTools = ['Figma', 'Framer', 'Webflow', 'Adobe']

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col items-center justify-center px-6 pb-16 pt-28 text-center md:px-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5"
      >
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
          <span className="relative inline-flex size-2 rounded-full bg-primary" />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
          Available for hire
        </span>
      </motion.div>

      <h1
        className="max-w-4xl text-[clamp(40px,12vw,96px)] font-extrabold leading-[0.92] tracking-[-0.04em] text-foreground"
      >
        {heroLines.map((line, index) => (
          <span key={line} className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="mt-5 max-w-[460px] text-base font-light text-muted"
      >
        Turning complex problems into intuitive interfaces. 5 years · 40+
        projects.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.5 }}
        className="mt-8 flex flex-wrap items-center justify-center gap-3"
      >
        <Button asChild>
          <a href="#portfolio">
            Explore <ArrowRight className="size-4" />
          </a>
        </Button>
        <Button variant="ghost" asChild>
          <a href="mailto:hello@paulsmith.design?subject=CV%20request">
            Download CV
          </a>
        </Button>
      </motion.div>

      <motion.div
        className="relative mt-10 size-[280px] md:mt-12 md:size-[500px]"
        style={{ filter: 'drop-shadow(0 0 60px hsl(270 80% 68% / 0.3))' }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img
          src={publicAsset('/hero-3d.jpg')}
          alt="Abstract 3D sculptural design object"
          className="size-full object-contain"
        />
      </motion.div>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-8 font-mono text-[11px] uppercase tracking-widest text-foreground/30"
      >
        {heroTools.map((tool) => (
          <li key={tool}>{tool}</li>
        ))}
      </motion.ul>
    </section>
  )
}
