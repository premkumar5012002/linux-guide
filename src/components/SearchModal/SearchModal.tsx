import Link from "next/link";
import { useState } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import { IconSearch, IconX, IconFileText } from "@tabler/icons-react";

import { TreeNode } from "@/types/TreeNode";

import { useStore } from "@/store/globalStore";

import { Backdrop } from "@/components/Common/Backdrop";

const variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.15,
      ease: "easeOut",
    },
  },
};

const getFilteredTreeNode = (search: String, treeNode: TreeNode): TreeNode | null => {
  const isMatch = treeNode.title?.toLowerCase().includes(search.toLowerCase());

  const filteredNodes: TreeNode[] = treeNode.children
    .map((node) => getFilteredTreeNode(search, node))
    .filter((node): node is TreeNode => !!node);

  if (isMatch || filteredNodes.length > 0) {
    return {
      title: treeNode.title,
      label: treeNode.label,
      urlPath: treeNode.urlPath,
      children: filteredNodes,
    };
  }

  return null;
};

export default function SearchModal({ close }: { close: () => void }) {
  const [search, setSearch] = useState("");

  const treeNode = useStore((state) => state.lessons);

  const filteredNodes = treeNode
    .map((node) => getFilteredTreeNode(search, node))
    .filter((node): node is TreeNode => !!node);

  const MotionDivProps = {
    exit: "exit",
    initial: "hidden",
    animate: "visible",
    variants: variants,
    className: "fixed z-50 inset-0 w-full flex justify-center bg-[#000000E1] py-12 px-4",
  };

  return (
    <Backdrop onClick={close}>
      <motion.div {...MotionDivProps} onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}>
        <div className="flex flex-col max-w-3xl w-full">
          <div className="flex items-center justify-between text-gray-300 border-b border-outline bg-primary px-6 py-4 rounded-t-md">
            <div className="flex items-center gap-4">
              <IconSearch className="w-6 h-6" />
              <input
                autoFocus
                type="text"
                title="Search"
                value={search}
                placeholder="Search..."
                className="w-full bg-transparent outline-none"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button type="button" title="Close" onClick={close}>
              <IconX className="w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-col gap-1 py-4 h-96 overflow-y-auto bg-primary rounded-b-md px-4">
            {filteredNodes.map((lesson) => (
              <LessonLink key={lesson.urlPath} lesson={lesson} close={close} />
            ))}
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
}

function LessonLink({ lesson, close, level = 0 }: { lesson: TreeNode; close: () => void; level?: number }) {
  const LinkProps = {
    href: lesson.urlPath,
    onClick: close,
    className: classNames(
      "flex gap-2 hover:bg-secondary py-3 px-4 rounded-md",
      level === 0 ? "text-white" : "text-gray-300"
    ),
  };
  return (
    <div className="flex flex-col gap-1">
      <Link {...LinkProps}>
        <IconFileText />
        <p className="font-medium">{lesson.title}</p>
      </Link>
      <div className="flex flex-col gap-1 ml-7 px-4 border-l border-outline">
        {lesson.children.map((lesson) => (
          <LessonLink key={lesson.urlPath} lesson={lesson} close={close} level={level + 1} />
        ))}
      </div>
    </div>
  );
}
