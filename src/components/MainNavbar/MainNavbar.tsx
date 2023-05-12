import Link from "next/link";
import Image from "next/image";
import { IconBrandGithub, IconSearch } from "@tabler/icons-react";

export default function MainNavbar() {
  return (
    <nav className="fixed z-50 px-4 border-b border-gray-800 w-full">
      <div className="flex items-center justify-between max-w-screen-2xl m-auto h-16 bg-background">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/linux.svg"
            alt="Linux Guide Logo"
            width={35}
            height={35}
          />
          <span className="text-white font-semibold">Linuxguide</span>
        </Link>
        <div className="flex items-center divide-x divide-gray-600">
          {/* Search Bar */}
          <div>
            {/* Mobile */}
            <button
              type="button"
              title="Search Bar"
              className="mr-4 text-gray-500 block lg:hidden"
            >
              <IconSearch />
            </button>
            {/* Desktop */}
            <button
              type="button"
              className="hidden lg:flex items-center bg-accent pl-2 pr-20 py-2 rounded-md border border-gray-600 mr-4"
            >
              <div className="flex items-center text-gray-300 gap-1.5">
                <IconSearch className="w-5 h-5" />
                <span className="text-sm font-medium">
                  Type
                  <span className="border border-gray-600 mx-1.5 px-1.5 py-1 rounded-md text-xs">
                    /
                  </span>
                  to search
                </span>
              </div>
            </button>
          </div>
          {/* Social */}
          <button
            title="Project Repository"
            type="button"
            className="pl-4 text-gray-500"
          >
            <IconBrandGithub />
          </button>
        </div>
      </div>
    </nav>
  );
}
