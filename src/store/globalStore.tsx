import { create } from "zustand";

import { TreeNode } from "@/types/TreeNode";

type State = {
  lessons: TreeNode[];
  drawerState: boolean;
  totalExerciseState: number;
  currentExerciseState: number;
};

type Actions = {
  toggleDrawerState: () => void;
  hydrateStore: (lessons: TreeNode[]) => void;
  setTotalExerciseState: (value: number) => void;
  setCurrentExerciseState: (value: number) => void;
};

export const useStore = create<State & Actions>((set) => ({
  lessons: [],
  drawerState: false,
  totalExerciseState: 0,
  currentExerciseState: 0,
  hydrateStore: (lessons) => set(() => ({ lessons })),
  toggleDrawerState: () => set((prev) => ({ drawerState: !prev.drawerState })),
  setTotalExerciseState: (value: number) => set(() => ({ totalExerciseState: value })),
  setCurrentExerciseState: (value: number) => set(() => ({ currentExerciseState: value })),
}));
