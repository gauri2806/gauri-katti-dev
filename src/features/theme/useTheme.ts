
import { useEffect, useState } from "react";

export type Theme = "dark" | "light";

const STORAGE_KEY = "gauri-portfolio-theme";

function getInitialTheme(): Theme {
    try {
        const savedTheme = localStorage.getItem(STORAGE_KEY);

        if (savedTheme === "light" || savedTheme === "dark") {
            return savedTheme;
        }
    } catch {
        // Fall back to dark theme if localStorage is unavailable.
    }

    return "dark";
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

    const toggleTheme = () => {
        setTheme((current) => (current === "dark" ? "light" : "dark"));
    };

    return {
        theme,
        toggleTheme,
        isDark: theme === "dark",
    };
}
