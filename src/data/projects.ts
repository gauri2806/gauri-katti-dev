export interface Project {
  number: string;
  title: string;
  description: string;
  tags: string[];
  type: string;
  route: string;
}

export const projects: Project[] = [
  {
    number: "01",
    title: "Veyra",
    description:
      "An AI-powered travel planning experience designed to turn a destination idea into a structured, personalized itinerary.",
    tags: ["React", "TypeScript", "Tailwind"],
    type: "Product",
    route: "/projects/veyra",
  },
  {
    number: "02",
    title: "Voice-Enabled Task Tracker",
    description:
      "An AI-powered task manager that turns natural-language voice commands into structured tasks, combining a React interface with a REST API and speech-to-text workflow.",
    tags: ["React", "Node.js", "MongoDB", "AI"],
    type: "Full Stack",
    route: "/projects/task-tracker",
  },
  {
    number: "03",
    title: "Portfolio",
    description:
      "This portfolio — a frontend-focused space for projects, experiments, and the things I enjoy building outside of work.",
    tags: ["React", "TypeScript", "Vite"],
    type: "Personal",
    route: "/projects/portfolio",
  },
];