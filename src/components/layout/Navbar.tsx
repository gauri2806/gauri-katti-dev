
import { useCallback, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Command,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import CommandPalette from "../../features/command-palette/CommandPalette";
import ThemePicker from "../../features/theme/ThemePicker";
import { useTheme } from "../../features/theme/useTheme";

const navItems = [
  { label: "Projects", to: "/projects" },
  { label: "Lab", to: "/lab" },
  { label: "Resume", to: "/resume" },
  { label: "About", to: "/about" },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  const { theme, setTheme } = useTheme();

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const closeCommandPalette = useCallback(() => {
    setIsCommandPaletteOpen(false);
  }, []);

  const openCommandPalette = useCallback(() => {
    setIsMobileMenuOpen(false);
    setIsCommandPaletteOpen(true);
  }, []);

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if (
        (event.metaKey || event.ctrlKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();
        setIsCommandPaletteOpen((current) => !current);
      }
    };

    window.addEventListener("keydown", handleShortcut);

    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-background)]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-3"
            aria-label="Gauri Katti home"
            onClick={closeMobileMenu}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] font-display text-sm font-semibold text-[var(--color-accent)] transition-colors group-hover:border-[var(--color-border-hover)]">
              GK
            </span>

            <span className="hidden font-display text-sm font-semibold tracking-wide text-[var(--color-text-primary)] sm:block">
              GAURI KATTI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm transition-colors ${isActive
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
            {/* Command Palette */}
            <button
              type="button"
              onClick={openCommandPalette}
              aria-label="Open command palette"
              title="Search (Ctrl/⌘ + K)"
              className="hidden rounded-lg p-2 text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-text-primary)] sm:block"
            >
              <Command size={17} strokeWidth={1.8} />
            </button>

            {/* Theme Picker */}
            <ThemePicker theme={theme} setTheme={setTheme} />

            {/* GitHub */}
            <a
              href="https://github.com/gauri2806"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-lg p-2 text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-text-primary)]"
            >
              <FaGithub size={17} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/gauri-katti-099370210/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg p-2 text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-text-primary)]"
            >
              <FaLinkedin size={17} />
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              className="ml-1 rounded-lg p-2 text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-text-primary)] md:hidden"
            >
              {isMobileMenuOpen ? (
                <X size={19} />
              ) : (
                <Menu size={19} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="border-t border-[var(--color-border)] md:hidden">
            <nav className="mx-auto max-w-7xl px-6 py-3">
              <div className="flex flex-col">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `rounded-lg px-3 py-3 text-sm transition-colors ${isActive
                        ? "bg-[var(--color-surface)] text-[var(--color-text-primary)]"
                        : "text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text-primary)]"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}

                {/* Mobile Command Palette */}
                <button
                  type="button"
                  onClick={openCommandPalette}
                  className="flex items-center gap-3 rounded-lg px-3 py-3 text-left text-sm text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-text-primary)]"
                >
                  <Command size={16} />
                  Search pages
                </button>

                {/* Mobile Theme Picker */}
                <div className="flex items-center justify-between px-3 py-3">
                  <span className="text-sm text-[var(--color-text-secondary)]">
                    Change appearance
                  </span>
                  <ThemePicker theme={theme} setTheme={setTheme} />
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>

      <CommandPalette
        open={isCommandPaletteOpen}
        onClose={closeCommandPalette}
      />
    </>
  );
}

export default Navbar;
