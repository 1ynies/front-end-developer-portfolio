import { motion } from 'motion/react'
import { useMemo } from 'react'

import { cn } from '@/lib/utils'

type BarConfig = {
  height: number
  opacity: number
  duration: number
  minScale: number
}

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min)
}

function createBars(count: number): BarConfig[] {
  return Array.from({ length: count }, (_, index) => ({
    height: randomBetween(8, 64),
    opacity: index % 2 === 0 ? randomBetween(0.12, 0.35) : randomBetween(0.35, 0.6),
    duration: randomBetween(0.8, 1.4),
    minScale: randomBetween(0.2, 1),
  }))
}

export function Waveform({ className }: { className?: string }) {
  const desktopBars = useMemo(() => createBars(40), [])
  const mobileBars = useMemo(() => createBars(24), [])

  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-x-0 bottom-0 flex h-[60px] items-end gap-[3px] overflow-hidden px-1 md:h-20',
        className,
      )}
      aria-hidden
    >
      <div className="hidden w-full items-end justify-between gap-[3px] md:flex">
        {desktopBars.map((bar, index) => (
          <motion.div
            key={index}
            className="w-full max-w-[6px] flex-1 origin-bottom bg-white"
            style={{ height: bar.height, opacity: bar.opacity }}
            animate={{ scaleY: [1, bar.minScale, 1] }}
            transition={{
              duration: bar.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.04,
            }}
          />
        ))}
      </div>
      <div className="flex w-full items-end justify-between gap-[2px] md:hidden">
        {mobileBars.map((bar, index) => (
          <motion.div
            key={index}
            className="w-full max-w-[8px] flex-1 origin-bottom bg-white"
            style={{ height: bar.height * 0.85, opacity: bar.opacity }}
            animate={{ scaleY: [1, bar.minScale, 1] }}
            transition={{
              duration: bar.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.04,
            }}
          />
        ))}
      </div>
    </div>
  )
}
