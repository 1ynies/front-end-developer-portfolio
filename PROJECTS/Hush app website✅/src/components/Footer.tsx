import { Moon } from "lucide-react";

const columns = [
  {
    title: "Product",
    links: [
      { href: "#features", label: "Features" },
      { href: "#sounds", label: "Sounds" },
      { href: "#pricing", label: "Pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#", label: "Support" },
      { href: "#", label: "Press" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", label: "Privacy" },
      { href: "#", label: "Terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="section-pad !py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 font-bold">
              <Moon className="h-5 w-5 text-primary" />
              HUSH
            </a>
            <p className="mt-4 text-sm text-muted-foreground">Sleep, without the scrolling</p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-label mb-4 text-[10px]">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © 2026 Hush Labs
        </p>
      </div>
    </footer>
  );
}
