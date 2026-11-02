import { useEffect, useRef, useState } from "react";
import { ArrowLeft, RotateCcw, Timer, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface RequestEvent {
  id: number;
  type: "immediate" | "debounced";
  query: string;
  timestamp: number;
}

const DEBOUNCE_DEFAULT = 400;

function DebouncePlayground() {
  const [query, setQuery] = useState("");
  const [debounceDelay, setDebounceDelay] = useState(DEBOUNCE_DEFAULT);
  const [events, setEvents] = useState<RequestEvent[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const requestId = useRef(0);
  const startTime = useRef(Date.now());

  /*
   * Immediate request simulation.
   * This represents what would happen if every keystroke
   * triggered an API request.
   */
  useEffect(() => {
    if (!query) return;

    const event: RequestEvent = {
      id: ++requestId.current,
      type: "immediate",
      query,
      timestamp: Date.now() - startTime.current,
    };

    setEvents((previous) => [...previous, event]);
  }, [query]);

  /*
   * Debounced request.
   * The timer is restarted every time the user types.
   */
  useEffect(() => {
    if (!query) {
      setIsSearching(false);
      return;
    }

    setIsSearching(true);

    const timer = window.setTimeout(() => {
      const event: RequestEvent = {
        id: ++requestId.current,
        type: "debounced",
        query,
        timestamp: Date.now() - startTime.current,
      };

      setEvents((previous) => [...previous, event]);
      setIsSearching(false);
    }, debounceDelay);

    return () => window.clearTimeout(timer);
  }, [query, debounceDelay]);

  const immediateCount = events.filter(
    (event) => event.type === "immediate",
  ).length;

  const debouncedCount = events.filter(
    (event) => event.type === "debounced",
  ).length;

  const reset = () => {
    setQuery("");
    setEvents([]);
    setIsSearching(false);
    requestId.current = 0;
    startTime.current = Date.now();
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
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Experiment 01
            </span>

            <span className="rounded-full border border-[var(--color-accent)]/30 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-accent)]">
              Performance
            </span>
          </div>

          <h1 className="mt-5 font-display text-5xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-6xl">
            Debounce Playground
          </h1>

          <p className="mt-5 text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
            Type something and watch what happens when every keystroke triggers
            a request versus when requests are debounced.
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
                    Input
                  </p>

                  <h2 className="mt-2 font-display text-xl font-semibold text-[var(--color-text-primary)]">
                    Simulate a search
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

              <div className="mt-8">
                <label
                  htmlFor="debounce-search"
                  className="mb-2 block text-sm font-medium text-[var(--color-text-secondary)]"
                >
                  Search query
                </label>

                <input
                  id="debounce-search"
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Try typing quickly..."
                  className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none transition-colors placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)]"
                />
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="debounce-delay"
                    className="text-sm font-medium text-[var(--color-text-secondary)]"
                  >
                    Debounce delay
                  </label>

                  <span className="font-mono text-sm text-[var(--color-accent)]">
                    {debounceDelay}ms
                  </span>
                </div>

                <input
                  id="debounce-delay"
                  type="range"
                  min="100"
                  max="1000"
                  step="50"
                  value={debounceDelay}
                  onChange={(event) =>
                    setDebounceDelay(Number(event.target.value))
                  }
                  className="mt-4 w-full accent-[var(--color-accent)]"
                />

                <div className="mt-2 flex justify-between font-mono text-[10px] text-[var(--color-text-muted)]">
                  <span>100ms</span>
                  <span>1000ms</span>
                </div>
              </div>

              {isSearching && (
                <div className="mt-8 flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3">
                  <Timer
                    size={16}
                    className="animate-pulse text-[var(--color-accent)]"
                  />

                  <span className="text-sm text-[var(--color-text-secondary)]">
                    Waiting for the user to stop typing...
                  </span>
                </div>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
              <StatCard
                label="Without debounce"
                value={immediateCount}
                description="Requests triggered"
                icon={<Zap size={18} />}
              />

              <StatCard
                label="With debounce"
                value={debouncedCount}
                description="Requests triggered"
                icon={<Timer size={18} />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Request timeline
            </p>

            <h2 className="mt-2 font-display text-3xl font-semibold text-[var(--color-text-primary)]">
              See the difference.
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
                  Start typing to generate requests.
                </p>

                <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                  Try typing quickly to make the difference obvious.
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
                        event.type === "immediate"
                          ? "bg-[var(--color-text-muted)]"
                          : "bg-[var(--color-accent)]"
                      }`}
                    />

                    <div className="min-w-0">
                      <p className="truncate text-sm text-[var(--color-text-primary)]">
                        "{event.query}"
                      </p>

                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                        {event.type === "immediate"
                          ? "Immediate request"
                          : "Debounced request"}
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
                Why debounce?
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-[var(--color-text-secondary)]">
              <p>
                Debouncing delays an operation until a certain amount of time
                has passed without another trigger. For search inputs, this
                means the application doesn't need to send an API request for
                every single character the user types.
              </p>

              <p>
                Instead, each keystroke resets the timer. Only after the user
                stops typing for the configured delay does the request run.
              </p>

              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 font-mono text-xs leading-7 text-[var(--color-text-secondary)]">
                <span className="text-[var(--color-text-muted)]">
                  user types
                </span>
                {" → "}
                <span className="text-[var(--color-accent)]">
                  reset timer
                </span>
                {" → "}
                <span className="text-[var(--color-text-muted)]">
                  user types again
                </span>
                {" → "}
                <span className="text-[var(--color-accent)]">
                  reset timer
                </span>
                {" → "}
                <span className="text-[var(--color-text-primary)]">
                  request
                </span>
              </div>

              <p>
                This is especially useful when dealing with search,
                autocomplete, filtering, validation, and other interactions
                that can otherwise generate unnecessary work.
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

export default DebouncePlayground;