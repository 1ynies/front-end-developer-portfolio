import { FadeIn } from '@/components/FadeIn'
import { services } from '@/data/content'

export function Services() {
  return (
    <section
      id="services"
      className="bg-surface px-6 py-24 md:px-16 md:py-24"
    >
      <FadeIn>
        <h2 className="text-[clamp(40px,5vw,64px)] font-extrabold tracking-[-0.04em]">
          What I do.
        </h2>
      </FadeIn>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {services.map((service, index) => (
          <FadeIn key={service.name} delay={index * 0.1}>
            <article
              className="glow-card flex h-full flex-col rounded-xl border border-border bg-background p-6"
            >
              <p className="font-mono text-[10px] uppercase tracking-wider text-primary">
                {service.tag}
              </p>
              <h3 className="mt-3 text-lg font-bold">{service.name}</h3>
              <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-muted">
                {service.description}
              </p>
              <p className="mt-6 font-mono text-xs text-foreground">
                {service.price}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
