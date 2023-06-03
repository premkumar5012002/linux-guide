import { PathSegment } from "./PathSegment";

export type TreeNode = {
  title: string;
  label: string;
  urlPath: string;
  children: TreeNode[];
};
