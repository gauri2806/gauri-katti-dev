import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../shared/Container";
import ProjectCard from "../projects/ProjectCard";
import { projects } from "../../data/projects";

function SelectedWork() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        {/* Section heading */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Selected work
            </p>

            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              Things I've built
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[var(--color-text-muted)]">
            A few projects that show how I approach interfaces, interactions,
            and frontend engineering.
          </p>
        </div>

        {/* Projects */}
        <div>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}

          {/* Bottom border */}
          <div className="border-t border-[var(--color-border)]" />
        </div>

        {/* View all */}
        <div className="mt-8">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
          >
            View all projects

            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default SelectedWork;