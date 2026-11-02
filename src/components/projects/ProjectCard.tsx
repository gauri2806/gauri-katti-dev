import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import type { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      to={project.route}
      className="group block border-t border-[var(--color-border)] py-8 transition-colors hover:border-[var(--color-border-hover)]"
    >
      <div className="grid gap-6 md:grid-cols-[80px_1fr_auto] md:items-start">
        {/* Number */}
        <span className="font-mono text-xs text-[var(--color-text-muted)]">
          {project.number}
        </span>

        {/* Content */}
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-display text-2xl font-semibold tracking-tight text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-accent)] sm:text-3xl">
              {project.title}
            </h3>

            <span className="rounded-full border border-[var(--color-border)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">
              {project.type}
            </span>
          </div>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--color-text-secondary)] sm:text-base">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-[var(--color-surface)] px-2.5 py-1.5 text-xs text-[var(--color-text-muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] transition-all group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)] md:flex">
          <ArrowUpRight
            size={17}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;