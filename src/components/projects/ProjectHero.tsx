import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ProjectHeroProps {
  title: string;
  subtitle: string;
  description: string;
  type: string;
  year: string;
  tags: string[];
  heroImage?: string;
  liveUrl?: string;
  githubUrl?: string;
}

function ProjectHero({
  title,
  subtitle,
  description,
  type,
  year,
  tags,
  heroImage,
  liveUrl,
  githubUrl,
}: ProjectHeroProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 pt-12 lg:px-8 lg:pb-24 lg:pt-20">
      <div className="mb-10 flex items-center gap-2 font-mono text-xs text-[var(--color-text-muted)]">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
        >
          Projects
        </Link>
        <span>→</span>
        <span className="text-[var(--color-text-secondary)]">{title}</span>
      </div>

      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="mb-5 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
            <span>{type}</span>
            <span>•</span>
            <span>{year}</span>
          </div>

          <h1 className="font-display text-5xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-6xl lg:text-7xl">
            {title}
          </h1>

          <p className="mt-5 font-display text-xl font-medium text-[var(--color-accent)] sm:text-2xl">
            {subtitle}
          </p>

          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-text-secondary)]">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-[var(--color-background)] transition-transform hover:-translate-y-0.5"
              >
                Live Demo
                <ArrowUpRight size={16} />
              </a>
            )}

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-3 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface)]"
              >
                GitHub
                <FaGithub size={16} />
              </a>
            )}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 font-mono text-xs text-[var(--color-text-secondary)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {heroImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]"
          >
            <img
              src={heroImage}
              alt={`${title} project preview`}
              className="block h-auto w-full"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default ProjectHero;