import { ArrowRight } from 'lucide-react'

import { FadeIn } from '@/components/FadeIn'
import { projects } from '@/data/content'
import { cn } from '@/lib/utils'

export function SelectedWork() {
  return (
    <section id="portfolio" className="px-6 py-24 md:px-16 md:py-[100px]">
      <FadeIn>
        <h2 className="text-[clamp(40px,5vw,64px)] font-extrabold tracking-[-0.04em] text-foreground">
          Selected work.
        </h2>
      </FadeIn>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <FadeIn
            key={project.slug}
            delay={index * 0.08}
            className={cn(project.featured && 'md:col-span-2')}
          >
            <a
              href={`#${project.slug}`}
              className="group glow-card relative block overflow-hidden rounded-xl border border-border bg-surface"
            >
              <div className="aspect-video w-full overflow-hidden bg-background">
                <img
                  src={project.image}
                  alt={project.title}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div
                className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background/90 via-background/40 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <p className="font-mono text-[10px] uppercase tracking-wider text-primary">
                  {project.category}
                </p>
                <p className="mt-1 text-xl font-bold text-foreground">
                  {project.title}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  View case study <ArrowRight className="size-4" />
                </span>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
