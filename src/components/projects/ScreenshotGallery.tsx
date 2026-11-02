import { motion } from "framer-motion";

interface Screenshot {
  src: string;
  title: string;
  description?: string;
}

interface ScreenshotGalleryProps {
  screenshots: Screenshot[];
}

function ScreenshotGallery({ screenshots }: ScreenshotGalleryProps) {
  return (
    <div className="mt-10 space-y-10">
      {screenshots.map((screenshot, index) => (
        <motion.figure
          key={screenshot.src}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="group overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]"
        >
          <div className="overflow-hidden bg-[var(--color-background)]">
            <img
              src={screenshot.src}
              alt={screenshot.title}
              className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.015]"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>

          <figcaption className="flex flex-col gap-3 border-t border-[var(--color-border)] px-5 py-5 sm:flex-row sm:items-start sm:justify-between sm:px-6">
            <div>
              <p className="font-display text-base font-medium text-[var(--color-text-primary)]">
                {screenshot.title}
              </p>

              {screenshot.description && (
                <p className="mt-1 max-w-2xl text-sm leading-6 text-[var(--color-text-muted)]">
                  {screenshot.description}
                </p>
              )}
            </div>

            <span className="shrink-0 font-mono text-xs text-[var(--color-text-muted)]">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(screenshots.length).padStart(2, "0")}
            </span>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}

export default ScreenshotGallery;