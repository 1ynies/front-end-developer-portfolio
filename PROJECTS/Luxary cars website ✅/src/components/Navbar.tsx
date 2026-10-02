import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/80 py-5 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between px-6">
        <a href="#" className="text-sm font-medium text-white">
          LuxureDetails
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="btn-outline hidden text-white sm:inline-block"
          >
            Get a quote
          </a>
          <button
            type="button"
            className="text-white md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-10 bg-black md:hidden"
          >
            <button
              type="button"
              className="absolute top-5 right-6 text-white"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X size={24} />
            </button>
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="nav-link text-2xl text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href="#contact"
              className="btn-outline text-white"
              onClick={() => setOpen(false)}
            >
              Get a quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
