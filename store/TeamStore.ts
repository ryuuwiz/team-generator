import create from "zustand";
import { devtools } from "zustand/middleware";
// import { immer } from "zustand/middleware/immer";
// import { chunk, shuffle } from "lodash";

interface TeamStore {
  items: string[];
  teams: string[][];
  groups: number;
  addItems: (item: string) => void;
  addGroups: (group: number) => void;
}

const useStore = create<TeamStore>()(
  devtools((set, get) => ({
    items: [],
    teams: [[]],
    groups: 0,

    // Convert string params to array element
    addItems: (item) =>
      set({
        items: item !== "" ? item.replace(/^\s+|\s+$/gm, "").split("\n") : [],
      }),

    // Divide array len with params then get ceil number
    addGroups: (group) =>
      set({
        groups: Math.ceil(parseFloat(String(get().items.length / group))),
      }),
  }))
);

export const useTeamStore = useStore;
