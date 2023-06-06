"use client";

import { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";

import { Lesson } from "contentlayer/generated";

import Exercises from "@/components/Exercises/Exercises";
import { TerminalQuestion } from "@/components/Exercises/Question";

const components: MDXComponents = {
  Exercises,
  TerminalQuestion,
};

export default function Mdx({ data }: { data: Lesson }) {
  const MDXContent = useMDXComponent(data.body.code);
  return (
    <article className="prose">
      <h2 className="text-white">{data.title}</h2>
      <MDXContent components={components} />
    </article>
  );
}
