/**
 * Renders Obsidian-style callouts (`> [!note] Title`) as styled asides.
 *
 * Non-matching blockquotes are left untouched. Foldable callouts
 * (`[!note]-` / `[!note]+`) become <details>/<summary>; `+` starts open.
 * Output is expressed via hName/hProperties (never raw HTML nodes) so the
 * shared MDX pipeline renders it identically.
 */
import { visit } from "unist-util-visit";

const MARKER = /^\[!([^\]]+)\]([-+])?(?:[ \t]+|(?=\r?\n)|$)/;

export default function remarkCallouts() {
  return (tree) => {
    visit(tree, "blockquote", (node) => {
      const [first, ...rest] = node.children;
      if (!first || first.type !== "paragraph") return;
      const lead = first.children[0];
      if (!lead || lead.type !== "text") return;
      const match = lead.value.match(MARKER);
      if (!match) return;

      const rawType = match[1].trim();
      const fold = match[2];
      const typeSlug = rawType.toLowerCase().replace(/\s+/g, "-");

      // Title = first line of the first paragraph; the rest becomes body.
      const children = [
        { ...lead, value: lead.value.slice(match[0].length) },
        ...first.children.slice(1),
      ];
      const titleChildren = [];
      const bodyChildren = [];
      let inBody = false;
      for (const child of children) {
        if (inBody) {
          bodyChildren.push(child);
        } else if (child.type === "text" && child.value.includes("\n")) {
          const i = child.value.indexOf("\n");
          if (child.value.slice(0, i)) {
            titleChildren.push({ type: "text", value: child.value.slice(0, i) });
          }
          bodyChildren.push({ type: "text", value: child.value.slice(i + 1) });
          inBody = true;
        } else {
          titleChildren.push(child);
        }
      }

      const hasTitle = titleChildren.some(
        (c) => c.type !== "text" || c.value.trim() !== "",
      );
      const finalTitle = hasTitle
        ? titleChildren
        : [
            {
              type: "text",
              value: rawType.charAt(0).toUpperCase() + rawType.slice(1),
            },
          ];

      const titleNode = {
        type: "paragraph",
        data: {
          hName: fold ? "summary" : "p",
          hProperties: { className: ["callout-title"] },
        },
        children: finalTitle,
      };

      node.children = [
        titleNode,
        ...(bodyChildren.length
          ? [{ type: "paragraph", children: bodyChildren }]
          : []),
        ...rest,
      ];
      node.data = {
        ...(fold && { hName: "details" }),
        hProperties: {
          className: ["callout"],
          dataCallout: typeSlug,
          ...(fold === "+" && { open: true }),
        },
      };
    });
  };
}
