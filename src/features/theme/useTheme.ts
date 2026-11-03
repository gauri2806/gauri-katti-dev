
import { useEffect, useState } from "react";

export type Theme =
    | "midnight"
    | "coffee"
    | "rainy"
    | "golden"
    | "forest"
    | "stargazer"
    | "bloom";


export const themes = [
  {
    id: "midnight",
    name: "Midnight",
    emoji: "🌌",
    description: "For deep focus, late-night ideas, and building what's next.",
    colors: ["#07111d", "#35d6d0"],
  },
  {
    id: "coffee",
    name: "Coffee",
    emoji: "☕",
    description: "For late-night commits and just one more cup.",
    colors: ["#211914", "#d6b894"],
  },
  {
    id: "rainy",
    name: "Rainy Day",
    emoji: "🌧️",
    description: "For slow mornings, quiet playlists, and thoughtful moments.",
    colors: ["#172331", "#a8bbcb"],
  },
  {
    id: "golden",
    name: "Golden Hour",
    emoji: "🌅",
    description: "For chasing sunsets, fresh starts, and little adventures.",
    colors: ["#241a20", "#f2a477"],
  },
  {
    id: "forest",
    name: "Forest",
    emoji: "🌿",
    description: "For fresh perspectives and finding your own pace.",
    colors: ["#14231b", "#a5b99a"],
  },
  {
    id: "stargazer",
    name: "Stargazer",
    emoji: "✨",
    description: "For big dreams, curious minds, and endless possibilities.",
    colors: ["#101126", "#a99bdf"],
  },
  {
    id: "bloom",
    name: "Bloom",
    emoji: "🌸",
    description: "For new beginnings, creative energy, and growing every day.",
    colors: ["#271c24", "#e8afc0"],
  },
] as const;


const STORAGE_KEY = "gauri-portfolio-theme";

function getInitialTheme(): Theme {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);

        if (themes.some((theme) => theme.id === saved)) {
            return saved as Theme;
        }
    } catch {
        // Use the default theme if localStorage is unavailable.
    }

    return "midnight";
}

export function useTheme() {
    const [theme, setTheme] = useState<Theme>(getInitialTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;

        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch {
            // Theme still works for the current session.
        }
    }, [theme]);

    return {
        theme,
        setTheme,
        themes,
        currentTheme: themes.find((item) => item.id === theme)!,
    };
}
