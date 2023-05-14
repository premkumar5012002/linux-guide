import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";

import { Lesson, allLessons } from "contentlayer/generated";

const getLessonData = (path: string) => {
  const lesson = allLessons.find((lesson) => lesson.url_path === path);
  if (!lesson) notFound();
  return lesson;
};

export default function Page({
  params,
}: {
  params: {
    slug: undefined | string | string[];
  };
}) {
  let slug = "/lesson";

  if (typeof params.slug === "string") {
    slug = `/lesson/${params.slug}`;
  } else if (Array.isArray(params.slug)) {
    slug = `/lesson/${params.slug.join("/")}`;
  }

  const lesson = getLessonData(slug);

  return (
    <main className="max-w-2xl mx-auto lg:mx-0">
      <article>
        <LinuxLesson data={lesson} />
      </article>
    </main>
  );
}

function LinuxLesson({ data }: { data: Lesson }) {
  const MDXContent = useMDXComponent(data.body.code);
  return (
    <div className="w-full space-y-8">
      <div className="border-b border-outline">
        <h1 className="text-4xl font-semibold text-white pb-6">{data.title}</h1>
      </div>
      <div className="prose">
        <MDXContent />
      </div>
    </div>
  );
}
