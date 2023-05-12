import type { DocumentGen } from "contentlayer/core";

export const contentDirPath = "lesson";

export const urlFromFilePath = (doc: DocumentGen): string => {
  const path = doc._raw.flattenedPath
    .split("/")
    .map((path) => path.replace(/^\d+-/, ""))
    .join("/")
    .replace(/pages\/?/, "");

  let relativePath: string = "/lesson";

  if (path.length > 0) relativePath = `/lesson/${path}`;

  return relativePath;
};
