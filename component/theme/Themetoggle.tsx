// components/ThemeToggle.tsx
"use client";

import { useThemeStore } from "@/store/themeStore";
import { SunIcon, MoonIcon } from "lucide-react";
import { useEffect } from "react";
import { applyThemePreference } from "./ThemeProvider";

export default function ThemeToggle() {
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const theme = useThemeStore((state) => state.theme);
  useEffect(() => {
    applyThemePreference(theme);
  }, [theme]);
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {theme === "light" ? <MoonIcon size={20} /> : <SunIcon size={20} />}
    </button>
  );
}
