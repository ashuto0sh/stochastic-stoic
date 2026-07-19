import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"posts">;

export const CATEGORY_LABELS = {
  philosophy: "Philosophy",
  mathematics: "Mathematics",
  "software-engineering": "Software Engineering",
  rants: "Rants",
} as const;

export type Category = keyof typeof CATEGORY_LABELS;

/** Drafts are visible in dev but excluded from production builds. */
export function getPublishedPosts(): Promise<Post[]> {
  return getCollection("posts", ({ data }) =>
    import.meta.env.PROD ? !data.draft : true,
  );
}

export function sortByDateDesc(posts: Post[]): Post[] {
  return [...posts].sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
