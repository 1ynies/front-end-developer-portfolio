import { navLinks, socialLinks } from '@/data/site'

export function Footer() {
  return (
    <footer className="bg-[hsl(0_0%_3%)] px-6 pb-6 pt-10 md:px-16">
      <div className="flex flex-col gap-8 border-b border-border pb-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-lg tracking-[0.08em] text-foreground">
            MARCUS VEIL
          </p>
          <p className="mt-1 font-body text-xs text-muted">
            Music Producer · Studio Owner
          </p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-3 font-body text-sm text-muted">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 font-mono text-[10px] uppercase tracking-wider text-muted">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <p className="mt-6 font-mono text-[10px] text-muted">
        © {new Date().getFullYear()} Marcus Veil. All rights reserved.
      </p>
    </footer>
  )
}
