
import { useEffect, useState } from "react";
import { Check, Palette, X } from "lucide-react";
import { themes, type Theme } from "./useTheme";

interface ThemePickerProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

function ThemePicker({ theme, setTheme }: ThemePickerProps) {
    const [isOpen, setIsOpen] = useState(false);

    const currentTheme = themes.find((item) => item.id === theme)!;

    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", handleEscape);

        return () => window.removeEventListener("keydown", handleEscape);
    }, [isOpen]);

    return (
        <div className="relative">
            {/* Trigger */}
            <button
                type="button"
                onClick={() => setIsOpen((current) => !current)}
                aria-label="Choose portfolio theme"
                aria-expanded={isOpen}
                aria-haspopup="dialog"
                title={`Current theme: ${currentTheme.name}`}
                className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-200 ${isOpen
                    ? "border-[var(--color-accent)] bg-[var(--color-surface-hover)] text-[var(--color-accent)]"
                    : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)] hover:text-[var(--color-accent)]"
                    }`}
            >
                <Palette size={18} strokeWidth={1.8} />
            </button>

            {isOpen && (
                <>
                    {/* Backdrop */}
                    <button
                        type="button"
                        aria-label="Close theme picker"
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-40 cursor-default"
                    />

                    {/* Picker */}
                    <div
                        role="dialog"
                        aria-label="Choose your portfolio theme"
                        className="fixed right-0 top-14 z-50 w-[min(330px,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl shadow-black/30 animate-in fade-in zoom-in-95 duration-150"
                    >
                        {/* Selected Theme Preview */}
                        <div className="border-b border-[var(--color-border)] p-4">
                            <div className="mb-3 flex items-center justify-between">
                                <div>
                                    <p className="font-display text-sm font-semibold text-[var(--color-text-primary)]">
                                        Choose your vibe
                                    </p>
                                    <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                                        A little change in atmosphere.
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    aria-label="Close theme picker"
                                    className="rounded-lg p-2 text-[var(--color-text-muted)] transition hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text-primary)]"
                                >
                                    <X size={16} />
                                </button>
                            </div>

                            <div className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-3">
                                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-surface-hover)] text-2xl">
                                    {currentTheme.emoji}
                                </span>

                                <div className="min-w-0 flex-1">
                                    <p className="text-xs text-[var(--color-text-muted)]">
                                        Currently exploring
                                    </p>
                                    <p className="mt-0.5 font-display text-sm font-semibold text-[var(--color-text-primary)]">
                                        {currentTheme.name}
                                    </p>

                                    <p className="mt-1 text-[11px] leading-relaxed text-[var(--color-text-muted)]">
                                        {currentTheme.description}
                                    </p>
                                </div>

                                <div className="flex gap-1.5">
                                    {currentTheme.colors.map((color) => (
                                        <span
                                            key={color}
                                            className="h-5 w-5 rounded-full border border-white/10"
                                            style={{ backgroundColor: color }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Theme Options */}
                        <div className="p-3">
                            <p className="mb-2 px-1 font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-muted)]">
                                Available palettes
                            </p>

                            <div className="grid grid-cols-2 gap-2">
                                {themes.map((item) => {
                                    const isSelected = theme === item.id;

                                    return (
                                        <button
                                            key={item.id}
                                            type="button"
                                            onClick={() => setTheme(item.id)}
                                            aria-pressed={isSelected}
                                            className={`group flex items-center gap-2 rounded-xl border p-3 text-left transition-all duration-200 ${isSelected
                                                ? "scale-[1.02] border-[var(--color-accent)] bg-[var(--color-surface-hover)]"
                                                : "border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface-hover)]"
                                                }`}
                                        >
                                            <span className="text-lg transition-transform duration-200 group-hover:scale-110">
                                                {item.emoji}
                                            </span>

                                            <span className="min-w-0 flex-1">
                                                <span className="block truncate text-xs font-medium text-[var(--color-text-primary)]">
                                                    {item.name}
                                                </span>

                                                <span className="mt-1.5 flex items-center gap-1">
                                                    {item.colors.map((color) => (
                                                        <span
                                                            key={color}
                                                            className="h-2.5 w-2.5 rounded-full"
                                                            style={{ backgroundColor: color }}
                                                        />
                                                    ))}
                                                </span>
                                            </span>

                                            {isSelected && (
                                                <Check
                                                    size={14}
                                                    className="shrink-0 text-[var(--color-accent)]"
                                                />
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="border-t border-[var(--color-border)] px-4 py-3">
                            <p className="text-center text-[10px] text-[var(--color-text-muted)]">
                                Made to match your mood. Saved automatically.
                            </p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default ThemePicker;
