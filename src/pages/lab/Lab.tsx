import { motion } from "framer-motion";
import {
    Activity,
    Accessibility,
    Ban,
    Braces,
    Gauge,
    Layers3,
} from "lucide-react";
import LabCard from "../../features/lab/LabCard";

const experiments = [
    {
        number: "01",
        title: "Debounce Playground",
        description:
            "See how debouncing changes the number of requests triggered by a search input.",
        category: "Performance",
        icon: Gauge,
        status: "Live",
        path: "/lab/debounce",
    },
    {
        number: "02",
        title: "Render Playground",
        description:
            "Visualize React re-renders and understand where unnecessary renders come from.",
        category: "React",
        icon: Activity,
        status: "Coming soon",
    },
    {
        number: "03",
        title: "State Playground",
        description:
            "Compare different approaches to managing shared and local application state.",
        category: "State",
        icon: Layers3,
        status: "Coming soon",
    },
    {
        number: "04",
        title: "Request Cancellation",
        description:
            "Explore how AbortController prevents stale asynchronous requests from updating the UI.",
        category: "Async",
        icon: Ban,
        status: "Coming soon",
    },
    {
        number: "05",
        title: "Accessible Modal",
        description:
            "A modal built around keyboard navigation, focus management and accessible semantics.",
        category: "Accessibility",
        icon: Accessibility,
        status: "Coming soon",
    },
    {
        number: "06",
        title: "Infinite Scroll",
        description:
            "Build infinite scrolling with IntersectionObserver without constantly listening to scroll events.",
        category: "Browser APIs",
        icon: Braces,
        status: "Coming soon",
    },
];

function Lab() {
    return (
        <main>
            {/* Hero */}
            <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-8 lg:pb-24 lg:pt-24">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl"
                >
                    <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
                        Frontend Lab
                    </p>

                    <h1 className="font-display text-5xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-6xl lg:text-7xl">
                        Small experiments.
                        <br />
                        <span className="text-[var(--color-text-secondary)]">
                            Real frontend concepts.
                        </span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
                        A collection of small experiments I build to understand frontend
                        concepts by actually using them. Performance, React behavior,
                        browser APIs, accessibility, state management, and everything in
                        between.
                    </p>
                </motion.div>
            </section>

            {/* Experiments */}
            <section className="border-t border-[var(--color-border)]">
                <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
                    <div className="mb-10 flex items-end justify-between gap-6">
                        <div>
                            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                                Experiments
                            </p>

                            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[var(--color-text-primary)]">
                                Pick something to break.
                            </h2>
                        </div>

                        <span className="hidden font-mono text-xs text-[var(--color-text-muted)] sm:block">
                            01 — 06
                        </span>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        {experiments.map((experiment, index) => (
                            <LabCard
                                key={experiment.number}
                                {...experiment}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="border-t border-[var(--color-border)]">
                <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
                    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                        <div>
                            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">
                                Why this exists
                            </p>

                            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
                                Learn by building.
                            </h2>
                        </div>

                        <p className="max-w-2xl text-base leading-8 text-[var(--color-text-secondary)]">
                            Reading about a concept is useful. Building a tiny version of it
                            makes it stick. The Lab is where I experiment with ideas,
                            understand browser behavior, and turn things I learn into small,
                            interactive pieces.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Lab;