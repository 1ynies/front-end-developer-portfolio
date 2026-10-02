import { motion } from 'framer-motion'
import { looks } from '../data/content'

export function Lookbook() {
  return (
    <section className="bg-sand/30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-terracotta">Lookbook</p>
          <h2 className="mt-2 font-display text-4xl tracking-wide md:text-5xl">Styled for Nashville</h2>
        </motion.div>

        <div className="space-y-20 md:space-y-28">
          {looks.map((look, i) => {
            const imageFirst = i % 2 === 0
            return (
              <motion.article
                key={look.title}
                className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                  imageFirst ? '' : 'md:[&>div:first-child]:order-2'
                }`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55 }}
              >
                <div className="overflow-hidden">
                  <img
                    src={look.image}
                    alt={look.title}
                    className="aspect-[4/5] w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className={imageFirst ? 'md:pl-4' : 'md:pr-4'}>
                  <p className="text-xs uppercase tracking-[0.2em] text-ink/45">Look {i + 1}</p>
                  <h3 className="mt-2 font-display text-3xl tracking-wide md:text-4xl">{look.title}</h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-ink/75">{look.description}</p>
                  <ul className="mt-6 space-y-2 text-sm text-ink/60">
                    {look.items.map((item) => (
                      <li key={item}>· {item}</li>
                    ))}
                  </ul>
                  <a
                    href="#shop"
                    className="mt-8 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-terracotta underline-offset-4 hover:underline"
                  >
                    Shop This Look
                  </a>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
