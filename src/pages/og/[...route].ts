import { OGImageRoute } from "astro-og-canvas";
import { getPublishedPosts } from "../../lib/posts";
import { CATEGORY_LABELS } from "../../lib/posts";
import { SITE } from "../../config";

const posts = await getPublishedPosts();

const pages: Record<string, { title: string; description: string }> = {
  default: {
    title: SITE.title,
    description: SITE.description,
  },
  ...Object.fromEntries(
    posts.map((post) => [
      `posts/${post.id}`,
      {
        title: post.data.title,
        description: `${CATEGORY_LABELS[post.data.category]} · stochastic-stoic.in`,
      },
    ]),
  ),
};

const route = await OGImageRoute({
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    bgGradient: [[253, 253, 252]],
    padding: 80,
    font: {
      title: {
        families: ["Newsreader"],
        color: [26, 26, 26],
        size: 72,
        lineHeight: 1.25,
        weight: "Medium",
      },
      description: {
        families: ["Inter"],
        color: [92, 92, 92],
        size: 30,
        lineHeight: 1.4,
        weight: "Normal",
      },
    },
    fonts: [
      "./src/assets/og-fonts/Newsreader-Variable.ttf",
      "./src/assets/og-fonts/Inter-Variable.ttf",
    ],
  }),
});

export const getStaticPaths = route.getStaticPaths;
export const GET = route.GET;
