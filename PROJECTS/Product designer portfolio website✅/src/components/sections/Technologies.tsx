import {
  Code2,
  FileText,
  Frame,
  Globe,
  Palette,
  PenTool,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import { FadeIn } from '@/components/FadeIn'
import { technologies } from '@/data/content'

const iconMap: Record<(typeof technologies)[number], LucideIcon> = {
  Figma: PenTool,
  Framer: Frame,
  Webflow: Globe,
  React: Code2,
  Adobe: Palette,
  Notion: FileText,
}

export function Technologies() {
  return (
    <section
      id="technologies"
      className="px-6 py-16 text-center md:px-16 md:py-[60px]"
    >
      <FadeIn>
        <h2 className="text-[clamp(40px,5vw,64px)] font-extrabold tracking-[-0.04em]">
          Technologies.
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
        {technologies.map((name) => {
          const Icon = iconMap[name]
          return (
            <div
              key={name}
              className="group flex flex-col items-center gap-3 text-muted transition-colors hover:text-foreground"
            >
              <div className="flex size-12 items-center justify-center rounded-lg border border-border bg-surface transition-colors group-hover:border-primary/40">
                <Icon className="size-5" strokeWidth={1.5} />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-wider">
                {name}
              </span>
            </div>
          )
        })}
      </FadeIn>
    </section>
  )
}
