import { TreeNode } from "@/types/TreeNode";
import { PathSegment } from "@/types/PathSegment";
import { allLessons } from "contentlayer/generated";

export function buildLessonTreeNode() {
  const treeNode: TreeNode[] = [];

  allLessons.forEach((lesson) => {
    const pathSegments = lesson.pathSegments;

    let parentNode: TreeNode | undefined;

    pathSegments.forEach((pathSegament: PathSegment) => {
      parentNode = findOrCreateNode(pathSegament, treeNode, parentNode);
    });
  });

  sortTreeNode(treeNode);

  return treeNode;
}

function findOrCreateNode(
  pathSegament: PathSegment,
  treeNode: TreeNode[],
  parentNode?: TreeNode
) {
  let node: TreeNode | undefined = findNode(treeNode, pathSegament);

  if (node === undefined) {
    const lesson = findLesson(pathSegament.pathName);

    node = {
      order: pathSegament.order,
      label: lesson?.label ?? pathSegament.pathName,
      urlPath: lesson?.url_path,
      pathName: pathSegament.pathName,
      children: [],
    };

    if (parentNode !== undefined) {
      parentNode.children.push(node);
    } else {
      treeNode.push(node);
    }
  }

  return node;
}

function findNode(treeNode: TreeNode[], pathSegament: PathSegment) {
  return treeNode.find((node) => node.pathName === pathSegament.pathName);
}

function findLesson(pathName: string) {
  return allLessons.find(
    (lesson) => lesson.pathSegments.at(-1).pathName === pathName
  );
}

function sortTreeNode(treeNode: TreeNode[]) {
  treeNode.sort((a, b) => a.order - b.order);

  treeNode.forEach((node) => {
    sortTreeNode(node.children);
  });
}
