import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface LabCardProps {
    number: string;
    title: string;
    description: string;
    category: string;
    icon: LucideIcon;
    status: string;
    index: number;
    path?: string;
}

function LabCard({
    number,
    title,
    description,
    category,
    icon: Icon,
    status,
    index,
    path
}: LabCardProps) {
    const isLive = status === "Live";

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: 0.45,
                delay: index * 0.05,
            }}
            className={`group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors duration-300 ${isLive
                    ? "hover:border-[var(--color-border-hover)]"
                    : "opacity-75"
                }`}
        >
            <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-[var(--color-text-muted)]">
                    {number}
                </span>

                <span
                    className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] ${isLive
                            ? "border-[var(--color-accent)]/30 text-[var(--color-accent)]"
                            : "border-[var(--color-border)] text-[var(--color-text-muted)]"
                        }`}
                >
                    {status}
                </span>
            </div>

            <div className="mt-10 flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-border)] text-[var(--color-accent)]">
                <Icon size={18} />
            </div>

            <div className="mt-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                    {category}
                </p>

                <h3 className="mt-2 font-display text-2xl font-semibold text-[var(--color-text-primary)]">
                    {title}
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-7 text-[var(--color-text-secondary)]">
                    {description}
                </p>
            </div>
            

            {isLive && path && (
                <Link
                    to={path}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-accent)]"
                >
                    Open experiment
                    <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                </Link>
            )}
        </motion.article>
    );
}

export default LabCard;