import { useMDXComponent } from "next-contentlayer/hooks";

import { Lesson } from "contentlayer/generated";

export default function Mdx({ data }: { data: Lesson }) {
  const MDXContent = useMDXComponent(data.body.code);
  return (
    <article className="prose">
      <h2 className="text-white">{data.title}</h2>
      <MDXContent />
    </article>
  );
}
