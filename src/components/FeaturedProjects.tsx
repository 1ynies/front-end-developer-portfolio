import { SectionReveal } from '@/components/SectionReveal'
import { getProjectWebsiteUrl, projects } from '@/data/projects'

export function FeaturedProjects() {
  return (
    <section id="projets" className="px-6 py-24 md:px-16 md:py-[100px]">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <h2 className="font-display text-4xl font-extrabold md:text-5xl">
            Projets.
          </h2>
        </SectionReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <SectionReveal key={project.slug} delay={index * 0.06}>
              <article
                className="glow-card flex aspect-square flex-col justify-between rounded-xl bg-surface p-6 md:p-7"
              >
                <div>
                  <p className="font-mono text-[10px] font-medium tracking-wide text-primary">
                    {project.tags}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-bold leading-snug md:text-[22px]">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-muted line-clamp-4">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-border bg-background/50 px-2 py-0.5 font-mono text-[10px] text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={getProjectWebsiteUrl(project)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block font-mono text-[11px] font-medium text-primary transition-colors hover:text-primary-dark"
                >
                  Voir le projet →
                </a>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
