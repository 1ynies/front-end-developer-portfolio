import { motion } from 'framer-motion'
import { reviews } from '../data/content'

export function Reviews() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl tracking-wide md:text-4xl">What Clients Say</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.blockquote
              key={review.name}
              className="border border-ink/8 bg-cream p-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="mb-4 flex gap-1 text-terracotta" aria-label={`${review.rating} stars`}>
                {Array.from({ length: review.rating }).map((_, j) => (
                  <span key={j}>★</span>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-ink/75">&ldquo;{review.text}&rdquo;</p>
              <footer className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-ink/60">
                — {review.name}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
