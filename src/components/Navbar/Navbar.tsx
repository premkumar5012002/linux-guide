"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ButtonHTMLAttributes } from "react";
import { IconMenu, IconX } from "@tabler/icons-react";

import { useStore } from "@/store/globalStore";

import Search from "@/components/Navbar/Search";

export default function Navbar() {
  return (
    <nav className="fixed z-50 border-b border-outline w-full bg-primary">
      <div className="flex items-center justify-between max-w-screen-2xl m-auto h-16 px-4">
        <div className="flex items-center gap-3">
          <DrawerButton />
          <LinuxGuideLogo />
        </div>
        <Search />
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

  const { drawerState, toggleDrawerState } = useStore((state) => ({
    drawerState: state.drawerState,
    toggleDrawerState: state.toggleDrawerState,
  }));

  if (!isLesson) return null;

  const ButtonProps: ButtonHTMLAttributes<HTMLButtonElement> = {
    type: "button",
    title: "Toggle Lesson Drawer",
    className: "block lg:hidden",
  };

  return (
    <button {...ButtonProps} onClick={toggleDrawerState}>
      {drawerState ? <IconX className="text-gray-300" /> : <IconMenu className="text-gray-300" />}
    </button>
  );
}
