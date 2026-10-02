import { FadeIn } from '@/components/FadeIn'
import { testimonials } from '@/data/content'

export function Testimonials() {
  return (
    <section className="px-6 py-24 md:px-16 md:py-24">
      <FadeIn>
        <h2 className="text-[clamp(40px,5vw,64px)] font-extrabold tracking-[-0.04em]">
          From clients.
        </h2>
      </FadeIn>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <FadeIn key={item.name} delay={index * 0.1}>
            <blockquote
              className="flex h-full flex-col rounded-xl border border-border border-t-2 border-t-primary bg-surface p-6"
            >
              <p className="flex-1 text-sm font-light italic leading-relaxed text-foreground/90">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-6">
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                  {item.role}
                </p>
              </footer>
            </blockquote>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
