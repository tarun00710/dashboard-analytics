import { applyThemePreference } from "@/component/theme/ThemeProvider";
import { useThemeStore } from "@/store/themeStore";
import { useEffect } from "react";

export const useTheme = () => {
  const {theme} = useThemeStore();
  useEffect(() => {
    applyThemePreference(theme);
  }, [theme]);
};