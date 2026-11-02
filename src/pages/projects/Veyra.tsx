import ProjectCaseStudyLayout from "../../components/projects/ProjectCaseStudyLayout";
import ProjectSection from "../../components/projects/ProjectSection";
import ScreenshotGallery from "../../components/projects/ScreenshotGallery";
import { veyraSections } from "../../data/projectCaseStudies";

import tripsImage from "../../assets/projects/veyra/trips.png";
import createTripImage from "../../assets/projects/veyra/create-trip.png";
import preferencesImage from "../../assets/projects/veyra/create-trip-preferences.png";
import itineraryImage from "../../assets/projects/veyra/itinerary.png";
import editActivityImage from "../../assets/projects/veyra/edit-activity.png";

function Veyra() {
  return (
    <ProjectCaseStudyLayout
      title="Veyra"
      subtitle="AI Travel Planner"
      description="Plan a trip, explore destinations, and turn your preferences into a structured itinerary you can review and edit."
      type="Product"
      year="2026"
      tags={["React", "TypeScript", "Tailwind CSS"]}
      heroImage={itineraryImage}
      githubUrl="https://github.com/gauri2806/veyra"
      sections={veyraSections}
    >
      <ProjectSection
        id="overview"
        eyebrow="01"
        title="Overview"
      >
        <p>
          Veyra is an AI-powered travel planning workspace that helps users
          turn a destination and a set of preferences into a structured,
          personalized itinerary.
        </p>

        <p className="mt-5">
          Instead of treating an AI-generated itinerary as a final result,
          Veyra is designed around an editable trip experience — users can
          explore their itinerary, modify activities, and refine the plan
          as their requirements change.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "AI-assisted planning",
              description:
                "Generate structured itinerary data from trip requirements and preferences.",
            },
            {
              title: "Interactive itinerary",
              description:
                "Explore trips day by day and work with individual activities.",
            },
            {
              title: "User-controlled planning",
              description:
                "Review and modify the generated plan instead of treating AI output as final.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
            >
              <h3 className="font-display text-lg font-medium text-[var(--color-text-primary)]">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </ProjectSection>

      <ProjectSection
        id="problem"
        eyebrow="02"
        title="The Problem"
      >
        <p>
          Trip planning can quickly become fragmented. Users often have to
          combine destination research, personal preferences, schedules,
          budgets, maps, and individual activity choices before they have
          something that resembles a usable itinerary.
        </p>

        <p className="mt-5">
          AI itinerary generators can simplify the initial planning step,
          but a generated plan is rarely the end of the process. Plans
          change — an activity may take longer than expected, a preference
          may change, or a user may simply want to replace one part of the
          itinerary.
        </p>

        <div className="mt-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-accent)]">
            The question
          </p>

          <p className="mt-4 max-w-2xl font-display text-xl leading-8 text-[var(--color-text-primary)]">
            How can an AI-generated itinerary become something users can
            continuously explore, understand, and modify — rather than
            something they simply receive?
          </p>
        </div>
      </ProjectSection>

      <ProjectSection
        id="approach"
        eyebrow="03"
        title="My Approach"
      >
        <p className="max-w-3xl">
          I approached Veyra as an interactive planning experience rather
          than a simple AI prompt-and-response interface. The goal was to
          create a flow where generated content could become structured
          application data that users could inspect and modify.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              number: "01",
              title: "Define",
              description:
                "Collect destination, dates, travelers, budget, interests, and planning preferences.",
            },
            {
              number: "02",
              title: "Generate",
              description:
                "Use the trip requirements to produce a structured itinerary.",
            },
            {
              number: "03",
              title: "Explore",
              description:
                "Present the itinerary as an interactive experience organized around days and activities.",
            },
            {
              number: "04",
              title: "Refine",
              description:
                "Allow users to review, edit, add, remove, and reorganize activities.",
            },
          ].map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
            >
              <span className="font-mono text-xs text-[var(--color-accent)]">
                {step.number}
              </span>

              <h3 className="mt-5 font-display text-xl font-medium text-[var(--color-text-primary)]">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
          <div className="grid divide-y divide-[var(--color-border)] sm:grid-cols-5 sm:divide-x sm:divide-y-0">
            {[
              "Trip input",
              "Preferences",
              "Itinerary",
              "User review",
              "Editing",
            ].map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-3 p-4"
              >
                <span className="font-mono text-xs text-[var(--color-accent)]">
                  0{index + 1}
                </span>

                <span className="text-sm text-[var(--color-text-secondary)]">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </ProjectSection>

      <ProjectSection
        id="architecture"
        eyebrow="04"
        title="Architecture"
      >
        <p className="max-w-3xl">
          Veyra is designed around a separation between deterministic
          application logic and AI-assisted decision making. The AI layer
          can suggest changes, but it does not directly mutate the
          application's state.
        </p>

        {/* 1. Data & Decision Flow */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
          <div className="border-b border-[var(--color-border)] px-6 py-4">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
              Data & decision flow
            </p>
          </div>

          <div className="space-y-3 p-6 sm:p-8">
            {[
              {
                number: "01",
                title: "User Action",
                description:
                  "The user creates a trip or changes an itinerary constraint.",
              },
              {
                number: "02",
                title: "Application Event",
                description:
                  "The interaction is translated into a predictable application event.",
              },
              {
                number: "03",
                title: "State / Constraint Evaluation",
                description:
                  "The application determines what part of the trip is affected.",
              },
              {
                number: "04",
                title: "AI-assisted Decision",
                description:
                  "Relevant context is sent for AI-assisted planning or refinement.",
              },
              {
                number: "05",
                title: "Structured Response",
                description:
                  "The AI response is treated as structured data rather than UI state.",
              },
              {
                number: "06",
                title: "Validation + Review",
                description:
                  "The proposed changes are validated and presented for user review.",
              },
              {
                number: "07",
                title: "State Update",
                description:
                  "Only the accepted changes become part of the application's state.",
              },
            ].map((step, index, steps) => (
              <div key={step.number}>
                <div className="grid gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-5 sm:grid-cols-[56px_180px_1fr] sm:items-center">
                  <span className="font-mono text-sm text-[var(--color-accent)]">
                    {step.number}
                  </span>

                  <h3 className="font-display text-base font-medium text-[var(--color-text-primary)]">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-6 text-[var(--color-text-muted)]">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="flex h-6 items-center pl-6">
                    <div className="h-full border-l border-dashed border-[var(--color-border-hover)]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 2. Core Principle */}
        <div className="mt-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-accent)]">
            Core principle
          </p>

          <p className="mt-4 font-display text-xl leading-8 text-[var(--color-text-primary)] sm:text-2xl">
            AI suggests. The application decides.
          </p>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-text-muted)]">
            Keeping AI-generated suggestions separate from application state
            makes the experience easier to reason about and gives the user
            control over changes to their itinerary.
          </p>
        </div>

        {/* 3. Data Model */}
        <div className="mt-10">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
            Data model
          </p>

          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {[
              {
                name: "Trip",
                description:
                  "The top-level planning entity containing dates, destination, preferences and itinerary days.",
                fields: [
                  "destination",
                  "dates",
                  "travelers",
                  "budget",
                  "preferences",
                ],
              },
              {
                name: "Day",
                description:
                  "Represents one day of the trip and owns its collection of activities.",
                fields: ["date", "activities"],
              },
              {
                name: "Activity",
                description:
                  "The smallest editable unit of an itinerary.",
                fields: [
                  "title",
                  "location",
                  "startTime",
                  "duration",
                  "cost",
                ],
              },
            ].map((entity) => (
              <div
                key={entity.name}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
              >
                <h3 className="font-display text-xl font-medium text-[var(--color-text-primary)]">
                  {entity.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
                  {entity.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {entity.fields.map((field) => (
                    <span
                      key={field}
                      className="rounded-md bg-[var(--color-background)] px-2.5 py-1 font-mono text-xs text-[var(--color-text-secondary)]"
                    >
                      {field}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ProjectSection>

      <ProjectSection
        id="tech-decisions"
        eyebrow="Engineering choices"
        title="Tech Decisions"
      >
        <div className="space-y-10">
          {/* React + TypeScript */}
          <div>
            <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
              React + TypeScript
            </h3>

            <p className="mt-3">
              React provided the component-based structure needed for a multi-step
              planning experience, while TypeScript helped keep the application's
              trip, day, and activity data predictable as it moved between screens.
            </p>

            <div className="mt-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
              <p className="font-mono text-sm text-[var(--color-text-muted)]">
                Component-driven UI → predictable state → structured trip data
              </p>
            </div>
          </div>

          {/* Tailwind */}
          <div>
            <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
              Tailwind CSS
            </h3>

            <p className="mt-3">
              Tailwind made it easier to build a consistent visual system while
              keeping styling close to the components they belonged to. This was
              especially useful for responsive layouts across the trip creation,
              itinerary, and editing experiences.
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                "Consistent spacing",
                "Responsive layouts",
                "Reusable visual patterns",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
                >
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Structured AI output */}
          <div>
            <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
              Structured AI Responses
            </h3>

            <p className="mt-3">
              Instead of treating AI output as free-form text, the application
              expects structured information that can be transformed into the
              application's trip model. This makes the generated itinerary easier
              to render, validate, and modify through normal UI interactions.
            </p>

            <div className="mt-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[var(--color-text-muted)]">
                <span className="rounded-md border border-[var(--color-border)] px-2 py-1">
                  User input
                </span>
                <span>→</span>
                <span className="rounded-md border border-[var(--color-border)] px-2 py-1">
                  AI response
                </span>
                <span>→</span>
                <span className="rounded-md border border-[var(--color-border)] px-2 py-1">
                  Structured data
                </span>
                <span>→</span>
                <span className="rounded-md border border-[var(--color-border)] px-2 py-1">
                  UI state
                </span>
              </div>
            </div>
          </div>

          {/* State + editability */}
          <div>
            <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
              UI State Over Static Generation
            </h3>

            <p className="mt-3">
              A generated itinerary is only the starting point. The interface was
              designed so that users can review and modify activities after
              generation instead of treating the AI response as immutable content.
              This keeps the application focused on interaction rather than simply
              displaying generated text.
            </p>
          </div>

          {/* Design principle */}
          <div className="border-l-2 border-[var(--color-accent)] pl-5">
            <p className="font-display text-lg font-medium text-[var(--color-text-primary)]">
              The goal was not to build an AI demo.
            </p>

            <p className="mt-2 text-[var(--color-text-secondary)]">
              The goal was to build a usable planning interface around AI-generated
              information.
            </p>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection
        id="challenges"
        eyebrow="What was difficult"
        title="Challenges"
      >
        <div className="space-y-10">
          {/* Challenge 01 */}
          <div>
            <div className="flex items-start gap-4">
              <span className="font-mono text-sm text-[var(--color-accent)]">
                01
              </span>

              <div>
                <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                  Turning AI output into usable application data
                </h3>

                <p className="mt-3">
                  AI-generated content is naturally flexible, while the application
                  needs predictable data to render an itinerary consistently. The
                  challenge was designing the experience around structured trip
                  information instead of relying on generated text directly.
                </p>

                <p className="mt-3">
                  This led to a clear separation between the AI response and the
                  application's UI state, making the generated itinerary easier to
                  display and modify.
                </p>
              </div>
            </div>
          </div>

          {/* Challenge 02 */}
          <div>
            <div className="flex items-start gap-4">
              <span className="font-mono text-sm text-[var(--color-accent)]">
                02
              </span>

              <div>
                <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                  Designing for editing after generation
                </h3>

                <p className="mt-3">
                  Generating an itinerary is only one part of the experience. Users
                  still need to change activities, adjust details, and make the plan
                  their own.
                </p>

                <p className="mt-3">
                  This meant treating the generated itinerary as editable
                  application state rather than a final AI response. The UI therefore
                  had to make the transition from{" "}
                  <span className="text-[var(--color-text-primary)]">
                    generated content
                  </span>{" "}
                  to{" "}
                  <span className="text-[var(--color-text-primary)]">
                    user-controlled content
                  </span>{" "}
                  feel natural.
                </p>
              </div>
            </div>
          </div>

          {/* Challenge 03 */}
          <div>
            <div className="flex items-start gap-4">
              <span className="font-mono text-sm text-[var(--color-accent)]">
                03
              </span>

              <div>
                <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                  Keeping a complex interface understandable
                </h3>

                <p className="mt-3">
                  A travel planner can quickly become information-heavy: dates,
                  activities, locations, preferences, costs, and multiple days all
                  need to coexist without overwhelming the user.
                </p>

                <p className="mt-3">
                  The interface was therefore organized around progressive
                  disclosure — showing the most important information first while
                  keeping deeper details available when the user needs them.
                </p>
              </div>
            </div>
          </div>

          {/* Challenge 04 */}
          <div>
            <div className="flex items-start gap-4">
              <span className="font-mono text-sm text-[var(--color-accent)]">
                04
              </span>

              <div>
                <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                  Designing the experience around user control
                </h3>

                <p className="mt-3">
                  AI can make recommendations, but users ultimately decide what
                  belongs in their trip. The interface needed to communicate that
                  distinction clearly.
                </p>

                <div className="mt-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                  <p className="font-mono text-sm leading-7 text-[var(--color-text-secondary)]">
                    AI suggests
                    <span className="mx-2 text-[var(--color-accent)]">→</span>
                    Application structures
                    <span className="mx-2 text-[var(--color-accent)]">→</span>
                    User reviews
                    <span className="mx-2 text-[var(--color-accent)]">→</span>
                    User decides
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection
        id="improvements"
        eyebrow="Next iterations"
        title="What I'd Improve"
      >
        <div className="space-y-10">
          {/* 01 */}
          <div className="flex items-start gap-4">
            <span className="font-mono text-sm text-[var(--color-accent)]">
              01
            </span>

            <div>
              <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                More robust AI response validation
              </h3>

              <p className="mt-3">
                The next iteration would introduce stronger validation around
                generated itinerary data before it reaches the application state.
                This would make the system more resilient to incomplete or
                unexpected AI responses.
              </p>
            </div>
          </div>

          {/* 02 */}
          <div className="flex items-start gap-4">
            <span className="font-mono text-sm text-[var(--color-accent)]">
              02
            </span>

            <div>
              <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                Better persistence and trip management
              </h3>

              <p className="mt-3">
                A production version would need reliable persistence for trips,
                preferences, and itinerary changes so users can return to their
                plans across sessions and devices.
              </p>
            </div>
          </div>

          {/* 03 */}
          <div className="flex items-start gap-4">
            <span className="font-mono text-sm text-[var(--color-accent)]">
              03
            </span>

            <div>
              <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                Smarter itinerary refinement
              </h3>

              <p className="mt-3">
                Instead of regenerating an entire itinerary, users could ask the
                system to refine a specific part of their trip — for example,
                replacing one activity, adjusting a day, or optimizing the schedule
                around a new constraint.
              </p>
            </div>
          </div>

          {/* 04 */}
          <div className="flex items-start gap-4">
            <span className="font-mono text-sm text-[var(--color-accent)]">
              04
            </span>

            <div>
              <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                Stronger accessibility and interaction feedback
              </h3>

              <p className="mt-3">
                I would continue improving keyboard navigation, semantic structure,
                focus management, loading states, and feedback for asynchronous
                actions so the experience remains usable across different
                interaction modes.
              </p>
            </div>
          </div>

          {/* 05 */}
          <div className="flex items-start gap-4">
            <span className="font-mono text-sm text-[var(--color-accent)]">
              05
            </span>

            <div>
              <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                More realistic travel constraints
              </h3>

              <p className="mt-3">
                A future version could account for factors such as travel time
                between activities, opening hours, budget constraints, and
                availability. This would move the product closer to an actual
                planning assistant rather than an itinerary generator.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Product direction
          </p>

          <p className="mt-4 max-w-2xl font-display text-xl font-medium leading-8 text-[var(--color-text-primary)]">
            The next step isn't simply adding more AI. It's making the existing
            planning experience more reliable, editable, and useful.
          </p>
        </div>
      </ProjectSection>

      <ProjectSection
        id="screenshots"
        eyebrow="Product walkthrough"
        title="Screenshots"
      >
        <p className="max-w-2xl">
          The interface follows the same journey as the product itself — starting
          with trip discovery, moving through preferences and generation, and
          ending with an itinerary that users can review and edit.
        </p>

        <ScreenshotGallery
          screenshots={[
            {
              src: tripsImage,
              title: "My Trips",
              description:
                "A central workspace for viewing and returning to planned trips.",
            },
            {
              src: createTripImage,
              title: "Create a Trip",
              description:
                "The initial planning step captures the destination and core trip constraints.",
            },
            {
              src: preferencesImage,
              title: "Trip Preferences",
              description:
                "Preferences provide additional context for generating a more personalized itinerary.",
            },
            {
              src: itineraryImage,
              title: "Generated Itinerary",
              description:
                "The generated plan is organized into days and activities for quick scanning and review.",
            },
            {
              src: editActivityImage,
              title: "Edit Activity",
              description:
                "Users can refine individual activities instead of treating the generated itinerary as final.",
            },
          ]}
        />
      </ProjectSection>

      <ProjectSection
        id="tech-stack"
        eyebrow="Built with"
        title="Tech Stack"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              category: "Frontend",
              technologies: ["React", "TypeScript", "Tailwind CSS"],
            },
            {
              category: "Application",
              technologies: ["React Router", "Component-based architecture"],
            },
            {
              category: "AI",
              technologies: ["AI-assisted itinerary generation", "Structured responses"],
            },
            {
              category: "API",
              technologies: ["REST APIs", "Asynchronous data flow"],
            },
            {
              category: "Development",
              technologies: ["Vite", "Git", "GitHub"],
            },
            {
              category: "Design",
              technologies: ["Responsive UI", "Reusable components"],
            },
          ].map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-colors duration-300 hover:border-[var(--color-border-hover)]"
            >
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-accent)]">
                {group.category}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm text-[var(--color-text-secondary)]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ProjectSection>

      <ProjectSection
        id="takeaways"
        eyebrow="Looking back"
        title="Takeaways"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-accent)]">
              01
            </p>

            <h3 className="mt-4 font-display text-xl font-semibold text-[var(--color-text-primary)]">
              AI is only part of the product
            </h3>

            <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
              The most interesting part wasn't generating an itinerary. It was
              designing the interface and state model around what happens after
              generation.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-accent)]">
              02
            </p>

            <h3 className="mt-4 font-display text-xl font-semibold text-[var(--color-text-primary)]">
              Editable beats static
            </h3>

            <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
              A useful generated result should become something the user can
              understand, modify, and make their own.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-accent)]">
              03
            </p>

            <h3 className="mt-4 font-display text-xl font-semibold text-[var(--color-text-primary)]">
              Product thinking matters
            </h3>

            <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
              Building Veyra pushed me to think beyond individual components and
              consider the complete journey from user input to final interaction.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-accent)]">
              04
            </p>

            <h3 className="mt-4 font-display text-xl font-semibold text-[var(--color-text-primary)]">
              The interface is the product
            </h3>

            <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
              Good engineering isn't only about making the underlying system work.
              It's also about making complex functionality feel simple to the
              person using it.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
              Want to explore the code?
            </p>

            <p className="mt-1 text-sm text-[var(--color-text-muted)]">
              Check out the project repository and see how Veyra is put together.
            </p>
          </div>

          <a
            href="https://github.com/gauri2806/veyra"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-xl border border-[var(--color-border)] px-5 py-3 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface-hover)]"
          >
            View on GitHub
          </a>
        </div>
      </ProjectSection>
    </ProjectCaseStudyLayout>
  );
}

export default Veyra;