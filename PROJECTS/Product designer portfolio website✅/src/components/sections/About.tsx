import { FadeIn } from '@/components/FadeIn'
import { publicAsset } from '@/lib/utils'

const credentials = [
  'Product Design',
  '5 yrs exp',
  '40+ projects',
  'Remote-friendly',
]

const toolIcons = ['Figma', 'Framer', 'Adobe', 'Webflow']

export function About() {
  return (
    <section id="about" className="px-6 py-24 md:px-16 md:py-24">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <FadeIn>
            <h2 className="text-[clamp(36px,4vw,56px)] font-extrabold leading-[1.05] tracking-[-0.04em]">
              Crafting products people love.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-8 space-y-5 text-base font-light leading-relaxed text-muted">
            <p>
              I&apos;m Paul Smith, a product and UI/UX designer based in London.
              I help startups and product teams ship interfaces that feel
              effortless — from first wireframe to polished handoff.
            </p>
            <p>
              My process blends user research, rapid prototyping, and tight
              collaboration with engineering. I care about clarity, hierarchy,
              and the small details that make software feel premium.
            </p>
            <p>
              Day to day I work in Figma and Framer, build design systems, and
              partner with founders who want design that moves as fast as their
              roadmap.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} className="mt-8 flex flex-wrap gap-2">
            {credentials.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-bold text-foreground"
              >
                {item}
              </span>
            ))}
          </FadeIn>
        </div>

        <FadeIn delay={0.15} className="relative">
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src={publicAsset('/portrait.jpg')}
              alt="Paul Smith at his design workspace"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div
            className="absolute -bottom-6 -left-4 w-[min(100%,280px)] rounded-xl border border-border bg-surface-raised p-4 shadow-2xl md:-left-8"
          >
            <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-muted">
              Toolkit
            </p>
            <div className="grid grid-cols-2 gap-2">
              {toolIcons.map((tool) => (
                <div
                  key={tool}
                  className="rounded-lg border border-border bg-surface px-3 py-3 text-center text-xs font-semibold"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
