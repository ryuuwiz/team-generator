import create from "zustand";
import { devtools } from "zustand/middleware";

interface TeamStore {
  items: string | null;
  groups: number;
  teams: string[][] | null;
}

const useStore = create<TeamStore>()(
  devtools((set) => ({
    items: null,
    groups: 0,
    teams: null,
  }))
);

export const useTeamStore = useStore;
