import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { GoldUnderlineHeading } from '@/components/effects/GoldUnderlineHeading'
import { assets } from '@/lib/assets'

export function Philosophy() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="philosophy" className="grid grid-cols-1 md:grid-cols-2">
      <div className="order-2 bg-[var(--background)] px-6 py-16 md:order-1 md:px-16 md:py-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <GoldUnderlineHeading>Our Philosophy</GoldUnderlineHeading>
          <div className="mt-10 space-y-6 text-sm text-[var(--muted-foreground)] md:text-base">
            <p>
              Every dish that leaves our kitchen begins with a single question:
              does this do justice to what the land provided? We source
              exclusively from family-owned ranches, farms, and fisheries —
              partners we visit, not vendors we email.
            </p>
            <p>
              Our wood-fired hearth burns white oak and cherry, chosen for the
              smoke profile they lend to each cut. Every dish is a conversation
              between heat, time, and restraint.
            </p>
            <p>
              We don&apos;t over-garnish. We don&apos;t over-explain. We trust
              the ingredient — and we trust you.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="order-1 h-64 md:order-2 md:h-auto">
        <img
          src={assets.philosophyImage}
          alt="Dry-aged ribeye steak searing in cast iron, moody kitchen lighting"
          className="h-full w-full object-cover object-center"
        />
      </div>
    </section>
  )
}
