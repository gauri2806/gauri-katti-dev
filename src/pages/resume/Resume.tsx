import { motion } from "framer-motion";
import {
    ArrowDownToLine,
    ArrowUpRight,
    BriefcaseBusiness,
    GraduationCap,
    Trophy,
} from "lucide-react";

function Resume() {
    return (
        <main>
            {/* Hero */}
            <section className="mx-auto max-w-7xl px-6 pb-16 pt-12 lg:px-8 lg:pb-24 lg:pt-20">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">
                            Resume
                        </p>

                        <h1 className="mt-5 font-display text-5xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-6xl">
                            Experience, skills,
                            <br />
                            <span className="text-[var(--color-text-secondary)]">
                                and the work behind them.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-text-secondary)]">
                            Frontend Engineer with 2.8+ years of experience building
                            responsive, scalable, and production-ready web applications
                            using React, JavaScript, and TypeScript. Interested in
                            frontend architecture, performance optimization, and
                            building intuitive user experiences.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="/resume/GauriResume.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-accent)] px-5 py-3 text-sm font-medium text-[var(--color-background)] transition-transform duration-200 hover:-translate-y-0.5"
                            >
                                View Resume
                                <ArrowUpRight size={16} />
                            </a>

                            <a
                                href="/resume/GauriResume.pdf"
                                download
                                className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] px-5 py-3 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface-hover)]"
                            >
                                Download PDF
                                <ArrowDownToLine size={16} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <div className="border-t border-[var(--color-border)]">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    {/* Experience */}
                    <section className="border-b border-[var(--color-border)] py-16 lg:py-24">
                        <SectionHeading
                            icon={<BriefcaseBusiness size={18} />}
                            eyebrow="Experience"
                            title="Where I've worked"
                        />

                        <div className="mt-12 space-y-12">
                            <Experience
                                role="Software Development Engineer"
                                company="Connecticus Technologies Pvt Ltd"
                                context="Client: Siemens DISW"
                                location="Pune, India"
                                period="Mar 2025 — Present"
                                highlight={{
                                    title: "AI Orchestrator Integration",
                                    description:
                                        "Integrated the frontend with a backend-managed multi-agent orchestrator, enabling real-time visibility into agent execution, workflow progress, and agent-wise responses.",
                                    technologies: [
                                        "React.js",
                                        "REST APIs",
                                        "Server-Sent Events",
                                        "Polling",
                                        "Async JavaScript",
                                    ],
                                }}
                                points={[
                                    "Developed and maintained production-grade React.js modules for Teamcenter Active Workspace using JavaScript, React Hooks, and reusable UI components.",
                                    "Integrated frontend APIs for a multi-agent Orchestrator workflow, enabling users to initiate execution and view agent-wise responses.",
                                    "Implemented Server-Sent Events (SSE) to handle real-time agent execution status, progress updates, intermediate messages, and final responses.",
                                    "Implemented polling-based asynchronous response handling using setInterval for workflows requiring repeated status checks, with loading and execution states to communicate progress.",
                                    "Improved frontend performance by reducing unnecessary API calls, preventing redundant React re-renders, implementing debouncing, removing redundant event publishers, and optimizing batch job calls.",
                                    "Improved Jest and React Testing Library coverage by 27%, resolved production issues through debugging and root-cause analysis, and helped reduce the critical defect backlog to zero.",
                                ]}
                            />

                            <Experience
                                role="Graduate Trainee Engineer"
                                company="Connecticus Technologies Pvt Ltd"
                                context="Client: Siemens DISW"
                                location="Pune, India"
                                period="Aug 2024 — Feb 2025"
                                points={[
                                    "Contributed to Teamcenter Active Workspace by investigating application issues, improving exception handling, and implementing frontend fixes for production issues.",
                                    "Collaborated with cross-functional teams to understand requirements, troubleshoot application behavior, and deliver reliable software improvements.",
                                ]}
                            />

                            <Experience
                                role="Software Development Engineer Intern"
                                company="Connecticus Technologies Pvt Ltd"
                                location="Pune, India"
                                period="Jan 2024 — Jul 2024"
                                points={[
                                    "Developed frontend features using React.js, integrated REST APIs, and contributed to web-based application workflows.",
                                    "Integrated Jira APIs for automated task tracking workflows using React.js and Postman.",
                                ]}
                            />
                        </div>
                    </section>

                    {/* Skills */}
                    <section className="border-b border-[var(--color-border)] py-16 lg:py-24">
                        <SectionHeading
                            eyebrow="Toolkit"
                            title="Technical Skills"
                        />

                        <div className="mt-10 grid gap-4 md:grid-cols-2">
                            <SkillGroup
                                title="Frontend"
                                skills={[
                                    "React.js",
                                    "JavaScript (ES6+)",
                                    "TypeScript",
                                    "HTML5",
                                    "CSS3",
                                    "Tailwind CSS",
                                    "Material UI",
                                    "React Hooks",
                                    "React Router",
                                    "Context API",
                                    "Zustand",
                                ]}
                            />

                            <SkillGroup
                                title="Frontend Concepts"
                                skills={[
                                    "Component Architecture",
                                    "State Management",
                                    "Responsive Design",
                                    "Performance Optimization",
                                    "API Integration",
                                    "Real-time UI Updates",
                                    "Asynchronous JavaScript",
                                    "Code Optimization",
                                ]}
                            />

                            <SkillGroup
                                title="Backend & APIs"
                                skills={[
                                    "Node.js",
                                    "Express.js",
                                    "MongoDB",
                                    "REST APIs",
                                    "Axios",
                                    "Server-Sent Events (SSE)",
                                    "Polling",
                                    "Asynchronous API Handling",
                                ]}
                            />

                            <SkillGroup
                                title="Testing & Quality"
                                skills={[
                                    "Jest",
                                    "React Testing Library",
                                    "Cucumber.js",
                                    "Gherkin",
                                ]}
                            />

                            <SkillGroup
                                title="Tools"
                                skills={[
                                    "Git",
                                    "GitHub",
                                    "Postman",
                                    "Chrome DevTools",
                                    "VS Code",
                                ]}
                            />
                        </div>
                    </section>

                    {/* Education */}
                    <section className="border-b border-[var(--color-border)] py-16 lg:py-24">
                        <SectionHeading
                            icon={<GraduationCap size={18} />}
                            eyebrow="Education"
                            title="Academic background"
                        />

                        <div className="relative mt-12">
                            {/* Timeline line */}
                            <div className="absolute bottom-0 left-[7px] top-2 hidden w-px bg-[var(--color-border)] sm:block" />

                            <div className="space-y-10">
                                <EducationItem
                                    year="2024"
                                    degree="B.Tech in Computer Science and Engineering"
                                    institution="Shri Guru Gobind Singhji Institute of Engineering and Technology"
                                    location="Nanded, Maharashtra"
                                    result="CGPA 8.28 / 10"
                                    featured
                                />

                                <EducationItem
                                    year="2020"
                                    degree="Higher Secondary (12th)"
                                    institution="Shri Chaitanya Junior College"
                                    location="Hyderabad, Telangana"
                                    result="97.60%"
                                />

                                <EducationItem
                                    year="2018"
                                    degree="Secondary (10th)"
                                    institution="Sri Sri Ravishankar Vidya Mandir"
                                    location="Dharashiv, Maharashtra"
                                    result="94.80%"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Achievements */}
                    <section className="border-b border-[var(--color-border)] py-16 lg:py-24">
                        <SectionHeading
                            icon={<Trophy size={18} />}
                            eyebrow="Milestones"
                            title="Achievements"
                        />

                        <div className="mt-10 grid gap-4 md:grid-cols-2">
                            <AchievementCard
                                number="01"
                                title="DD ROBOCON 2023"
                                category="Robotics"
                                description="Vice-Captain of the RNXG robotics team and represented the team at DD ROBOCON 2023, achieving 97/100 and 96/100 in competition rounds."
                            />

                            <AchievementCard
                                number="02"
                                title="Smart India Hackathon"
                                category="Hackathon"
                                description="Winner of the Smart India Hackathon Internal Round 2022 while developing a prototype solution for a Ministry problem statement."
                            />

                            <AchievementCard
                                number="03"
                                title="TIAA Inter College Hackathon"
                                category="Hackathon"
                                description="Member of the winning team at the TIAA Inter College Hackathon 2023."
                            />

                            <AchievementCard
                                number="04"
                                title="CodeSpire Ideathon"
                                category="Ideathon"
                                description="Secured AIR 9 in the CodeSpire Ideathon organized by Acropolis Institute of Technology and Research."
                            />
                        </div>
                    </section>

                    {/* PDF CTA */}
                    <section className="py-16 lg:py-24">
                        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-center sm:p-12">
                            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">
                                Full resume
                            </p>

                            <h2 className="mt-4 font-display text-3xl font-semibold text-[var(--color-text-primary)]">
                                Want the traditional one-page version?
                            </h2>

                            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[var(--color-text-muted)]">
                                Open the full PDF for a compact overview of my experience,
                                skills, projects, achievements, and education.
                            </p>

                            <a
                                href="/resume/GauriResume.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="mt-7 inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] px-5 py-3 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface-hover)]"
                            >
                                Open PDF
                                <ArrowUpRight size={16} />
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}

interface SectionHeadingProps {
    icon?: React.ReactNode;
    eyebrow: string;
    title: string;
}

function SectionHeading({
    icon,
    eyebrow,
    title,
}: SectionHeadingProps) {
    return (
        <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">
                {icon}
                <span>{eyebrow}</span>
            </div>

            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
                {title}
            </h2>
        </div>
    );
}

interface ExperienceProps {
    role: string;
    company: string;
    context?: string;
    location: string;
    period: string;
    points: string[];
    highlight?: {
        title: string;
        description: string;
        technologies: string[];
    };
}

function Experience({
    role,
    company,
    context,
    location,
    period,
    points,
    highlight,
}: ExperienceProps) {
    return (
        <article className="grid gap-5 lg:grid-cols-[220px_minmax(0,1fr)]">
            <div>
                <p className="font-mono text-xs text-[var(--color-text-muted)]">
                    {period}
                </p>

                <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                    {location}
                </p>
            </div>

            <div>
                <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                    {role}
                </h3>

                <p className="mt-1 text-sm text-[var(--color-accent)]">
                    {company}
                    {context && ` · ${context}`}
                </p>

                {/* Featured Contribution */}
                {highlight && (
                    <div className="mt-6 rounded-2xl border border-[var(--color-accent)]/20 bg-[var(--color-surface)] p-5 sm:p-6">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-accent)]">
                                Featured Contribution
                            </span>

                            <span className="rounded-full border border-[var(--color-border)] px-3 py-1 font-mono text-[10px] text-[var(--color-text-muted)]">
                                Frontend Engineering
                            </span>
                        </div>

                        <h4 className="mt-4 font-display text-lg font-semibold text-[var(--color-text-primary)]">
                            {highlight.title}
                        </h4>

                        <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">
                            {highlight.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {highlight.technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="rounded-lg border border-[var(--color-border)] px-2.5 py-1.5 font-mono text-[11px] text-[var(--color-text-muted)]"
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                <ul className="mt-5 space-y-3">
                    {points.map((point) => (
                        <li
                            key={point}
                            className="relative pl-5 text-sm leading-7 text-[var(--color-text-secondary)]"
                        >
                            <span className="absolute left-0 top-[0.75rem] h-1.5 w-1.5 rounded-full bg-[var(--color-border-hover)]" />
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
}

interface SkillGroupProps {
    title: string;
    skills: string[];
}

function SkillGroup({ title, skills }: SkillGroupProps) {
    return (
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-accent)]">
                {title}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm text-[var(--color-text-secondary)]"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

interface EducationItemProps {
    year: string;
    degree: string;
    institution: string;
    location: string;
    result: string;
    featured?: boolean;
}

function EducationItem({
    year,
    degree,
    institution,
    location,
    result,
    featured = false,
}: EducationItemProps) {
    return (
        <div className="relative grid gap-4 sm:grid-cols-[90px_minmax(0,1fr)] sm:gap-8">
            {/* Timeline marker */}
            <div className="relative hidden sm:block">
                <div
                    className={`absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 ${featured
                        ? "border-[var(--color-accent)] bg-[var(--color-background)]"
                        : "border-[var(--color-border-hover)] bg-[var(--color-background)]"
                        }`}
                />
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors duration-300 hover:border-[var(--color-border-hover)]">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                        <p className="font-mono text-xs text-[var(--color-text-muted)]">
                            {year}
                        </p>

                        <h3 className="mt-2 font-display text-xl font-semibold text-[var(--color-text-primary)]">
                            {degree}
                        </h3>

                        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                            {institution}
                        </p>

                        <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                            {location}
                        </p>
                    </div>

                    <span
                        className={`shrink-0 rounded-lg border px-3 py-2 font-mono text-xs ${featured
                            ? "border-[var(--color-accent)]/30 text-[var(--color-accent)]"
                            : "border-[var(--color-border)] text-[var(--color-text-secondary)]"
                            }`}
                    >
                        {result}
                    </span>
                </div>
            </div>
        </div>
    );
}

interface AchievementCardProps {
    number: string;
    title: string;
    category: string;
    description: string;
}

function AchievementCard({
    number,
    title,
    category,
    description,
}: AchievementCardProps) {
    return (
        <article className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors duration-300 hover:border-[var(--color-border-hover)]">
            <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-xs text-[var(--color-accent)]">
                    {number}
                </span>

                <span className="rounded-full border border-[var(--color-border)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
                    {category}
                </span>
            </div>

            <h3 className="mt-8 font-display text-xl font-semibold text-[var(--color-text-primary)]">
                {title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
                {description}
            </p>
        </article>
    );
}

export default Resume;