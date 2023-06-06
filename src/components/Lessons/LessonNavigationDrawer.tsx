"use client";

import { useStore } from "@/store/globalStore";

import LessonNavigation from "@/components/Lessons/LessonNavigation";

export default function DrawerLessonNavigation() {
  const drawerState = useStore((state) => state.drawerState);

  if (!drawerState) return null;

  return (
    <div className="fixed z-50 p-5 h-[calc(100vh-65px)] w-full lg:hidden bg-primary border-t border-outline overflow-y-scroll">
      <LessonNavigation />
    </div>
  );
}
