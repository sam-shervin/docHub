import { Fragment, useEffect, useState } from "react";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";

let idGenerator = (params: string) => {
  return params.toLowerCase().split(" ").join("_").replaceAll("_?", "");
};

let useMDX = (content: any) => {
  let rehypeAddIdToParagraphs = () => {
    return function transformParagraphs(tree: any) {
      visit(tree, { type: "element", tagName: "h2" }, (node) => {
        node.properties = {
          ...node.properties,
          id: idGenerator(node.children[0].value),
        };
      });
      visit(tree, { type: "element", tagName: "a" }, (node) => {
        if (node.properties.href && node.properties.href.includes('youtube.com')) {
          const url = new URL(node.properties.href);
          const videoId = url.searchParams.get('v');
          const embedUrl = `https://www.youtube.com/embed/${videoId}`;
          node.tagName = 'iframe';
          node.properties = {
            ...node.properties,
            className: "w-full h-screen",
            src: embedUrl,
            frameborder: 0,
            allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
            allowfullscreen: true,
          };
          delete node.children;
        } else {
          node.properties = {
            ...node.properties,
            target: "_blank",
          };
        }
      });
    };
  };

  const [markDown, setMarkdown] = useState({ default: Fragment });

  useEffect(() => {
    // @ts-ignore
    evaluate(content, {
      ...runtime,
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeAddIdToParagraphs],
    }).then((res: any) => setMarkdown(res));
  }, [content]);

  return markDown;
};

export { useMDX, idGenerator };
