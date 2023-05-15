"use client";

import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { ChevronDown, ChevronRight } from "tabler-icons-react";

import { TreeNode } from "@/types/TreeNode";
import { firstLetterToUpperCase } from "@/utils/string";

function LessonNavigation({ treeNode }: { treeNode: TreeNode[] }) {
  return (
    <aside>
      <Tree tree={treeNode} level={0} />
    </aside>
  );
}

const Tree: FC<{ tree: TreeNode[]; level: number }> = ({ tree, level }) => {
  const activePath = usePathname();

  return (
    <div
      className={classNames(
        level === 0
          ? "space-y-2"
          : "border-l border-outline space-y-2 ml-3 pl-2.5"
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
  const [collapsed, setCollapsed] = useState<boolean>(true);

  const toggleCollapsed = () => setCollapsed(!collapsed);

  useEffect(() => {
    if (
      activePath == node.urlPath ||
      node.children.map((_) => _.urlPath).includes(activePath)
    ) {
      setCollapsed(false);
    }
  }, [activePath, node.children, node.urlPath]);

  if (activePath === null) return null;

  return (
    <>
      <NavLink
        level={level}
        label={node.label}
        url={node.urlPath}
        activePath={activePath}
        collapsed={collapsed}
        toggleCollapsed={toggleCollapsed}
        collapsible={node.children.length > 0}
      />
      {node.children.length > 0 && !collapsed && (
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
  collapsed: boolean;
  collapsible: boolean;
  toggleCollapsed: () => void;
}> = ({
  label,
  url,
  level,
  activePath,
  collapsed,
  collapsible,
  toggleCollapsed,
}) => {
  const activeClass = `text-white text-sm font-medium bg-accent shadow-md w-full px-2.5 py-1.5 rounded-md border border-outline-accent`;

  const inActiveClass = `text-sm font-medium hover:bg-accent w-full px-2.5 py-1.5 rounded-md border border-transparent ${
    level === 0 ? "text-white" : "text-gray-300"
  }`;

  return url ? (
    <Link
      scroll={true}
      href={url}
      className={classNames(
        "flex items-center justify-between",
        activePath === url ? activeClass : inActiveClass
      )}
    >
      <span>{label}</span>
      {collapsible && (
        <button
          type="button"
          title="Toggle Collapsed"
          onClick={toggleCollapsed}
        >
          {collapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </button>
      )}
    </Link>
  ) : (
    <div
      className={`flex items-center justify-between text-sm font-medium w-full px-2.5 py-1.5 rounded-md border border-transparent ${
        level === 0 ? "text-white" : "text-gray-300"
      }`}
    >
      <span>{firstLetterToUpperCase(label)}</span>
      {collapsible && (
        <button
          type="button"
          title="Toggle Collapsed"
          className="hover:bg-accent rounded-md p-1"
          onClick={toggleCollapsed}
        >
          {collapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </button>
      )}
    </div>
  );
};

export default LessonNavigation;
