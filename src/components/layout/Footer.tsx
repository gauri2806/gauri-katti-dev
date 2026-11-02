import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="font-display text-sm font-semibold text-[var(--color-text-primary)]">
            Gauri Katti
          </p>

          <p className="mt-1 text-sm text-[var(--color-text-muted)]">
            Frontend Engineer · Pune, India
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="mailto:gaurikatti2806@gmail.com"
            aria-label="Email"
            className="rounded-lg p-2 text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-accent)]"
          >
            <Mail size={17} />
          </a>

          <a
            href="https://github.com/gauri2806"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-lg p-2 text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-accent)]"
          >
            <FaGithub size={17} />
          </a>

          <a
            href="https://www.linkedin.com/in/gauri-katti-099370210/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-lg p-2 text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-accent)]"
          >
            <FaLinkedin size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;