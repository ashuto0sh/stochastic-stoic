import { getCollection, type CollectionEntry } from "astro:content";

export type Note = CollectionEntry<"notes">;

/**
 * Notes are organized by topic: each subdirectory of src/content/notes/ is a
 * topic (its name is the URL segment), holding that topic's notes. A topic
 * may include a `toc.md` map-of-content whose title/description describe the
 * topic and whose body becomes the topic hub page; topics without one get an
 * auto-generated note listing.
 */
export interface Topic {
  slug: string;
  title: string;
  description?: string | undefined;
  toc?: Note | undefined;
  notes: Note[];
}

export function topicOf(note: Note): string {
  return note.id.split("/")[0] ?? "";
}

export function isToc(note: Note): boolean {
  return note.id.split("/")[1] === "toc";
}

function titleize(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/** Private notes are visible in dev but excluded from production builds. */
export function getPublishedNotes(): Promise<Note[]> {
  return getCollection("notes", ({ data }) =>
    import.meta.env.PROD ? !data.private : true,
  );
}

/** Published notes minus the per-topic TOCs (which render as topic hubs). */
export async function getConceptNotes(): Promise<Note[]> {
  return (await getPublishedNotes()).filter((note) => !isToc(note));
}

export async function getTopics(): Promise<Topic[]> {
  const topics = new Map<string, Topic>();
  for (const note of await getPublishedNotes()) {
    const slug = topicOf(note);
    let topic = topics.get(slug);
    if (!topic) {
      topic = { slug, title: titleize(slug), notes: [] };
      topics.set(slug, topic);
    }
    if (isToc(note)) {
      topic.toc = note;
      topic.title = note.data.title;
      topic.description = note.data.description;
    } else {
      topic.notes.push(note);
    }
  }
  for (const topic of topics.values()) {
    topic.notes.sort((a, b) => a.data.title.localeCompare(b.data.title));
  }
  return [...topics.values()].sort((a, b) => a.title.localeCompare(b.title));
}
