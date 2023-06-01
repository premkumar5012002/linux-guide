import { useMDXComponent } from "next-contentlayer/hooks";

import { Lesson } from "contentlayer/generated";

export default function Mdx({ data }: { data: Lesson }) {
  const MDXContent = useMDXComponent(data.body.code);
  return (
    <div className="w-full space-y-4">
      <h1 className="text-4xl font-semibold text-white">{data.title}</h1>
      <div className="prose">
        <MDXContent />
      </div>
    </div>
  );
}
