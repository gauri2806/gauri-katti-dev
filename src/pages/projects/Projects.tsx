import Container from "../../components/shared/Container";
import ProjectCard from "../../components/projects/ProjectCard";
import { projects } from "../../data/projects";

function Projects() {
  return (
    <main>
      <Container className="py-20 sm:py-28">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Projects
          </p>

          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-6xl">
            Things I've built.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg">
            A collection of frontend projects, product experiments, and
            interfaces I've built while exploring better ways to make things
            work on the web.
          </p>
        </div>

        {/* Project list */}
        <div className="mt-20">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}

          <div className="border-t border-[var(--color-border)]" />
        </div>
      </Container>
    </main>
  );
}

export default Projects;