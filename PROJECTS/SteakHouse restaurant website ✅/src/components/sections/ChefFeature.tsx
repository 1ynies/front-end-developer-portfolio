import { motion, useInView, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { assets } from '@/lib/assets'

export function ChefFeature() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef(null)
  const inView = useInView(contentRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%'])

  return (
    <section ref={sectionRef} className="relative h-[50vh] overflow-hidden md:h-[70vh]">
      <motion.div style={{ y: imageY }} className="absolute inset-0 h-[115%] w-full">
        <img
          src={assets.chefImage}
          alt="Executive chef portrait in professional kitchen"
          className="h-full w-full object-cover object-center"
        />
      </motion.div>
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(13,9,5,0.92) 0%, rgba(13,9,5,0.75) 45%, transparent 100%)',
        }}
      />
      <motion.div
        ref={contentRef}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-12 left-6 z-10 max-w-xl md:bottom-16 md:left-16"
      >
        <p className="nav-label mb-3 text-[var(--primary)]">EXECUTIVE CHEF</p>
        <h2 className="font-serif text-5xl font-light text-[var(--foreground)] md:text-6xl">
          Marcus DeLeon
        </h2>
        <p className="mt-6 text-sm text-[var(--muted-foreground)] md:text-base">
          Chef Marcus has spent two decades in Michelin-starred kitchens across
          Paris, Copenhagen, and New York before bringing his fire-forward
          philosophy to Chicago. At Ember & Stone, he leads a kitchen that
          believes cooking is an act of devotion — not decoration.
        </p>
        <p className="mt-6 font-serif text-xl italic text-[var(--foreground)]">
          &ldquo;I cook the way I want to eat — honestly, without apology.&rdquo;
        </p>
      </motion.div>
    </section>
  )
}
