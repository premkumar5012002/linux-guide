"use client";

import { useStore } from "@/store/globalStore";

import LessonNavigation from "@/components/Lessons/LessonNavigation";

export default function DrawerLessonNavigation() {
  const showLessonDrawer = useStore((state) => state.showLessonDrawer);

  if (!showLessonDrawer) return null;

  return (
    <div className="fixed z-40 w-full lg:hidden bg-primary h-[calc(100vh-65px)] p-5 border-t border-outline overflow-y-scroll">
      <LessonNavigation />
    </div>
  );
}
