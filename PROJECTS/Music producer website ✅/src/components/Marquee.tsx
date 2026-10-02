import { marqueeGenres } from '@/data/site'

const items = [...marqueeGenres, ...marqueeGenres]

export function Marquee() {
  return (
    <section
      className="flex h-11 items-center overflow-hidden border-y border-border bg-surface"
      aria-label="Genres and credits"
    >
      <div className="flex w-max animate-marquee items-center gap-16 whitespace-nowrap px-6">
        {[...items, ...items].map((genre, index) => (
          <span
            key={`${genre}-${index}`}
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35"
          >
            {genre}
            <span className="mx-8 text-accent" aria-hidden>·</span>
          </span>
        ))}
      </div>
    </section>
  )
}
