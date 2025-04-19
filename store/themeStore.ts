import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type ThemeState = {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "light",
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light", 
        })),
    }),
    {
      name: "theme",
    }
  )
)
