import ProjectCaseStudyLayout from "../../components/projects/ProjectCaseStudyLayout";
import ProjectSection from "../../components/projects/ProjectSection";
import ScreenshotGallery from "../../components/projects/ScreenshotGallery";
import {
    taskTrackerSections,
} from "../../data/projectCaseStudies";

import dashboardList from "../../assets/projects/task-tracker/dashboard-list.png";
import dashboardKanban from "../../assets/projects/task-tracker/dashboard-kanban.png";
import createTask from "../../assets/projects/task-tracker/create-task.png";
import voiceInput from "../../assets/projects/task-tracker/voice-input.png";
import editTask from "../../assets/projects/task-tracker/edit-task.png";
import filters from "../../assets/projects/task-tracker/filters.png";
import filteredResults from "../../assets/projects/task-tracker/filtered-results.png";
import generatedTask from "../../assets/projects/task-tracker/generated-task.jpeg";

function TaskTracker() {
    return (
        <ProjectCaseStudyLayout
            title="Voice-Enabled Task Tracker"
            subtitle="AI-powered task management"
            description="A task management application that combines a React interface with voice input, AI-powered task parsing, and a REST API to turn natural-language commands into structured tasks."
            type="Full Stack"
            year="2026"
            tags={["React", "Node.js", "MongoDB", "AI"]}
            heroImage={dashboardList}
            githubUrl="https://github.com/gauri2806/TaskManager"
            sections={taskTrackerSections}
        >
            <ProjectSection
                id="overview"
                eyebrow="Overview"
                title="A task manager built around natural language"
            >
                <p>
                    Task Tracker explores how voice and AI can make everyday task
                    creation faster and more natural. Instead of requiring users to
                    manually fill every field, they can describe a task using natural
                    language and let the application convert it into structured task
                    data.
                </p>

                <p className="mt-5">
                    The project combines a React frontend with a Node.js/Express API,
                    MongoDB persistence, and an AI-assisted parsing workflow.
                </p>
            </ProjectSection>

            <ProjectSection
                id="problem"
                eyebrow="The Problem"
                title="Creating structured tasks can feel unnecessarily manual"
            >
                <p>
                    Traditional task forms require users to manually enter information
                    such as the title, priority, status, and due date. That works well
                    for structured workflows, but it can feel slow when the user already
                    knows what they want to say.
                </p>

                <p className="mt-5">
                    The idea behind this project was simple:
                </p>

                <div className="mt-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                    <p className="font-display text-xl font-medium leading-8 text-[var(--color-text-primary)]">
                        What if a user could simply say what they need to do and the
                        application could turn that into a structured task?
                    </p>
                </div>
            </ProjectSection>

            <ProjectSection
                id="approach"
                eyebrow="My Approach"
                title="From natural language to structured state"
            >
                <p>
                    The application was designed as a pipeline rather than treating voice
                    input as an isolated feature.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        "Capture voice input",
                        "Convert speech to text",
                        "Parse the transcript",
                        "Create structured task data",
                        "Persist through REST API",
                        "Render updated task state",
                    ].map((step, index) => (
                        <div
                            key={step}
                            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
                        >
                            <span className="font-mono text-xs text-[var(--color-accent)]">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <p className="mt-3 text-sm text-[var(--color-text-secondary)]">
                                {step}
                            </p>
                        </div>
                    ))}
                </div>
            </ProjectSection>

            <ProjectSection
                id="architecture"
                eyebrow="Architecture"
                title="How the pieces connect"
            >
                <p>
                    Task Tracker is structured as a small full-stack workflow where the React
                    application handles user interaction, the backend exposes REST endpoints,
                    and MongoDB persists the task data. The voice workflow adds an additional
                    processing step that converts natural language into structured task
                    fields.
                </p>

                {/* Main flow */}
                <div className="mt-8 overflow-x-auto rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                    <div className="flex min-w-[720px] items-center justify-between gap-4">
                        {[
                            {
                                title: "React UI",
                                description: "User interaction",
                            },
                            {
                                title: "Voice Input",
                                description: "Natural language",
                            },
                            {
                                title: "Speech-to-text",
                                description: "Transcript",
                            },
                            {
                                title: "AI Parsing",
                                description: "Structured fields",
                            },
                            {
                                title: "Express API",
                                description: "CRUD operations",
                            },
                            {
                                title: "MongoDB",
                                description: "Persistence",
                            },
                        ].map((item, index, items) => (
                            <div key={item.title} className="flex items-center gap-4">
                                <div className="w-28 shrink-0 text-center">
                                    <div className="rounded-xl border border-[var(--color-border)] px-3 py-4">
                                        <p className="text-sm font-medium text-[var(--color-text-primary)]">
                                            {item.title}
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-[var(--color-text-muted)]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {index < items.length - 1 && (
                                    <span className="font-mono text-sm text-[var(--color-accent)]">
                                        →
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* API layer */}
                <div className="mt-10">
                    <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                        REST API layer
                    </h3>

                    <p className="mt-3">
                        The backend exposes a small set of task-focused endpoints for creating,
                        retrieving, updating, and deleting tasks. Keeping these operations behind
                        an API gives the frontend a clear contract for communicating with the
                        persistence layer.
                    </p>

                    <div className="mt-5 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
                        {[
                            ["POST", "/api/tasks", "Create a task"],
                            ["GET", "/api/tasks", "Fetch tasks"],
                            ["PUT", "/api/tasks/:id", "Update a task"],
                            ["DELETE", "/api/tasks/:id", "Delete a task"],
                        ].map(([method, endpoint, description]) => (
                            <div
                                key={`${method}-${endpoint}`}
                                className="grid gap-2 border-b border-[var(--color-border)] px-5 py-4 last:border-b-0 sm:grid-cols-[80px_1fr_1fr] sm:items-center"
                            >
                                <span className="font-mono text-xs text-[var(--color-accent)]">
                                    {method}
                                </span>

                                <code className="font-mono text-sm text-[var(--color-text-primary)]">
                                    {endpoint}
                                </code>

                                <span className="text-sm text-[var(--color-text-muted)]">
                                    {description}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* AI flow */}
                <div className="mt-10">
                    <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                        Voice → structured task
                    </h3>

                    <p className="mt-3">
                        The voice workflow is separate from the normal CRUD flow. A spoken
                        command is first converted into a transcript, which is then sent to the
                        AI parsing endpoint. The resulting fields can be used to construct a
                        normal task object.
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            ["01", "Voice command", "Natural-language input"],
                            ["02", "Transcript", "Speech converted to text"],
                            ["03", "AI parsing", "Task fields extracted"],
                            ["04", "Task object", "Ready for application state"],
                        ].map(([number, title, description]) => (
                            <div
                                key={number}
                                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
                            >
                                <span className="font-mono text-xs text-[var(--color-accent)]">
                                    {number}
                                </span>

                                <h4 className="mt-3 text-sm font-medium text-[var(--color-text-primary)]">
                                    {title}
                                </h4>

                                <p className="mt-1 text-sm leading-6 text-[var(--color-text-muted)]">
                                    {description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Data model */}
                <div className="mt-10">
                    <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                        Task data model
                    </h3>

                    <p className="mt-3">
                        The application keeps the generated result aligned with the same task
                        structure used by the rest of the application. This means a task created
                        manually and one created through voice can follow the same CRUD workflow.
                    </p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        {[
                            {
                                label: "title",
                                description: "The task name or primary action.",
                            },
                            {
                                label: "description",
                                description: "Additional context for the task.",
                            },
                            {
                                label: "status",
                                description: "Current state of the task.",
                            },
                            {
                                label: "priority",
                                description: "Relative importance of the task.",
                            },
                            {
                                label: "dueDate",
                                description: "Optional deadline associated with the task.",
                            },
                        ].map((field) => (
                            <div
                                key={field.label}
                                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
                            >
                                <code className="font-mono text-sm text-[var(--color-accent)]">
                                    {field.label}
                                </code>

                                <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
                                    {field.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Core principle */}
                <div className="mt-12 border-l-2 border-[var(--color-accent)] pl-5">
                    <p className="font-display text-lg font-medium text-[var(--color-text-primary)]">
                        Voice is an input method — not a separate task system.
                    </p>

                    <p className="mt-2">
                        Once voice input has been converted into structured data, it follows the
                        same application workflow as a manually created task.
                    </p>
                </div>
            </ProjectSection>

            <ProjectSection
                id="tech-decisions"
                eyebrow="Engineering choices"
                title="Tech Decisions"
            >
                <div className="space-y-10">
                    {/* React */}
                    <div>
                        <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                            React for an interaction-heavy UI
                        </h3>

                        <p className="mt-3">
                            React provided the component-based structure needed for task creation,
                            task updates, filtering, and voice-driven interactions. Keeping the UI
                            state separate from the API layer also made it easier to support both
                            manual and voice-based task creation through the same interface.
                        </p>
                    </div>

                    {/* REST API */}
                    <div>
                        <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                            REST API for a clear frontend contract
                        </h3>

                        <p className="mt-3">
                            The frontend communicates with the backend through focused REST
                            endpoints rather than coupling UI components directly to the database.
                            This keeps the client responsible for presentation and interaction
                            while the backend handles persistence and business operations.
                        </p>

                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                            {[
                                "POST → create",
                                "GET → retrieve",
                                "PUT → update",
                                "DELETE → remove",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3"
                                >
                                    <code className="font-mono text-sm text-[var(--color-text-secondary)]">
                                        {item}
                                    </code>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* MongoDB */}
                    <div>
                        <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                            MongoDB for flexible task data
                        </h3>

                        <p className="mt-3">
                            Tasks are persisted as documents containing fields such as title,
                            description, status, priority, and due date. MongoDB provided a
                            straightforward persistence layer for the project's task-oriented data
                            model.
                        </p>
                    </div>

                    {/* Speech + AI */}
                    <div>
                        <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                            Separating speech recognition from task parsing
                        </h3>

                        <p className="mt-3">
                            Voice recognition and task interpretation solve two different problems.
                            The speech-to-text layer converts audio into a transcript, while the AI
                            parsing step interprets that transcript and extracts task information.
                            Keeping those responsibilities separate makes the overall workflow
                            easier to reason about.
                        </p>

                        <div className="mt-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[var(--color-text-secondary)]">
                                {[
                                    "Audio",
                                    "Transcript",
                                    "Task fields",
                                    "Task object",
                                ].map((item, index, items) => (
                                    <span key={item} className="flex items-center gap-3">
                                        <span className="rounded-lg border border-[var(--color-border)] px-3 py-2">
                                            {item}
                                        </span>

                                        {index < items.length - 1 && (
                                            <span className="text-[var(--color-accent)]">→</span>
                                        )}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* MUI */}
                    <div>
                        <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                            MUI for consistent interface components
                        </h3>

                        <p className="mt-3">
                            MUI was used to build the application's interface with consistent
                            controls and interaction patterns without having to implement every
                            common UI primitive from scratch.
                        </p>
                    </div>

                    {/* Core principle */}
                    <div className="border-l-2 border-[var(--color-accent)] pl-5">
                        <p className="font-display text-lg font-medium text-[var(--color-text-primary)]">
                            The important decision was keeping one task model across every input
                            method.
                        </p>

                        <p className="mt-2">
                            Whether a task starts with a form or a voice command, it should
                            eventually become the same kind of structured task inside the
                            application.
                        </p>
                    </div>
                </div>
            </ProjectSection>

            <ProjectSection
                id="challenges"
                eyebrow="What was difficult"
                title="Challenges"
            >
                <div className="space-y-10">
                    {/* 01 */}
                    <div className="flex items-start gap-4">
                        <span className="font-mono text-sm text-[var(--color-accent)]">
                            01
                        </span>

                        <div>
                            <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                                Converting natural language into predictable data
                            </h3>

                            <p className="mt-3">
                                A voice command doesn't naturally arrive in the format that a task
                                application expects. A user might mention a task, priority, and
                                deadline in a single sentence, or leave some information unspecified.
                            </p>

                            <p className="mt-3">
                                The challenge was therefore not just understanding the transcript,
                                but turning it into a predictable structure that could work with the
                                same task model used throughout the application.
                            </p>
                        </div>
                    </div>

                    {/* 02 */}
                    <div className="flex items-start gap-4">
                        <span className="font-mono text-sm text-[var(--color-accent)]">
                            02
                        </span>

                        <div>
                            <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                                Handling incomplete information
                            </h3>

                            <p className="mt-3">
                                Natural-language commands don't always contain every task field. A
                                user might say something as simple as "Remind me to call the client
                                tomorrow" without explicitly providing a priority or status.
                            </p>

                            <p className="mt-3">
                                The application therefore needs sensible defaults for fields that
                                aren't explicitly provided rather than assuming every voice command
                                will contain a complete task.
                            </p>
                        </div>
                    </div>

                    {/* 03 */}
                    <div className="flex items-start gap-4">
                        <span className="font-mono text-sm text-[var(--color-accent)]">
                            03
                        </span>

                        <div>
                            <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                                Connecting asynchronous steps
                            </h3>

                            <p className="mt-3">
                                The voice workflow contains multiple asynchronous operations:
                                capturing speech, obtaining a transcript, processing the transcript,
                                and finally creating the task through the API.
                            </p>

                            <p className="mt-3">
                                Each step needs clear loading, success, and failure states so that
                                the user understands what the application is currently doing.
                            </p>
                        </div>
                    </div>

                    {/* 04 */}
                    <div className="flex items-start gap-4">
                        <span className="font-mono text-sm text-[var(--color-accent)]">
                            04
                        </span>

                        <div>
                            <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                                Keeping voice input optional
                            </h3>

                            <p className="mt-3">
                                Voice should improve the task-creation experience without becoming
                                the only way to use the application. Manual task creation still
                                needs to remain straightforward and predictable.
                            </p>

                            <div className="mt-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                                <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[var(--color-text-secondary)]">
                                    <span className="rounded-lg border border-[var(--color-border)] px-3 py-2">
                                        Manual input
                                    </span>

                                    <span className="text-[var(--color-accent)]">or</span>

                                    <span className="rounded-lg border border-[var(--color-border)] px-3 py-2">
                                        Voice input
                                    </span>

                                    <span className="text-[var(--color-accent)]">→</span>

                                    <span className="rounded-lg border border-[var(--color-border)] px-3 py-2">
                                        Same task model
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">
                        Key lesson
                    </p>

                    <p className="mt-4 max-w-2xl font-display text-xl font-medium leading-8 text-[var(--color-text-primary)]">
                        The difficult part of an AI feature isn't only generating a result. It's
                        making that result reliable enough to become part of the application's
                        normal state.
                    </p>
                </div>
            </ProjectSection>

            <ProjectSection
                id="improvements"
                eyebrow="Next iterations"
                title="What I'd Improve"
            >
                <div className="space-y-10">
                    {/* 01 */}
                    <div className="flex items-start gap-4">
                        <span className="font-mono text-sm text-[var(--color-accent)]">
                            01
                        </span>

                        <div>
                            <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                                Authentication and multi-user support
                            </h3>

                            <p className="mt-3">
                                The current application is designed around a single-user workflow.
                                A production version would introduce authentication and associate
                                tasks with individual users so the application could safely support
                                multiple accounts.
                            </p>
                        </div>
                    </div>

                    {/* 02 */}
                    <div className="flex items-start gap-4">
                        <span className="font-mono text-sm text-[var(--color-accent)]">
                            02
                        </span>

                        <div>
                            <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                                More reliable natural-language parsing
                            </h3>

                            <p className="mt-3">
                                The parsing workflow could be made more robust by validating the
                                generated fields before creating a task and handling ambiguous
                                commands more explicitly.
                            </p>

                            <p className="mt-3">
                                For example, if a user mentions a deadline that cannot be confidently
                                interpreted, the interface could ask for clarification instead of
                                silently creating an incorrect task.
                            </p>
                        </div>
                    </div>

                    {/* 03 */}
                    <div className="flex items-start gap-4">
                        <span className="font-mono text-sm text-[var(--color-accent)]">
                            03
                        </span>

                        <div>
                            <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                                Better voice interaction feedback
                            </h3>

                            <p className="mt-3">
                                The voice workflow could provide clearer visual feedback for each
                                stage — listening, transcribing, processing, and creating the task.
                                This would make the asynchronous flow easier for users to understand.
                            </p>
                        </div>
                    </div>

                    {/* 04 */}
                    <div className="flex items-start gap-4">
                        <span className="font-mono text-sm text-[var(--color-accent)]">
                            04
                        </span>

                        <div>
                            <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                                Notifications and reminders
                            </h3>

                            <p className="mt-3">
                                Due dates become significantly more useful when the application can
                                proactively remind users about upcoming or overdue tasks. A future
                                version could introduce browser or mobile notifications.
                            </p>
                        </div>
                    </div>

                    {/* 05 */}
                    <div className="flex items-start gap-4">
                        <span className="font-mono text-sm text-[var(--color-accent)]">
                            05
                        </span>

                        <div>
                            <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                                Mobile-first voice experience
                            </h3>

                            <p className="mt-3">
                                Voice input is particularly natural on mobile devices. A dedicated
                                mobile experience could make quick task capture significantly faster,
                                especially when users are away from their desktop.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">
                        Product direction
                    </p>

                    <p className="mt-4 max-w-2xl font-display text-xl font-medium leading-8 text-[var(--color-text-primary)]">
                        The next step would be moving from a working AI-assisted prototype toward
                        a reliable task-management product that users can depend on every day.
                    </p>
                </div>
            </ProjectSection>

            <ProjectSection
                id="screenshots"
                eyebrow="Product in action"
                title="Screenshots"
            >
                <p className="max-w-3xl">
                    The interface supports both traditional task management and voice-driven
                    workflows, with multiple views and interaction states designed around the
                    same underlying task model.
                </p>

                <ScreenshotGallery
                    screenshots={[
                        {
                            src: dashboardList,
                            title: "Task dashboard — List View",
                            description:
                                "The primary task management view with search, sorting, filtering, and task actions.",
                        },
                        {
                            src: dashboardKanban,
                            title: "Task dashboard — Kanban View",
                            description:
                                "An alternate board-based view that organizes tasks by their current status.",
                        },
                        {
                            src: createTask,
                            title: "Create a task",
                            description:
                                "Structured task creation with status, priority, description, and due date.",
                        },
                        {
                            src: voiceInput,
                            title: "Voice input",
                            description:
                                "Natural-language task input that can be converted into structured task data.",
                        },
                        {
                            src: editTask,
                            title: "Edit a task",
                            description:
                                "Existing tasks can be updated without leaving the main task management flow.",
                        },
                        {
                            src: filters,
                            title: "Task filters",
                            description:
                                "Filter tasks by status and priority to quickly narrow down the task list.",
                        },
                        {
                            src: filteredResults,
                            title: "Filtered results",
                            description:
                                "The task list updates to reflect the selected filtering criteria.",
                        },
                        {
                            src: generatedTask,
                            title: "AI-generated task",
                            description:
                                "A natural-language request is transformed into a structured task that can be managed like any other task.",
                        },
                    ]}
                />
            </ProjectSection>

            <ProjectSection
                id="tech-stack"
                eyebrow="Built with"
                title="Tech Stack"
            >
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            category: "Frontend",
                            technologies: ["React", "Vite", "MUI", "Axios"],
                        },
                        {
                            category: "Backend",
                            technologies: ["Node.js", "Express"],
                        },
                        {
                            category: "Database",
                            technologies: ["MongoDB", "Mongoose"],
                        },
                        {
                            category: "AI & Voice",
                            technologies: ["Speech-to-text", "AI task parsing"],
                        },
                        {
                            category: "API",
                            technologies: ["REST APIs", "CRUD operations"],
                        },
                        {
                            category: "Development",
                            technologies: ["Git", "GitHub", "Postman"],
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

            <ProjectSection
                id="takeaways"
                eyebrow="Looking back"
                title="Takeaways"
            >
                <div className="grid gap-6 md:grid-cols-2">
                    {/* 01 */}
                    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                        <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-accent)]">
                            01
                        </p>

                        <h3 className="mt-4 font-display text-xl font-semibold text-[var(--color-text-primary)]">
                            AI needs structure
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
                            Generating useful output is only the beginning. The output needs to be
                            predictable enough to become part of the application's normal data
                            flow.
                        </p>
                    </div>

                    {/* 02 */}
                    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                        <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-accent)]">
                            02
                        </p>

                        <h3 className="mt-4 font-display text-xl font-semibold text-[var(--color-text-primary)]">
                            Input and state should stay decoupled
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
                            Manual input and voice input are different interaction methods, but
                            they should ultimately produce the same predictable task model.
                        </p>
                    </div>

                    {/* 03 */}
                    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                        <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-accent)]">
                            03
                        </p>

                        <h3 className="mt-4 font-display text-xl font-semibold text-[var(--color-text-primary)]">
                            Async UX matters
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
                            When a feature involves multiple asynchronous operations, communicating
                            what is happening becomes just as important as completing the request.
                        </p>
                    </div>

                    {/* 04 */}
                    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                        <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-accent)]">
                            04
                        </p>

                        <h3 className="mt-4 font-display text-xl font-semibold text-[var(--color-text-primary)]">
                            Small projects can still have real engineering depth
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
                            The project started as a task manager, but adding voice input introduced
                            interesting problems around API design, asynchronous workflows,
                            structured data, and user experience.
                        </p>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="mt-12 flex flex-col gap-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                    <div>
                        <p className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                            Want to explore the implementation?
                        </p>

                        <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                            The complete project is available on GitHub.
                        </p>
                    </div>

                    <a
                        href="https://github.com/gauri2806/TaskManager"
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

export default TaskTracker;