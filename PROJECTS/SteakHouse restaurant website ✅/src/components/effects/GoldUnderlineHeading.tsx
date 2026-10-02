import { motion, useInView } from 'motion/react'
import { useRef, type ReactNode } from 'react'

type GoldUnderlineHeadingProps = {
  children: ReactNode
  as?: 'h2' | 'h3'
  className?: string
}

export function GoldUnderlineHeading({
  children,
  as = 'h2',
  className = '',
}: GoldUnderlineHeadingProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const Tag = as

  return (
    <div ref={ref} className="relative inline-block">
      <Tag
        className={`font-serif text-4xl font-light tracking-wide text-[var(--foreground)] md:text-6xl ${className}`}
      >
        {children}
      </Tag>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="mt-2 h-px w-full origin-left bg-[var(--primary)]"
      />
    </div>
  )
}
