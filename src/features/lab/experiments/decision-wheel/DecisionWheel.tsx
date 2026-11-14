
import { useState } from "react";
import { Dices, Sparkles } from "lucide-react";
import Wheel from "./Wheel";
import WheelOptions from "./WheelOptions";
import type { WheelOption } from "./types";
import WheelResult from "./WheelResult";
import Confetti from "./Confetti";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import {
    getRandomIndex,
    getTargetRotation,
} from "./wheelUtils";

interface SpinHistoryItem {
    id: string;
    winner: string;
    timestamp: Date;
}

export default function DecisionWheel() {
    const [options, setOptions] = useState<WheelOption[]>([]);
    const [rotation, setRotation] = useState(0);
    const [isSpinning, setIsSpinning] = useState(false);
    const [selectedOption, setSelectedOption] = useState<WheelOption | null>(null);
    const [spinHistory, setSpinHistory] = useState<SpinHistoryItem[]>([]);
    const [showResult, setShowResult] = useState(false);
    const canSpin = options.length >= 2;

    const handleSpin = () => {
        if (isSpinning || options.length < 2) return;

        const randomIndex = getRandomIndex(options.length);
        const winner = options[randomIndex];

        const targetRotation = getTargetRotation(
            randomIndex,
            options.length,
            rotation,
            5
        );

        setSelectedOption(winner);
        setIsSpinning(true);
        setRotation(targetRotation);
    };

    const handleSpinComplete = () => {
        setIsSpinning(false);
        setShowResult(true);

        if (selectedOption) {
            setSpinHistory((previous) => [
                {
                    id: crypto.randomUUID(),
                    winner: selectedOption.label,
                    timestamp: new Date(),
                },
                ...previous,
            ]);
        }
    };

    return (
        <main className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
            <Link
          to="/lab"
          className="inline-flex items-center gap-2 font-mono text-xs text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
        >
          <ArrowLeft size={14} />
          Back to Lab
        </Link>
            {/* Page heading */}
            <div className="mb-10 text-center">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
                    The Little Playground
                </span>

                <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-5xl">
                    Decision Wheel
                </h1>

                <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[var(--color-text-secondary)]">
                    Can't decide? Put your options on the wheel,
                    give it a spin, and let fate choose.
                </p>
            </div>

            {/* Main layout */}
            <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
                {/* Wheel placeholder */}
                <section className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-[var(--color-surface)] p-6">
                    {options.length >= 2 ? (
                        <Wheel
                            options={options}
                            rotation={rotation}
                            isSpinning={isSpinning}
                            onSpinComplete={handleSpinComplete}
                        />
                    ) : (
                        <p className="text-sm text-[var(--color-text-muted)]">
                            Add at least two options to see your wheel.
                        </p>
                    )}

                    <button
                        type="button"
                        onClick={handleSpin}
                        disabled={!canSpin || isSpinning}
                        className="mt-7 flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-8 py-3 text-sm font-semibold text-[#07111d] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        <Sparkles size={16} />
                        {isSpinning ? "Spinning..." : "Spin the wheel"}
                    </button>
                </section>

                {/* Options manager */}
                <WheelOptions
                    options={options}
                    onOptionsChange={setOptions}
                />
            </div>

            {spinHistory.length > 0 && (
                <section className="mt-8 rounded-2xl border border-white/10 bg-[var(--color-surface)] p-5">
                    <div className="mb-5 flex items-center justify-between">
                        <div>
                            <h2 className="font-display text-lg font-semibold text-[var(--color-text-primary)]">
                                Spin history
                            </h2>

                            <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                                Your previous decisions.
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() => setSpinHistory([])}
                            className="text-xs text-[var(--color-text-muted)] transition hover:text-red-400"
                        >
                            Clear history
                        </button>
                    </div>

                    <div className="space-y-2">
                        {spinHistory.map((item, index) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between gap-4 rounded-xl bg-white/[0.025] px-4 py-3"
                            >
                                <div className="flex min-w-0 items-center gap-3">
                                    <span className="font-mono text-xs text-[var(--color-text-muted)]">
                                        {String(spinHistory.length - index).padStart(2, "0")}
                                    </span>

                                    <span className="truncate text-sm text-[var(--color-text-primary)]">
                                        {item.winner}
                                    </span>
                                </div>

                                <span className="shrink-0 text-xs text-[var(--color-text-muted)]">
                                    {item.timestamp.toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
            )}
            {showResult && <Confetti />}
            {showResult && selectedOption && (
                <WheelResult
                    winner={selectedOption.label}
                    onSpinAgain={() => {
                        setShowResult(false);
                        handleSpin();
                    }}
                    onClose={() => setShowResult(false)}
                    onRemoveWinner={() => {
                        setOptions((previous) =>
                            previous.filter(
                                (option) => option.id !== selectedOption.id
                            )
                        );

                        setSelectedOption(null);
                        setShowResult(false);
                    }}
                />
            )}
        </main>

    );
}
