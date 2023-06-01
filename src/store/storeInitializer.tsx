"use client";

import { TreeNode } from "@/types/TreeNode";
import { useStore } from "@/store/globalStore";
import { PropsWithChildren, useRef } from "react";

interface StoreInitializerProps extends PropsWithChildren {
  lessons: TreeNode[];
}

export function StoreInitializer({ lessons }: StoreInitializerProps) {
  const initializedBefore = useRef(false);

  if (!initializedBefore.current) {
    useStore.getState().hydrateStore(lessons);
    initializedBefore.current = true;
  }

  return null;
}
