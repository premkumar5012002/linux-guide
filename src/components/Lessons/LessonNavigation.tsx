"use client";

import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { FC, useLayoutEffect, useState } from "react";
import { IconChevronDown, IconChevronRight } from "@tabler/icons-react";

import { TreeNode } from "@/types/TreeNode";

import { useStore } from "@/store/globalStore";

function LessonNavigation() {
  const treeNode = useStore((state) => state.lessons);

  return (
    <aside>
      <Tree tree={treeNode} level={0} />
    </aside>
  );
}

const Tree: FC<{ tree: TreeNode[]; level: number }> = ({ tree, level }) => {
  const activePath = usePathname();

  return (
    <div className={classNames(level === 0 ? "space-y-3" : "border-l border-outline space-y-2 ml-3 pl-2.5")}>
      {tree.map((treeNode, index) => (
        <Node key={index} level={level} node={treeNode} activePath={activePath} />
      ))}
    </div>
  );
};

const Node: FC<{ node: TreeNode; level: number; activePath: string }> = ({ node, level, activePath }) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  const toggleCollapsed = () => setCollapsed(!collapsed);

  useLayoutEffect(() => {
    if (activePath == node.urlPath || node.children.map((_) => _.urlPath).includes(activePath)) {
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
      {node.children.length > 0 && !collapsed && <Tree tree={node.children} level={level + 1} />}
    </>
  );
};

const NavLink: FC<{
  url: string;
  level: number;
  label: string;
  activePath: string;
  collapsed: boolean;
  collapsible: boolean;
  toggleCollapsed: () => void;
}> = ({ label, url, level, activePath, collapsed, collapsible, toggleCollapsed }) => {
  const state = useStore((state) => ({
    showLessonDrawer: state.showLessonDrawer,
    toggleLessonDrawer: state.toggleLessonDrawer,
  }));

  const close = () => {
    if (state.showLessonDrawer) {
      state.toggleLessonDrawer();
    }
  };

  const activeClass = classNames(
    "flex items-center justify-between text-white font-medium bg-secondary shadow-md w-full px-2.5 rounded-md border border-outline"
  );

  const inActiveClass = classNames(
    "flex items-center justify-between font-medium hover:bg-secondary w-full px-2.5 rounded-md border border-transparent",
    level === 0 ? "text-white" : "text-gray-300"
  );

  return (
    <div className={activePath === url ? activeClass : inActiveClass}>
      <Link href={url} className="w-full py-1.5" onClick={close}>
        {label}
      </Link>
      {collapsible && (
        <button className="p-1.5" type="button" title="Toggle Collapsed" onClick={toggleCollapsed}>
          {collapsed ? <IconChevronRight className="w-5 h-5" /> : <IconChevronDown className="w-5 h-5" />}
        </button>
      )}
    </div>
  );
};

export default LessonNavigation;
