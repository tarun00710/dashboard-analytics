
export const applyThemePreference = (theme:"light"|"dark") => {
  const root = window.document.documentElement;
  const isDark = theme === "dark";
  root.classList.remove(isDark ? "light" : "dark");
  root.classList.add(theme);
};