import { motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { assets } from '@/lib/assets'
import { easeOutExpo } from '@/lib/motion'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: easeOutExpo },
  },
}

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full scale-110 object-cover object-center"
        poster={assets.heroPoster}
      >
        <source src={assets.heroVideo} type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(to bottom, rgba(13,9,5,0.6) 0%, transparent 30%, transparent 60%, rgba(13,9,5,0.95) 100%)',
        }}
      />
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(to right, rgba(13,9,5,0.85) 0%, rgba(13,9,5,0.4) 50%, transparent 100%)',
        }}
      />

      <motion.div
        className="absolute bottom-12 left-6 z-20 max-w-3xl md:bottom-16 md:left-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="nav-label mb-4 text-[var(--primary)] tracking-[0.3em]"
        >
          EST. 2019 — CHICAGO, IL
        </motion.p>
        <motion.h1
          variants={itemVariants}
          className="font-serif text-[52px] leading-[1.05] font-light text-[var(--foreground)] md:text-7xl lg:text-[7.5rem]"
        >
          Where Fire
          <br />
          <span className="italic">Meets Finesse</span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-xl text-base text-[var(--muted-foreground)] md:text-lg"
        >
          A steakhouse built on craft, fire, and a reverence for the ingredient.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Button asChild size="lg">
            <a href="#reservations">Reserve Your Table</a>
          </Button>
          <Button variant="ghost" asChild size="lg">
            <a href="#menu">View the Menu</a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.a
        href="#philosophy"
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-[var(--primary)]"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="nav-label text-[10px] tracking-[0.2em]">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.a>
    </section>
  )
}
