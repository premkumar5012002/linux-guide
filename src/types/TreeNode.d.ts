export type TreeNode = {
  order: number;
  label: string;
  urlPath?: string;
  pathName: string;
  children: TreeNode[];
};
