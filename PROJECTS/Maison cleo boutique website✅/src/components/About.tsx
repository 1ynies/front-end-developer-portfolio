import { motion } from 'framer-motion'
import { store } from '../data/content'

export function About() {
  return (
    <section className="border-t border-ink/5 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-terracotta">Our Story</p>
          <h2 className="mt-2 font-display text-4xl tracking-wide md:text-5xl">Maison Cleo</h2>
          <p className="mt-6 text-base leading-relaxed text-ink/75">
            Born in the heart of Nashville, Maison Cleo is a destination for women who love
            intentional dressing — pieces that feel modern, feminine, and lived-in. We hand-select
            every label for quality, versatility, and that quiet confidence you carry from morning
            coffee to evening plans.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink/75">
            Step inside our Charlotte Avenue boutique for personalized styling, seasonal edits, and
            a calm space to discover your next wardrobe hero.
          </p>
          <address className="mt-8 not-italic text-sm leading-relaxed text-ink/80">
            <span className="block font-medium uppercase tracking-widest text-ink">Visit Us</span>
            {store.address}
            <br />
            {store.city}
            <br />
            <span className="mt-2 block text-ink/60">{store.hours}</span>
          </address>
        </motion.div>

        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
            alt="Maison Cleo boutique interior"
            className="aspect-[4/5] w-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  )
}
