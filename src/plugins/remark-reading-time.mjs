/**
 * Injects `minutesRead` (rounded integer, minimum 1) into every markdown
 * page's frontmatter at build time. Derived data — deliberately not part of
 * the content collection schemas; read it via `remarkPluginFrontmatter`.
 */
import { toString } from "mdast-util-to-string";
import getReadingTime from "reading-time";

export default function remarkReadingTime() {
  return (tree, { data }) => {
    const text = toString(tree);
    const readingTime = getReadingTime(text);
    data.astro.frontmatter.minutesRead = Math.max(
      1,
      Math.round(readingTime.minutes),
    );
  };
}
