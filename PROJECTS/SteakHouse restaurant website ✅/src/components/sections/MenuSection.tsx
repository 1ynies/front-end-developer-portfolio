import { AnimatePresence, motion, useInView } from 'motion/react'
import { useRef, useState } from 'react'
import { GoldUnderlineHeading } from '@/components/effects/GoldUnderlineHeading'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { menuCategories, type MenuItem } from '@/data/menu'

function MenuGrid({ items }: { items: MenuItem[] }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 gap-px border border-[var(--border)] md:grid-cols-2"
    >
      {items.map((item, i) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={
            inView
              ? { opacity: 1, y: 0, filter: 'blur(0px)' }
              : { opacity: 0, y: 30, filter: 'blur(10px)' }
          }
          transition={{
            duration: 0.6,
            delay: i * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="cursor-default border-b border-[var(--border)] p-8 transition-transform duration-300 hover:-translate-y-0.5"
        >
          <div className="flex items-start justify-between gap-6">
            <div>
              <h3 className="font-serif text-xl text-[var(--foreground)] not-italic">
                {item.name}
              </h3>
              <p className="mt-2 text-sm font-light text-[var(--muted-foreground)]">
                {item.description}
              </p>
            </div>
            <span className="shrink-0 font-serif text-lg italic text-[var(--primary)]">
              {item.price}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export function MenuSection() {
  const [tab, setTab] = useState(menuCategories[0].id)
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' })

  return (
    <section id="menu" className="bg-[var(--background)] px-6 py-24 md:px-16">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16 text-center"
      >
        <GoldUnderlineHeading>The Menu</GoldUnderlineHeading>
      </motion.div>

      <Tabs value={tab} onValueChange={setTab}>
        <TabsList>
          {menuCategories.map((cat) => (
            <TabsTrigger key={cat.id} value={cat.id}>
              {cat.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {menuCategories.map((cat) => (
          <TabsContent key={cat.id} value={cat.id} forceMount className="data-[state=inactive]:hidden">
            <AnimatePresence mode="wait">
              {tab === cat.id && (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <MenuGrid items={cat.items} />
                </motion.div>
              )}
            </AnimatePresence>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}
