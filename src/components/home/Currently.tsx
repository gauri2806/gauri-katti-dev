import { Code2, Dumbbell, Palette, PersonStanding } from "lucide-react";

const activities = [
  {
    label: "Building",
    description: "frontend things",
    icon: Code2,
  },
  {
    label: "Running",
    description: "one more kilometer",
    icon: PersonStanding,
  },
  {
    label: "Gym",
    description: "getting stronger",
    icon: Dumbbell,
  },
  {
    label: "Painting",
    description: "when code can wait",
    icon: Palette,
  },
];

function Currently() {
  return (
    <section id="currently" className="group items-center gap-3 pb-6 text-[var(--color-text-muted)] sm:flex-row sm:items-center sm:gap-8">
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center">
          <div className="shrink-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
              Currently
            </p>
          </div>

          <div className="hidden h-5 w-px bg-[var(--color-border)] md:block" />

          <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-4 sm:flex sm:flex-1 sm:justify-between sm:gap-8">
            {activities.map((activity) => {
              const Icon = activity.icon;

              return (
                <div
                  key={activity.label}
                  className="group flex items-center gap-3 rounded-lg border border-transparent px-3 py-2.5 transition-colors hover:border-[var(--color-border)] hover:bg-[var(--color-surface)]"
                >
                  <Icon
                    size={17}
                    strokeWidth={1.7}
                    className="text-[var(--color-accent)]"
                  />

                  <div>
                    <p className="text-sm font-medium text-[var(--color-text-primary)]">
                      {activity.label}
                    </p>

                    <p className="text-xs text-[var(--color-text-muted)]">
                      {activity.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Currently;