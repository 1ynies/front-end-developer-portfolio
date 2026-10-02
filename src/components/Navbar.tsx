import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#projets', label: 'Projets' },
  { href: '#stack', label: 'Stack' },
  { href: '#apropos', label: 'À propos' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const scrollTo = (hash: string) => {
    if (location.pathname !== '/') {
      navigate(`/${hash}`)
      setOpen(false)
      return
    }
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/92 backdrop-blur-[12px]"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-16">
        <Link to="/" className="flex flex-col gap-0.5">
          <span className="font-display text-base font-bold text-foreground">
            Hiba Moukhlij
          </span>
          <span className="font-mono text-[10px] font-medium text-primary">
            Front-end Dev
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => scrollTo(link.href)}
              className="font-sans text-sm font-normal text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button type="button" onClick={() => scrollTo('#contact')}>
            Me recruter →
          </Button>
        </div>

        <button
          type="button"
          className="text-foreground md:hidden"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={cn(
          'fixed inset-0 top-16 z-40 flex flex-col gap-6 bg-background/98 p-8 backdrop-blur-md transition md:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        {navLinks.map((link) => (
          <button
            key={link.href}
            type="button"
            onClick={() => scrollTo(link.href)}
            className="text-left font-display text-2xl font-bold"
          >
            {link.label}
          </button>
        ))}
        <Button className="w-fit" type="button" onClick={() => scrollTo('#contact')}>
          Me recruter →
        </Button>
      </div>
    </header>
  )
}
