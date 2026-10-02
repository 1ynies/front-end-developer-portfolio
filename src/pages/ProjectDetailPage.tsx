import { ArrowLeft } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { SectionReveal } from '@/components/SectionReveal'
import { Button } from '@/components/ui/button'
import { getProjectBySlug, getProjectWebsiteUrl } from '@/data/projects'

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 pt-24">
          <p className="font-mono text-sm text-muted">Projet introuvable.</p>
          <Button className="mt-4" variant="ghost" asChild>
            <Link to="/">← Retour à l&apos;accueil</Link>
          </Button>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="px-6 pb-20 pt-28 md:px-16">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/#projets"
            className="inline-flex items-center gap-2 font-mono text-[11px] text-muted transition-colors hover:text-primary"
          >
            <ArrowLeft size={14} />
            Tous les projets
          </Link>

          <SectionReveal>
            <p className="mt-8 font-mono text-[10px] text-primary">{project.tags}</p>
            <h1 className="mt-2 font-display text-4xl font-extrabold md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-base font-light text-muted">{project.overview}</p>
          </SectionReveal>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <SectionReveal delay={0.1}>
              <h2 className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                Défi
              </h2>
              <p className="mt-3 text-sm font-light leading-relaxed text-muted">
                {project.challenge}
              </p>
            </SectionReveal>
            <SectionReveal delay={0.14}>
              <h2 className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                Solution
              </h2>
              <p className="mt-3 text-sm font-light leading-relaxed text-muted">
                {project.solution}
              </p>
            </SectionReveal>
          </div>

          <SectionReveal delay={0.18}>
            <h2 className="mt-14 font-display text-2xl font-bold">Cas d&apos;usage</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {project.useCases.map((uc) => (
                <article
                  key={uc.title}
                  className="glow-card rounded-xl bg-surface p-5"
                >
                  <h3 className="font-display text-base font-semibold">{uc.title}</h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-muted">
                    {uc.description}
                  </p>
                </article>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal delay={0.22}>
            <h2 className="mt-14 font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
              Résultats
            </h2>
            <ul className="mt-4 space-y-2">
              {project.outcomes.map((o) => (
                <li
                  key={o}
                  className="flex gap-2 font-mono text-[11px] text-foreground"
                >
                  <span className="text-primary">→</span>
                  {o}
                </li>
              ))}
            </ul>
          </SectionReveal>

          <SectionReveal delay={0.26}>
            <div className="mt-14 flex flex-wrap gap-2 border-t border-border pt-10">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-[10px] text-primary"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <a
                  href={getProjectWebsiteUrl(project)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le site en ligne →
                </a>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/#contact">Discuter de ce type de projet →</Link>
              </Button>
            </div>
          </SectionReveal>
        </div>
      </main>
      <Footer />
    </>
  )
}
