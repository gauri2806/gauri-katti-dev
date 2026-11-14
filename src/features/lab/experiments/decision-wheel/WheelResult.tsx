
import { Trophy, RotateCcw, X } from "lucide-react";

interface WheelResultProps {
    winner: string;
    onSpinAgain: () => void;
    onClose: () => void;
    onRemoveWinner: () => void;
}

export default function WheelResult({
    winner,
    onSpinAgain,
    onClose,
    onRemoveWinner,
}: WheelResultProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5 backdrop-blur-sm">
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="wheel-result-title"
                className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-[#0b1624] p-8 text-center shadow-2xl"
            >
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close result"
                    className="absolute right-5 top-5 text-white/50 transition hover:text-white"
                >
                    <X size={20} />
                </button>

                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    <Trophy size={30} />
                </div>

                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
                    The wheel has decided
                </p>

                <h2
                    id="wheel-result-title"
                    className="mt-4 font-display text-3xl font-bold text-white"
                >
                    {winner}
                </h2>

                <p className="mt-3 text-sm text-white/50">
                    Sometimes, it's better to let fate choose.
                </p>

                <button
                    type="button"
                    onClick={onSpinAgain}
                    className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-accent)] px-5 py-3.5 text-sm font-semibold text-[#07111d] transition hover:opacity-90"
                >
                    <RotateCcw size={16} />
                    Spin again
                </button>

                <button
                    type="button"
                    onClick={onRemoveWinner}
                    className="mt-3 w-full rounded-xl border border-white/10 px-5 py-3 text-sm text-white/60 transition hover:border-red-400/30 hover:text-red-400"
                >
                    Remove this option
                </button>

                <button
                    type="button"
                    onClick={onClose}
                    className="mt-3 w-full rounded-xl border border-white/10 px-5 py-3 text-sm text-white/70 transition hover:bg-white/5"
                >
                    Close
                </button>
            </div>
        </div>
    );
}
