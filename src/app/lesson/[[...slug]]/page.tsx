import { notFound } from "next/navigation";

import { allLessons } from "contentlayer/generated";

import Mdx from "@/components/Mdx/Mdx";

const getLessonData = (slug: undefined | string | string[]) => {
  let path = "/lesson";

  if (typeof slug === "string") path = `/lesson/${slug}`;
  else if (Array.isArray(slug)) path = `/lesson/${slug.join("/")}`;

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
  const lesson = getLessonData(params.slug);

  return (
    <main className="max-w-2xl mx-auto lg:mx-0">
      <article>
        <Mdx data={lesson} />
      </article>
    </main>
  );
}
