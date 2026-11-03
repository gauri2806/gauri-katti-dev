
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  RotateCcw,
  Timer,
  Zap,
  Layers3,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface StateEvent {
  id: number;
  type: "direct" | "functional" | "async";
  message: string;
  detail: string;
  timestamp: number;
}

function StatePlayground() {
  const [count, setCount] = useState(0);
  const [events, setEvents] = useState<StateEvent[]>([]);
  const [isAsyncPending, setIsAsyncPending] = useState(false);

  const eventId = useRef(0);
  const startTime = useRef(Date.now());
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const addEvent = (
    type: StateEvent["type"],
    message: string,
    detail: string,
  ) => {
    const event: StateEvent = {
      id: ++eventId.current,
      type,
      message,
      detail,
      timestamp: Date.now() - startTime.current,
    };

    setEvents((previous) => [...previous, event]);
  };

  /*
   * Direct updates.
   * All three calls use the same count snapshot from this render.
   */
  const handleDirectUpdate = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);

    addEvent(
      "direct",
      "Direct state update",
      "3 calls made · Count increased by 1",
    );
  };

  /*
   * Functional updates.
   * Each updater receives the result of the previous queued update.
   */
  const handleFunctionalUpdate = () => {
    setCount((previous) => previous + 1);
    setCount((previous) => previous + 1);
    setCount((previous) => previous + 1);

    addEvent(
      "functional",
      "Functional state update",
      "3 calls made · Count increased by 3",
    );
  };

  /*
   * Async update.
   * The functional updater reads the latest state when the timer executes.
   */
  const handleAsyncUpdate = () => {
    if (isAsyncPending) return;

    setIsAsyncPending(true);

    addEvent(
      "async",
      "Async update scheduled",
      "Waiting for 500ms...",
    );

    timerRef.current = setTimeout(() => {
      setCount((previous) => previous + 1);
      setIsAsyncPending(false);

      addEvent(
        "async",
        "Async update completed",
        "500ms elapsed · Count increased by 1",
      );

      timerRef.current = null;
    }, 500);
  };

  const reset = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    setCount(0);
    setEvents([]);
    setIsAsyncPending(false);

    eventId.current = 0;
    startTime.current = Date.now();
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const directCount = events.filter(
    (event) => event.type === "direct",
  ).length;

  const functionalCount = events.filter(
    (event) => event.type === "functional",
  ).length;

  const asyncCount = events.filter(
    (event) =>
      event.type === "async" &&
      event.message === "Async update completed",
  ).length;

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
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Experiment 03
            </span>

            <span className="rounded-full border border-[var(--color-accent)]/30 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-accent)]">
              React
            </span>
          </div>

          <h1 className="mt-5 font-display text-5xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-6xl">
            State Playground
          </h1>

          <p className="mt-5 text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
            Experiment with different ways of updating React state.
            See why direct updates behave differently from functional
            updates, and what happens when an update is asynchronous.
          </p>
        </div>
      </section>

      {/* Playground */}
      <section className="border-y border-[var(--color-border)]">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.75fr]">
            {/* Controls */}
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                    Controls
                  </p>

                  <h2 className="mt-2 font-display text-xl font-semibold text-[var(--color-text-primary)]">
                    Experiment with state
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-3 py-2 text-xs text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)]"
                >
                  <RotateCcw size={14} />
                  Reset
                </button>
              </div>

              {/* Count */}
              <div className="mt-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-5 py-8 text-center">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                  Current count
                </p>

                <motion.p
                  key={count}
                  initial={{ opacity: 0.5, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 font-display text-6xl font-semibold tabular-nums text-[var(--color-accent)]"
                >
                  {count}
                </motion.p>

                <p className="mt-2 text-xs text-[var(--color-text-muted)]">
                  React state value
                </p>
              </div>

              {/* Actions */}
              <div className="mt-8 space-y-4">
                <div>
                  <p className="text-sm font-medium text-[var(--color-text-secondary)]">
                    Choose an update pattern
                  </p>
                  <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                    Each action performs multiple state updates.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleDirectUpdate}
                  className="flex w-full items-center justify-between gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-4 text-left transition-colors hover:border-amber-400/50"
                >
                  <div className="flex items-center gap-3">
                    <Zap size={18} className="shrink-0 text-amber-400" />
                    <div>
                      <p className="text-sm font-medium text-[var(--color-text-primary)]">
                        Direct update
                      </p>
                      <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                        Three calls using the same state snapshot
                      </p>
                    </div>
                  </div>

                  <span className="shrink-0 font-mono text-sm text-amber-400">
                    +1
                  </span>
                </button>

                <button
                  type="button"
                  onClick={handleFunctionalUpdate}
                  className="flex w-full items-center justify-between gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-4 text-left transition-colors hover:border-[var(--color-accent)]"
                >
                  <div className="flex items-center gap-3">
                    <Layers3
                      size={18}
                      className="shrink-0 text-[var(--color-accent)]"
                    />
                    <div>
                      <p className="text-sm font-medium text-[var(--color-text-primary)]">
                        Functional update
                      </p>
                      <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                        Three calls using previous state
                      </p>
                    </div>
                  </div>

                  <span className="shrink-0 font-mono text-sm text-[var(--color-accent)]">
                    +3
                  </span>
                </button>

                <button
                  type="button"
                  onClick={handleAsyncUpdate}
                  disabled={isAsyncPending}
                  className="flex w-full items-center justify-between gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-4 text-left transition-colors hover:border-blue-400/50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <div className="flex items-center gap-3">
                    <Timer size={18} className="shrink-0 text-blue-400" />
                    <div>
                      <p className="text-sm font-medium text-[var(--color-text-primary)]">
                        {isAsyncPending ? "Update pending..." : "Async update"}
                      </p>
                      <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                        State update after 500ms
                      </p>
                    </div>
                  </div>

                  <span className="shrink-0 font-mono text-sm text-blue-400">
                    {isAsyncPending ? "..." : "+1"}
                  </span>
                </button>
              </div>

              {isAsyncPending && (
                <div className="mt-6 flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3">
                  <Timer
                    size={16}
                    className="animate-pulse text-[var(--color-accent)]"
                  />
                  <span className="text-sm text-[var(--color-text-secondary)]">
                    Waiting for the scheduled update...
                  </span>
                </div>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
              <StatCard
                label="Direct updates"
                value={directCount}
                description="Actions triggered"
                icon={<Zap size={18} />}
              />

              <StatCard
                label="Functional updates"
                value={functionalCount}
                description="Actions triggered"
                icon={<Layers3 size={18} />}
              />

              <StatCard
                label="Async updates"
                value={asyncCount}
                description="Updates completed"
                icon={<Timer size={18} />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Update Timeline */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">
              State timeline
            </p>

            <h2 className="mt-2 font-display text-3xl font-semibold text-[var(--color-text-primary)]">
              Follow every update.
            </h2>
          </div>

          <span className="hidden font-mono text-xs text-[var(--color-text-muted)] sm:block">
            {events.length} events
          </span>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
          {events.length === 0 ? (
            <div className="flex min-h-48 items-center justify-center px-6 text-center">
              <div>
                <p className="font-display text-lg text-[var(--color-text-secondary)]">
                  No state updates yet.
                </p>

                <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                  Try different update patterns to see how React handles them.
                </p>
              </div>
            </div>
          ) : (
            <div className="divide-y divide-[var(--color-border)]">
              {events.map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <span
                      className={`h-2 w-2 shrink-0 rounded-full ${
                        event.type === "direct"
                          ? "bg-amber-400"
                          : event.type === "functional"
                            ? "bg-[var(--color-accent)]"
                            : "bg-blue-400"
                      }`}
                    />

                    <div className="min-w-0">
                      <p className="truncate text-sm text-[var(--color-text-primary)]">
                        {event.message}
                      </p>

                      <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                        {event.detail}
                      </p>
                    </div>
                  </div>

                  <span className="shrink-0 font-mono text-xs text-[var(--color-text-muted)]">
                    +{event.timestamp}ms
                  </span>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Explanation */}
      <section className="border-t border-[var(--color-border)]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">
                The concept
              </p>

              <h2 className="mt-3 font-display text-3xl font-semibold text-[var(--color-text-primary)]">
                How does React handle state?
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-[var(--color-text-secondary)]">
              <p>
                React state behaves like a snapshot. When a component renders,
                it receives a particular state value. Calling a state setter
                doesn't change that value inside the already-running event
                handler.
              </p>

              <p>
                That's why calling{" "}
                <code className="rounded bg-[var(--color-surface)] px-1.5 py-1 font-mono text-sm text-[var(--color-accent)]">
                  setCount(count + 1)
                </code>{" "}
                three times uses the same value from the current render. Each
                call queues the same next value.
              </p>

              <p>
                Functional updates work differently. React processes each
                updater using the result of the previous queued update. This
                makes them useful whenever the next state depends on the
                previous state.
              </p>

              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 font-mono text-xs leading-7 text-[var(--color-text-secondary)]">
                <span className="text-[var(--color-text-muted)]">
                  direct updates
                </span>
                {" → "}
                <span className="text-amber-400">
                  same snapshot
                </span>
                {" → "}
                <span className="text-[var(--color-text-muted)]">
                  same next value
                </span>
                <br />
                <span className="text-[var(--color-text-muted)]">
                  functional updates
                </span>
                {" → "}
                <span className="text-[var(--color-accent)]">
                  previous state
                </span>
                {" → "}
                <span className="text-[var(--color-text-muted)]">
                  sequential updates
                </span>
              </div>

              <p>
                React also batches state updates to reduce unnecessary
                rendering. Batching and functional updates are related
                concepts, but they solve different problems: batching groups
                updates, while functional updaters calculate the next state
                from the previous one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <section className="border-t border-[var(--color-border)]">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <p className="text-sm text-[var(--color-text-muted)]">
            Built to understand the concept, not just explain it.
          </p>
        </div>
      </section>
    </main>
  );
}

interface StatCardProps {
  label: string;
  value: number;
  description: string;
  icon: React.ReactNode;
}

function StatCard({
  label,
  value,
  description,
  icon,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
      <div className="flex items-center justify-between">
        <span className="text-[var(--color-accent)]">{icon}</span>

        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
          Live
        </span>
      </div>

      <p className="mt-8 font-mono text-4xl font-medium text-[var(--color-text-primary)]">
        {value}
      </p>

      <p className="mt-2 font-display text-sm font-medium text-[var(--color-text-primary)]">
        {label}
      </p>

      <p className="mt-1 text-xs text-[var(--color-text-muted)]">
        {description}
      </p>
    </div>
  );
}

export default StatePlayground;
