import React from "react";
import {
  IconCpu,
  IconTool,
  IconHelp,
  IconLock,
  IconPower,
  IconGizmo,
  IconShare,
  IconFolder,
  IconRocket,
  IconRouter,
  IconNetwork,
  IconRefresh,
  IconServer2,
  IconChartPie,
  IconCodeDots,
  IconPackages,
  IconUserEdit,
  IconServerCog,
  IconTerminal2,
  IconTextResize,
  IconFilePencil,
  IconCloudDataConnection,
} from "@tabler/icons-react";

export interface Lesson {
  title: string;
  excerpt: string;
  icon: React.ElementType;
}

export const terminal: Lesson[] = [
  // Basics
  {
    title: "Getting Started",
    excerpt: "What is Linux? Get started with choosing a distribution and installation.",
    icon: IconRocket,
  },
  {
    title: "Command Line",
    excerpt: "Learn the fundamentals of the command line, navigating files, directories and more.",
    icon: IconTerminal2,
  },
  {
    title: "Text-Fu",
    excerpt: "Learn basic text manipulation and navigation.",
    icon: IconTextResize,
  },
  {
    title: "Advanced Text-Fu",
    excerpt: "Navigate text like a Linux spider monkey with vim and emacs.",
    icon: IconCodeDots,
  },
  {
    title: "User Management",
    excerpt: "Learn about user roles and management.",
    icon: IconUserEdit,
  },
  {
    title: "Permissions",
    excerpt: "Learn about permission levels and modifying permissions.",
    icon: IconLock,
  },
  {
    title: "Processes",
    excerpt: "Learn about the running processes on the system.",
    icon: IconCpu,
  },
  {
    title: "Packages",
    excerpt: "Learn all about the dpkg, apt-get, rpm and yum package management tools.",
    icon: IconPackages,
  },
];

export const system = [
  {
    title: "Devices",
    excerpt: "Learn about Linux devices and how they interact with the kernel and user space.",
    icon: IconServer2,
  },
  {
    title: "The Filesystem",
    excerpt: "Learn about the Linux filesystem, the different types of filesystems, partitioning and more.",
    icon: IconFolder,
  },
  {
    title: "Boot the System",
    excerpt: "Learn about the stages of the Linux boot process.",
    icon: IconPower,
  },
  {
    title: "Kernel",
    excerpt: "The most important part of the Linux system, learn about how it works and how to configure it.",
    icon: IconTool,
  },
  {
    title: "Init",
    excerpt: "Learn about the different init systems, SysV, Upstart and systemd.",
    icon: IconRefresh,
  },
  {
    title: "Process Utilization",
    excerpt: "Learn resource monitoring with top, load averages, iostat and more!",
    icon: IconChartPie,
  },
  {
    title: "Logging",
    excerpt: "Learn about system logs and the /var/log directory.",
    icon: IconFilePencil,
  },
];

export const networking = [
  {
    title: "Network Sharing",
    excerpt: "Learn about network sharing with rsync, scp, nfs and more.",
    icon: IconShare,
  },
  {
    title: "Network Basics",
    excerpt: "Learn about networking basics and the TCP/IP model.",
    icon: IconNetwork,
  },
  {
    title: "Subnetting",
    excerpt: "Learn about subnets and how to do subnet arithmetic!",
    icon: IconGizmo,
  },
  {
    title: "Routing",
    excerpt: "Learn how packets are routed across networks!",
    icon: IconRouter,
  },
  {
    title: "Network Config",
    excerpt: "Learn about network configuration using Linux tools!",
    icon: IconServerCog,
  },
  {
    title: "Troubleshooting",
    excerpt: "Learn about common networking tools to help you diagnose and troubleshoot issues!",
    icon: IconHelp,
  },
  {
    title: "DNS",
    excerpt: "Everything and more that you wanted to know about DNS.",
    icon: IconCloudDataConnection,
  },
];
