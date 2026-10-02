import { socialLinks } from '@/data/content'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[hsl(0_0%_3%)] px-6 pb-6 pt-10 md:px-16">
      <div className="flex flex-col gap-8 border-b border-border pb-8 md:flex-row md:items-start md:justify-between">
        <div className="text-left">
          <p className="text-base font-bold">Paul Smith</p>
          <p className="mt-1 text-sm font-light text-muted">
            Product & UI/UX Designer
          </p>
        </div>
        <ul className="flex flex-wrap gap-6">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-6 text-left font-mono text-[10px] text-muted">
        © {year} Paul Smith. All rights reserved.
      </p>
    </footer>
  )
}
