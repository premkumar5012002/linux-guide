import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-[calc(100vh-65px)] gap-6">
      <h1 className="text-4xl font-medium text-white text-center">Website, Still under construction 🚧</h1>
      <p className="text-lg font-medium text-gray-200 text-center">
        You can contribute to this website by adding more commands
        <br /> to the list of commands.
      </p>
      <div className="space-x-4">
        <Link href="/lesson" className="bg-secondary text-white px-6 py-3 rounded-md text-lg font-medium">
          Lessons
        </Link>
        <Link
          target="_blank"
          href="https://github.com/premkumar5012002/linux-guide"
          className="bg-secondary text-white px-6 py-3 rounded-md text-lg font-medium"
        >
          Contribute
        </Link>
      </div>
    </main>
  );
}
