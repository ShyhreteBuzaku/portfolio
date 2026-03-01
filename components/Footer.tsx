const CURRENT_YEAR = new Date().getFullYear();
const YOUR_NAME = "Shyhrete Buzaku";
const FOOTER_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shyhrete-buzaku-a3386615b/" },
  { label: "Contact", href: "mailto:shyhretebuzaku@gmail.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-grey-text">
          © {CURRENT_YEAR} {YOUR_NAME}
        </p>
        <nav className="flex items-center gap-6" aria-label="Footer">
          {FOOTER_LINKS.map(({ label, href }) => (
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
    </footer>
  );
}
