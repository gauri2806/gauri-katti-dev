import { Link, NavLink } from "react-router-dom";
import { Moon, Command } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navItems = [
  { label: "Projects", to: "/projects" },
  { label: "Lab", to: "/lab" },
  { label: "Resume", to: "/resume" },
  { label: "About", to: "/about" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-background)]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-3"
          aria-label="Gauri Katti home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] font-display text-sm font-semibold text-[var(--color-accent)] transition-colors group-hover:border-[var(--color-border-hover)]">
            GK
          </span>

          <span className="hidden font-display text-sm font-semibold tracking-wide text-[var(--color-text-primary)] sm:block">
            GAURI KATTI
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm transition-colors ${
                  isActive
                    ? "bg-[var(--color-surface)] text-[var(--color-text-primary)]"
                    : "text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text-primary)]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="Open command palette"
            className="hidden rounded-lg p-2 text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-text-primary)] sm:block"
          >
            <Command size={17} strokeWidth={1.8} />
          </button>

          <a
            href="https://github.com/gauri2806"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-lg p-2 text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-text-primary)]"
          >
            <FaGithub size={17} />
          </a>

          <a
            href="https://www.linkedin.com/in/gauri-katti-099370210/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-lg p-2 text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-text-primary)]"
          >
            <FaLinkedin size={17} />
          </a>

          <button
            type="button"
            aria-label="Toggle theme"
            className="rounded-lg p-2 text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-text-primary)]"
          >
            <Moon size={17} strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;