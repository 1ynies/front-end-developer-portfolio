import { Link } from 'react-router-dom'

const social = [
  { href: 'https://github.com', label: 'GitHub' },
  { href: 'https://linkedin.com', label: 'LinkedIn' },
  { href: 'https://twitter.com', label: 'Twitter' },
]

export function Footer() {
  return (
    <footer className="bg-[hsl(0_0%_3%)] px-6 pb-6 pt-10 md:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-b border-border pb-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-base font-bold">Hiba Moukhlij</p>
          <p className="mt-1 font-mono text-[10px] text-muted">
            Développeuse Front-end
          </p>
        </div>
        <div className="flex flex-wrap gap-4 font-mono text-[11px]">
          {social.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-primary"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-6 flex max-w-7xl flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-[10px] text-muted">
          © {new Date().getFullYear()} Hiba Moukhlij. Tous droits réservés.
        </p>
        <Link
          to="/"
          className="font-mono text-[10px] text-muted hover:text-primary"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </footer>
  )
}
