import { Inter, Fira_Code } from "next/font/google";

import "../../styles/prose.css";
import "../../styles/globals.css";
import "../../styles/highlight.css";

import { StoreInitializer } from "@/store/storeInitializer";
import { buildLessonTree } from "@/utils/buildLessonTee";

import Navbar from "@/components/Navbar/Navbar";
import { allLessons } from "contentlayer/generated";

export const metadata = {
  title: "Linux Guide",
  description: "Learning Hub Guiding Beginners on their Linux Adventure",
};

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const fira_code = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const treeNode = buildLessonTree(allLessons);
  return (
    <html lang="en" className={`${inter.variable} ${fira_code.variable}`}>
      <body>
        <StoreInitializer lessons={treeNode} />
        <Navbar />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
