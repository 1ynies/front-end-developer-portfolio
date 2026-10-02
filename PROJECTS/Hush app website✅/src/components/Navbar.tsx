import { Moon } from "lucide-react";
import { useEffect, useState } from "react";
import clsx from "clsx";

const links = [
  { href: "#features", label: "Features" },
  { href: "#sounds", label: "Sounds" },
  { href: "#pricing", label: "Pricing" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 z-50 w-full h-[76px] transition-all duration-300",
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border/50" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-4 md:px-8">
        <a href="#" className="flex items-center gap-2 font-bold tracking-tight text-foreground">
          <Moon className="h-5 w-5 text-primary" strokeWidth={2} />
          <span className="text-lg">HUSH</span>
        </a>

        <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#download"
          className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <span className="md:hidden">Get</span>
          <span className="hidden md:inline">Download</span>
        </a>
      </div>
    </header>
  );
}
