import { ArrowRight } from 'lucide-react'

import { FadeIn } from '@/components/FadeIn'
import { Button } from '@/components/ui/button'

export function CTA() {
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
          className="size-[min(100%,640px)] rounded-full opacity-[0.08]"
          style={{
            background:
              'radial-gradient(circle, hsl(270 80% 68%), transparent 70%)',
          }}
        />
      </div>

      <FadeIn className="relative mx-auto max-w-2xl text-center">
        <h2 className="text-[clamp(40px,6vw,72px)] font-black tracking-[-0.04em]">
          Let&apos;s build something.
        </h2>
        <p className="mt-4 text-base font-light text-muted">
          Have a product idea or need a design partner? I&apos;m taking on
          select projects for Q2.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" asChild>
            <a href="mailto:hello@paulsmith.design">
              Start a project <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button variant="link" asChild>
            <a href="mailto:hello@paulsmith.design">Or email me</a>
          </Button>
        </div>
        <p className="mt-8 font-mono text-[10px] uppercase tracking-wider text-muted">
          Typical response within 24 hours
        </p>
      </FadeIn>
    </section>
  )
}
