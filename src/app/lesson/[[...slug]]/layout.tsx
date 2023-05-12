import { PropsWithChildren } from "react";

import { buildLessonTree } from "@/utils/buildLessonTee";
import LessonNavigation from "@/components/LessonNavigation/LessonNavigation";

export default function Layout(props: PropsWithChildren) {
  const tree = buildLessonTree();
  return (
    <div className="mx-auto w-full max-w-screen-2xl pt-16 block lg:flex 2xl:block">
      <div className="fixed z-50 py-8 border-r border-gray-800 w-80 hidden lg:block h-[calc(100vh-64px)]">
        <div className="overflow-y-auto">
          <LessonNavigation treeNode={tree} />
        </div>
      </div>
      <div className="py-8 px-6 md:px-0 lg:px-12 2xl:px-0 lg:ml-80 xl:ml-[440px] 2xl:ml-0">
        {props.children}
      </div>
    </div>
  );
}
