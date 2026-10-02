import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { navLinks } from '@/data/content'
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
      className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/92 backdrop-blur-[12px]"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-16">
        <a
          href="#"
          className="text-base font-bold tracking-tight text-foreground"
        >
          Paul Smith
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-normal text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button size="sm" className="rounded-md text-xs" asChild>
            <a href="#contact">Hire me →</a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-border p-2 text-foreground lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          'fixed inset-0 top-16 z-40 bg-background/98 backdrop-blur-md transition-opacity lg:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        <nav
          className="flex flex-col gap-1 px-6 py-8"
          aria-label="Mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-4 text-lg font-medium text-foreground hover:bg-surface"
            >
              {link.label}
            </a>
          ))}
          <Button className="mt-6 w-full" asChild>
            <a href="#contact" onClick={() => setOpen(false)}>Hire me →</a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
