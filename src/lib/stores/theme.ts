import { persistentAtom } from "@nanostores/persistent";
import { onMount } from "nanostores";

export const THEME_MAP = {
  light: "light",
  dark: "dark",
  system: undefined,
} as const;

export type ThemeKey = keyof typeof THEME_MAP;
export type ThemeValue = (typeof THEME_MAP)[ThemeKey];

export const STORAGE_THEME_KEY = "theme" as const;

export const themeStore = persistentAtom<ThemeValue>(
  STORAGE_THEME_KEY,
  THEME_MAP.system,
);

// Subscribe to global state when themeStore changes
const initThemeStoreSubscribe = () => {
  const applyTheme = (theme: ThemeValue) => {
    if (theme === THEME_MAP.dark) {
      document.documentElement.classList.add("dark");
    } else if (theme === THEME_MAP.light) {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleMediaQuery = (query: { matches: boolean }) => {
    applyTheme(query.matches ? "dark" : "light");
  };

  themeStore.subscribe((theme) => {
    if (theme !== THEME_MAP.system) {
      applyTheme(theme);
      return;
    }
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    // Make sure the EventListener is not registered redundantly by removing it before registering it.
    mediaQuery.removeEventListener("change", handleMediaQuery);
    mediaQuery.addEventListener("change", handleMediaQuery);
    handleMediaQuery(mediaQuery);
  });
};

// Don't run it in the SSR.
if (typeof window !== "undefined") {
  onMount(themeStore, () => {
    initThemeStoreSubscribe();
  });
}
