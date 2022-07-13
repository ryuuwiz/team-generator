import create from "zustand";
import { persist } from "zustand/middleware";

interface ThemeStore {
  dark: boolean;
}

const useStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      dark: false,
      addAFish: () => set({ dark: !get().dark }),
    }),
    {
      name: "tg-theme-storage",
      getStorage: () => localStorage,
    }
  )
);

export const useThemeStore = useStore;
