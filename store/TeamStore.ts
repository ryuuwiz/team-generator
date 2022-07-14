import create from "zustand";
import { devtools } from "zustand/middleware";
// import { immer } from "zustand/middleware/immer";
import { chunk, shuffle } from "lodash";

interface TeamStore {
  items: string[];
  teams: string[][];
  groups: number;
  addItems: (value: string) => void;
  addGroups: (value: number) => void;
}

const useStore = create<TeamStore>()(
  devtools((set, get) => ({
    items: [],
    teams: [[]],
    groups: 1,
    addItems: (value) =>
      set({
        items: value.replace(/^\s+|\s+$/gm, "").split("\n"),
      }),
    addGroups: (value) =>
      set({
        groups: Math.ceil(
          parseFloat(String(get().items.length / Number(value)))
        ),
      }),
  }))
);

export const useTeamStore = useStore;
