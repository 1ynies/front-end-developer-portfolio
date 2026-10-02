import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { navLinks } from '@/data/site'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/94 backdrop-blur-[16px]"
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:px-16">
        <a
          href="#"
          className="font-display text-[22px] tracking-[0.08em] text-foreground"
        >
          MARCUS VEIL
        </a>

        <nav
          className="hidden items-center gap-2 font-body text-[13px] font-medium text-foreground/90 md:flex"
          aria-label="Primary"
        >
          {navLinks.map((link, index) => (
            <span key={link.href} className="inline-flex items-center gap-2">
              {index > 0 && (
                <span className="text-muted/60" aria-hidden>·</span>
              )}
              <a
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </span>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm" className="rounded-[4px]">
            <a href="#contact">Work with me</a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded border border-border text-foreground md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          'fixed inset-0 top-16 z-40 bg-background/98 backdrop-blur-md transition-opacity md:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-8" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-border py-4 font-body text-lg font-medium"
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="mt-6 w-full rounded-[4px]">
            <a href="#contact" onClick={() => setOpen(false)}>
              Work with me
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
