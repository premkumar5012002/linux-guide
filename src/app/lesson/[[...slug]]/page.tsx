import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";

import { Lesson, allLessons } from "contentlayer/generated";

const getLessons = (slug: string | string[] | undefined) => {
  const path = typeof slug === "string" ? slug : slug?.join("/") ?? "";
  return allLessons.find((lesson) => {
    return (
      lesson.url_path === (path.length > 0 ? `/lesson/${path}` : "/lesson")
    );
  });
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
      <article className="max-w-2xl mx-auto lg:mx-0">
        <LinuxLesson data={data} />
      </article>
    </main>
  );
}

function LinuxLesson({ data }: { data: Lesson }) {
  const MDXContent = useMDXComponent(data.body.code);
  return (
    <div className="w-full space-y-8">
      <div className="border-b-[0.5px] border-gray-700">
        <h1 className="text-4xl font-semibold text-white pb-6">{data.title}</h1>
      </div>
      <div className="prose">
        <MDXContent />
      </div>
    </div>
  );
}
