import { PropsWithChildren } from "react";

import LessonNavigation from "@/components/Lessons/LessonNavigation";
import DrawerLessonNavigation from "@/components/Lessons/LessonNavigationDrawer";

export default function Layout(props: PropsWithChildren) {
  return (
    <div className="mx-auto max-w-screen-2xl block lg:flex 2xl:block">
      <DrawerLessonNavigation />
      <div className="fixed z-40 py-6 border-r border-outline w-72 hidden lg:block h-[calc(100vh-65px)] overflow-y-auto px-3">
        <LessonNavigation />
      </div>
      <div className="py-12 px-6 md:px-0 lg:px-12 2xl:px-0 lg:ml-80 xl:ml-[420px] 2xl:ml-[480px]">{props.children}</div>
    </div>
  );
}
