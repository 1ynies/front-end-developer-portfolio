import { Play } from 'lucide-react'
import { motion } from 'motion/react'

import { beats } from '@/data/site'

export function SelectedWork() {
  return (
    <section id="beats" className="px-6 py-24 md:px-16 md:py-24">
      <h2
        className="font-display text-[clamp(52px,6vw,80px)] leading-none tracking-[0.04em] text-foreground"
      >
        SELECTED WORK
      </h2>

      <div className="mt-12 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3">
        {beats.map((beat, index) => (
          <motion.article
            key={beat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group"
          >
            <div
              className="relative aspect-square overflow-hidden rounded-lg border border-border bg-surface"
            >
              <img
                src={beat.cover}
                alt={`${beat.title} cover artwork`}
                width={800}
                height={800}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 size-full object-cover"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_55%)]"
              />
              <button
                type="button"
                className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                aria-label={`Play ${beat.title}`}
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-primary text-background shadow-lg">
                  <Play className="size-5 fill-current" />
                </span>
              </button>
            </div>
            <div className="mt-3">
              <h3 className="font-body text-[15px] font-semibold text-foreground">
                {beat.title}
              </h3>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                {beat.genre}
              </p>
              <p className="mt-0.5 font-mono text-[10px] text-muted">
                BPM: {beat.bpm}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
