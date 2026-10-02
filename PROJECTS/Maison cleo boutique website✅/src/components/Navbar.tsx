import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { navLinks } from '../data/content'
import { BagIcon, CloseIcon, HeartIcon, MenuIcon, SearchIcon } from './icons'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-ink/5 bg-cream/95 backdrop-blur-md">
        <div className="relative mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-4 py-4 md:px-6 lg:px-8">
          <div className="flex items-center">
            <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs uppercase tracking-[0.18em] text-ink/70 transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <button
              type="button"
              className="p-1 md:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>

          <a
            href="#"
            className="font-display text-2xl tracking-[0.08em] text-ink md:text-3xl"
          >
            Maison Cleo
          </a>

          <div className="flex items-center justify-end gap-4 md:gap-5">
            <button type="button" className="hidden p-1 sm:block" aria-label="Search">
              <SearchIcon className="h-5 w-5" />
            </button>
            <button type="button" className="p-1" aria-label="Wishlist">
              <HeartIcon className="h-5 w-5" />
            </button>
            <button type="button" className="hidden p-1 md:block" aria-label="Cart">
              <BagIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <a
        href="#shop"
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-cream shadow-lg md:hidden"
        aria-label="Cart"
      >
        <BagIcon className="h-5 w-5" />
      </a>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-ink/40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.nav
              className="absolute left-0 top-0 h-full w-[min(100%,20rem)] bg-cream px-6 py-8 shadow-xl"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              aria-label="Mobile"
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="font-display text-2xl tracking-wide">Menu</span>
                <button type="button" onClick={() => setOpen(false)} aria-label="Close menu">
                  <CloseIcon className="h-6 w-6" />
                </button>
              </div>
              <ul className="space-y-6">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-lg uppercase tracking-[0.15em]"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="mt-10 flex items-center gap-2 text-sm uppercase tracking-widest text-ink/70"
              >
                <SearchIcon className="h-5 w-5" />
                Search
              </button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
