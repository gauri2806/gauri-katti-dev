export interface WheelOption {
    id: string;
    label: string;
}

export const MAX_OPTIONS = 16;

export const OPTION_PRESETS: Record<string, string[]> = {
    "Food choices": [
        "Pizza",
        "Burger",
        "Pasta",
        "Sushi",
        "Tacos",
        "Dosa",
    ],

    "Weekend plans": [
        "Movie night",
        "Go for a walk",
        "Try a new cafe",
        "Stay home",
        "Go shopping",
        "Explore somewhere new",
    ],

    "Movie genres": [
        "Comedy",
        "Thriller",
        "Romance",
        "Horror",
        "Sci-fi",
        "Adventure",
    ],

    "Yes or No": [
        "Yes",
        "No",
    ],

    "Colors": [
        "Coral",
        "Lavender",
        "Mint",
        "Sky Blue",
        "Sunset Orange",
        "Rose",
    ],
};