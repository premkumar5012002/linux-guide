"use client";

import Link from "next/link";
import Image from "next/image";
import { ButtonHTMLAttributes } from "react";
import { usePathname } from "next/navigation";
import { IconMenu, IconX } from "@tabler/icons-react";

import { useStore } from "@/store/globalStore";

import Search from "@/components/Navbar/Search";
import SocialLinks from "@/components/Navbar/SocailLinks";

export default function Navbar() {
  return (
    <nav className="fixed z-50 px-4 border-b border-outline w-full bg-primary">
      <div className="flex items-center justify-between max-w-screen-2xl m-auto h-16">
        <div className="flex items-center gap-3">
          <DrawerButton />
          <LinuxGuideLogo />
        </div>
        <div className="flex items-center divide-x divide-gray-600">
          <div className="mr-4">
            <Search />
          </div>
          <SocialLinks />
        </div>
      </div>
    </nav>
  );
}

function LinuxGuideLogo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/linux.svg" alt="Linux Guide Logo" width={35} height={35} />
      <span className="text-white font-semibold">Linuxguide</span>
    </Link>
  );
}

function DrawerButton() {
  const pathname = usePathname();
  const isLesson = pathname.split("/").includes("lesson");

  const { showDrawer, toggleDrawer } = useStore((state) => ({
    showDrawer: state.showDrawer,
    toggleDrawer: state.toggleDrawer,
  }));

  if (!isLesson) return null;

  const ButtonProps: ButtonHTMLAttributes<HTMLButtonElement> = {
    type: "button",
    title: "Toggle Lesson Drawer",
    className: "block lg:hidden",
  };

  return (
    <button {...ButtonProps} onClick={toggleDrawer}>
      {showDrawer ? <IconX className="text-gray-300" /> : <IconMenu className="text-gray-300" />}
    </button>
  );
}
