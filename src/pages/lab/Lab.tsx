import { useState } from "react";
import { motion } from "framer-motion";

import LabCard from "../../features/lab/LabCard";

import {
    categories,
    categoryContent,
    labItems,
} from "../../features/lab/data/labItems";
import type { Category } from "../../features/lab/data/labItems";

function Lab() {
    const [activeCategory, setActiveCategory] = useState<Category>("All");

    const filteredItems =
        activeCategory === "All"
            ? labItems
            : labItems.filter(
                (item) => item.category === activeCategory
            );

    return (
        <main>
            {/* Hero */}
            <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-8 lg:pb-24 lg:pt-24">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl"
                >
                    <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
                        The Little Playground
                    </p>

                    <h1 className="font-display text-5xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-6xl lg:text-7xl">
                        A Space for Curiosity.
                    </h1>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
                        A collection of things I build out of curiosity —
                        playful interactions, creative tools, tiny utilities,
                        and frontend experiments. Some solve problems, some
                        are just for fun, and some exist simply because I
                        wondered, "what if?"
                    </p>
                </motion.div>
            </section>

            {/* Collection */}
            <section className="border-t border-[var(--color-border)]">

                {/* Category Filters */}
                <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
                    <div className="mb-5">
                        <p className="text-sm text-[var(--color-text-muted)]">
                            Find something interesting to explore.
                        </p>
                    </div>

                    <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() =>
                                    setActiveCategory(category)
                                }
                                aria-pressed={activeCategory === category}
                                className={`shrink-0 rounded-full border px-4 py-2 text-sm transition-all duration-200 ${activeCategory === category
                                    ? "border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                                    : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-text-primary)]"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Lab Items */}
                <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">

                    <div className="mb-10 flex items-end justify-between gap-6">
                        <div>
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                                    {categoryContent[activeCategory].eyebrow}
                                </p>

                                <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
                                    {categoryContent[activeCategory].heading}
                                </h2>

                                <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
                                    {categoryContent[activeCategory].description}
                                </p>
                            </motion.div>
                        </div>

                        <span className="hidden shrink-0 font-mono text-xs text-[var(--color-text-muted)] sm:block">
                            {String(filteredItems.length).padStart(2, "0")} ITEMS
                        </span>
                    </div>

                    <motion.div
                        layout
                        className="grid gap-4 md:grid-cols-2"
                    >
                        {filteredItems.map((item, index) => (
                            <LabCard
                                key={item.title}
                                {...item}
                                index={index}
                            />
                        ))}
                    </motion.div>

                    {filteredItems.length === 0 && (
                        <div className="py-16 text-center">
                            <p className="text-[var(--color-text-secondary)]">
                                Nothing here just yet. More little
                                experiments are on their way!
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Philosophy */}
            <section className="border-t border-[var(--color-border)]">
                <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
                    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

                        <div>
                            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">
                                A Little Note
                            </p>

                            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
                                Built out of curiosity.
                            </h2>
                        </div>

                        <p className="max-w-2xl text-base leading-8 text-[var(--color-text-secondary)]">
                            Not everything needs a purpose. Some things
                            are built to solve a problem, some to explore
                            an idea, and some simply because they seemed
                            fun to make. This is my little corner of the
                            internet where all those ideas find a place
                            to exist.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Lab;
