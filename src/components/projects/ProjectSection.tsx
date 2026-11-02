import { motion } from "framer-motion";

interface ProjectSectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}

function ProjectSection({
  id,
  eyebrow,
  title,
  children,
}: ProjectSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      className="scroll-mt-28 border-b border-[var(--color-border)] py-16 first:pt-0 last:border-b-0"
    >
      {eyebrow && (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">
          {eyebrow}
        </p>
      )}

      <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
        {title}
      </h2>

      <div className="mt-7 text-base leading-8 text-[var(--color-text-secondary)]">
        {children}
      </div>
    </motion.section>
  );
}

export default ProjectSection;