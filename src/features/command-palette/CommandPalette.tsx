
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    ArrowDown,
    ArrowUp,
    CornerDownLeft,
    Command,
    FileText,
    FlaskConical,
    FolderKanban,
    Home,
    Search,
    UserRound,
    X,
} from "lucide-react";

interface CommandItem {
    label: string;
    description: string;
    to: string;
    icon: React.ReactNode;
    keywords: string;
}

const commandItems: CommandItem[] = [
    {
        label: "Home",
        description: "Back to the homepage",
        to: "/",
        icon: <Home size={17} />,
        keywords: "home landing introduction",
    },
    {
        label: "Projects",
        description: "Explore selected projects",
        to: "/projects",
        icon: <FolderKanban size={17} />,
        keywords: "projects work portfolio",
    },
    {
        label: "Veyra",
        description: "View the Veyra case study",
        to: "/projects/veyra",
        icon: <FolderKanban size={17} />,
        keywords: "veyra travel planner case study",
    },
    {
        label: "Task Tracker",
        description: "View the Task Tracker case study",
        to: "/projects/task-tracker",
        icon: <FolderKanban size={17} />,
        keywords: "task tracker productivity case study",
    },
    {
        label: "Portfolio Case Study",
        description: "Explore how this portfolio was built",
        to: "/projects/portfolio",
        icon: <FolderKanban size={17} />,
        keywords: "portfolio case study website",
    },
    {
        label: "Frontend Lab",
        description: "Explore interactive experiments",
        to: "/lab",
        icon: <FlaskConical size={17} />,
        keywords: "lab experiments frontend",
    },
    {
        label: "Debounce Playground",
        description: "Explore debouncing in JavaScript",
        to: "/lab/debounce",
        icon: <FlaskConical size={17} />,
        keywords: "debounce search performance",
    },
    {
        label: "Render Playground",
        description: "Understand React rendering",
        to: "/lab/rendering",
        icon: <FlaskConical size={17} />,
        keywords: "render react rerender",
    },
    {
        label: "State Playground",
        description: "Explore React state updates",
        to: "/lab/state",
        icon: <FlaskConical size={17} />,
        keywords: "state react hooks",
    },
    {
        label: "Request Cancellation",
        description: "Explore AbortController",
        to: "/lab/request-cancellation",
        icon: <FlaskConical size={17} />,
        keywords: "request cancellation abortcontroller api",
    },
    {
        label: "Infinite Scroll",
        description: "Explore loading content on scroll",
        to: "/lab/infinite-scroll",
        icon: <FlaskConical size={17} />,
        keywords: "infinite scroll pagination loading",
    },
    {
        label: "Resume",
        description: "View experience and skills",
        to: "/resume",
        icon: <FileText size={17} />,
        keywords: "resume cv experience skills",
    },
    {
        label: "About",
        description: "A little more about me",
        to: "/about",
        icon: <UserRound size={17} />,
        keywords: "about profile personal",
    },
];

interface CommandPaletteProps {
    open: boolean;
    onClose: () => void;
}

function CommandPalette({ open, onClose }: CommandPaletteProps) {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const [activeIndex, setActiveIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const filteredItems = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();

        if (!normalizedQuery) return commandItems;

        return commandItems.filter((item) => {
            const searchableText =
                `${item.label} ${item.description} ${item.keywords}`.toLowerCase();

            return searchableText.includes(normalizedQuery);
        });
    }, [query]);

    useEffect(() => {
        if (!open) return;

        setQuery("");
        setActiveIndex(0);

        const timeout = window.setTimeout(() => {
            inputRef.current?.focus();
        }, 50);

        return () => window.clearTimeout(timeout);
    }, [open]);

    useEffect(() => {
        setActiveIndex(0);
    }, [query]);

    useEffect(() => {
        if (!open) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                event.preventDefault();
                onClose();
            }

            if (event.key === "ArrowDown") {
                event.preventDefault();
                setActiveIndex((current) =>
                    Math.min(current + 1, filteredItems.length - 1),
                );
            }

            if (event.key === "ArrowUp") {
                event.preventDefault();
                setActiveIndex((current) => Math.max(current - 1, 0));
            }

            if (event.key === "Enter" && filteredItems.length > 0) {
                event.preventDefault();
                navigate(filteredItems[activeIndex].to);
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [open, filteredItems, activeIndex, navigate, onClose]);

    if (!open) return null;

    const handleNavigate = (path: string) => {
        navigate(path);
        onClose();
    };

    return (
        <div
            className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 px-4 pt-[15vh] backdrop-blur-sm"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-label="Command palette"
                className="w-full max-w-xl overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl"
            >
                <div className="flex items-center gap-3 border-b border-[var(--color-border)] px-5">
                    <Search
                        size={19}
                        className="shrink-0 text-[var(--color-text-muted)]"
                    />

                    <input
                        ref={inputRef}
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder="Search pages, projects, experiments..."
                        aria-label="Search commands"
                        className="h-14 min-w-0 flex-1 bg-transparent text-sm text-[var(--color-text-primary)] outline-none placeholder:text-[var(--color-text-muted)]"
                    />

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close command palette"
                        className="rounded-md p-1.5 text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text-primary)]"
                    >
                        <X size={17} />
                    </button>
                </div>

                <div className="max-h-[min(55vh,420px)] overflow-y-auto p-2">
                    <p className="px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                        {query ? "Search Results" : "Quick Navigation"}
                    </p>

                    {filteredItems.length > 0 ? (
                        filteredItems.map((item, index) => (
                            <button
                                key={item.to}
                                type="button"
                                onClick={() => handleNavigate(item.to)}
                                onMouseEnter={() => setActiveIndex(index)}
                                className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors ${activeIndex === index
                                        ? "bg-[var(--color-surface-hover)]"
                                        : "hover:bg-[var(--color-surface-hover)]"
                                    }`}
                            >
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-accent)]">
                                    {item.icon}
                                </span>

                                <span className="min-w-0 flex-1">
                                    <span className="block text-sm font-medium text-[var(--color-text-primary)]">
                                        {item.label}
                                    </span>
                                    <span className="mt-0.5 block text-xs text-[var(--color-text-muted)]">
                                        {item.description}
                                    </span>
                                </span>

                                {activeIndex === index && (
                                    <CornerDownLeft
                                        size={15}
                                        className="shrink-0 text-[var(--color-text-muted)]"
                                    />
                                )}
                            </button>
                        ))
                    ) : (
                        <div className="px-4 py-12 text-center">
                            <p className="text-sm text-[var(--color-text-secondary)]">
                                No results found.
                            </p>
                            <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                                Try searching for another page or experiment.
                            </p>
                        </div>
                    )}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--color-border)] px-5 py-3">
                    <div className="flex items-center gap-3 text-[10px] text-[var(--color-text-muted)]">
                        <span className="flex items-center gap-1">
                            <kbd className="rounded border border-[var(--color-border)] px-1.5 py-1">
                                <ArrowUp size={10} />
                            </kbd>
                            <kbd className="rounded border border-[var(--color-border)] px-1.5 py-1">
                                <ArrowDown size={10} />
                            </kbd>
                            Navigate
                        </span>

                        <span className="flex items-center gap-1">
                            <kbd className="rounded border border-[var(--color-border)] px-1.5 py-1">
                                ↵
                            </kbd>
                            Select
                        </span>
                    </div>

                    <span className="flex items-center gap-1.5 text-[10px] text-[var(--color-text-muted)]">
                        <Command size={11} />
                        <span>K to open</span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default CommandPalette;
