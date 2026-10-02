import { AnimatePresence, motion, useInView } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { GoldUnderlineHeading } from '@/components/effects/GoldUnderlineHeading'
import { testimonials } from '@/data/testimonials'
import { cn } from '@/lib/utils'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const headerRef = useRef(null)
  const inView = useInView(headerRef, { once: true, margin: '-100px' })

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length)
    }, 5000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <section className="px-6 py-24 md:px-16">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16 text-center"
      >
        <GoldUnderlineHeading>What Our Guests Say</GoldUnderlineHeading>
      </motion.div>

      <div className="mx-auto max-w-xl text-center">
        <div className="relative min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
              <blockquote className="font-serif text-2xl leading-relaxed italic text-[var(--foreground)] md:text-[28px]">
                &ldquo;{testimonials[index].quote}&rdquo;
              </blockquote>
              <p className="nav-label mt-8 text-[var(--primary)]">
                — {testimonials[index].attribution}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                'h-2 w-2 rounded-full transition-colors',
                i === index ? 'bg-[var(--primary)]' : 'bg-[var(--primary)]/30',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
