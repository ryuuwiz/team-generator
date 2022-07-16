import create from "zustand";
import { devtools } from "zustand/middleware";
import chunkArr from "../helper/chunksArr";
import shuffleArr from "../helper/shuffleArr";

interface TeamStore {
  items: string;
  groups: number;
  teams: string[][];
  addItems: (item: string) => void;
  addGroups: (size: number) => void;
  generateTeams: () => void;
  clearAll: () => void;
}

const createTeam = (data: string, size: number): string[][] =>
  chunkArr(shuffleArr(data), size);

const useStore = create<TeamStore>()(
  devtools((set, get) => ({
    items: "",
    groups: 1,
    teams: [],
    addItems: (item) => set({ items: item }),
    addGroups: (size) => set({ groups: Math.abs(size) }),
    generateTeams: () =>
      set({
        teams: createTeam(get().items, get().groups),
      }),
    clearAll: () =>
      set({
        items: "",
        groups: 1,
        teams: [],
      }),
  }))
);

export const useTeamStore = useStore;
