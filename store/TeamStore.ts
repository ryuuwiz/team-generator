import create from "zustand";
import { devtools } from "zustand/middleware";
import chunkArr from "../helper/chunksArr";
import shuffleArr from "../helper/shuffleArr";

interface TeamStore {
  items: string;
  groups: number;
  teams: string[][] | null;
  addItems: (item: string) => void;
  addGroups: (size: number) => void;
  generateTeams: () => void;
}

const useStore = create<TeamStore>()(
  devtools((set, get) => ({
    items: "",
    groups: 1,
    teams: null,
    addItems: (item) => set({ items: item }),
    addGroups: (size) => set({ groups: Math.abs(size) }),
    generateTeams: () =>
      set({
        teams: chunkArr(shuffleArr(get().items), get().groups),
      }),
  }))
);

export const useTeamStore = useStore;
