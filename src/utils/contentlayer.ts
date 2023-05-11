import type { DocumentGen } from "contentlayer/core";

export const contentDirPath = "lesson";

export const urlFromFilePath = (doc: DocumentGen): string => {
  return (
    "/lesson/" +
    doc._raw.flattenedPath
      .split("/")
      .map((path) => path.replace(/^\d+-/, ""))
      .join("/")
      .replace(/pages\/?/, "")
  );
};
