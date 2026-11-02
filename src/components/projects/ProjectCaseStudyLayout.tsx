import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectHero from "./ProjectHero";
import ProjectSectionNav from "./ProjectSectionNav";

export interface ProjectSection {
  id: string;
  label: string;
}

interface ProjectCaseStudyLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  type: string;
  year: string;
  tags: string[];
  heroImage?: string;
  liveUrl?: string;
  githubUrl?: string;
  sections: ProjectSection[];
  children: React.ReactNode;
}

function ProjectCaseStudyLayout({
  title,
  subtitle,
  description,
  type,
  year,
  tags,
  heroImage,
  liveUrl,
  githubUrl,
  sections,
  children,
}: ProjectCaseStudyLayoutProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const element = document.getElementById(section.id);

      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section.id);
          }
        },
        {
          rootMargin: "-20% 0px -65% 0px",
        },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sections]);

  return (
    <main>
      <ProjectHero
        title={title}
        subtitle={subtitle}
        description={description}
        type={type}
        year={year}
        tags={tags}
        heroImage={heroImage}
        liveUrl={liveUrl}
        githubUrl={githubUrl}
      />

      <div className="border-t border-[var(--color-border)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[220px_minmax(0,1fr)] lg:px-8 lg:py-24">
          <ProjectSectionNav
            sections={sections}
            activeSection={activeSection}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.5 }}
            className="min-w-0"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </main>
  );
}

export default ProjectCaseStudyLayout;