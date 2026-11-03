
import { useCallback, useEffect, useRef, useState } from "react";
import {
    ArrowLeft,
    RotateCcw,
    Activity,
    Layers3,
    RefreshCw,
    PackageCheck,
    LoaderCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Post {
    id: number;
    title: string;
    description: string;
    category: string;
    date: string;
}

interface FeedEvent {
    id: number;
    message: string;
    time: string;
    type: "success" | "info";
}

const PAGE_SIZE = 6;
const TOTAL_POSTS = 30;
const FETCH_DELAY = 1200;

const categories = [
    "React",
    "JavaScript",
    "Performance",
    "CSS",
    "Web APIs",
    "Frontend",
];

const postTitles = [
    "Understanding React rendering",
    "The power of JavaScript closures",
    "Making web applications faster",
    "A practical guide to CSS Grid",
    "Exploring browser APIs",
    "Writing reusable React hooks",
    "Understanding asynchronous JavaScript",
    "Improving frontend performance",
    "Building accessible interfaces",
    "Working with the DOM efficiently",
    "Understanding event propagation",
    "A closer look at React state",
    "How browser rendering works",
    "Mastering array methods",
    "Building better loading states",
    "The observer pattern in JavaScript",
    "Understanding component lifecycle",
    "Writing clean CSS architecture",
    "Working with promises",
    "Optimizing network requests",
    "Exploring modern JavaScript",
    "Understanding React effects",
    "Building responsive layouts",
    "Managing application state",
    "Working with browser storage",
    "Understanding the event loop",
    "Creating reusable UI components",
    "Handling API responses",
    "Improving user experience",
    "Exploring modern web development",
];

const descriptions = [
    "A practical look at the concepts, patterns, and techniques that make modern frontend development easier to understand.",
    "Explore how this works under the hood and learn when to use it in real-world applications.",
    "Small implementation details can make a big difference. Let's break down the ideas behind this approach.",
    "Understand the fundamentals through simple examples and practical frontend use cases.",
];

const getPosts = (page: number): Post[] => {
    const start = page * PAGE_SIZE;
    const end = Math.min(start + PAGE_SIZE, TOTAL_POSTS);

    return Array.from({ length: end - start }, (_, index) => {
        const id = start + index;

        return {
            id: id + 1,
            title: postTitles[id % postTitles.length],
            description: descriptions[id % descriptions.length],
            category: categories[id % categories.length],
            date: `Nov ${String((id % 28) + 1).padStart(2, "0")}, 2026`,
        };
    });
};

function StatCard({
    label,
    value,
    description,
    icon,
}: {
    label: string;
    value: number;
    description: string;
    icon: React.ReactNode;
}) {
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

export default function InfiniteScroll() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [page, setPage] = useState(0);
    const [apiCalls, setApiCalls] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [events, setEvents] = useState<FeedEvent[]>([]);

    const feedContainerRef = useRef<HTMLDivElement | null>(null);
    const observerTarget = useRef<HTMLDivElement | null>(null);

    const isFetching = useRef(false);
    const hasScrolled = useRef(false);
    const eventId = useRef(0);
    const requestId = useRef(0);

    const addEvent = useCallback(
        (message: string, type: FeedEvent["type"] = "info") => {
            eventId.current += 1;

            setEvents((previous) => [
                {
                    id: eventId.current,
                    message,
                    time: new Date().toLocaleTimeString(),
                    type,
                },
                ...previous,
            ]);
        },
        []
    );

    // Fetch the next page
    const loadMorePosts = useCallback(async () => {
        if (isFetching.current || !hasMore) return;

        isFetching.current = true;
        setIsLoading(true);

        const currentRequest = ++requestId.current;
        const nextPage = page;

        setApiCalls((previous) => previous + 1);
        addEvent(`Fetching page ${nextPage + 1}...`);

        await new Promise((resolve) => setTimeout(resolve, FETCH_DELAY));

        // Ignore outdated requests, such as requests started before reset.
        if (currentRequest !== requestId.current) return;

        const newPosts = getPosts(nextPage);

        setPosts((previous) => [...previous, ...newPosts]);
        setPage((previous) => previous + 1);

        const moreAvailable =
            (nextPage + 1) * PAGE_SIZE < TOTAL_POSTS;

        setHasMore(moreAvailable);

        addEvent(
            `Loaded ${newPosts.length} posts from page ${nextPage + 1}`,
            "success"
        );

        if (!moreAvailable) {
            addEvent("You've reached the end of the feed.", "success");
        }

        setIsLoading(false);
        isFetching.current = false;
    }, [page, hasMore, addEvent]);

    // Initial load: only the first batch is automatic.
    useEffect(() => {
        void loadMorePosts();
    }, []);

    // Track actual scrolling inside the feed.
    useEffect(() => {
        const container = feedContainerRef.current;

        if (!container) return;

        const handleScroll = () => {
            hasScrolled.current = true;
        };

        container.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Observe the target inside the feed's own scroll container.
    useEffect(() => {
        const target = observerTarget.current;
        const root = feedContainerRef.current;

        if (!target || !root || !hasMore) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];

                if (
                    entry.isIntersecting &&
                    hasScrolled.current &&
                    !isFetching.current
                ) {
                    void loadMorePosts();
                }
            },
            {
                root,
                rootMargin: "0px",
                threshold: 0.1,
            }
        );

        observer.observe(target);

        return () => observer.disconnect();
    }, [loadMorePosts, hasMore]);

    // Reset the feed
    const handleReset = () => {
        requestId.current += 1;

        isFetching.current = false;
        hasScrolled.current = false;

        setPosts([]);
        setPage(0);
        setApiCalls(0);
        setIsLoading(false);
        setHasMore(true);
        setEvents([]);

        eventId.current = 0;

        if (feedContainerRef.current) {
            feedContainerRef.current.scrollTop = 0;
        }
    };

    return (
        <main>
            {/* Header */}
            <section className="mx-auto max-w-7xl px-6 pb-12 pt-12 lg:px-8 lg:pb-16 lg:pt-20">
                <Link
                    to="/lab"
                    className="mb-10 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
                >
                    <ArrowLeft size={16} />
                    Back to Lab
                </Link>

                <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs text-[var(--color-accent)]">
                        EXPERIMENT 05
                    </span>

                    <span className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-text-muted)]">
                        Performance
                    </span>
                </div>

                <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl">
                    Infinite Scroll
                    <span className="text-[var(--color-accent)]">.</span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-text-secondary)]">
                    Load content as users scroll, without requiring them to click a
                    button. Explore how the Intersection Observer API makes infinite
                    scrolling efficient and responsive.
                </p>
            </section>

            {/* Playground */}
            <section className="border-y border-[var(--color-border)]">
                <div className="mx-auto grid max-w-7xl gap-6 px-6 py-12 lg:grid-cols-[1fr_0.75fr] lg:px-8 lg:py-16">

                    {/* Developer Feed */}
                    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
                        <div className="mb-8 flex items-center justify-between gap-4">
                            <div>
                                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                                    Live playground
                                </p>

                                <h2 className="mt-2 font-display text-xl font-semibold text-[var(--color-text-primary)]">
                                    Developer Feed
                                </h2>
                            </div>

                            <button
                                onClick={handleReset}
                                className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-3 py-2 text-xs text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                            >
                                <RotateCcw size={14} />
                                Reset
                            </button>
                        </div>

                        <div className="mb-6 flex items-center justify-between border-b border-[var(--color-border)] pb-4">
                            <span className="text-xs text-[var(--color-text-muted)]">
                                Latest articles
                            </span>

                            <span className="font-mono text-xs text-[var(--color-accent)]">
                                {posts.length} / {TOTAL_POSTS}
                            </span>
                        </div>

                        {/* Independently scrollable feed */}
                        <div
                            ref={feedContainerRef}
                            className="max-h-[560px] space-y-4 overflow-y-auto pr-3 custom-scrollbar"
                        >
                            {posts.map((post) => (
                                <motion.article
                                    key={post.id}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="rounded-xl border border-[var(--color-border)] p-5 transition-colors hover:border-[var(--color-border-hover)]"
                                >
                                    <div className="mb-3 flex items-center justify-between gap-3">
                                        <span className="rounded-full bg-[var(--color-surface-hover)] px-3 py-1 font-mono text-[10px] text-[var(--color-accent)]">
                                            {post.category}
                                        </span>

                                        <span className="text-[10px] text-[var(--color-text-muted)]">
                                            {post.date}
                                        </span>
                                    </div>

                                    <h3 className="font-display text-base font-medium text-[var(--color-text-primary)]">
                                        {post.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                                        {post.description}
                                    </p>

                                    <p className="mt-4 font-mono text-[10px] text-[var(--color-text-muted)]">
                                        POST #{String(post.id).padStart(2, "0")}
                                    </p>
                                </motion.article>
                            ))}

                            {/* Observer target */}
                            <div
                                ref={observerTarget}
                                className="flex min-h-24 items-center justify-center pt-6"
                            >
                                {isLoading ? (
                                    <div className="w-full space-y-3">
                                        {[1, 2].map((item) => (
                                            <div
                                                key={item}
                                                className="animate-pulse rounded-xl border border-[var(--color-border)] p-5"
                                            >
                                                <div className="h-3 w-20 rounded bg-[var(--color-surface-hover)]" />
                                                <div className="mt-4 h-4 w-2/3 rounded bg-[var(--color-surface-hover)]" />
                                                <div className="mt-3 h-3 w-full rounded bg-[var(--color-surface-hover)]" />
                                            </div>
                                        ))}

                                        <div className="flex items-center justify-center gap-2 py-3 text-xs text-[var(--color-text-muted)]">
                                            <LoaderCircle size={14} className="animate-spin" />
                                            Loading more posts...
                                        </div>
                                    </div>
                                ) : !hasMore ? (
                                    <div className="flex flex-col items-center gap-2 py-6 text-center">
                                        <PackageCheck
                                            size={22}
                                            className="text-[var(--color-accent)]"
                                        />

                                        <p className="text-sm text-[var(--color-text-primary)]">
                                            You're all caught up!
                                        </p>

                                        <p className="text-xs text-[var(--color-text-muted)]">
                                            You've reached the end of the feed.
                                        </p>
                                    </div>
                                ) : (
                                    <p className="text-xs text-[var(--color-text-muted)]">
                                        Scroll to load more
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid content-start gap-4 sm:grid-cols-2 lg:sticky lg:top-24 lg:grid-cols-1 lg:self-start">
                        <StatCard
                            label="Items loaded"
                            value={posts.length}
                            description="Posts currently in the feed"
                            icon={<Layers3 size={18} />}
                        />

                        <StatCard
                            label="API calls"
                            value={apiCalls}
                            description="Simulated paginated requests"
                            icon={<RefreshCw size={18} />}
                        />

                        <StatCard
                            label="Current page"
                            value={page}
                            description={`Page size: ${PAGE_SIZE} posts`}
                            icon={<Activity size={18} />}
                        />

                        <StatCard
                            label="Remaining"
                            value={Math.max(TOTAL_POSTS - posts.length, 0)}
                            description="Posts waiting to be loaded"
                            icon={<PackageCheck size={18} />}
                        />
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
                <div className="mb-8">
                    <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-accent)]">
                        Under the hood
                    </p>

                    <h2 className="mt-3 font-display text-2xl font-semibold text-[var(--color-text-primary)]">
                        Request Timeline
                    </h2>

                    <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                        Watch each batch of posts being requested and loaded.
                    </p>
                </div>

                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
                    {events.length === 0 ? (
                        <div className="flex min-h-48 items-center justify-center text-sm text-[var(--color-text-muted)]">
                            Waiting for feed activity...
                        </div>
                    ) : (
                        <div className="space-y-5">
                            {events.map((event) => (
                                <motion.div
                                    key={event.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="flex items-start gap-4"
                                >
                                    <span
                                        className={`mt-1 h-2 w-2 shrink-0 rounded-full ${event.type === "success"
                                                ? "bg-[var(--color-accent)]"
                                                : "bg-[var(--color-text-muted)]"
                                            }`}
                                    />

                                    <div className="flex-1">
                                        <p className="text-sm text-[var(--color-text-primary)]">
                                            {event.message}
                                        </p>

                                        <p className="mt-1 font-mono text-[10px] text-[var(--color-text-muted)]">
                                            {event.time}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Explanation */}
            <section className="border-t border-[var(--color-border)]">
                <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.75fr_1.25fr] lg:px-8 lg:py-24">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-accent)]">
                            The concept
                        </p>

                        <h2 className="mt-3 font-display text-2xl font-semibold text-[var(--color-text-primary)]">
                            How does it work?
                        </h2>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="font-display text-lg font-medium text-[var(--color-text-primary)]">
                                Intersection Observer API
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
                                The browser observes a target element near the bottom of the
                                feed. When that element enters the scrollable container's
                                visible area, the observer callback runs and triggers the
                                next data request.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-display text-lg font-medium text-[var(--color-text-primary)]">
                                Why not a scroll event?
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
                                Scroll handlers can fire repeatedly while a user scrolls.
                                Intersection Observer lets the browser efficiently track
                                visibility changes without manually calculating scroll
                                positions.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-display text-lg font-medium text-[var(--color-text-primary)]">
                                Preventing duplicate requests
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
                                The isFetching ref acts as a synchronous guard. Even if the
                                observer callback fires multiple times, only one request can
                                run at a time.
                            </p>
                        </div>

                        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-accent)]">
                                Flow
                            </p>

                            <p className="mt-3 font-mono text-xs leading-7 text-[var(--color-text-secondary)]">
                                Observe target → User scrolls feed → Target intersects →
                                Check loading state → Fetch next page → Append posts →
                                Observe again
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <div className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
                <p className="text-xs text-[var(--color-text-muted)]">
                    Built to understand the concept, not just explain it.
                </p>
            </div>
        </main>
    );
}
