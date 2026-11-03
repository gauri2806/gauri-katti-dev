import { memo, useRef, useState } from "react";
import { ArrowLeft, RotateCcw, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface RenderCounterProps {
    label: string;
    count: number;
    optimized?: boolean;
}

interface ChildProps {
    label: string;
}

/* --------------------------------
   Render Counter
--------------------------------- */

function RenderCounter({
    label,
    count,
    optimized = false,
}: RenderCounterProps) {
    return (
        <div
            className={`rounded-xl border p-5 ${optimized
                    ? "border-[var(--color-accent)]/20 bg-[var(--color-background)]"
                    : "border-[var(--color-border)] bg-[var(--color-background)]"
                }`}
        >
            <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-[var(--color-text-secondary)]">
                    {label}
                </span>

                {optimized && (
                    <span className="rounded-full border border-[var(--color-accent)]/30 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--color-accent)]">
                        memo
                    </span>
                )}
            </div>

            <p className="mt-5 font-mono text-4xl text-[var(--color-text-primary)]">
                {count}
            </p>

            <p className="mt-2 text-xs text-[var(--color-text-muted)]">
                renders
            </p>
        </div>
    );
}

/* --------------------------------
   Unoptimized Child
--------------------------------- */

function UnoptimizedChild({ label }: ChildProps) {
    const renderCount = useRef(0);

    renderCount.current += 1;

    return (
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-5">
            <div className="flex items-center justify-between">
                <span className="text-sm text-[var(--color-text-secondary)]">
                    {label}
                </span>

                <span className="rounded-full border border-[var(--color-border)] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                    normal
                </span>
            </div>

            <p className="mt-5 font-mono text-4xl text-[var(--color-text-primary)]">
                {renderCount.current}
            </p>

            <p className="mt-2 text-xs text-[var(--color-text-muted)]">
                renders
            </p>
        </div>
    );
}

/* --------------------------------
   Memoized Child
--------------------------------- */

const MemoizedChild = memo(function MemoizedChild({
    label,
}: ChildProps) {
    const renderCount = useRef(0);

    renderCount.current += 1;

    return (
        <div className="rounded-xl border border-[var(--color-accent)]/20 bg-[var(--color-background)] p-5">
            <div className="flex items-center justify-between">
                <span className="text-sm text-[var(--color-text-secondary)]">
                    {label}
                </span>

                <span className="rounded-full border border-[var(--color-accent)]/30 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--color-accent)]">
                    memo
                </span>
            </div>

            <p className="mt-5 font-mono text-4xl text-[var(--color-text-primary)]">
                {renderCount.current}
            </p>

            <p className="mt-2 text-xs text-[var(--color-text-muted)]">
                renders
            </p>
        </div>
    );
});

/* --------------------------------
   Actual Render Experiment
--------------------------------- */
interface RenderExperimentProps {
    onReset: () => void;
}

function RenderExperiment({ onReset }: RenderExperimentProps) {
    const [trigger, setTrigger] = useState(0);

    const parentRenderCount = useRef(0);

    parentRenderCount.current += 1;

    const triggerParentRender = () => {
        setTrigger((value) => value + 1);
    };

    return (
        <>
            {/* Controls */}
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                            Controls
                        </p>

                        <h2 className="mt-2 font-display text-xl font-semibold text-[var(--color-text-primary)]">
                            Trigger a parent render
                        </h2>
                    </div>

                    <button
                        type="button"
                        onClick={onReset}
                        className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-[var(--color-border)] px-3 py-2 text-xs text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)]"
                    >
                        <RotateCcw size={14} />
                        Reset
                    </button>
                </div>

                <p className="mt-5 text-sm leading-7 text-[var(--color-text-secondary)]">
                    Click the button below. The parent component updates its
                    state, causing it to render again.
                </p>

                <button
                    type="button"
                    onClick={triggerParentRender}
                    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-[var(--color-background)] transition-transform hover:-translate-y-0.5 active:translate-y-0"
                >
                    <Zap size={16} />
                    Trigger parent render
                </button>

                <div className="mt-8">
                    <RenderCounter
                        label="Parent renders"
                        count={parentRenderCount.current}
                    />
                </div>

                <div className="mt-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-5">
                    <p className="font-mono text-xs text-[var(--color-text-muted)]">
                        Trigger count
                    </p>

                    <p className="mt-2 font-mono text-3xl text-[var(--color-text-primary)]">
                        {trigger}
                    </p>

                    <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                        state updates
                    </p>
                </div>
            </div>

            {/* Render Comparison */}
            <div className="grid gap-4 sm:grid-cols-2">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="mb-3">
                        <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
                            Without memo
                        </p>

                        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                            Child renders whenever its parent renders.
                        </p>
                    </div>

                    <UnoptimizedChild label="Child renders" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="mb-3">
                        <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-accent)]">
                            With React.memo
                        </p>

                        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                            Child skips rendering when props are unchanged.
                        </p>
                    </div>

                    <MemoizedChild label="Child renders" />
                </motion.div>
            </div>
        </>
    );
}

/* --------------------------------
   Main Playground
--------------------------------- */

function RenderPlayground() {
    const [experimentKey, setExperimentKey] = useState(0);

    const reset = () => {
        setExperimentKey((key) => key + 1);
    };

    return (
        <main>
            {/* Header */}
            <section className="mx-auto max-w-7xl px-6 pb-12 pt-12 lg:px-8 lg:pb-16 lg:pt-20">
                <Link
                    to="/lab"
                    className="inline-flex items-center gap-2 font-mono text-xs text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
                >
                    <ArrowLeft size={14} />
                    Back to Lab
                </Link>

                <div className="mt-10 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">
                            Experiment 02
                        </span>

                        <span className="rounded-full border border-[var(--color-accent)]/30 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-accent)]">
                            React
                        </span>
                    </div>

                    <h1 className="mt-5 font-display text-5xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-6xl">
                        Render Playground
                    </h1>

                    <p className="mt-5 text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
                        See how React re-renders components, and what changes when
                        memoization is introduced.
                    </p>
                </div>
            </section>

            {/* Playground */}
            <section className="border-y border-[var(--color-border)]">
                <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
                    <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                        <div
                            key={experimentKey}
                            className="contents"
                        >
                            <RenderExperiment onReset={reset}/>
                        </div>

                        {/* Reset */}
                        <div className="pointer-events-none absolute">
                            {/* Reset is rendered below through the floating control. */}
                        </div>
                    </div>

                    
                </div>
            </section>

            {/* Explanation */}
            <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
                <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">
                            The concept
                        </p>

                        <h2 className="mt-3 font-display text-3xl font-semibold text-[var(--color-text-primary)]">
                            What actually happens?
                        </h2>
                    </div>

                    <div className="space-y-5 text-base leading-8 text-[var(--color-text-secondary)]">
                        <p>
                            When a component's state changes, React schedules a
                            render for that component. During reconciliation,
                            React evaluates its children to determine what needs
                            to change in the UI.
                        </p>

                        <p>
                            That doesn't necessarily mean the browser will update
                            the DOM. React can render a component without
                            producing any visible DOM change.
                        </p>

                        <p>
                            <code className="rounded-md bg-[var(--color-surface)] px-2 py-1 font-mono text-sm text-[var(--color-accent)]">
                                React.memo
                            </code>{" "}
                            allows a component to skip rendering when its props are
                            considered unchanged.
                        </p>

                        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 font-mono text-xs leading-7">
                            <span className="text-[var(--color-text-muted)]">
                                parent state changes
                            </span>
                            {" → "}
                            <span className="text-[var(--color-text-primary)]">
                                parent renders
                            </span>
                            {" → "}
                            <span className="text-[var(--color-text-secondary)]">
                                child evaluated
                            </span>
                            {" → "}
                            <span className="text-[var(--color-accent)]">
                                memo can skip child
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Important distinction */}
            <section className="border-y border-[var(--color-border)]">
                <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
                    <div className="max-w-3xl">
                        <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">
                            Important distinction
                        </p>

                        <h2 className="mt-3 font-display text-3xl font-semibold text-[var(--color-text-primary)]">
                            Re-render ≠ DOM update
                        </h2>

                        <p className="mt-5 text-base leading-8 text-[var(--color-text-secondary)]">
                            A React re-render means React executes the component
                            again to calculate the next UI representation. It
                            does not automatically mean that the browser's DOM is
                            changed.
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            <InfoCard
                                title="Render"
                                description="React executes the component and calculates the next UI."
                            />

                            <InfoCard
                                title="Commit"
                                description="React applies the necessary changes to the actual DOM."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Takeaway */}
            <section>
                <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
                    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
                        <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-accent)]">
                            Takeaway
                        </p>

                        <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--color-text-secondary)]">
                            Don't optimize every component by default. First
                            understand where rendering actually matters, then use
                            memoization, stable references, or better state
                            boundaries where they provide measurable value.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

/* --------------------------------
   Info Card
--------------------------------- */

interface InfoCardProps {
    title: string;
    description: string;
}

function InfoCard({ title, description }: InfoCardProps) {
    return (
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
            <h3 className="font-display font-medium text-[var(--color-text-primary)]">
                {title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
                {description}
            </p>
        </div>
    );
}

export default RenderPlayground;