import { Lesson } from "contentlayer/generated";

import { TreeNode } from "@/types/TreeNode";
import { PathSegment } from "@/types/PathSegment";

export const buildLessonTree = (lessons: Lesson[], parentPathNames: string[] = []): TreeNode[] => {
  const level = parentPathNames.length;
  return lessons
    .filter((_) => {
      return (
        _.pathSegments.length === level + 1 &&
        _.pathSegments
          .map((_: PathSegment) => _.pathName)
          .join("/")
          .startsWith(parentPathNames.join("/"))
      );
    })
    .sort((a, b) => a.pathSegments[level].order - b.pathSegments[level].order)
    .map<TreeNode>((lesson) => {
      let children: TreeNode[] = [];

      if (lesson.pathSegments[0]?.pathName !== "") {
        children = buildLessonTree(
          lessons,
          lesson.pathSegments.map((_: PathSegment) => _.pathName)
        );
      }

      return {
        title: lesson.title,
        label: lesson.label,
        urlPath: lesson.url_path,
        children,
      };
    });
};
