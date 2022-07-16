import create from "zustand";
import { devtools } from "zustand/middleware";

interface TeamStore {
  items: string;
  groups: number;
  teams: string[][] | null;
  addItems: (item: string) => void;
  addGroups: (size: number) => void;
}

const useStore = create<TeamStore>()(
  devtools((set) => ({
    items: "",
    groups: 1,
    teams: null,
    addItems: (item) => set({ items: item }),
    addGroups: (size) => set({ groups: Math.abs(size) }),
  }))
);

export const useTeamStore = useStore;
