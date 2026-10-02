import { motion } from 'framer-motion'
import { bestsellers } from '../data/content'
import { ProductCard } from './ProductCard'

export function Bestsellers() {
  return (
    <section id="sale" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-terracotta">Customer Favorites</p>
          <h2 className="mt-2 font-display text-4xl tracking-wide md:text-5xl">Bestsellers</h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} className="w-full" />
          ))}
        </div>
      </div>
    </section>
  )
}
