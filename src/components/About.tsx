import { SectionReveal } from '@/components/SectionReveal'

const stats = [
  '1+ ans d’expérience',
  '10+ projets livrés',
  
  '100 % remote-friendly',
]

export function About() {
  return (
    <section id="apropos" className="px-6 py-20 md:px-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionReveal>
            <h2 className="font-display text-4xl font-extrabold md:text-5xl">
              À propos.
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <div className="mt-8 space-y-4 text-sm font-light leading-relaxed text-muted">
              <p>
                Je suis Hiba Moukhlij, développeuse front-end basée au Maroc. Je
                transforme des idées produit en interfaces nettes, performantes et
                agréables à utiliser au quotidien.
              </p>
              <p>
                Mon approche : comprendre les utilisateurs, itérer avec des
                prototypes rapides, et soigner chaque détail — typographie,
                micro-interactions, accessibilité — sans sacrifier la vitesse de
                livraison.
              </p>
              <p>
                Je construis surtout des applications React modernes, des sites
                marketing animés et des dashboards data-driven pour des startups et
                des équipes produit en croissance.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.16}>
            <div className="mt-8 flex flex-wrap gap-2">
              {stats.map((stat) => (
                <span
                  key={stat}
                  className="rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-[10px] text-foreground"
                >
                  {stat}
                </span>
              ))}
            </div>
          </SectionReveal>
        </div>

        <SectionReveal delay={0.12}>
          <div
            className="relative aspect-[4/5] max-w-md overflow-hidden rounded-xl border border-border bg-surface-raised lg:ml-auto"
            role="img"
            aria-label="Portrait stylisé — développeuse au poste de travail, éclairage sombre, code vert sur l'écran"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-background" />
            <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute left-8 top-10 right-8 rounded-lg border border-border bg-background/80 p-3 font-mono text-[10px] text-primary shadow-lg">
              <span className="text-muted">$</span> npm run dev
              <br />
              <span className="text-muted">→</span> ready on{' '}
              <span className="text-foreground">localhost:5173</span>
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="h-32 rounded-lg border border-primary/20 bg-surface/90 backdrop-blur-sm" />
              <p className="mt-3 font-mono text-[10px] text-muted">
                // focused · shipping · learning
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
