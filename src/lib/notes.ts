import { getCollection, type CollectionEntry } from "astro:content";

export type Note = CollectionEntry<"notes">;

/** The map-of-content note rendered as the /notes/ index page. */
export const TOC_ID = "toc";

/** Private notes are visible in dev but excluded from production builds. */
export function getPublishedNotes(): Promise<Note[]> {
  return getCollection("notes", ({ data }) =>
    import.meta.env.PROD ? !data.private : true,
  );
}

/** Published notes minus the TOC (which gets its own route). */
export async function getConceptNotes(): Promise<Note[]> {
  return (await getPublishedNotes()).filter((note) => note.id !== TOC_ID);
}
