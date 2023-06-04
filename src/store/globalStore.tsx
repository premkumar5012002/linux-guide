import { create } from "zustand";
import { TreeNode } from "@/types/TreeNode";

type State = {
  lessons: TreeNode[];
  showLessonDrawer: boolean;
};

type Actions = {
  toggleLessonDrawer: () => void;
  hydrateStore: (lessons: TreeNode[]) => void;
};

export const useStore = create<State & Actions>((set) => ({
  lessons: [],
  showLessonDrawer: false,
  hydrateStore: (lessons) => set(() => ({ lessons })),
  toggleLessonDrawer: () => set((prev) => ({ showLessonDrawer: !prev.showLessonDrawer })),
}));
