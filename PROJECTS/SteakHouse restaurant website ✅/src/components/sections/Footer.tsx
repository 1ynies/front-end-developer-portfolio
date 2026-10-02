const footerLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Private Dining', href: '#private-dining' },
  { label: 'Gift Cards', href: '#reservations' },
  { label: 'Careers', href: '#reservations' },
]

export function Footer() {
  return (
    <footer
      className="border-t border-[var(--primary)] px-6 py-16 md:px-16"
      style={{ background: 'hsl(24, 32%, 3%)' }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-lg tracking-[0.2em] text-[var(--foreground)]">
            EMBER & STONE
          </p>
          <p className="mt-4 font-serif text-lg italic text-[var(--primary)]">
            Craft. Fire. Finesse.
          </p>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">Chicago, IL</p>
        </div>

        <div>
          <p className="nav-label mb-4 text-[var(--primary)]">Explore</p>
          <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-[var(--foreground)]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="nav-label mb-4 text-[var(--primary)]">Hours</p>
          <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
            <li>Mon–Thu 5pm–10pm</li>
            <li>Fri–Sat 5pm–11pm</li>
            <li>Sun 5pm–9pm</li>
            <li>Bar opens at 4:30pm daily</li>
          </ul>
        </div>

        <div>
          <p className="nav-label mb-4 text-[var(--primary)]">Visit</p>
          <address className="space-y-2 text-sm not-italic text-[var(--muted-foreground)]">
            <p>742 W Randolph Street</p>
            <p>Chicago, IL 60661</p>
            <p>
              <a href="tel:+13125550182" className="hover:text-[var(--foreground)]">
                +1 312 555 0182
              </a>
            </p>
            <p>
              <a
                href="mailto:info@emberandstone.com"
                className="hover:text-[var(--foreground)]"
              >
                info@emberandstone.com
              </a>
            </p>
          </address>
          <div className="mt-6 flex gap-5">
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="text-[var(--primary)] transition-opacity hover:opacity-80"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="text-[var(--primary)] transition-opacity hover:opacity-80"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path
                  d="M14 8.5V7.2c0-.7.5-1.2 1.2-1.2H17V3h-2.4C12.1 3 11 4.5 11 7v1.5H9v3.2h2V21h3v-8.3h2.5l.5-3.2H14z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-8 text-center text-xs text-[var(--muted-foreground)] md:flex-row md:text-left">
        <p>© 2024 Ember & Stone. All rights reserved.</p>
        <p>Crafted with care in Chicago</p>
      </div>
    </footer>
  )
}
