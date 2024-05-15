/**
 * 参考記事
 *  Next.jsでMarkdownを表示 / hayato94087
 *  https://zenn.dev/hayato94087/articles/649e8d817165d8
 */

// Markdown を React コンポーネントに変換
import ReactMarkdown from 'react-markdown';
// GFM サポート
import remarkGfm from 'remark-gfm';
// Markdown の数式処理
import remarkMath from 'remark-math';
// 数式レンダリング
import rehypeKatex from 'rehype-katex';
// 画像のバインドとリサイズ
import rehypeImageSize from "@/lib/img-size";

import 'katex/dist/katex.min.css';

function Markdown(props) {
  const { text } = props;
  return <ReactMarkdown
    rehypePlugins={[rehypeImageSize]}
    remarkPlugins={[remarkGfm, remarkMath, rehypeKatex]}
  >{text}</ReactMarkdown>;
}

export default Markdown;
