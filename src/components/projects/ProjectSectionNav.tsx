import type { ProjectSection } from "./ProjectCaseStudyLayout";

interface ProjectSectionNavProps {
  sections: ProjectSection[];
  activeSection: string;
}

function ProjectSectionNav({
  sections,
  activeSection,
}: ProjectSectionNavProps) {
  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
          On this page
        </p>

        <nav className="space-y-1 border-l border-[var(--color-border)]">
          {sections.map((section) => {
            const isActive = activeSection === section.id;

            return (
              <button
                key={section.id}
                type="button"
                onClick={() => handleClick(section.id)}
                className={`relative block w-full px-5 py-2 text-left text-sm transition-colors ${
                  isActive
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                {isActive && (
                  <span className="absolute -left-px top-0 h-full w-px bg-[var(--color-accent)]" />
                )}

                {section.label}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

export default ProjectSectionNav;