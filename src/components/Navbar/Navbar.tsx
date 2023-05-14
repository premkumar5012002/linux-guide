"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IconBrandGithub, IconSearch } from "@tabler/icons-react";

import { Search } from "@/types/Search";

import SearchModal from "@/components/SearchModal/SearchModal";

export default function Navbar({ searchData }: { searchData: Search[] }) {
  const [showSearch, setShowSearch] = useState(false);

  const openSearchModal = () => setShowSearch(true);
  const closeSearchModal = () => setShowSearch(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "/" && !showSearch) {
        event.preventDefault();
        openSearchModal();
      } else if (event.key === "Escape" && showSearch) {
        event.preventDefault();
        closeSearchModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showSearch]);

  return (
    <>
      <nav className="fixed z-40 px-4 border-b border-outline w-full bg-background">
        <div className="flex items-center justify-between max-w-screen-2xl m-auto h-16">
          <LinuxGuideLogo />
          <div className="flex items-center divide-x divide-gray-600">
            <div className="mr-4">
              <SearchBox onClick={openSearchModal} />
              <SearchButton onClick={openSearchModal} />
            </div>
            <Links />
          </div>
        </div>
      </nav>
      {showSearch && <SearchModal data={searchData} close={closeSearchModal} />}
    </>
  );
}

function LinuxGuideLogo() {
  return (
    <Link href="/" className="flex items-center gap-4">
      <Image src="/linux.svg" alt="Linux Guide Logo" width={35} height={35} />
      <span className="text-white font-semibold">Linuxguide</span>
    </Link>
  );
}

function SearchButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      title="Search"
      className="text-gray-500 block lg:hidden"
      onClick={onClick}
    >
      <IconSearch />
    </button>
  );
}

function SearchBox({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="hidden lg:flex items-center bg-accent pl-2 pr-20 py-2 rounded-md border border-outline-accent cursor-text"
      onClick={onClick}
    >
      <div className="flex items-center text-gray-300 gap-1.5">
        <IconSearch className="w-5 h-5" />
        <span className="text-sm font-medium">
          Type
          <span className="border border-outline-accent mx-1.5 px-1.5 py-1 rounded-md text-xs">
            /
          </span>
          to search
        </span>
      </div>
    </div>
  );
}

function Links() {
  return (
    <div className="flex item-center gap-3 pl-4">
      <Link
        target="_blank"
        href="https://github.com/premkumar5012002/linux-guide"
        className="text-gray-400"
      >
        <IconBrandGithub />
      </Link>
    </div>
  );
}
