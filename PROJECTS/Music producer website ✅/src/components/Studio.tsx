import { gearChips } from '@/data/site'
import { publicAsset } from '@/lib/utils'

export function Studio() {
  return (
    <section
      id="studio"
      className="grid gap-10 bg-surface px-6 py-24 md:grid-cols-2 md:gap-16 md:px-16 md:py-24"
    >
      <div>
        <h2
          className="font-display text-[clamp(52px,6vw,80px)] leading-none tracking-[0.04em] text-foreground"
        >
          THE STUDIO
        </h2>
        <p className="mt-6 max-w-lg font-body text-[15px] font-light leading-relaxed text-muted">
          Veil Room is a private writing and tracking space in East London —
          built for focused sessions, honest mixes, and records that still feel
          human on headphones.
        </p>
        <p className="mt-4 max-w-lg font-body text-[15px] font-light leading-relaxed text-muted">
          Book by the day or block out a full production week. Remote
          collaboration available for artists outside the UK.
        </p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {gearChips.map((chip) => (
            <li
              key={chip}
              className="rounded border border-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-foreground/80"
            >
              {chip}
            </li>
          ))}
        </ul>
      </div>

      <div className="overflow-hidden rounded-lg border border-border">
        <img
          src={publicAsset('/images/studio.jpg')}
          alt="Professional recording studio with mixing console and isolation booth"
          width={1200}
          height={900}
          loading="lazy"
          decoding="async"
          className="aspect-[4/3] h-full w-full object-cover"
        />
      </div>
    </section>
  )
}
