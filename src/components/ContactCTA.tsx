import { SectionReveal } from '@/components/SectionReveal'
import { Button } from '@/components/ui/button'
import { contactEmail } from '@/data/site'

export function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-20 md:px-16 md:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden
      >
        <div
          className="h-[min(480px,80vw)] w-[min(480px,80vw)] rounded-full opacity-[0.06]"
          style={{
            background:
              'radial-gradient(circle, hsl(142 72% 50%) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-2xl text-center">
        <SectionReveal>
          <h2 className="font-display text-4xl font-black text-foreground md:text-5xl">
            Construisons quelque chose.
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.08}>
          <p className="mt-4 font-mono text-[11px] text-primary">
            Disponible actuellement 
          </p>
        </SectionReveal>
        <SectionReveal delay={0.16}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button type="button" asChild>
              <a href={`mailto:${contactEmail}`}>Démarrer un échange →</a>
            </Button>
            <Button variant="link" type="button" asChild>
              <a href={`mailto:${contactEmail}`}>Ou m&apos;écrire par email</a>
            </Button>
          </div>
          <p className="mt-6 text-xs font-light text-muted">
            Délai de réponse habituel : sous 48 h en semaine.
          </p>
        </SectionReveal>
      </div>
    </section>
  )
}
