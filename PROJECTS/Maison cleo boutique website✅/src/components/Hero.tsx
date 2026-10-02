import { motion } from 'framer-motion'
import { hero } from '../data/content'

export function Hero() {
  return (
    <section className="relative h-[min(92vh,52rem)] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={hero.image}
          alt="Maison Cleo spring collection"
          className="h-full w-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/20 to-ink/10" />
      </div>

      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-end px-4 pb-16 text-center md:pb-24">
        <motion.p
          className="mb-3 text-xs uppercase tracking-[0.35em] text-cream/90"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {hero.collection}
        </motion.p>
        <motion.h1
          className="max-w-4xl font-display text-[clamp(2.75rem,10vw,5.5rem)] leading-[0.95] tracking-wide text-cream"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          {hero.headline}
        </motion.h1>
        <motion.a
          href="#new-arrivals"
          className="mt-8 inline-block bg-terracotta px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-cream transition hover:bg-terracotta/90"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {hero.cta}
        </motion.a>
      </div>
    </section>
  )
}
