const websiteLinks = ['Services', 'Pricing', 'About']
const contactLinks = ['Get a quote', 'Contact form', 'Email us']
const socialLinks = ['Facebook', 'Instagram', 'Twitter', 'Youtube']

function FooterColumn({
  label,
  items,
}: {
  label: string
  items: string[]
}) {
  return (
    <div>
      <p className="label-caps mb-4 text-white/40">{label}</p>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-sm font-light text-white/60 transition-colors hover:text-white"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-16">
      <div className="mx-auto w-full max-w-[1120px] px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <p className="text-sm font-medium text-white">LuxureDetails</p>
            <p
              className="mt-3 text-xs leading-relaxed font-light text-white/40"
              style={{ maxWidth: 220 }}
            >
              Experience the prestige of a professionally detailed car, radiating
              elegance and refinement at every turn.
            </p>
          </div>
          <FooterColumn label="Website" items={websiteLinks} />
          <FooterColumn label="Contact" items={contactLinks} />
          <FooterColumn label="Social Media" items={socialLinks} />
        </div>

        <div
          className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/30 sm:flex-row sm:justify-between"
        >
          <span>LuxureDetails © 2024</span>
          <span>
            Cookie policy · Terms of service · Privacy policy
          </span>
        </div>
      </div>
    </footer>
  )
}
