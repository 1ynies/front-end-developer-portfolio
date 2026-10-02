import { motion } from 'framer-motion'
import { brands } from '../data/content'

export function BrandsRow() {
  return (
    <section id="brands" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
        <motion.p
          className="text-xs uppercase tracking-[0.25em] text-ink/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Curated Labels
        </motion.p>
        <motion.h2
          className="mt-2 font-display text-4xl tracking-wide md:text-5xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Brands
        </motion.h2>

        <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand, i) => (
            <motion.li
              key={brand}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <a
                href="#brands"
                className="text-sm font-medium uppercase tracking-[0.14em] text-ink/70 transition hover:text-terracotta md:text-base"
              >
                {brand}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
