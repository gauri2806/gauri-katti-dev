import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Dumbbell,
  Palette,
  Rocket,
  Trophy,
} from "lucide-react";

const interests = [
  {
    title: "Running",
    description:
      "Long runs, quiet roads, and slowly getting better. Currently working towards longer distances.",
    icon: Rocket,
    detail: "Run → Repeat",
  },
  {
    title: "Gym",
    description:
      "Started strength training as a way to become stronger, more consistent, and a little less lazy.",
    icon: Dumbbell,
    detail: "Strength → Discipline",
  },
  {
    title: "Painting",
    description:
      "A completely different kind of problem solving. No compiler errors, just questionable artistic decisions.",
    icon: Palette,
    detail: "Create → Experiment",
  },
  {
    title: "Robotics",
    description:
      "My engineering journey didn't start with frontend. Robotics taught me how software, hardware, and teamwork come together.",
    icon: Trophy,
    detail: "Build → Break → Fix",
  },
];

function About() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
              About me
            </p>

            <h1 className="max-w-4xl font-display text-5xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-6xl lg:text-7xl">
              More than just
              <br />
              <span className="text-[var(--color-text-secondary)]">
                the code.
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-xl text-base leading-8 text-[var(--color-text-secondary)] lg:pb-2 lg:text-lg"
          >
            I’m Gauri, a frontend engineer who enjoys turning complicated
            ideas into simple, thoughtful interfaces. When I’m not in a code
            editor, you’ll probably find me running, at the gym, painting
            something, or figuring out how to build something I probably
            didn't need to build.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="border-y border-[var(--color-border)]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                A little context
              </p>
            </div>

            <div className="max-w-3xl">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
                I like building things that feel simple.
              </h2>

              <div className="mt-7 space-y-5 text-base leading-8 text-[var(--color-text-secondary)]">
                <p>
                  My work is mostly focused on frontend development with
                  React, JavaScript, and TypeScript. I enjoy the part of
                  engineering where functionality meets experience — taking
                  something complex and making it feel obvious to the person
                  using it.
                </p>

                <p>
                  Over the last few years, I've worked on production
                  applications, improved existing interfaces, debugged some
                  very stubborn problems, and learned that good frontend
                  engineering is about much more than making things look good.
                </p>

                <p>
                  Performance, state management, accessibility, API
                  integration, testing, and the tiny interaction details all
                  matter. I'm particularly interested in understanding why
                  something works the way it does rather than simply making it
                  work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I enjoy */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Beyond the editor
          </p>

          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            Things I enjoy when I’m not coding.
          </h2>

          <p className="mt-4 text-base leading-7 text-[var(--color-text-secondary)]">
            Not everything needs to become a side project. Some things are
            just fun to do.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {interests.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors duration-300 hover:border-[var(--color-border-hover)]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-border)] text-[var(--color-accent)]">
                    <Icon size={18} />
                  </div>

                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                    {item.detail}
                  </span>
                </div>

                <h3 className="mt-8 font-display text-xl font-semibold text-[var(--color-text-primary)]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Engineer philosophy */}
      <section className="border-y border-[var(--color-border)]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">
                How I think
              </p>

              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
                Curious first.
                <br />
                Practical second.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-[var(--color-text-secondary)]">
              <p>
                I like understanding systems from the inside out. Whether
                that's a React rendering issue, an API flow, or a completely
                unrelated problem, the interesting part for me is figuring out
                what is actually happening.
              </p>

              <p>
                I also believe good software doesn't have to be complicated
                to be impressive. Clear architecture, thoughtful interactions
                and a good user experience usually beat unnecessary complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Small personal note */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 sm:p-12">
          <div className="relative z-10 max-w-2xl">
            <Code2
              size={22}
              className="text-[var(--color-accent)]"
            />

            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              Still figuring things out.
            </h2>

            <p className="mt-5 text-base leading-8 text-[var(--color-text-secondary)]">
              There’s always another technology to learn, another idea to
              experiment with, another bug to understand, and another
              distance to run. I’m enjoying the process.
            </p>

            <a
              href="mailto:gaurikatti2806@gmail.com"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-accent)]"
            >
              Let’s talk
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[var(--color-border)]" />
          <div className="pointer-events-none absolute -bottom-32 -right-8 h-72 w-72 rounded-full border border-[var(--color-border)]" />
        </div>
      </section>
    </main>
  );
}

export default About;