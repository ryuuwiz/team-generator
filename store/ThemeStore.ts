import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ThemeStore {
  dark: boolean;
  toggleDarkMode: () => void;
}

const useStore = create<ThemeStore>()(
  devtools(
    persist(
      (set, get) => ({
        dark: false,
        toggleDarkMode: () => set({ dark: !get().dark }),
      }),
      {
        name: "tg-theme-storage",
        getStorage: () => localStorage,
      }
    )
  )
);

export const useThemeStore = useStore;
