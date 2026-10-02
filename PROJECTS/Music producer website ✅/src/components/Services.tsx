import { services } from '@/data/site'

export function Services() {
  return (
    <section id="services" className="bg-surface px-6 py-24 md:px-16 md:py-24">
      <h2
        className="font-display text-[clamp(52px,6vw,80px)] leading-none tracking-[0.04em] text-foreground"
      >
        WHAT I OFFER
      </h2>

      <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-6">
        {services.map((service) => (
          <article
            key={service.name}
            className="flex flex-col rounded-lg border border-border p-7"
          >
            <h3 className="font-body text-lg font-semibold text-foreground">
              {service.name}
            </h3>
            <p className="mt-3 min-h-[3rem] font-body text-sm leading-relaxed text-muted">
              {service.description}
            </p>
            <p className="mt-6 font-mono text-xs text-accent">{service.price}</p>
            <a
              href="#contact"
              className="mt-4 inline-flex font-body text-sm font-medium text-foreground transition-opacity hover:opacity-80"
            >
              Enquire →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
