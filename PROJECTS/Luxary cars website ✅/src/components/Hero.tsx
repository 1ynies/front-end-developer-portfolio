import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { images } from '../lib/images'

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-black">
      <div className="mx-auto w-full max-w-[1120px] px-6">
        <div className="flex flex-col items-center pt-32 pb-16 text-center md:pt-40">
          <motion.h1
            className="font-serif text-5xl leading-[0.95] tracking-[-2px] text-white md:text-7xl lg:text-8xl"
            style={{ maxWidth: 700 }}
            {...fadeUp}
          >
            Luxury car detailing
          </motion.h1>

          <motion.p
            className="mt-8 text-base leading-relaxed font-light text-white/60 md:text-lg"
            style={{ maxWidth: 440 }}
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
          >
            Experience the prestige of a professionally detailed car, radiating
            elegance and refinement at every turn.
          </motion.p>

          <motion.a
            href="#contact"
            className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-white transition-opacity hover:opacity-70"
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ ...fadeUp.transition, delay: 0.4 }}
          >
            Let&apos;s connect
            <ArrowUpRight size={16} strokeWidth={2} />
          </motion.a>
        </div>
      </div>

      <motion.div
        className="relative mx-auto mt-4 w-full max-w-[1120px] px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.5, ease: 'easeOut' }}
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm md:aspect-[2/1]">
          <img
            src={images.hero}
            alt="Luxury vehicle with mirror-finish detailing"
            className="h-full w-full object-cover object-center"
          />
          <div
            className="absolute right-0 bottom-0 left-0 z-10 h-48 bg-gradient-to-t from-black to-transparent"
            aria-hidden="true"
          />
        </div>
      </motion.div>
    </section>
  )
}
