import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { GoldUnderlineHeading } from '@/components/effects/GoldUnderlineHeading'
import { assets } from '@/lib/assets'

export function PrivateDining() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="private-dining"
      className="relative overflow-hidden border-y border-[var(--border)] bg-[var(--card)]"
    >
      <img
        src={assets.privateDiningImage}
        alt="Private dining room with candlelit long table"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-40"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(13,9,5,0.92) 0%, rgba(13,9,5,0.75) 45%, transparent 100%)',
        }}
      />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center md:px-16 md:py-32"
      >
        <GoldUnderlineHeading className="text-center">
          An Evening All Your Own
        </GoldUnderlineHeading>
        <h3 className="mt-6 font-serif text-2xl text-[var(--primary)]">
          Private Dining at Ember & Stone
        </h3>
        <p className="mx-auto mt-8 max-w-2xl text-sm text-[var(--muted-foreground)] md:text-base">
          Our private dining room accommodates up to 22 guests, with a dedicated
          sommelier, custom menu development, and a team committed to making your
          event unforgettable. Available for corporate dinners, celebrations, and
          intimate gatherings.
        </p>
        <div className="mt-10">
          <Button asChild size="lg">
            <a href="#reservations">Inquire About Private Dining</a>
          </Button>
        </div>
        <p className="nav-label mt-8 text-[var(--muted-foreground)]">
          Capacity: 8–22 guests · Full AV available · Custom menus from $95pp
        </p>
      </motion.div>
    </section>
  )
}
