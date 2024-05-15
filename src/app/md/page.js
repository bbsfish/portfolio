import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

async function getStaticProps() {
	// DBやAPIから値を取得する。
	const data = await fetch('https://zenn.dev/api/articles?username=bbsfish&order=latest');
	const posts = await data.json();

	console.info(posts);
}

getStaticProps();

export default function Articles() {
  // return createRoot(document.body).render(<Markdown>{markdown}</Markdown>);
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]}></ReactMarkdown>
    // <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
    //   {markdownString}
    // </ReactMarkdown>
  );
}