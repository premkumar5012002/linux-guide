import Link from "next/link";
import Image from "next/image";

import { Lesson, networking, system, terminal } from "@/utils/lessons";
import { IconBrandGithub } from "@tabler/icons-react";

export default async function Home() {
  return (
    <main className="h-[calc(100vh-65px)]">
      {/* Intro */}
      <div className="py-16 lg:py-20 flex flex-col items-center justify-center gap-10 lg:gap-12 text-center bg-secondary px-8">
        <div className="space-y-3 lg:space-y-4">
          <Image src="/linux.svg" alt="Linux" width={140} height={140} className="mx-auto" />
          <p className="text-3xl lg:text-4xl font-bold text-white">Linux Guide</p>
          <p className="text-xl lg:text-2xl text-gray-300">Where Penguins Rule and Command Lines Reign!</p>
        </div>
        <Link href="/lesson/getting-started" className="text-lg font-semibold bg-white px-8 py-3 rounded">
          Start Learning
        </Link>
      </div>
      {/* Lessons */}
      <div className="max-w-screen-2xl m-auto px-4">
        <div className="pt-16 space-y-16">
          <h3 className="text-center text-3xl font-bold text-white">Linux Commands</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {terminal.map((lesson) => (
              <LessonCard key={lesson.title} lesson={lesson} />
            ))}
          </div>
        </div>
        <div className="pt-16 space-y-16">
          <h3 className="text-center text-3xl font-bold text-white">System Configuration</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {system.map((lesson) => (
              <LessonCard key={lesson.title} lesson={lesson} />
            ))}
          </div>
        </div>
        <div className="py-16 space-y-16">
          <h3 className="text-center text-3xl font-bold text-white">Networking In Linux</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {networking.map((lesson) => (
              <LessonCard key={lesson.title} lesson={lesson} />
            ))}
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-secondary">
        <div className="flex flex-col md:flex-row items-start gap-8 justify-between max-w-screen-2xl m-auto px-4 py-8">
          {/* Info */}
          <div className="space-y-2.5">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/linux.svg" alt="Linux Guide Logo" width={35} height={35} />
              <span className="text-white font-semibold">Linuxguide</span>
            </Link>
            <p className="text-sm text-gray-300 font-medium">MIT Licenced</p>
            <p className="text-sm text-gray-300 font-medium">
              <span>Made with 💜 by </span>
              <Link target="_blank" href="https://github.com/premkumar5012002" className="hover:underline">
                @premkumar5012002
              </Link>
            </p>
          </div>
          {/* Links */}
          <div className="space-y-2.5">
            <p className="text-white font-bold">Social Links</p>
            <Link
              target="_blank"
              href="https://github.com/premkumar5012002/linux-guide"
              className="flex items-center gap-1 text-gray-300 text-sm hover:underline"
            >
              <IconBrandGithub className="w-5 h-5" /> Github
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

interface LessonCardProps {
  lesson: Lesson;
}

function LessonCard(props: LessonCardProps) {
  return (
    <div className="bg-secondary shadow-md p-6 rounded-md flex flex-col justify-between gap-8 border border-outline">
      <div className="space-y-3.5 text-white">
        <props.lesson.icon className="w-12 h-12" />
        <div className="space-y-1">
          <h4 className="text-xl font-bold text-white">{props.lesson.title}</h4>
          <p className="text-gray-300">{props.lesson.excerpt}</p>
        </div>
      </div>
      <p className="text-white underline">Learn More →</p>
    </div>
  );
}
