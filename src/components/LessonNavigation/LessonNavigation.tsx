"use client";

import cntl from "cntl";
import Link from "next/link";
import { FC } from "react";
import { usePathname } from "next/navigation";

import { TreeNode } from "@/types/TreeNode";

function LessonNavigation({ treeNode }: { treeNode: TreeNode[] }) {
  return (
    <aside className="w-80 py-10 border-r border-gray-700 px-4 min-h-screen">
      <Tree tree={treeNode} level={0} />
    </aside>
  );
}

const Tree: FC<{ tree: TreeNode[]; level: number }> = ({ tree, level }) => {
  const activePath = usePathname();

  const TreeClass = cntl`
    ${
      level === 0
        ? "space-y-2"
        : "border-l border-gray-700 space-y-2 ml-3 pl-2.5"
    }
  `;

  if (activePath === null) return null;

  return (
    <div className={TreeClass}>
      {tree.map((treeNode, index) => (
        <Node
          key={index}
          node={treeNode}
          level={level}
          activePath={activePath}
        />
      ))}
    </div>
  );
};

const Node: FC<{ node: TreeNode; level: number; activePath: string }> = ({
  node,
  level,
  activePath,
}) => {
  if (activePath === null) return null;

  return (
    <>
      <NavLink
        level={level}
        label={node.label}
        url={node.urlPath}
        activePath={activePath}
      />
      {node.children.length > 0 && (
        <Tree tree={node.children} level={level + 1} />
      )}
    </>
  );
};

const NavLink: FC<{
  url?: string;
  level: number;
  label: string;
  activePath: string;
}> = ({ label, url, level, activePath }) => {
  const whenActive = cntl`
    text-white text-sm font-medium
    bg-accent shadow-md w-full px-2.5 py-1.5 
    rounded-md border border-gray-700
  `;

  const whenInactive = cntl`
    text-sm font-medium
    hover:bg-secondary w-full px-2.5 py-1.5 
    rounded-md border border-transparent
    ${level === 0 ? "text-gray-300" : "text-gray-400"}
  `;

  let isPathActive = true;

  if (activePath !== url) {
    if (`${activePath}/` !== url) {
      isPathActive = false;
    }
  }

  return (
    <div className="flex items-center">
      {url ? (
        <Link href={url} className={isPathActive ? whenActive : whenInactive}>
          <span>{label}</span>
        </Link>
      ) : (
        <div className={whenInactive}>
          <span>{label}</span>
        </div>
      )}
    </div>
  );
};

export default LessonNavigation;
