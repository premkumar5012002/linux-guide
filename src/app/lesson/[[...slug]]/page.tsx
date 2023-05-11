import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";

import { Lesson, allLessons } from "contentlayer/generated";

const getLessons = (slug: string | string[] | undefined) => {
  const url_path = typeof slug === "string" ? slug : slug?.join("/") ?? "";
  return allLessons.find((lesson) => lesson.url_path === `/lesson/${url_path}`);
};

export default async function Page({
  params,
}: {
  params: {
    slug: string | string[] | undefined;
  };
}) {
  const data = getLessons(params.slug);

  if (data === undefined) notFound();

  return (
    <main>
      <article className="mx-auto max-w-2xl py-12">
        <LinuxLesson data={data} />
      </article>
    </main>
  );
}

function LinuxLesson({ data }: { data: Lesson }) {
  const MDXContent = useMDXComponent(data.body.code);
  return (
    <div className="px-4 w-full space-y-6">
      <h1 className="text-4xl font-semibold text-white">{data.title}</h1>
      <div className="prose">
        <MDXContent />
      </div>
    </div>
  );
}
