import { PropsWithChildren } from "react";

import { buildLessonTree } from "@/utils/buildLessonTee";
import LessonNavigation from "@/components/LessonNavigation/LessonNavigation";

export default function Layout(props: PropsWithChildren) {
  const tree = buildLessonTree();
  return (
    <div className="relative mx-auto w-full max-w-screen-2xl pt-16">
      <div className="hidden lg:block fixed z-50 overflow-y-auto">
        <LessonNavigation treeNode={tree} />
      </div>
      <div>{props.children}</div>
    </div>
  );
}
