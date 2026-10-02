import { Headphones } from 'lucide-react'
import { motion } from 'motion/react'

import { Waveform } from '@/components/Waveform'
import { Button } from '@/components/ui/button'
import { publicAsset } from '@/lib/utils'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-surface pb-[100px] pt-24 md:px-16 md:pb-[100px] px-6"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-surface"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay"
        style={{ backgroundImage: `url(${publicAsset('/texture.png')})` }}
        aria-hidden
      />

      <img
        src={publicAsset('/images/hero-producer.jpg')}
        alt="Music producer at a mixing console in a dark studio"
        width={900}
        height={1200}
        decoding="async"
        className="pointer-events-none absolute -right-8 bottom-0 z-[1] h-[min(55vh,520px)] w-auto max-w-[min(52vw,480px)] object-cover object-left opacity-90 [mask-image:linear-gradient(to_left,black_70%,transparent)] md:-right-4"
      />

      <Waveform />

      <div className="relative z-10 max-w-[900px]">
        <motion.p
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.5, delay: 0 }}
          className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted"
        >
          Music Producer · Recording Studio
        </motion.p>

        <motion.h1
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 font-display text-[clamp(64px,16vw,100px)] leading-[0.88] tracking-[0.04em] text-foreground md:text-[clamp(80px,12vw,180px)]"
        >
          I TURN IDEAS
          <br />
          INTO RECORDS
        </motion.h1>

        <motion.p
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 max-w-[440px] font-body text-[15px] font-light leading-relaxed text-muted"
        >
          Producing, mixing, and recording since 2014. Worked with 50+ artists
          across hip-hop, R&B, and electronic.
        </motion.p>

        <motion.div
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Button asChild className="rounded-[4px]">
            <a href="#contact">Let&apos;s talk music</a>
          </Button>
          <Button asChild variant="ghost" className="rounded-[4px]">
            <a href="#beats">
              <Headphones className="size-4 fill-current" />
              Hear my work
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
