import { PropsWithChildren } from "react";

import { buildLessonTree } from "@/utils/buildLessonTee";
import LessonNavigation from "@/components/LessonNavigation/LessonNavigation";

export default function Layout(props: PropsWithChildren) {
  const tree = buildLessonTree();
  return (
    <div className="mx-auto max-w-screen-2xl pt-16 block lg:flex 2xl:block">
      <div className="fixed z-50 py-12 border-r border-gray-800 w-80 hidden lg:block h-[calc(100vh-64px)] overflow-y-auto px-4 2xl:pl-0 2xl:pr-4">
        <LessonNavigation treeNode={tree} />
      </div>
      <div className="py-12 px-6 md:px-0 lg:px-12 2xl:px-0 lg:ml-80 xl:ml-[420px] 2xl:ml-[480px]">
        {props.children}
      </div>
    </div>
  );
}
