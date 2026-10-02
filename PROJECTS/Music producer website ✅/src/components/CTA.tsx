import { Button } from '@/components/ui/button'
import { socialLinks } from '@/data/site'

export function CTA() {
  return (
    <section
      id="contact"
      className="bg-background px-6 py-20 text-center md:px-16 md:py-20"
    >
      <h2
        className="font-display text-[clamp(60px,8vw,120px)] leading-[0.92] tracking-[0.04em] text-foreground"
      >
        LET&apos;S MAKE MUSIC.
      </h2>
      <p className="mx-auto mt-5 max-w-md font-body text-[15px] font-light text-muted">
        Tell me about your project — singles, EPs, or full albums. I&apos;ll
        reply within 48 hours with next steps and availability.
      </p>

      <div className="mt-8 flex flex-col items-center gap-6">
        <Button asChild className="rounded-[4px]">
          <a href="mailto:hello@marcusveil.com">Start a conversation →</a>
        </Button>

        <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-[11px] uppercase tracking-wider text-muted">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="font-mono text-[11px] text-muted">
          Based in London · Working worldwide remotely.
        </p>
      </div>
    </section>
  )
}
