import Link from "next/link";
import { useState } from "react";
import { Search as SearchIcon, X } from "tabler-icons-react";

import { Search } from "@/types/Search";
import { PathSegment } from "@/types/PathSegment";
import { firstLetterToUpperCase } from "@/utils/string";

export default function SearchModal({
  data,
  close = () => {},
}: {
  data: Search[];
  close: () => void;
}) {
  const [search, setSearch] = useState("");

  const filteredLessons = data.filter((lesson) => {
    return lesson.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <section className="fixed z-50 inset-0 w-full flex justify-center bg-[#000000E1] py-12 px-4">
      <div className="flex flex-col max-w-3xl w-full">
        <div className="flex items-center justify-between text-gray-300 border-b border-gray-700 bg-accent px-6 py-4 rounded-t-md">
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
        <div className="flex flex-col gap-2 py-4 h-96 overflow-y-auto bg-accent rounded-b-md">
          {filteredLessons.map((lesson) => (
            <Link
              href={lesson.url}
              className="hover:bg-slate-600 px-6 py-2"
              onClick={close}
            >
              <span className="text-sm text-gray-400">
                {lesson.pathSegaments.length === 1
                  ? "Overview"
                  : lesson.pathSegaments
                      .slice(0, -1)
                      .map((segment: PathSegment) =>
                        firstLetterToUpperCase(segment.pathName)
                      )}
              </span>
              <h1 className="text-gray-200 font-medium">{lesson.title}</h1>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
