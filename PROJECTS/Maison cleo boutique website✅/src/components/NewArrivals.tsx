import { motion } from 'framer-motion'
import { newArrivals } from '../data/content'
import { ProductCard } from './ProductCard'

export function NewArrivals() {
  return (
    <section id="new-arrivals" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <motion.div
          className="mb-10 flex items-end justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-terracotta">Just In</p>
            <h2 className="mt-2 font-display text-4xl tracking-wide md:text-5xl">New Arrivals</h2>
          </div>
          <a
            href="#shop"
            className="hidden text-xs uppercase tracking-[0.18em] text-ink/60 underline-offset-4 hover:text-ink hover:underline sm:block"
          >
            View All
          </a>
        </motion.div>

        <div
          className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-2 scrollbar-hide snap-x snap-mandatory md:-mx-0 md:gap-6 md:px-0"
        >
          {newArrivals.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              className="w-[72vw] snap-start sm:w-[280px] md:w-[calc((100%-6rem)/5)]"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
