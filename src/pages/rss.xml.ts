import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPublishedPosts, sortByDateDesc } from "../lib/posts";
import { SITE } from "../config";

export async function GET(context: APIContext) {
  const posts = sortByDateDesc(await getPublishedPosts());
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site ?? "https://stochastic-stoic.in",
    items: posts.map((post) => ({
      title: post.data.title,
      link: `/posts/${post.id}/`,
      pubDate: post.data.pubDate,
      description: post.data.description,
    })),
    customData: [
      "<language>en</language>",
      `<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>`,
    ].join(""),
  });
}
