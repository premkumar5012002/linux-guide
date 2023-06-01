import { PathSegment } from "./PathSegment";

export type TreeNode = {
  order: number;
  title?: string;
  label: string;
  urlPath?: string;
  pathName: string;
  children: TreeNode[];
  pathSegments?: PathSegment[];
};
