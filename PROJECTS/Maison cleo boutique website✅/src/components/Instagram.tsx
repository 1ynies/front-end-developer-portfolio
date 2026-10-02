import { motion } from 'framer-motion'
import { instagramPhotos } from '../data/content'

export function Instagram() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-display text-2xl tracking-wide md:text-3xl">@maisoncleo.nash</h2>
          <a
            href="#"
            className="text-xs uppercase tracking-[0.18em] text-ink/60 hover:text-ink"
          >
            Follow
          </a>
        </div>
        <div className="grid grid-cols-3 gap-1 md:grid-cols-6 md:gap-2">
          {instagramPhotos.map((src, i) => (
            <motion.a
              key={src}
              href="#"
              className="group relative aspect-square overflow-hidden bg-sand/50"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <img
                src={src}
                alt={`Instagram post ${i + 1}`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
