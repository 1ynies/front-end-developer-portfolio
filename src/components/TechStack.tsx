import { motion } from 'motion/react'
import { Box, Code2, Layers, Palette, Sparkles } from 'lucide-react'
import { SectionReveal } from '@/components/SectionReveal'
import { useInView } from '@/hooks/useInView'

const categories = [
  {
    label: 'Frontend',
    items: [
      { name: 'React', icon: Code2 },
      { name: 'Next.js', icon: Layers },
      { name: 'TypeScript', icon: Box },
      { name: 'Tailwind', icon: Palette },
      { name: 'Framer Motion', icon: Sparkles },
    ],
  },
  // {
  //   label: 'Backend & outils',
  //   items: [
  //     { name: 'Node.js', icon: Server },
  //     { name: 'PostgreSQL', icon: Database },
  //     { name: 'Redis', icon: Wind },
  //     { name: 'Prisma', icon: Box },
  //     { name: 'AWS', icon: Cloud },
  //   ],
  // },
]

function StackItem({
  name,
  icon: Icon,
  index,
  animate,
}: {
  name: string
  icon: typeof Code2
  index: number
  animate: boolean
}) {
  return (
    <motion.div
      className="glow-card flex items-center gap-3 rounded-lg bg-background/60 px-4 py-3"
      initial={{ opacity: 0, y: 12 }}
      animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <Icon className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} />
      <span className="font-mono text-[11px] text-foreground">{name}</span>
    </motion.div>
  )
}

export function TechStack() {
  const { ref, inView } = useInView()

  return (
    <section
      id="stack"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-surface px-6 py-20 md:px-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <h2 className="font-display text-4xl font-extrabold md:text-5xl">
            La stack.
          </h2>
        </SectionReveal>

        <div className="mt-12 space-y-10">
          {categories.map((cat) => (
            <div key={cat.label}>
              <p className="mb-4 font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-muted">
                {cat.label}
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
                {cat.items.map((item, i) => (
                  <StackItem
                    key={item.name}
                    name={item.name}
                    icon={item.icon}
                    index={i}
                    animate={inView}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
