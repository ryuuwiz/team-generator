import create from "zustand";
import { devtools } from "zustand/middleware";

export type TeamStore = {
  items: string[];
  teams: string[][];
  addItems: (item: string) => void;
};

const useStore = create<TeamStore>()(
  devtools((set, get) => ({
    items: [],
    teams: [],

    // Convert string params to array element
    addItems: (item) =>
      set({
        items: item !== "" ? item.replace(/^\s+|\s+$/gm, "").split("\n") : [],
      }),
  }))
);

export const useTeamStore = useStore;
