import sizeOf from "image-size";
import { visit } from "unist-util-visit";

function rehypeImageSize() {
  return (tree, _file) => {
    visit(tree, "element", (node) => {
      if (node.tagName === "img") {
        // ![Dog](/images/dog.png) の場合、src = "/images/dog.png"
        const src = node.properties.src;
        console.debug('src', sizeOf("src/public" + node.properties.src));
        const { width, height } = sizeOf("src/public" + node.properties.src);
        node.properties.width = width;
        node.properties.height = height;
      }
    });
  };
}

export default rehypeImageSize;
