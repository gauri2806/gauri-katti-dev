
import ProjectCaseStudyLayout from "../../components/projects/ProjectCaseStudyLayout";
import ProjectSection from "../../components/projects/ProjectSection";
import { portfolioSections } from "../../data/projectCaseStudies";

import homeImage from "../../assets/projects/portfolio/home.png";
import projectsImage from "../../assets/projects/portfolio/projects.png";
import resumeImage from "../../assets/projects/portfolio/resume.png";
import aboutImage from "../../assets/projects/portfolio/about.png";
import labImage from "../../assets/projects/portfolio/lab.png";
import debounceImage from "../../assets/projects/portfolio/debounce.png";
import debounceConceptImage from "../../assets/projects/portfolio/debounce-concept.png";

function PortfolioCaseStudy() {
    return (
        <ProjectCaseStudyLayout
            title="Portfolio"
            subtitle="Personal Developer Portfolio"
            description="A personal developer portfolio designed to showcase my frontend work, interactive experiments, and engineering approach through a clean, responsive, and thoughtfully crafted experience."
            type="Personal"
            year="2026"
            tags={["React", "TypeScript", "Tailwind CSS"]}
            heroImage={homeImage}
            githubUrl="https://github.com/gauri2806/gauri-katti-dev"
            sections={portfolioSections}
        >
            {/* 01 — Overview */}
            <ProjectSection
                id="overview"
                eyebrow="01"
                title="Overview"
            >
                <p>
                    This portfolio is a personal space to bring together my projects,
                    frontend experiments, and experience as a developer. I wanted to
                    create something that communicates not just what I've built, but
                    also how I think about interfaces and engineering.
                </p>

                <p className="mt-5">
                    Rather than using a conventional portfolio template, I approached
                    it as a small product — with its own visual identity, navigation
                    patterns, interactive elements, and individual project
                    experiences.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            title: "Project storytelling",
                            description:
                                "Dedicated case studies that explain the thinking and engineering behind each project.",
                        },
                        {
                            title: "Frontend Lab",
                            description:
                                "Interactive experiments that demonstrate frontend concepts through practical examples.",
                        },
                        {
                            title: "Personal identity",
                            description:
                                "A visual language that reflects my approach to design, development, and the web.",
                        },
                    ].map((item) => (
                        <div
                            key={item.title}
                            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
                        >
                            <h3 className="font-display text-lg font-medium text-[var(--color-text-primary)]">
                                {item.title}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </ProjectSection>

            {/* 02 — Problem */}
            <ProjectSection
                id="problem"
                eyebrow="02"
                title="The Problem"
            >
                <p>
                    A developer portfolio often becomes a collection of links,
                    technology badges, and project cards. While these elements
                    communicate experience, they don't always explain the decisions
                    behind the work.
                </p>

                <p className="mt-5">
                    I wanted to build something that felt more personal and
                    intentional — a place where visitors could explore projects,
                    understand implementation choices, and interact with small
                    demonstrations of frontend concepts.
                </p>

                <div className="mt-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-accent)]">
                        The question
                    </p>

                    <p className="mt-4 max-w-2xl font-display text-xl leading-8 text-[var(--color-text-primary)]">
                        How can a developer portfolio become more than a resume on the
                        web — something people can explore, interact with, and remember?
                    </p>
                </div>
            </ProjectSection>

            {/* 03 — Approach */}
            <ProjectSection
                id="approach"
                eyebrow="03"
                title="My Approach"
            >
                <p className="max-w-3xl">
                    I approached the portfolio as a product experience rather than
                    a static personal website. The goal was to balance clarity,
                    personality, and useful interactions without making the
                    interface feel unnecessarily complicated.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        {
                            number: "01",
                            title: "Discover",
                            description:
                                "Help visitors quickly understand who I am and what I work on.",
                        },
                        {
                            number: "02",
                            title: "Explore",
                            description:
                                "Present projects through dedicated pages with meaningful context.",
                        },
                        {
                            number: "03",
                            title: "Interact",
                            description:
                                "Use the Frontend Lab to turn technical concepts into working demonstrations.",
                        },
                        {
                            number: "04",
                            title: "Connect",
                            description:
                                "Make it easy to explore my resume, GitHub, and professional profile.",
                        },
                    ].map((step) => (
                        <div
                            key={step.number}
                            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
                        >
                            <span className="font-mono text-xs text-[var(--color-accent)]">
                                {step.number}
                            </span>

                            <h3 className="mt-5 font-display text-xl font-medium text-[var(--color-text-primary)]">
                                {step.title}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
                    <div className="grid divide-y divide-[var(--color-border)] sm:grid-cols-5 sm:divide-x sm:divide-y-0">
                        {[
                            "Introduction",
                            "Projects",
                            "Experiments",
                            "Experience",
                            "Contact",
                        ].map((step, index) => (
                            <div
                                key={step}
                                className="flex items-center gap-3 p-4"
                            >
                                <span className="font-mono text-xs text-[var(--color-accent)]">
                                    0{index + 1}
                                </span>

                                <span className="text-sm text-[var(--color-text-secondary)]">
                                    {step}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </ProjectSection>

            {/* 04 — Architecture */}
            <ProjectSection
                id="architecture"
                eyebrow="04"
                title="Architecture"
            >
                <p className="max-w-3xl">
                    I organized the application around reusable components,
                    feature-specific functionality, and page-level composition.
                    This keeps individual parts easier to maintain while allowing
                    the overall experience to remain consistent.
                </p>

                <div className="mt-10 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
                    <div className="border-b border-[var(--color-border)] px-6 py-4">
                        <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                            Application structure
                        </p>
                    </div>

                    <div className="space-y-3 p-6 sm:p-8">
                        {[
                            {
                                number: "01",
                                title: "Application Entry",
                                description:
                                    "Initializes the application and its global configuration.",
                            },
                            {
                                number: "02",
                                title: "Routing",
                                description:
                                    "Connects pages and nested project and experiment routes.",
                            },
                            {
                                number: "03",
                                title: "Shared Components",
                                description:
                                    "Provides reusable navigation, layout, and interface elements.",
                            },
                            {
                                number: "04",
                                title: "Feature Modules",
                                description:
                                    "Keeps functionality such as the command palette, theme, and lab experiments organized.",
                            },
                            {
                                number: "05",
                                title: "Pages",
                                description:
                                    "Composes shared components and feature modules into complete experiences.",
                            },
                        ].map((step, index, steps) => (
                            <div key={step.number}>
                                <div className="grid gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-5 sm:grid-cols-[56px_180px_1fr] sm:items-center">
                                    <span className="font-mono text-sm text-[var(--color-accent)]">
                                        {step.number}
                                    </span>

                                    <h3 className="font-display text-base font-medium text-[var(--color-text-primary)]">
                                        {step.title}
                                    </h3>

                                    <p className="text-sm leading-6 text-[var(--color-text-muted)]">
                                        {step.description}
                                    </p>
                                </div>

                                {index < steps.length - 1 && (
                                    <div className="flex h-6 items-center pl-6">
                                        <div className="h-full border-l border-dashed border-[var(--color-border-hover)]" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-accent)]">
                        Core principle
                    </p>

                    <p className="mt-4 font-display text-xl leading-8 text-[var(--color-text-primary)] sm:text-2xl">
                        Reusable components. Consistent experiences. Clear structure.
                    </p>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-text-muted)]">
                        The intention was to avoid duplicating interface patterns and
                        make it easier to introduce new pages and experiments without
                        rebuilding the same foundations.
                    </p>
                </div>
            </ProjectSection>

            {/* 05 — Features */}
            <ProjectSection
                id="features"
                eyebrow="05"
                title="Key Features"
            >
                <div className="space-y-10">
                    {[
                        {
                            number: "01",
                            title: "Command Palette",
                            description:
                                "A keyboard-accessible navigation experience that lets visitors quickly jump between pages and sections without relying entirely on the main navigation.",
                            detail:
                                "Keyboard interaction → Search command → Select destination → Navigate",
                        },
                        {
                            number: "02",
                            title: "Theme Switching",
                            description:
                                "A theme control that lets visitors change the visual appearance of the portfolio while maintaining the same design language.",
                            detail:
                                "Theme selection → Theme state → Updated interface",
                        },
                        {
                            number: "03",
                            title: "Project Case Studies",
                            description:
                                "Dedicated project pages that go beyond screenshots to explain the problem, approach, architecture, engineering decisions, and learnings.",
                            detail:
                                "Project discovery → Case study → Screenshots → Technical details",
                        },
                        {
                            number: "04",
                            title: "Frontend Lab",
                            description:
                                "A collection of interactive experiments built to demonstrate concepts such as debouncing, rendering, state updates, request cancellation, and infinite scrolling.",
                            detail:
                                "Explore concept → Interact with example → Observe behaviour → Understand implementation",
                        },
                        {
                            number: "05",
                            title: "Responsive Navigation",
                            description:
                                "A navigation experience designed to work across desktop and mobile layouts, with a compact menu for smaller screens.",
                            detail:
                                "Responsive layout → Context-aware navigation → Consistent access",
                        },
                    ].map((feature) => (
                        <div
                            key={feature.number}
                            className="flex items-start gap-4"
                        >
                            <span className="font-mono text-sm text-[var(--color-accent)]">
                                {feature.number}
                            </span>

                            <div>
                                <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                                    {feature.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
                                    {feature.description}
                                </p>

                                <div className="mt-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                                    <p className="font-mono text-xs leading-6 text-[var(--color-text-muted)]">
                                        {feature.detail}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </ProjectSection>

            {/* 06 — Tech Decisions */}
            <ProjectSection
                id="tech-decisions"
                eyebrow="Engineering choices"
                title="Tech Decisions"
            >
                <div className="space-y-10">
                    <div>
                        <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                            React + TypeScript
                        </h3>

                        <p className="mt-3">
                            React provides the component-based foundation for the
                            portfolio, while TypeScript helps keep component props,
                            application data, and interactions structured and
                            predictable.
                        </p>

                        <div className="mt-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                            <p className="font-mono text-sm text-[var(--color-text-muted)]">
                                Reusable components → Typed props → Maintainable UI
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                            Tailwind CSS
                        </h3>

                        <p className="mt-3">
                            Tailwind helps keep styling close to the components while
                            maintaining consistent spacing, typography, responsive
                            layouts, and design tokens throughout the application.
                        </p>

                        <div className="mt-4 grid gap-3 sm:grid-cols-3">
                            {[
                                "Consistent design tokens",
                                "Responsive layouts",
                                "Reusable styling patterns",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
                                >
                                    <p className="text-sm text-[var(--color-text-secondary)]">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                            Framer Motion
                        </h3>

                        <p className="mt-3">
                            Framer Motion is used to introduce subtle transitions and
                            interactions that make navigation and page elements feel
                            more responsive without distracting from the content.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                            React Router
                        </h3>

                        <p className="mt-3">
                            React Router organizes the portfolio into independent
                            experiences, including project case studies, the Frontend
                            Lab, resume, and About pages.
                        </p>
                    </div>

                    <div className="border-l-2 border-[var(--color-accent)] pl-5">
                        <p className="font-display text-lg font-medium text-[var(--color-text-primary)]">
                            The goal wasn't to add interactions everywhere.
                        </p>

                        <p className="mt-2 text-[var(--color-text-secondary)]">
                            It was to make each interaction purposeful and keep the
                            overall experience easy to navigate.
                        </p>
                    </div>
                </div>
            </ProjectSection>

            {/* 07 — Challenges */}
            <ProjectSection
                id="challenges"
                eyebrow="What was difficult"
                title="Challenges"
            >
                <div className="space-y-10">
                    <div className="flex items-start gap-4">
                        <span className="font-mono text-sm text-[var(--color-accent)]">
                            01
                        </span>

                        <div>
                            <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                                Balancing personality with usability
                            </h3>

                            <p className="mt-3">
                                I wanted the portfolio to feel distinctive without making
                                it visually overwhelming. This required being intentional
                                about typography, spacing, colours, and the amount of
                                animation used throughout the interface.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <span className="font-mono text-sm text-[var(--color-accent)]">
                            02
                        </span>

                        <div>
                            <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                                Maintaining consistency across pages
                            </h3>

                            <p className="mt-3">
                                As the portfolio grew, different pages needed to share
                                visual patterns without becoming identical. Reusable
                                components and shared styling helped maintain a coherent
                                experience.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <span className="font-mono text-sm text-[var(--color-accent)]">
                            03
                        </span>

                        <div>
                            <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                                Making interactions feel natural
                            </h3>

                            <p className="mt-3">
                                Features such as the command palette, theme switching,
                                animations, and interactive experiments needed to feel
                                intuitive rather than added only for visual effect.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <span className="font-mono text-sm text-[var(--color-accent)]">
                            04
                        </span>

                        <div>
                            <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                                Designing for different screen sizes
                            </h3>

                            <p className="mt-3">
                                The same content needed to remain readable and accessible
                                across desktop, tablet, and mobile. Navigation, grids, and
                                content layouts were adapted to work across screen sizes.
                            </p>
                        </div>
                    </div>
                </div>
            </ProjectSection>


            <ProjectSection
                id="improvements"
                eyebrow="Next iterations"
                title="What I'd Improve"
            >
                <p className="max-w-3xl">
                    Building this portfolio was as much about exploring frontend engineering
                    as it was about presenting my work. There are a few areas I'd like to
                    take further as the portfolio evolves.
                </p>

                <div className="mt-10 space-y-8">
                    <div>
                        <h3 className="font-display text-lg font-semibold text-[var(--color-text-primary)]">
                            01. Deeper accessibility
                        </h3>
                        <p className="mt-2">
                            Strengthen keyboard navigation, screen-reader support, focus
                            management, and semantic markup across interactive components.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-display text-lg font-semibold text-[var(--color-text-primary)]">
                            02. More comprehensive testing
                        </h3>
                        <p className="mt-2">
                            Add automated tests for important user flows, interactive experiments,
                            navigation, and responsive behavior to make future changes more reliable.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-display text-lg font-semibold text-[var(--color-text-primary)]">
                            03. Performance optimization
                        </h3>
                        <p className="mt-2">
                            Continue improving loading performance through image optimization,
                            code splitting, and careful monitoring of Core Web Vitals.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-display text-lg font-semibold text-[var(--color-text-primary)]">
                            04. Evolving the Frontend Lab
                        </h3>
                        <p className="mt-2">
                            Add more hands-on experiments around browser APIs, asynchronous
                            JavaScript, React patterns, and frontend performance.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-display text-lg font-semibold text-[var(--color-text-primary)]">
                            05. Easier content management
                        </h3>
                        <p className="mt-2">
                            Explore a more flexible way to manage project details, case studies,
                            and screenshots as the portfolio grows.
                        </p>
                    </div>
                </div>

                <div className="mt-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-accent)]">
                        The goal
                    </p>
                    <p className="mt-3 font-display text-lg text-[var(--color-text-primary)]">
                        Keep learning, keep experimenting, and keep making the experience better.
                    </p>
                </div>
            </ProjectSection>


            {/* 08 — Screenshots */}

            <ProjectSection
                id="screenshots"
                eyebrow="The Interface"
                title="A closer look."
            >
                <p className="mb-10 max-w-3xl">
                    A collection of key screens from the portfolio, highlighting the visual
                    direction, project presentation, and interactive frontend experiments.
                </p>

                {/* Homepage */}
                <div className="space-y-3">
                    <img
                        src={homeImage}
                        alt="Portfolio homepage"
                        className="w-full rounded-xl border border-[var(--color-border)]"
                        loading="lazy"
                    />
                    <p className="text-sm text-[var(--color-text-muted)]">
                        01 — Home · Personal introduction and visual identity
                    </p>
                </div>

                {/* Projects */}
                <div className="mt-12 space-y-3">
                    <img
                        src={projectsImage}
                        alt="Portfolio projects page"
                        className="w-full rounded-xl border border-[var(--color-border)]"
                        loading="lazy"
                    />
                    <p className="text-sm text-[var(--color-text-muted)]">
                        02 — Projects · Selected work and project showcases
                    </p>
                </div>

                {/* Resume and About */}
                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    <figure className="space-y-3">
                        <img
                            src={resumeImage}
                            alt="Portfolio resume page"
                            className="w-full rounded-xl border border-[var(--color-border)]"
                            loading="lazy"
                        />
                        <figcaption className="text-sm text-[var(--color-text-muted)]">
                            03 — Resume · Experience and technical skills
                        </figcaption>
                    </figure>

                    <figure className="space-y-3">
                        <img
                            src={aboutImage}
                            alt="Portfolio about page"
                            className="w-full rounded-xl border border-[var(--color-border)]"
                            loading="lazy"
                        />
                        <figcaption className="text-sm text-[var(--color-text-muted)]">
                            04 — About · Interests beyond development
                        </figcaption>
                    </figure>
                </div>

                {/* Frontend Lab */}
                <div className="mt-12 space-y-3">
                    <img
                        src={labImage}
                        alt="Frontend Lab experiments page"
                        className="w-full rounded-xl border border-[var(--color-border)]"
                        loading="lazy"
                    />
                    <p className="text-sm text-[var(--color-text-muted)]">
                        05 — Frontend Lab · Interactive engineering experiments
                    </p>
                </div>

                {/* Debounce Playground */}
                <div className="mt-12 space-y-3">
                    <img
                        src={debounceImage}
                        alt="Debounce Playground interactive interface"
                        className="w-full rounded-xl border border-[var(--color-border)]"
                        loading="lazy"
                    />
                    <p className="text-sm text-[var(--color-text-muted)]">
                        06 — Debounce Playground · Visualizing request behavior
                    </p>
                </div>

                <div className="mt-8 space-y-3">
                    <img
                        src={debounceConceptImage}
                        alt="Debouncing concept explanation"
                        className="w-full rounded-xl border border-[var(--color-border)]"
                        loading="lazy"
                    />
                    <p className="text-sm text-[var(--color-text-muted)]">
                        07 — Under the hood · Explaining the concept visually
                    </p>
                </div>
            </ProjectSection>


            {/* 09 — Tech Stack */}
            <ProjectSection
                id="tech-stack"
                eyebrow="Built with"
                title="Tech Stack"
            >
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            category: "Frontend",
                            technologies: ["React", "TypeScript", "Tailwind CSS"],
                        },
                        {
                            category: "Routing",
                            technologies: ["React Router"],
                        },
                        {
                            category: "Animation",
                            technologies: ["Framer Motion"],
                        },
                        {
                            category: "Icons",
                            technologies: ["Lucide React"],
                        },
                        {
                            category: "Development",
                            technologies: ["Vite", "Git", "GitHub"],
                        },
                        {
                            category: "Deployment",
                            technologies: ["Vercel"],
                        },
                    ].map((group) => (
                        <div
                            key={group.category}
                            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-colors duration-300 hover:border-[var(--color-border-hover)]"
                        >
                            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-accent)]">
                                {group.category}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {group.technologies.map((technology) => (
                                    <span
                                        key={technology}
                                        className="rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm text-[var(--color-text-secondary)]"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </ProjectSection>

            {/* 10 — Takeaways */}
            <ProjectSection
                id="takeaways"
                eyebrow="Looking back"
                title="Takeaways"
            >
                <div className="grid gap-6 md:grid-cols-2">
                    {[
                        {
                            number: "01",
                            title: "A portfolio can be a product",
                            description:
                                "Thinking of the portfolio as a product changed how I approached navigation, content, interactions, and the overall user journey.",
                        },
                        {
                            number: "02",
                            title: "Small interactions matter",
                            description:
                                "Purposeful interactions can make an interface more engaging without requiring complicated functionality.",
                        },
                        {
                            number: "03",
                            title: "Consistency is an engineering decision",
                            description:
                                "Reusable components and shared patterns make it easier to maintain a coherent experience as an application grows.",
                        },
                        {
                            number: "04",
                            title: "There is always room to experiment",
                            description:
                                "The Frontend Lab gives me a place to explore concepts, test ideas, and turn technical knowledge into interactive examples.",
                        },
                    ].map((item) => (
                        <div
                            key={item.number}
                            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
                        >
                            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-accent)]">
                                {item.number}
                            </p>

                            <h3 className="mt-4 font-display text-xl font-semibold text-[var(--color-text-primary)]">
                                {item.title}
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                    <div>
                        <p className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                            Want to explore the code?
                        </p>

                        <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                            Take a look at the source code and explore the implementation.
                        </p>
                    </div>

                    <a
                        href="https://github.com/gauri2806/gauri-katti-dev"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex shrink-0 items-center justify-center rounded-xl border border-[var(--color-border)] px-5 py-3 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface-hover)]"
                    >
                        View on GitHub
                    </a>
                </div>
            </ProjectSection>
        </ProjectCaseStudyLayout>
    );
}

export default PortfolioCaseStudy;
