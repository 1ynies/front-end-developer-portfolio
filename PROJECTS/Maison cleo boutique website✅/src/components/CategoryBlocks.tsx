import { motion } from 'framer-motion'
import { categories } from '../data/content'

export function CategoryBlocks() {
  return (
    <section id="shop" className="border-y border-ink/5">
      <div className="grid md:grid-cols-3">
        {categories.map((cat, i) => (
          <motion.a
            key={cat.title}
            href="#shop"
            className="group relative min-h-[28rem] overflow-hidden md:min-h-[36rem]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-ink/25 transition-colors group-hover:bg-ink/35" />
            <div className="relative flex h-full items-center justify-center p-6">
              <div className="text-center">
                <h3 className="font-display text-3xl tracking-wide text-cream md:text-4xl">
                  {cat.title}
                </h3>
                <span
                  className="mt-4 inline-block border border-cream/80 px-6 py-2 text-xs uppercase tracking-[0.2em] text-cream transition group-hover:bg-cream group-hover:text-ink"
                >
                  Shop
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
