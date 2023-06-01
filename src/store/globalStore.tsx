import { create } from "zustand";
import { TreeNode } from "@/types/TreeNode";

type State = {
  lessons: TreeNode[];
  showDrawer: boolean;
};

type Actions = {
  toggleDrawer: () => void;
  hydrateStore: (lessons: TreeNode[]) => void;
};

export const useStore = create<State & Actions>((set) => ({
  lessons: [],
  showDrawer: false,
  toggleDrawer: () => set((prev) => ({ showDrawer: !prev.showDrawer })),
  hydrateStore: (lessons) => set(() => ({ lessons })),
}));
