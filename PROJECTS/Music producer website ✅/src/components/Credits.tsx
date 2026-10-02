import { motion } from 'motion/react'

import { credits } from '@/data/site'

export function Credits() {
  return (
    <section id="credits" className="px-6 py-24 md:px-16 md:py-24">
      <h2
        className="font-display text-[clamp(52px,6vw,80px)] leading-none tracking-[0.04em] text-foreground"
      >
        CREDITS
      </h2>

      <div className="mt-10 border-b border-border">
        {credits.map((credit, index) => (
          <motion.div
            key={`${credit.artist}-${credit.year}`}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="flex items-center justify-between gap-4 border-t border-border py-4 transition-colors hover:bg-surface-raised"
          >
            <span className="min-w-0 flex-1 font-body text-[15px] font-semibold text-foreground">
              {credit.artist}
            </span>
            <span
              className="hidden max-w-[40%] truncate text-center font-mono text-[10px] uppercase tracking-wider text-muted sm:block"
            >
              {credit.role}
            </span>
            <span className="shrink-0 font-mono text-[10px] text-muted">
              {credit.year}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
