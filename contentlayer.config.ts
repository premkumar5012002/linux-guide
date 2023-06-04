import remarkGfm from "remark-gfm";
import rehypePrism from "@mapbox/rehype-prism";

import { urlFromFilePath } from "./src/utils/contentlayer";
import { defineDocumentType, makeSource } from "@contentlayer/source-files";

const Lesson = defineDocumentType(() => ({
  name: "Lesson",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
      description: "The title of the lesson",
    },
    label: {
      type: "string",
      required: true,
      description: "The label of the lesson",
    },
    excerpt: {
      type: "string",
      required: false,
      description: "A short excerpt of the lesson",
    },
  },
  computedFields: {
    url_path: {
      type: "string",
      resolve: urlFromFilePath,
    },
    pathSegments: {
      type: "json",
      resolve: (doc) => {
        return doc._raw.flattenedPath.split("/").map((dirName) => {
          const re = /^((\d+)-)?(.*)$/;
          const [, , orderStr, pathName] = dirName.match(re) ?? [];
          const order = orderStr ? parseInt(orderStr) : 0;
          return { order, pathName };
        });
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "lessons",
  documentTypes: [Lesson],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});
