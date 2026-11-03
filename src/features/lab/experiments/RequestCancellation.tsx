
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  RotateCcw,
  Search,
  XCircle,
  CheckCircle2,
  LoaderCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type RequestStatus = "pending" | "completed" | "cancelled";

interface RequestEvent {
  id: number;
  query: string;
  status: RequestStatus;
  timestamp: number;
}

const REQUEST_DURATION = 3000;

function RequestCancellation() {
  const [query, setQuery] = useState("");
  const [events, setEvents] = useState<RequestEvent[]>([]);
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const controllerRef = useRef<AbortController | null>(null);
  const requestIdRef = useRef(0);
  const startTimeRef = useRef(Date.now());

  /*
   * Start a simulated API request.
   * AbortController cancels the request if the query changes.
   */
  useEffect(() => {
    if (!query.trim()) {
      setIsLoading(false);
      setResult("");
      return;
    }

    const controller = new AbortController();
    controllerRef.current = controller;

    const requestId = ++requestIdRef.current;
    const requestQuery = query.trim();

    const startTime = Date.now() - startTimeRef.current;

    setIsLoading(true);
    setResult("");

    setEvents((previous) => [
      ...previous,
      {
        id: requestId,
        query: requestQuery,
        status: "pending",
        timestamp: startTime,
      },
    ]);

    const timer = window.setTimeout(() => {
      if (controller.signal.aborted) return;

      setEvents((previous) =>
        previous.map((event) =>
          event.id === requestId
            ? { ...event, status: "completed" }
            : event,
        ),
      );

      setResult(requestQuery);
      setIsLoading(false);

      if (controllerRef.current === controller) {
        controllerRef.current = null;
      }
    }, REQUEST_DURATION);

    return () => {
      window.clearTimeout(timer);

      if (!controller.signal.aborted) {
        controller.abort();

        setEvents((previous) =>
          previous.map((event) =>
            event.id === requestId && event.status === "pending"
              ? { ...event, status: "cancelled" }
              : event,
          ),
        );
      }
    };
  }, [query]);

  const handleReset = () => {
    controllerRef.current?.abort();
    controllerRef.current = null;

    setQuery("");
    setEvents([]);
    setResult("");
    setIsLoading(false);

    requestIdRef.current = 0;
    startTimeRef.current = Date.now();
  };

  useEffect(() => {
    return () => {
      controllerRef.current?.abort();
    };
  }, []);

  const completedCount = events.filter(
    (event) => event.status === "completed",
  ).length;

  const cancelledCount = events.filter(
    (event) => event.status === "cancelled",
  ).length;

  const pendingCount = events.filter(
    (event) => event.status === "pending",
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
              Experiment 04
            </span>

            <span className="rounded-full border border-[var(--color-accent)]/30 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-accent)]">
              Performance
            </span>
          </div>

          <h1 className="mt-5 font-display text-5xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-6xl">
            Request Cancellation
          </h1>

          <p className="mt-5 text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
            Type a query and watch requests get cancelled when a new
            one starts. Explore how AbortController prevents outdated
            responses from affecting your UI.
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
                    Simulate an API request
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-3 py-2 text-xs text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)]"
                >
                  <RotateCcw size={14} />
                  Reset
                </button>
              </div>

              <div className="mt-8">
                <label
                  htmlFor="request-query"
                  className="mb-2 block text-sm font-medium text-[var(--color-text-secondary)]"
                >
                  Search query
                </label>

                <div className="relative">
                  <Search
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
                  />

                  <input
                    id="request-query"
                    type="text"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Try typing something..."
                    className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] py-3 pl-11 pr-4 text-sm text-[var(--color-text-primary)] outline-none transition-colors placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)]"
                  />
                </div>

                <p className="mt-2 text-xs text-[var(--color-text-muted)]">
                  Every query change starts a new simulated request.
                </p>
              </div>

              {/* Request status */}
              <div className="mt-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
                    Current request
                  </p>

                  {isLoading ? (
                    <span className="inline-flex items-center gap-2 text-xs text-[var(--color-accent)]">
                      <LoaderCircle size={14} className="animate-spin" />
                      In progress
                    </span>
                  ) : result ? (
                    <span className="inline-flex items-center gap-2 text-xs text-[var(--color-accent)]">
                      <CheckCircle2 size={14} />
                      Completed
                    </span>
                  ) : (
                    <span className="text-xs text-[var(--color-text-muted)]">
                      Idle
                    </span>
                  )}
                </div>

                {isLoading ? (
                  <div className="mt-5">
                    <div className="h-1.5 overflow-hidden rounded-full bg-[var(--color-border)]">
                      <motion.div
                        className="h-full rounded-full bg-[var(--color-accent)]"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: REQUEST_DURATION / 1000,
                          ease: "linear",
                        }}
                      />
                    </div>

                    <p className="mt-3 text-xs text-[var(--color-text-muted)]">
                      Waiting for the simulated response...
                    </p>
                  </div>
                ) : result ? (
                  <div className="mt-5">
                    <p className="text-xs text-[var(--color-text-muted)]">
                      Latest successful response
                    </p>
                    <p className="mt-2 break-words font-display text-lg text-[var(--color-text-primary)]">
                      Results for "{result}"
                    </p>
                  </div>
                ) : (
                  <p className="mt-5 text-sm text-[var(--color-text-muted)]">
                    Enter a search query to start a request.
                  </p>
                )}
              </div>

              <div className="mt-6 flex items-start gap-3 rounded-xl border border-[var(--color-border)] px-4 py-3">
                <XCircle
                  size={16}
                  className="mt-0.5 shrink-0 text-[var(--color-accent)]"
                />
                <p className="text-xs leading-6 text-[var(--color-text-muted)]">
                  Try changing your query before the 3-second request
                  completes. The previous request will be aborted.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
              <StatCard
                label="Requests started"
                value={events.length}
                description="Total requests"
                icon={<Search size={18} />}
              />

              <StatCard
                label="Requests cancelled"
                value={cancelledCount}
                description="Aborted before completion"
                icon={<XCircle size={18} />}
              />

              <StatCard
                label="Requests completed"
                value={completedCount}
                description="Successful responses"
                icon={<CheckCircle2 size={18} />}
              />

              <StatCard
                label="Currently pending"
                value={pendingCount}
                description="Waiting for a response"
                icon={<LoaderCircle size={18} />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Request Timeline */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Request timeline
            </p>

            <h2 className="mt-2 font-display text-3xl font-semibold text-[var(--color-text-primary)]">
              Follow every request.
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
                  No requests yet.
                </p>

                <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                  Start typing to see requests appear in the timeline.
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
                        event.status === "pending"
                          ? "bg-blue-400"
                          : event.status === "completed"
                            ? "bg-[var(--color-accent)]"
                            : "bg-red-400"
                      }`}
                    />

                    <div className="min-w-0">
                      <p className="truncate text-sm text-[var(--color-text-primary)]">
                        "{event.query}"
                      </p>

                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                        {event.status === "pending"
                          ? "Request in progress"
                          : event.status === "completed"
                            ? "Request completed"
                            : "Request cancelled"}
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
                Why cancel requests?
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-[var(--color-text-secondary)]">
              <p>
                Imagine a user searching for something. They type one query,
                and an API request starts. Before that request finishes, they
                change their search. Now the application has an older request
                that may return after a newer one.
              </p>

              <p>
                This can cause stale responses to overwrite newer data.
                Request cancellation helps prevent unnecessary work by
                stopping requests that are no longer relevant.
              </p>

              <p>
                The browser provides{" "}
                <code className="rounded bg-[var(--color-surface)] px-1.5 py-1 font-mono text-sm text-[var(--color-accent)]">
                  AbortController
                </code>{" "}
                to handle this. Calling{" "}
                <code className="rounded bg-[var(--color-surface)] px-1.5 py-1 font-mono text-sm text-[var(--color-accent)]">
                  abort()
                </code>{" "}
                signals that the associated operation should be cancelled.
                APIs such as{" "}
                <code className="rounded bg-[var(--color-surface)] px-1.5 py-1 font-mono text-sm text-[var(--color-accent)]">
                  fetch()
                </code>{" "}
                support this signal.
              </p>

              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 font-mono text-xs leading-7 text-[var(--color-text-secondary)]">
                <span className="text-[var(--color-text-muted)]">
                  create controller
                </span>
                {" → "}
                <span className="text-[var(--color-accent)]">
                  pass signal
                </span>
                {" → "}
                <span className="text-[var(--color-text-muted)]">
                  new query
                </span>
                {" → "}
                <span className="text-red-400">
                  abort previous request
                </span>
              </div>

              <p>
                In React, an effect cleanup function is a natural place to
                abort an outdated request. When the query changes or the
                component unmounts, the previous effect is cleaned up.
              </p>

              <p>
                Cancellation does not guarantee that a server has stopped
                processing work it already received. It cancels the
                client-side operation and prevents its result from being
                consumed by this request flow.
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

export default RequestCancellation;
