import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../shared/Container";
import profileImage from "../../assets/images/gauri-profile.jpeg";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-[var(--color-accent)]/5 blur-3xl"
      />

      <Container className="relative">
        <div className="lg:grid-cols-[1.15fr_0.85fr] grid min-h-[calc(100vh-120px)] items-center gap-16 py-16 lg:py-20">
          {/* Content */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--color-accent)]" />

              <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Frontend Engineer
              </span>
            </div>

            <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-[var(--color-text-primary)] sm:text-6xl lg:text-7xl">
              I build thoughtful
              <br />
              <span className="text-[var(--color-text-secondary)]">
                interfaces for the web.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg">
              React-focused frontend engineer who enjoys turning complex ideas
              into simple, usable, and polished experiences.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-[var(--color-background)] transition-transform hover:-translate-y-0.5"
              >
                View my work

                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                to="/resume"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-5 py-3 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text-primary)]"
              >
                Resume
              </Link>
            </div>
          </div>

          {/* Portrait */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-3 rounded-3xl border border-[var(--color-border)]" />

              <div className="relative h-[360px] w-[290px] overflow-hidden rounded-2xl border border-[var(--color-border-hover)] bg-[var(--color-surface)] sm:h-[430px] sm:w-[350px]">
                <img
                  src={profileImage}
                  alt="Gauri Katti"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Small floating label */}
              <div className="absolute -bottom-5 -left-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 shadow-2xl">
                <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">
                  Based in
                </p>

                <p className="mt-1 text-sm font-medium text-[var(--color-text-primary)]">
                  Pune, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a href="#currently" className="group hidden items-center gap-3 pb-8 text-[var(--color-text-muted)] md:flex">
            <div className="hidden items-center gap-3 pb-8 text-[var(--color-text-muted)] md:flex">
          <ArrowDown size={15} />

          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
            Scroll to explore
          </span>
        </div>
        </a>
      </Container>
    </section>
  );
}

export default Hero;