import { PropsWithChildren } from "react";

import { buildLessonTreeNode } from "@/utils/buildLessonTee";

import LessonNavigation from "@/components/LessonNavigation/LessonNavigation";

export default function Layout(props: PropsWithChildren) {
  const treeNode = buildLessonTreeNode();
  return (
    <div className="mx-auto max-w-screen-2xl block lg:flex 2xl:block">
      <div className="fixed z-40 py-8 border-r border-outline w-72 hidden lg:block h-[calc(100vh-64px)] overflow-y-auto px-4 2xl:pl-0 2xl:pr-4">
        <LessonNavigation treeNode={treeNode} />
      </div>
      <div className="py-12 px-6 md:px-0 lg:px-12 2xl:px-0 lg:ml-80 xl:ml-[420px] 2xl:ml-[480px]">
        {props.children}
      </div>
    </div>
  );
}
