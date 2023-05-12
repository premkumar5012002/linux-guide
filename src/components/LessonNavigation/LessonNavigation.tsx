"use client";

import { FC } from "react";
import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";

import { TreeNode } from "@/types/TreeNode";

function LessonNavigation({ treeNode }: { treeNode: TreeNode[] }) {
  return (
    <aside className="px-4">
      <Tree tree={treeNode} level={0} />
    </aside>
  );
}

const Tree: FC<{ tree: TreeNode[]; level: number }> = ({ tree, level }) => {
  const activePath = usePathname();

  if (activePath === null) return null;

  return (
    <div
      className={classNames(
        level === 0
          ? "space-y-2"
          : "border-l border-gray-700 space-y-2 ml-3 pl-2.5"
      )}
    >
      {tree.map((treeNode, index) => (
        <Node
          key={index}
          level={level}
          node={treeNode}
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
  console.log("Active Path", activePath, "Url", url);

  return (
    <div className="flex items-center">
      {url ? (
        <Link
          href={url}
          className={classNames(
            activePath === url
              ? `text-white text-sm font-medium bg-accent shadow-md w-full px-2.5 py-1.5 rounded-md border border-gray-700`
              : `text-sm font-medium hover:bg-accent w-full px-2.5 py-1.5 rounded-md border border-transparent ${
                  level === 0 ? "text-gray-200" : "text-gray-400"
                }`
          )}
        >
          <span>{label}</span>
        </Link>
      ) : (
        <div className="text-xs font-semibold w-full px-2.5 py-2.5 rounded-md border border-transparent text-gray-200">
          <span>{label.replaceAll("-", " ").toUpperCase()}</span>
        </div>
      )}
    </div>
  );
};

export default LessonNavigation;
