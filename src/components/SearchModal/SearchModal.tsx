import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search as SearchIcon, X } from "tabler-icons-react";

import { useStore } from "@/store/globalStore";

import { TreeNode } from "@/types/TreeNode";
import { PathSegment } from "@/types/PathSegment";
import { firstLetterToUpperCase } from "@/utils/string";

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

export default function SearchModal({ close }: { close: () => void }) {
  const [search, setSearch] = useState("");

  const treeNode = useStore((state) => state.lessons);

  const filteredLessons = treeNode.filter((lesson) => {
    return lesson.label.toLowerCase().includes(search.toLowerCase());
  });

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
              <SearchIcon className="w-6 h-6" />
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
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-col gap-2 py-4 h-96 overflow-y-auto bg-primary rounded-b-md">
            {filteredLessons.map((lesson) => (
              <LessonLink key={lesson.pathName} lesson={lesson} />
            ))}
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
}

function LessonLink({ lesson }: { lesson: TreeNode }) {
  if (!lesson.urlPath || !lesson.pathSegments) return null;
  return (
    <Link key={lesson.urlPath} href={lesson.urlPath} className="hover:bg-secondary px-6 py-2" onClick={close}>
      <span className="text-sm text-gray-400">
        {lesson.pathSegments?.length === 1
          ? "Overview"
          : lesson.pathSegments.slice(0, -1).map((segment: PathSegment) => firstLetterToUpperCase(segment.pathName))}
      </span>
      <h1 className="text-gray-200 font-medium">{lesson.title}</h1>
    </Link>
  );
}
