
import { useState, type FormEvent } from "react";
import {
    Plus,
    Pencil,
    Check,
    X,
    Trash2,
    RotateCcw,
    Sparkles,
} from "lucide-react";

import {
    MAX_OPTIONS,
    OPTION_PRESETS,
    type WheelOption,
} from "./types";

interface WheelOptionsProps {
    options: WheelOption[];
    onOptionsChange: (options: WheelOption[]) => void;
    disabled?: boolean;
}

const createOption = (label: string): WheelOption => ({
    id: crypto.randomUUID(),
    label,
});

export default function WheelOptions({
    options,
    onOptionsChange,
    disabled = false,
}: WheelOptionsProps) {
    const [newOption, setNewOption] = useState("");
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editValue, setEditValue] = useState("");

    const isFull = options.length >= MAX_OPTIONS;

    const addOption = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const trimmed = newOption.trim();

        if (!trimmed || isFull) return;

        onOptionsChange([...options, createOption(trimmed)]);
        setNewOption("");
    };

    const removeOption = (id: string) => {
        onOptionsChange(options.filter((option) => option.id !== id));

        if (editingId === id) {
            cancelEditing();
        }
    };

    const startEditing = (option: WheelOption) => {
        setEditingId(option.id);
        setEditValue(option.label);
    };

    const cancelEditing = () => {
        setEditingId(null);
        setEditValue("");
    };

    const saveEdit = (id: string) => {
        const trimmed = editValue.trim();

        if (!trimmed) return;

        onOptionsChange(
            options.map((option) =>
                option.id === id
                    ? { ...option, label: trimmed }
                    : option
            )
        );

        cancelEditing();
    };

    const clearOptions = () => {
        onOptionsChange([]);
        setEditingId(null);
        setNewOption("");
    };

    const loadPreset = (presetName: string) => {
        const preset = OPTION_PRESETS[presetName];

        if (!preset) return;

        onOptionsChange(preset.map(createOption));
        setEditingId(null);
        setNewOption("");
    };

    return (
        <section className="w-full rounded-2xl border border-white/10 bg-[var(--color-surface)] p-5">
            {/* Header */}
            <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                    <h2 className="font-display text-lg font-semibold text-[var(--color-text-primary)]">
                        Your options
                    </h2>

                    <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                        Add the choices you want on your wheel.
                    </p>
                </div>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-[var(--color-text-secondary)]">
                    {options.length}/{MAX_OPTIONS}
                </span>
            </div>

            {/* Add option */}
            <form onSubmit={addOption} className="flex gap-2">
                <input
                    type="text"
                    value={newOption}
                    onChange={(event) => setNewOption(event.target.value)}
                    placeholder="Enter an option..."
                    maxLength={40}
                    disabled={disabled || options.length >= MAX_OPTIONS}
                    className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none transition placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] disabled:opacity-50"
                />

                <button
                    type="submit"
                    disabled={disabled || !newOption.trim() || isFull}
                    className="flex items-center gap-2 rounded-xl bg-[var(--color-accent)] px-4 py-3 text-sm font-medium text-[#07111d] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                >
                    <Plus size={17} />
                    <span className="hidden sm:inline">Add</span>
                </button>
            </form>

            {isFull && (
                <p className="mt-2 text-xs text-amber-400">
                    You've reached the maximum of {MAX_OPTIONS} options.
                </p>
            )}

            {/* Options list */}
            <div className="mt-5 space-y-2">
                {options.length === 0 ? (
                    <div className="rounded-xl border border-dashed border-white/15 px-4 py-8 text-center">
                        <Sparkles
                            size={22}
                            className="mx-auto mb-3 text-[var(--color-text-muted)]"
                        />

                        <p className="text-sm text-[var(--color-text-secondary)]">
                            Your wheel is empty.
                        </p>

                        <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                            Add at least two options to get started.
                        </p>
                    </div>
                ) : (
                    options.map((option, index) => (
                        <div
                            key={option.id}
                            className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.025] px-3 py-2.5"
                        >
                            <span className="w-6 shrink-0 font-mono text-xs text-[var(--color-text-muted)]">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            {editingId === option.id ? (
                                <input
                                    autoFocus
                                    value={editValue}
                                    maxLength={40}
                                    onChange={(event) =>
                                        setEditValue(event.target.value)
                                    }
                                    onKeyDown={(event) => {
                                        if (event.key === "Enter") {
                                            saveEdit(option.id);
                                        }

                                        if (event.key === "Escape") {
                                            cancelEditing();
                                        }
                                    }}
                                    className="min-w-0 flex-1 rounded-lg border border-[var(--color-accent)] bg-black/20 px-2 py-1.5 text-sm text-[var(--color-text-primary)] outline-none"
                                    aria-label={`Edit ${option.label}`}
                                />
                            ) : (
                                <span className="min-w-0 flex-1 truncate text-sm text-[var(--color-text-primary)]">
                                    {option.label}
                                </span>
                            )}

                            {editingId === option.id ? (
                                <>
                                    <button
                                        type="button"
                                        onClick={() => saveEdit(option.id)}
                                        disabled={disabled || !editValue.trim()}
                                        aria-label="Save option"
                                        className="text-emerald-400 hover:text-emerald-300 disabled:opacity-40"
                                    >
                                        <Check size={17} />
                                    </button>

                                    <button
                                        type="button"
                                        disabled={disabled}
                                        onClick={cancelEditing}
                                        aria-label="Cancel editing"
                                        className="text-[var(--color-text-muted)] hover:text-white"
                                    >
                                        <X size={17} />
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        type="button"
                                        disabled={disabled}
                                        onClick={() => startEditing(option)}
                                        aria-label={`Edit ${option.label}`}
                                        className="text-[var(--color-text-muted)] transition hover:text-[var(--color-accent)]"
                                    >
                                        <Pencil size={16} />
                                    </button>

                                    <button
                                        type="button"
                                        disabled={disabled}
                                        onClick={() => removeOption(option.id)}
                                        aria-label={`Remove ${option.label}`}
                                        className="text-[var(--color-text-muted)] transition hover:text-red-400"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </>
                            )}
                        </div>
                    ))
                )}
            </div>

            {/* Footer actions */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
                <select
                    defaultValue=""
                    disabled={disabled}
                    onChange={(event) => {
                        if (event.target.value) {
                            loadPreset(event.target.value);
                            event.target.value = "";
                        }
                    }}
                    className="max-w-full rounded-lg border border-white/10 bg-[#0b1624] px-3 py-2 text-xs text-[var(--color-text-secondary)] outline-none focus:border-[var(--color-accent)] disabled:opacity-40"
                >
                    <option value="" disabled>
                        Choose a preset
                    </option>

                    {Object.keys(OPTION_PRESETS).map((preset) => (
                        <option key={preset} value={preset}>
                            {preset}
                        </option>
                    ))}
                </select>

                <button
                    type="button"
                    onClick={clearOptions}
                    disabled={options.length === 0}
                    className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] transition hover:text-red-400 disabled:cursor-not-allowed disabled:opacity-40"
                >
                    <RotateCcw size={14} />
                    Clear all
                </button>
            </div>
        </section>
    );
}
