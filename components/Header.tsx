"use client";

const SITE_NAME = "Portfolio";
const NAV_LINKS = [
  { label: "Contact", href: "mailto:shyhretebuzaku@gmail.com" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-charcoal/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#"
          className="text-sm font-medium text-white hover:text-accent transition-colors"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {SITE_NAME}
        </a>
        <nav className="flex items-center gap-6" aria-label="Main">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-sm text-grey-text hover:text-accent transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
