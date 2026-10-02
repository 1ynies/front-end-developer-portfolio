import { navLinks, store } from '../data/content'

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-3xl tracking-wide">Maison Cleo</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/65">
              Curated women&apos;s fashion in Nashville. Thoughtfully edited brands for every chapter
              of your style story.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cream/50">Explore</p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-cream/80 hover:text-cream">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cream/50">Boutique</p>
            <p className="mt-4 text-sm leading-relaxed text-cream/80">
              {store.address}
              <br />
              {store.city}
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-cream/10 pt-8 text-center text-xs text-cream/45">
          © {new Date().getFullYear()} Maison Cleo. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
