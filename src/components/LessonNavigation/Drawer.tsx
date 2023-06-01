"use client";

import { useStore } from "@/store/globalStore";

import LessonNavigation from "@/components/LessonNavigation/LessonNavigation";

export default function DrawerLessonNavigation() {
  const showDrawer = useStore((state) => state.showDrawer);

  if (!showDrawer) return null;

  return (
    <div className="fixed z-40 w-full lg:hidden bg-primary h-screen p-5 border-t border-outline overflow-y-scroll">
      <LessonNavigation />
    </div>
  );
}