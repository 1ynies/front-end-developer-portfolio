import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { easeOutExpo } from '@/lib/motion'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Private Dining', href: '#private-dining' },
  { label: 'Reserve', href: '#reservations' },
]

const mobileLinkVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.5, ease: easeOutExpo },
  }),
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 right-0 left-0 z-40 transition-[background,box-shadow,border-color] duration-400 ease-out',
          scrolled
            ? 'border-b border-[var(--primary)]/40 bg-[rgba(13,9,5,0.95)] shadow-lg backdrop-blur-md'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <div className="mx-auto flex h-16 items-center justify-between px-6 md:h-20 md:px-12 lg:px-16">
          <a
            href="#"
            className="font-serif text-lg tracking-[0.2em] text-[var(--foreground)]"
          >
            EMBER & STONE
          </a>

          <nav className="hidden items-center gap-10 md:flex" aria-label="Main">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-label text-[var(--primary)] transition-opacity hover:opacity-80"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button variant="outline" size="sm" asChild>
              <a href="#reservations">Reserve a Table</a>
            </Button>
          </div>

          <button
            type="button"
            className="text-[var(--primary)] md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--background)] md:hidden"
          >
            <button
              type="button"
              className="absolute top-5 right-6 text-[var(--primary)]"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <X className="h-7 w-7" />
            </button>
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  custom={i}
                  variants={mobileLinkVariants}
                  initial="hidden"
                  animate="visible"
                  className="font-serif text-4xl text-[var(--foreground)]"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                custom={navLinks.length}
                variants={mobileLinkVariants}
                initial="hidden"
                animate="visible"
              >
                <Button asChild>
                  <a href="#reservations" onClick={() => setMobileOpen(false)}>
                    Reserve a Table
                  </a>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
