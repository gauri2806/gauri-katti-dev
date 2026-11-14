
import type { LucideIcon } from "lucide-react";
import {
    Activity,
    Accessibility,
    AudioLines,
    AudioWaveform,
    Blend,
    Ban,
    Braces,
    Gauge,
    Keyboard,
    Layers3,
    Palette,
    Type,
    Orbit,
    Zap,
    Brain,
    Paintbrush,
    FileImage,
    Shapes,
    Grid3X3,
    Images,
    Languages,
    Timer,
    Ruler,
    Dices,
    Shuffle,
    Blocks,
    Workflow,
    Network,
    Move,
    Quote,
    Stars,
    Cookie,
    Lightbulb
} from "lucide-react";


export type Category =
    | "All"
    | "Play"
    | "Create"
    | "Everyday"
    | "Dev Corner"
    | "Discover";

export interface LabItem {
    number: string;
    title: string;
    description: string;
    category: Exclude<Category, "All">;
    icon: LucideIcon;
    status: "Live" | "Coming soon";
    path?: string;
}

export const categories: Category[] = [
    "All",
    "Play",
    "Create",
    "Everyday",
    "Dev Corner",
    "Discover",
];

export const categoryContent: Record<
    Category,
    {
        eyebrow: string;
        heading: string;
        description: string;
    }
> = {
    All: {
        eyebrow: "The Collection",
        heading: "A Little Everything.",
        description:
            "A growing collection of playful experiences, creative tools, useful utilities and frontend experiments.",
    },
    Play: {
        eyebrow: "Playground",
        heading: "Just Play.",
        description:
            "Take a break, try something fun, challenge yourself and explore little interactions made just for the joy of it.",
    },
    Create: {
        eyebrow: "Creative Studio",
        heading: "Creative Space.",
        description:
            "Experiment with colors, shapes and ideas. Make something unique, express your creativity and take your creations with you.",
    },
    Everyday: {
        eyebrow: "Little Utilities",
        heading: "Handy Tools.",
        description:
            "A collection of simple, practical tools designed to make everyday tasks a little easier and more convenient.",
    },
    "Dev Corner": {
        eyebrow: "Developer Playground",
        heading: "Code Experiments.",
        description:
            "Explore frontend concepts through interactive experiments covering React, JavaScript, browser APIs, performance and more.",
    },
    Discover: {
        eyebrow: "The Unexpected",
        heading: "Curious Things.",
        description:
            "Discover unexpected little experiences, interesting ideas and creative explorations that are worth spending a few minutes with.",
    },
};


export const labItems: LabItem[] = [
    {
        number: "01",
        title: "Typing Speed Test",
        description:
            "How fast can your thoughts travel through your fingers? Test your typing speed, accuracy and consistency.",
        category: "Play",
        icon: Keyboard,
        status: "Coming soon",
    },
    {
        number: "02",
        title: "Keyboard Sound Studio",
        description:
            "Give every keystroke a sound of its own. Explore different keyboard sounds and create your perfect typing atmosphere.",
        category: "Play",
        icon: AudioLines,
        status: "Coming soon",
    },
    // {
    //     number: "03",
    //     title: "Particle Playground",
    //     description:
    //         "Move your cursor, create ripples and interact with a world of particles. Just play around and see what happens.",
    //     category: "Play",
    //     icon: Orbit,
    //     status: "Coming soon",
    // },
    // {
    //     number: "04",
    //     title: "Color Personality",
    //     description:
    //         "Answer a few fun questions and discover a color palette that reflects your personality and creative preferences.",
    //     category: "Play",
    //     icon: Palette,
    //     status: "Coming soon",
    // },
    // {
    //     number: "05",
    //     title: "Reaction Time Test",
    //     description:
    //         "Think you're quick? Test your reflexes and see how fast you can react when the moment arrives.",
    //     category: "Play",
    //     icon: Zap,
    //     status: "Coming soon",
    // },
    // {
    //     number: "06",
    //     title: "Memory Match",
    //     description:
    //         "Flip the cards, find matching pairs and challenge yourself to complete the board in as few moves as possible.",
    //     category: "Play",
    //     icon: Brain,
    //     status: "Coming soon",
    // },
    {
        number: "07",
        title: "Canvas Board",
        description:
            "A little digital canvas to sketch, doodle and experiment with colors. Create something of your own and save it.",
        category: "Create",
        icon: Paintbrush,
        status: "Coming soon",
    },
    {
        number: "08",
        title: "Gradient Studio",
        description:
            "Play with colors, experiment with gradients and create beautiful backgrounds. Copy the CSS or save your creations.",
        category: "Create",
        icon: Blend,
        status: "Coming soon",
    },
    // {
    //     number: "09",
    //     title: "Poster Maker",
    //     description:
    //         "Turn words into visuals. Design aesthetic posters using typography, colors, backgrounds and creative layouts.",
    //     category: "Create",
    //     icon: FileImage,
    //     status: "Coming soon",
    // },
    // {
    //     number: "10",
    //     title: "Generative Art",
    //     description:
    //         "Explore the intersection of code and creativity. Generate unique patterns, shapes and abstract artwork.",
    //     category: "Create",
    //     icon: Shapes,
    //     status: "Coming soon",
    // },
    // {
    //     number: "11",
    //     title: "Pixel Art Studio",
    //     description:
    //         "Create tiny pixel illustrations one square at a time. Experiment with colors and bring your pixel creations to life.",
    //     category: "Create",
    //     icon: Grid3X3,
    //     status: "Coming soon",
    // },
    // {
    //     number: "12",
    //     title: "Moodboard Maker",
    //     description:
    //         "Collect colors, images, notes and inspiration in one place. Put together a visual moodboard for your next idea.",
    //     category: "Create",
    //     icon: Images,
    //     status: "Coming soon",
    // },
    // {
    //     number: "13",
    //     title: "Translator",
    //     description:
    //         "Translate text between different languages with a simple interface. Make communication across languages a little easier.",
    //     category: "Everyday",
    //     icon: Languages,
    //     status: "Coming soon",
    // },
    // {
    //     number: "14",
    //     title: "Focus Timer",
    //     description:
    //         "Make room for focused work with customizable Pomodoro sessions, short breaks and a little help staying on track.",
    //     category: "Everyday",
    //     icon: Timer,
    //     status: "Coming soon",
    // },
    // {
    //     number: "15",
    //     title: "Unit Converter",
    //     description:
    //         "Convert measurements without the mental math. Switch between units of length, weight, temperature and more.",
    //     category: "Everyday",
    //     icon: Ruler,
    //     status: "Coming soon",
    // },
    {
        number: "16",
        title: "Decision Wheel",
        description:
            "Can't decide? Add your options, spin the wheel and let a little randomness make the choice for you.",
        category: "Everyday",
        icon: Dices,
        status: "Live",
        path: "/lab/decision-wheel"
    },
    {
        number: "17",
        title: "Text Toolkit",
        description:
            "Count words, transform text cases, remove extra spaces and use handy formatting utilities in one place.",
        category: "Everyday",
        icon: Type,
        status: "Coming soon",
    },
    {
        number: "18",
        title: "Random Generator",
        description:
            "Need a little inspiration? Generate random ideas, writing prompts, names, challenges and unexpected suggestions.",
        category: "Everyday",
        icon: Shuffle,
        status: "Coming soon",
    },
    {
        number: "19",
        title: "Debounce Playground",
        description:
            "See how debouncing changes the number of requests triggered by a search input.",
        category: "Dev Corner",
        icon: Gauge,
        status: "Live",
        path: "/lab/debounce",
    },
    {
        number: "20",
        title: "Render Playground",
        description:
            "Visualize React re-renders and understand where unnecessary renders come from.",
        category: "Dev Corner",
        icon: Activity,
        status: "Live",
        path: "/lab/render",
    },
    {
        number: "21",
        title: "State Playground",
        description:
            "Explore direct updates, functional updates, and how React handles asynchronous state changes.",
        category: "Dev Corner",
        icon: Layers3,
        status: "Live",
        path: "/lab/state",
    },
    {
        number: "22",
        title: "Request Cancellation",
        description:
            "Explore how AbortController prevents stale asynchronous requests from updating the UI.",
        category: "Dev Corner",
        icon: Ban,
        status: "Live",
        path: "/lab/request-cancellation",
    },
    {
        number: "23",
        title: "Infinite Scroll",
        description:
            "Build infinite scrolling with IntersectionObserver without constantly listening to scroll events.",
        category: "Dev Corner",
        icon: Braces,
        status: "Live",
        path: "/lab/infinite-scroll",
    },
    {
        number: "24",
        title: "Accessible Modal",
        description:
            "A modal built around keyboard navigation, focus management and accessible semantics.",
        category: "Dev Corner",
        icon: Accessibility,
        status: "Coming soon",
    },
    {
        number: "25",
        title: "Component Playground",
        description:
            "Explore interactive UI components, experiment with their props and states, and see how small changes affect their behavior.",
        category: "Dev Corner",
        icon: Blocks,
        status: "Coming soon",
    },
    {
        number: "26",
        title: "JavaScript Visualizer",
        description:
            "Make JavaScript concepts easier to understand by exploring execution contexts, closures, the event loop and more.",
        category: "Dev Corner",
        icon: Workflow,
        status: "Coming soon",
    },
    {
        number: "27",
        title: "API Playground",
        description:
            "Experiment with API requests, inspect responses and explore loading, error and success states.",
        category: "Dev Corner",
        icon: Network,
        status: "Coming soon",
    },
    {
        number: "28",
        title: "Motion Playground",
        description:
            "Experiment with transitions, animations and motion effects. Tweak properties and see your interactions come alive.",
        category: "Dev Corner",
        icon: Move,
        status: "Coming soon",
    },
    // {
    //     number: "29",
    //     title: "Ambient World",
    //     description:
    //         "Create your own atmosphere by mixing sounds of rain, wind, nature and everyday surroundings. Find your focus or unwind.",
    //     category: "Discover",
    //     icon: AudioWaveform,
    //     status: "Coming soon",
    // },
    // {
    //     number: "30",
    //     title: "A Thought for Today",
    //     description:
    //         "A little space for daily inspiration. Discover thoughtful quotes, reflections and words worth carrying through the day.",
    //     category: "Discover",
    //     icon: Quote,
    //     status: "Coming soon",
    // },
    // {
    //     number: "31",
    //     title: "Digital Universe",
    //     description:
    //         "Step into an interactive world of stars, particles and constellations. Explore a little universe right inside your browser.",
    //     category: "Discover",
    //     icon: Stars,
    //     status: "Coming soon",
    // },
    {
        number: "32",
        title: "Fortune Cookie",
        description:
            "Crack open a virtual fortune cookie and reveal a random little message, prediction or piece of unexpected wisdom.",
        category: "Discover",
        icon: Cookie,
        status: "Coming soon",
    },
    {
        number: "33",
        title: "Curiosity Generator",
        description:
            "Discover something unexpected with random facts, interesting questions and little ideas that make you stop and think.",
        category: "Discover",
        icon: Lightbulb,
        status: "Coming soon",
    },
];
